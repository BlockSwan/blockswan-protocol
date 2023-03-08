// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {GPv2SafeERC20} from "../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {DisputeLogic} from "../libraries/logics/DisputeLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";
import {Errors} from "../libraries/helpers/Errors.sol";

import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {XPKeys} from "../libraries/helpers/XPKeys.sol";
import {DisputeStorage} from "./DisputeStorage.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IJury} from "../../interfaces/IJury.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";
import {IDispute} from "../../interfaces/IDispute.sol";
import {IGig} from "../../interfaces/IGig.sol";
import {IOrder} from "../../interfaces/IOrder.sol";
import {JuryLogic} from "../libraries/logics/JuryLogic.sol";

/**
 * @title	Dispute contract
 * @author	Blockswan
 * @notice  Dispute data within an Blockswan protocol's marketplace
 * - Users can:
 *   # raise a dispute via the Dispute contract
 *   # send evidence to a dispute
 *   # commit a vote on a dispute
 *   # vote on a dispute
 *   # appeal to a dispute resolution
 *  # execute a ruling on a dispute
 * @dev To be covered by a proxy contract, owned by the addressProvider of the specific marketplace
 * @dev All admin functions are callable by the protocolConfigurator contract defined also in the
 *   addressProvider
 **/

contract Dispute is DisputeStorage, ProviderContract {
    using EnumerableSet for EnumerableSet.UintSet;
    using DisputeLogic for DataTypes.Dispute;
    using GPv2SafeERC20 for IERC20;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {}

    function getDisputeCount() public view virtual returns (uint256) {
        uint256 count = _disputeIds.length();
        return count;
    }

    function getDisputeById(
        uint256 disputeId
    ) public view virtual returns (OutputTypes.DisputeOutput memory) {
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        return dispute.format(disputeId);
    }

    function getDisputeList()
        external
        view
        virtual
        returns (OutputTypes.DisputeOutput[] memory)
    {
        uint256 len = getDisputeCount();
        OutputTypes.DisputeOutput[]
            memory disputeList = new OutputTypes.DisputeOutput[](len);
        for (uint256 i = 0; i < len; i++) {
            disputeList[i] = getDisputeById(i);
        }
        return disputeList;
    }

    function createDispute(
        uint256 orderId,
        uint256 procecutorId,
        uint256 defendantId,
        address caller,
        DataTypes.Evidence memory evidence
    ) external onlyProvider(RegistryKeys.ORDER) returns (uint256) {
        uint256 newId = getDisputeCount();

        {
            IProtocolConfigurator protocolConfigurator = IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            );
            DataTypes.DisputeParams memory disputeParams = protocolConfigurator
                .getDisputeParams();

            _createDispute(
                newId,
                orderId,
                procecutorId,
                defendantId,
                caller,
                protocolConfigurator,
                disputeParams
            );
            sendEvidence(newId, caller, evidence);
        }
        return newId;
    }

    function _createDispute(
        uint256 newId,
        uint256 orderId,
        uint256 procecutorId,
        uint256 defendantId,
        address caller,
        IProtocolConfigurator protocolConfigurator,
        DataTypes.DisputeParams memory disputeParams
    ) internal {
        bool isCreated = DisputeLogic.executeCreateDispute(
            _disputeIds,
            _disputes,
            InputTypes.ExecuteCreateDisputeInput({
                newId: newId,
                orderId: orderId,
                procecutorId: procecutorId,
                defendantId: defendantId,
                maxVotes: disputeParams.maxVotes,
                totalFeesForJurors: _payDisputeContract(
                    disputeParams.feePerJuror * disputeParams.maxVotes,
                    caller
                ),
                evidenceUntil: getDelayTimestamp(protocolConfigurator).evidence,
                drawnJurors: drawJurors(disputeParams.maxVotes),
                tokensAtStakePerJuror: JuryLogic.calcTokenToFreeze(
                    disputeParams.minStake,
                    disputeParams.alpha
                )
            })
        );
        require(isCreated, Errors.DISPUTE_NOT_CREATED);
    }

    function getDelayTimestamp(
        IProtocolConfigurator protocolConfigurator
    ) public view returns (DataTypes.DelayTimestamp memory delayTimestamp) {
        delayTimestamp = protocolConfigurator.getDelayTimestamp();
        return delayTimestamp;
    }

    function sendEvidence(
        uint256 disputeId,
        address caller,
        DataTypes.Evidence memory evidence
    ) public {
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isCallerUser(caller, evidence.userId, UserContract),
            Errors.CALLER_NOT_USER
        );
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        bool isSent = DisputeLogic.executeSendEvidence(dispute, evidence);
        require(isSent, Errors.EVIDENCE_NOT_SUBMITTED);
    }

    function passPhase(uint256 disputeId) public {
        DataTypes.DelayTimestamp memory delayTimestamps = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDelayTimestamp();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        DataTypes.DisputeState state = dispute.state;
        require(
            state != DataTypes.DisputeState.EXECUTION,
            Errors.DS_IN_EXECUTION_PERIOD
        );
        if (state == DataTypes.DisputeState.EVIDENCE) {
            dispute.goCommitState(delayTimestamps);
        } else if (state == DataTypes.DisputeState.COMMIT) {
            dispute.goVoteState(delayTimestamps.vote);
        } else if (state == DataTypes.DisputeState.VOTE) {
            dispute.goAppealState(delayTimestamps.appeal);
        } else if (state == DataTypes.DisputeState.APPEAL) {
            dispute.goExecutionState();
        }
    }

    function commitVote(
        uint256 disputeId,
        uint256 choice,
        string memory salt
    ) public {
        address caller = _msgSender();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        dispute.executeCommitVote(choice, salt, caller);
    }

    function revealVote(
        uint256 disputeId,
        uint256 choice,
        string memory salt,
        string memory justification
    ) public {
        address caller = _msgSender();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        dispute.executeRevealVote(choice, salt, justification, caller);
    }

    function drawJurors(
        uint256 numberOfJurors
    ) internal returns (address[] memory jurorsAddresses) {
        IJury JuryContract = IJury(fetchContract(RegistryKeys.JURY));
        jurorsAddresses = JuryContract.drawJurors(numberOfJurors);
        JuryContract.freezeTokens(jurorsAddresses);
    }

    function appeal(uint256 disputeId) external {
        address caller = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        uint256 callerId = UserContract.getIdByAddress(caller);
        DataTypes.DisputeParams memory disputeParams = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDisputeParams();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        uint256 appealFeeInUSDC = dispute.calcAppealFees(
            disputeParams.feePerJuror
        );
        uint256 appealFeeRewardsinBSWAN = _payDisputeContract(
            appealFeeInUSDC,
            _msgSender()
        );
        dispute.executeAppeal(appealFeeRewardsinBSWAN, callerId);
    }

    function claimAsJudge(uint256 disputeId, uint256 roundId) external {
        address caller = _msgSender();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        OutputTypes.ExecuteClaimAsJudgeOutput memory claimParams = dispute
            .executeClaimAsJudge(caller, roundId);
        if (claimParams.isVoteCorrect) {
            _handleCorrectVoter(
                caller,
                claimParams.tokensAtStakePerJuror,
                claimParams.amountFromDisputeFees,
                claimParams.amountFromJurorsTokensAtStake
            );
        } else if (claimParams.isVoteInRange) {
            _handleInRangeVoter(caller, claimParams.tokensAtStakePerJuror);
        } else {
            require(false, Errors.VOTE_INCORRECT);
        }
    }

    function claimAppealFeeRewards(uint256 disputeId, uint256 roundId) public {
        address caller = _msgSender();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        uint256 callerId = IUser(fetchContract(RegistryKeys.USER))
            .getIdByAddress(caller);

        uint256 appealFeeAmount = dispute.executeClaimAppealFeeRewards(
            callerId,
            roundId
        );
        _transfer(
            appealFeeAmount,
            caller,
            address(IBSWAN(fetchContract(RegistryKeys.DAT)))
        );
    }

    function claimRuling(uint256 disputeId) external {
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        (
            uint256 ruling,
            uint256 orderId,
            uint256 procecutorId,
            uint256 defendantId
        ) = dispute.executeClaimRuling();
        IOrder OrderContract = IOrder(fetchContract(RegistryKeys.ORDER));
        OrderContract.rule(ruling, orderId, procecutorId, defendantId);
    }

    function nextRound(
        uint256 disputeId,
        DataTypes.Evidence memory evidence
    ) external {
        address caller = _msgSender();
        DataTypes.Dispute storage dispute = DisputeLogic.getDisputeById(
            disputeId,
            _disputes
        );
        DataTypes.DelayTimestamp memory delays = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDelayTimestamp();
        DataTypes.DisputeParams memory disputeParams = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDisputeParams();
        uint256 roundNumber = dispute.rounds.length + 1;
        dispute.executeNextRound(
            InputTypes.ExecuteNextRoundInput({
                evidenceUntil: delays.evidence,
                maxVotes: disputeParams.maxVotes * roundNumber,
                totalFeesForJurors: _payDisputeContract(
                    disputeParams.feePerJuror *
                        disputeParams.maxVotes *
                        roundNumber,
                    caller
                ),
                tokensAtStakePerJuror: JuryLogic.calcTokenToFreeze(
                    disputeParams.minStake,
                    disputeParams.alpha
                ),
                drawnJurors: drawJurors(disputeParams.maxVotes * roundNumber)
            })
        );
        sendEvidence(disputeId, caller, evidence);
    }

    function _handleCorrectVoter(
        address voter,
        uint256 tokensAtStakePerJuror,
        uint256 amountFromDisputeFees,
        uint256 amountFromJurorsTokensAtStake
    ) internal {
        IJury JuryContract = IJury(fetchContract(RegistryKeys.JURY));
        IBSWAN BSWANContract = IBSWAN(fetchContract(RegistryKeys.DAT));
        JuryContract.unfreezeTokens(tokensAtStakePerJuror, voter);
        _transfer(
            amountFromDisputeFees,
            address(JuryContract),
            address(BSWANContract)
        );
        JuryContract.rewardJuror(
            amountFromDisputeFees + amountFromJurorsTokensAtStake,
            voter
        );
    }

    function _handleInRangeVoter(
        address voter,
        uint256 tokensAtStakePerJuror
    ) internal {
        IJury JuryContract = IJury(fetchContract(RegistryKeys.JURY));
        JuryContract.unfreezeTokens(tokensAtStakePerJuror, voter);
    }

    function _safeTransferFrom(
        uint256 value,
        address from,
        address to,
        address currency
    ) internal {
        IERC20(currency).safeTransferFrom(from, to, value);
    }

    function _transfer(uint256 amount, address _to, address currency) internal {
        IERC20(currency).safeTransfer(_to, amount);
    }

    function _payDisputeContract(
        uint256 amount,
        address payer
    ) internal returns (uint256 amountBought) {
        IBSWAN BSWANContract = IBSWAN(fetchContract(RegistryKeys.DAT));
        _safeTransferFrom(
            amount,
            payer,
            address(this),
            address(BSWANContract.currency())
        );
        amountBought = BSWANContract.estimateBuyValue(amount);
        BSWANContract.buy(address(this), amount, amountBought);
    }

    function isCallerUser(
        address caller,
        uint256 userId,
        IUser UserContract
    ) public view returns (bool isAddressMatchingId) {
        isAddressMatchingId = UserContract.getIdByAddress(caller) == userId;
    }

    function getOrderPrice(
        uint256 orderId
    ) public view returns (uint256 price) {
        price = IOrder(fetchContract(RegistryKeys.ORDER))
            .getOrderById(orderId)
            .invoice
            .price;
    }
}
