// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {SortitionSumTreeFactory} from "../../imports/kleros/contracts/SortitionSumTreeFactory.sol";
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
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {
        sortitionSumTrees.createTree(RegistryKeys.TREE_KEY, MAX_TREE_LEAVES);
    }

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
        uint256 sellerId,
        uint256 buyerId
    ) external onlyProvider(RegistryKeys.ORDER) returns (uint256) {
        uint256 newId = getDisputeCount();
        DataTypes.DisputeParams memory disputeParams = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDisputeParams();
        bool isCreated = DisputeLogic.executeCreateDispute(
            _disputeIds,
            _disputes,
            InputTypes.ExecuteCreateDisputeInput({
                newId: newId,
                orderId: orderId,
                sellerId: sellerId,
                buyerId: buyerId,
                maxVotes: disputeParams.maxVotes,
                totalFeesForJurors: disputeParams.feePerJuror *
                    disputeParams.maxVotes
            })
        );
        require(isCreated, Errors.DISPUTE_NOT_CREATED);
        return newId;
    }

    //  function sendEvidence(uint256 disputeId, )

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
    ) public view returns (bool) {
        return UserContract.getIdByAddress(caller) == userId;
    }
}
