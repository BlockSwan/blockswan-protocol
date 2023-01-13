// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

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

    function updateBuyerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external onlyProtocolRole(PROTOCOL_ADMIN_ROLE) {
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
    ) external onlyProtocolRole(PROTOCOL_ADMIN_ROLE) {
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

    function updateRetributionParams(
        DataTypes.RetributionParams memory newParams
    ) external onlyProtocolRole(PROTOCOL_ADMIN_ROLE) {
        _retributionParamsVersions.updateRetributionParams(
            _retributionParamsHistory,
            newParams
        );
    }
}
