// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {RoleKeys} from "../libraries/helpers/RoleKeys.sol";
import {IProviderRegistry} from "../../interfaces/IProviderRegistry.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";

import {ProviderContract} from "./ProviderContract.sol";
import {ParamsLogic} from "../libraries/logics/ParamsLogic.sol";

/**
 * @title Protocol Configurator
 * @author Blockswan
 * @notice Contains all the protocol configuration
 **/

contract ProtocolConfigurator is ProviderContract {
    using EnumerableSet for EnumerableSet.UintSet;
    using ParamsLogic for EnumerableSet.UintSet;

    EnumerableSet.UintSet private _buyerEntryParamsVersions;
    mapping(uint256 => DataTypes.EntryParams) private _buyerEntryParamsHistory;

    EnumerableSet.UintSet private _sellerEntryParamsVersions;
    mapping(uint256 => DataTypes.EntryParams) private _sellerEntryParamsHistory;

    EnumerableSet.UintSet private _retributionParamsVersions;
    mapping(uint256 => DataTypes.RetributionParams)
        private _retributionParamsHistory;

    EnumerableSet.UintSet private _gigCreationParamsVersions;
    mapping(uint256 => DataTypes.CreationParams)
        private _gigCreationParamsHistory;

    EnumerableSet.UintSet private _orderCreationParamsVersions;
    mapping(uint256 => DataTypes.FeeParams) private _orderCreationParamsHistory;

    EnumerableSet.UintSet private _sellerOrderFeesParamsVersions;
    mapping(uint256 => DataTypes.FeeParams)
        private _sellerOrderFeesParamsHistory;

    EnumerableSet.UintSet private _delayTimestampVersions;
    mapping(uint256 => DataTypes.DelayTimestamp) private _delayTimestampHistory;

    EnumerableSet.UintSet private _disputeParamsVersions;
    mapping(uint256 => DataTypes.DisputeParams) private _disputeParamsHistory;

    constructor(IAddressProvider provider) ProviderContract(provider) {}

    function getBuyerEntryParams()
        external
        view
        returns (DataTypes.EntryParams memory)
    {
        return
            _buyerEntryParamsVersions.getEntryParams(_buyerEntryParamsHistory);
    }

    function getBuyerEntryParams(
        uint256 version
    ) external view returns (DataTypes.EntryParams memory) {
        return
            _buyerEntryParamsVersions.getEntryParams(
                _buyerEntryParamsHistory,
                version
            );
    }

    function updateBuyerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _buyerEntryParamsVersions.updateEntryParams(
            _buyerEntryParamsHistory,
            newParams
        );
    }

    function getSellerEntryParams()
        external
        view
        returns (DataTypes.EntryParams memory)
    {
        return
            _sellerEntryParamsVersions.getEntryParams(
                _sellerEntryParamsHistory
            );
    }

    function getSellerEntryParams(
        uint256 version
    ) external view returns (DataTypes.EntryParams memory) {
        return
            _sellerEntryParamsVersions.getEntryParams(
                _sellerEntryParamsHistory,
                version
            );
    }

    function updateSellerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _sellerEntryParamsVersions.updateEntryParams(
            _sellerEntryParamsHistory,
            newParams
        );
    }

    function getRetributionParams()
        external
        view
        returns (DataTypes.RetributionParams memory)
    {
        return
            _retributionParamsVersions.getRetributionParams(
                _retributionParamsHistory
            );
    }

    function getRetributionParams(
        uint256 version
    ) external view returns (DataTypes.RetributionParams memory) {
        return
            _retributionParamsVersions.getRetributionParams(
                _retributionParamsHistory,
                version
            );
    }

    function updateRetributionParams(
        DataTypes.RetributionParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _retributionParamsVersions.updateRetributionParams(
            _retributionParamsHistory,
            newParams
        );
    }

    function getGigCreationParams()
        external
        view
        returns (DataTypes.CreationParams memory)
    {
        return
            _gigCreationParamsVersions.getCreationParams(
                _gigCreationParamsHistory
            );
    }

    function getGigCreationParams(
        uint256 version
    ) external view returns (DataTypes.CreationParams memory) {
        return
            _gigCreationParamsVersions.getCreationParams(
                _gigCreationParamsHistory,
                version
            );
    }

    function updateGigCreationParams(
        DataTypes.CreationParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _gigCreationParamsVersions.updateCreationParams(
            _gigCreationParamsHistory,
            newParams
        );
    }

    function getOrderCreationParams()
        external
        view
        returns (DataTypes.FeeParams memory)
    {
        return (
            _orderCreationParamsVersions.getFeeParams(
                _orderCreationParamsHistory
            )
        );
    }

    function getOrderCreationParams(
        uint256 version
    ) external view returns (DataTypes.FeeParams memory) {
        return (
            _orderCreationParamsVersions.getFeeParams(
                _orderCreationParamsHistory,
                version
            )
        );
    }

    function updateOrderCreationParams(
        DataTypes.FeeParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _orderCreationParamsVersions.updateFeeParams(
            _orderCreationParamsHistory,
            newParams
        );
    }

    function getSellerOrderFees()
        external
        view
        returns (DataTypes.FeeParams memory)
    {
        return
            _sellerOrderFeesParamsVersions.getFeeParams(
                _sellerOrderFeesParamsHistory
            );
    }

    function getSellerOrderFees(
        uint256 version
    ) external view returns (DataTypes.FeeParams memory) {
        return
            _sellerOrderFeesParamsVersions.getFeeParams(
                _sellerOrderFeesParamsHistory,
                version
            );
    }

    function updateSellerOrderFees(
        DataTypes.FeeParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _sellerOrderFeesParamsVersions.updateFeeParams(
            _sellerOrderFeesParamsHistory,
            newParams
        );
    }

    function getDelayTimestamp()
        external
        view
        returns (DataTypes.DelayTimestamp memory)
    {
        return
            _delayTimestampVersions.getDelayTimestamp(_delayTimestampHistory);
    }

    function getDelayTimestamp(
        uint256 version
    ) external view returns (DataTypes.DelayTimestamp memory) {
        return
            _delayTimestampVersions.getDelayTimestamp(
                _delayTimestampHistory,
                version
            );
    }

    function updateDelayTimestamp(
        DataTypes.DelayTimestamp memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _delayTimestampVersions.updateDelayTimestamp(
            _delayTimestampHistory,
            newParams
        );
    }

    function getDisputeParams()
        external
        view
        returns (DataTypes.DisputeParams memory)
    {
        return _disputeParamsVersions.getDisputeParams(_disputeParamsHistory);
    }

    function getDisputeParams(
        uint256 version
    ) external view returns (DataTypes.DisputeParams memory) {
        return
            _disputeParamsVersions.getDisputeParams(
                _disputeParamsHistory,
                version
            );
    }

    function updateDisputeParams(
        DataTypes.DisputeParams memory newParams
    ) external onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _disputeParamsVersions.updateDisputeParams(
            _disputeParamsHistory,
            newParams
        );
    }
}
