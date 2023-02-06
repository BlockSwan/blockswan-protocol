// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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

contract ProtocolConfigurator is ProviderContract, IProtocolConfigurator {
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

    /// @inheritdoc IProtocolConfigurator
    function getBuyerEntryParams()
        external
        view
        override
        returns (DataTypes.EntryParams memory)
    {
        return
            _buyerEntryParamsVersions.getEntryParams(_buyerEntryParamsHistory);
    }

    /// @inheritdoc IProtocolConfigurator
    function getBuyerEntryParams(
        uint256 version
    ) external view override returns (DataTypes.EntryParams memory) {
        return
            _buyerEntryParamsVersions.getEntryParams(
                _buyerEntryParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateBuyerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _buyerEntryParamsVersions.updateEntryParams(
            _buyerEntryParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getSellerEntryParams()
        external
        view
        override
        returns (DataTypes.EntryParams memory)
    {
        return
            _sellerEntryParamsVersions.getEntryParams(
                _sellerEntryParamsHistory
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function getSellerEntryParams(
        uint256 version
    ) external view override returns (DataTypes.EntryParams memory) {
        return
            _sellerEntryParamsVersions.getEntryParams(
                _sellerEntryParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateSellerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _sellerEntryParamsVersions.updateEntryParams(
            _sellerEntryParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getRetributionParams()
        external
        view
        override
        returns (DataTypes.RetributionParams memory)
    {
        return
            _retributionParamsVersions.getRetributionParams(
                _retributionParamsHistory
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function getRetributionParams(
        uint256 version
    ) external view override returns (DataTypes.RetributionParams memory) {
        return
            _retributionParamsVersions.getRetributionParams(
                _retributionParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateRetributionParams(
        DataTypes.RetributionParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _retributionParamsVersions.updateRetributionParams(
            _retributionParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getGigCreationParams()
        external
        view
        override
        returns (DataTypes.CreationParams memory)
    {
        return
            _gigCreationParamsVersions.getCreationParams(
                _gigCreationParamsHistory
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function getGigCreationParams(
        uint256 version
    ) external view override returns (DataTypes.CreationParams memory) {
        return
            _gigCreationParamsVersions.getCreationParams(
                _gigCreationParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateGigCreationParams(
        DataTypes.CreationParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _gigCreationParamsVersions.updateCreationParams(
            _gigCreationParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getOrderCreationParams()
        external
        view
        override
        returns (DataTypes.FeeParams memory)
    {
        return (
            _orderCreationParamsVersions.getFeeParams(
                _orderCreationParamsHistory
            )
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getOrderCreationParams(
        uint256 version
    ) external view override returns (DataTypes.FeeParams memory) {
        return (
            _orderCreationParamsVersions.getFeeParams(
                _orderCreationParamsHistory,
                version
            )
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateOrderCreationParams(
        DataTypes.FeeParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _orderCreationParamsVersions.updateFeeParams(
            _orderCreationParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getSellerOrderFees()
        external
        view
        override
        returns (DataTypes.FeeParams memory)
    {
        return
            _sellerOrderFeesParamsVersions.getFeeParams(
                _sellerOrderFeesParamsHistory
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function getSellerOrderFees(
        uint256 version
    ) external view override returns (DataTypes.FeeParams memory) {
        return
            _sellerOrderFeesParamsVersions.getFeeParams(
                _sellerOrderFeesParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateSellerOrderFees(
        DataTypes.FeeParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _sellerOrderFeesParamsVersions.updateFeeParams(
            _sellerOrderFeesParamsHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getDelayTimestamp()
        external
        view
        override
        returns (DataTypes.DelayTimestamp memory)
    {
        return
            _delayTimestampVersions.getDelayTimestamp(_delayTimestampHistory);
    }

    /// @inheritdoc IProtocolConfigurator
    function getDelayTimestamp(
        uint256 version
    ) external view override returns (DataTypes.DelayTimestamp memory) {
        return
            _delayTimestampVersions.getDelayTimestamp(
                _delayTimestampHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateDelayTimestamp(
        DataTypes.DelayTimestamp memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _delayTimestampVersions.updateDelayTimestamp(
            _delayTimestampHistory,
            newParams
        );
    }

    /// @inheritdoc IProtocolConfigurator
    function getDisputeParams()
        external
        view
        override
        returns (DataTypes.DisputeParams memory)
    {
        return _disputeParamsVersions.getDisputeParams(_disputeParamsHistory);
    }

    /// @inheritdoc IProtocolConfigurator
    function getDisputeParams(
        uint256 version
    ) external view override returns (DataTypes.DisputeParams memory) {
        return
            _disputeParamsVersions.getDisputeParams(
                _disputeParamsHistory,
                version
            );
    }

    /// @inheritdoc IProtocolConfigurator
    function updateDisputeParams(
        DataTypes.DisputeParams memory newParams
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        _disputeParamsVersions.updateDisputeParams(
            _disputeParamsHistory,
            newParams
        );
    }
}
