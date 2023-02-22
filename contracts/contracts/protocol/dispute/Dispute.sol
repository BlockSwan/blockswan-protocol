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
        uint256 defendantId
    ) external onlyProvider(RegistryKeys.ORDER) returns (uint256) {
        uint256 newId = getDisputeCount();
        IProtocolConfigurator protocolConfigurator = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        );
        DataTypes.DisputeParams memory disputeParams = protocolConfigurator
            .getDisputeParams();

        {
            bool isCreated = DisputeLogic.executeCreateDispute(
                _disputeIds,
                _disputes,
                InputTypes.ExecuteCreateDisputeInput({
                    newId: newId,
                    orderId: orderId,
                    procecutorId: procecutorId,
                    defendantId: defendantId,
                    maxVotes: disputeParams.maxVotes,
                    totalFeesForJurors: disputeParams.feePerJuror *
                        disputeParams.maxVotes,
                    delaysUntil: getNewDelays(protocolConfigurator),
                    drawnJurors: drawJurors(disputeParams.maxVotes, newId, 1)
                })
            );

            require(isCreated, Errors.DISPUTE_NOT_CREATED);
        }

        return newId;
    }

    function getNewDelays(
        IProtocolConfigurator protocolConfigurator
    ) public view returns (uint256[] memory delays) {
        DataTypes.DelayTimestamp memory delayTimestamp = protocolConfigurator
            .getDelayTimestamp();
        delays = DisputeLogic.calcDisputeDelaysFromBlock(
            delayTimestamp.evidence,
            delayTimestamp.commit,
            delayTimestamp.vote,
            delayTimestamp.appeal
        );
    }

    function sendEvidence(
        uint256 disputeId,
        uint256 roundId,
        DataTypes.Evidence memory evidence
    ) external {
        bool isSent = DisputeLogic.executeSendEvidence(
            _disputes,
            InputTypes.ExecuteSendEvidenceInput({
                disputeId: disputeId,
                roundId: roundId,
                evidence: evidence
            })
        );
        require(isSent, Errors.EVIDENCE_NOT_SUBMITTED);
    }

    // buyer

    // seller

    // pass phase

    function _sendFundToContract(
        uint256 amount,
        address caller,
        IERC20 currency
    ) internal {
        currency.safeTransferFrom(caller, address(this), amount);
    }

    function _transfer(uint256 amount, address _to, IERC20 currency) internal {
        currency.safeTransfer(_to, amount);
    }

    function isCallerUser(
        address caller,
        uint256 userId,
        IUser UserContract
    ) public view returns (bool isAddressMatchingId) {
        isAddressMatchingId = UserContract.getIdByAddress(caller) == userId;
    }

    function drawJurors(
        uint256 numberOfJurors,
        uint256 disputeId,
        uint256 roundId
    ) internal view returns (address[] memory jurorsAddresses) {
        IJury JuryContract = IJury(fetchContract(RegistryKeys.JURY));
        jurorsAddresses = JuryContract.drawJurors(
            numberOfJurors,
            disputeId,
            roundId
        );
        console.log("jurrors addrss length: ", jurorsAddresses.length);
    }
}
