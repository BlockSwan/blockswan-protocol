// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {SortitionSumTreeFactory} from "../../imports/kleros/contracts/SortitionSumTreeFactory.sol";
import {GPv2SafeERC20} from "../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {JuryLogic} from "../libraries/logics/JuryLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {XPKeys} from "../libraries/helpers/XPKeys.sol";
import {JuryStorage} from "./JuryStorage.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";
import {IDispute} from "../../interfaces/IDispute.sol";
import {IGig} from "../../interfaces/IGig.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";

/**
 * @title	Jury contract
 * @author	Blockswan
 * @notice  Jury data within an Blockswan protocol's marketplace
 * - Users can:
 *   # stake blockswan to be eligible to be a juror
 *   # withdraw staked blockswan
 * - this contract can:
 *  # select jurors for a dispute
 * @dev To be covered by a proxy contract, owned by the addressProvider of the specific marketplace
 * @dev All admin functions are callable by the protocolConfigurator contract defined also in the
 *   addressProvider
 **/
contract Jury is JuryStorage, ProviderContract {
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;
    using EnumerableMap for EnumerableMap.AddressToUintMap;
    using JuryLogic for SortitionSumTreeFactory.SortitionSumTrees;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {
        SortitionSumTreeFactory.createTree(
            _sortitionTree,
            TREE_KEY,
            MAX_TREE_LEAVES
        );
    }

    function readJuror(
        address account
    ) public view returns (DataTypes.Juror memory) {
        return (
            JuryLogic.readJuror(account, _jurorStakedToken, _jurorFreezedToken)
        );
    }

    /**
     * @notice Stake blockswan to be eligible to be a juror
     * @param toStake The amount of blockswan to stake
     * @return true if the operation was successful
     * @dev The user must have approved the Jury contract to transfer the amount of blockswan
     */
    function depositStake(uint256 toStake) external returns (bool) {
        address caller = _msgSender();
        DataTypes.DisputeParams memory disputeParams = getDisputeParams();
        IBSWAN dat = IBSWAN(fetchContract(RegistryKeys.DAT));
        require(
            toStake >= disputeParams.minStake,
            Errors.JURY_STAKE_NOT_ENOUGH
        );
        JuryLogic.executeDepositStake(
            toStake,
            caller,
            TREE_KEY,
            _jurorSet,
            _jurorStakedToken,
            _jurorFreezedToken,
            _sortitionTree
        );
        require(
            dat.transferFrom(caller, address(this), toStake),
            Errors.FAILED_TO_STAKE_JURY
        );
        return true;
    }

    /**
     * @notice Withdraw staked blockswan
     * @param toWithdraw The amount of blockswan to withdraw
     * @return true if the operation was successful
     * @dev The user must have approved the Jury contract to transfer the amount of blockswan
     */

    function withdrawStake(uint256 toWithdraw) external returns (bool) {
        address caller = _msgSender();
        require(
            _jurorStakedToken.get(caller) >= toWithdraw,
            Errors.JURY_STAKE_NOT_ENOUGH
        );
        JuryLogic.executeWithdrawStake(
            toWithdraw,
            caller,
            TREE_KEY,
            _jurorSet,
            _jurorStakedToken,
            _sortitionTree
        );
        IBSWAN dat = IBSWAN(fetchContract(RegistryKeys.DAT));
        require(
            dat.transfer(caller, toWithdraw),
            Errors.FAILED_TO_WITHDRAW_JURY
        );
        return true;
    }

    function getDisputeParams()
        internal
        view
        returns (DataTypes.DisputeParams memory)
    {
        DataTypes.DisputeParams memory disputeParams = IProtocolConfigurator(
            fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
        ).getDisputeParams();
        return disputeParams;
    }
}
