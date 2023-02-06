// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";

/**
 * @title  Params logic library
 * @author Blockswan
 * @notice Implements the logic for protocol params functions
 */
library ParamsLogic {
    using EnumerableSet for EnumerableSet.UintSet;

    function getEntryParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.EntryParams) storage history
    ) external view returns (DataTypes.EntryParams memory) {
        return history[params.at(params.length() - 1)];
    }

    function getEntryParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.EntryParams) storage history,
        uint256 version
    ) external view returns (DataTypes.EntryParams memory) {
        return history[params.at(version)];
    }

    function updateEntryParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.EntryParams) storage history,
        DataTypes.EntryParams memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }

    function getRetributionParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.RetributionParams) storage history
    ) external view returns (DataTypes.RetributionParams memory) {
        return history[params.at(params.length() - 1)];
    }

    function getRetributionParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.RetributionParams) storage history,
        uint256 version
    ) external view returns (DataTypes.RetributionParams memory) {
        return history[params.at(version)];
    }

    function updateRetributionParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.RetributionParams) storage history,
        DataTypes.RetributionParams memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }

    function getCreationParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.CreationParams) storage history
    ) external view returns (DataTypes.CreationParams memory) {
        return history[params.at(params.length() - 1)];
    }

    function getCreationParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.CreationParams) storage history,
        uint256 version
    ) external view returns (DataTypes.CreationParams memory) {
        return history[params.at(version)];
    }

    function updateCreationParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.CreationParams) storage history,
        DataTypes.CreationParams memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }

    function getFeeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.FeeParams) storage history
    ) external view returns (DataTypes.FeeParams memory) {
        return history[params.at(params.length() - 1)];
    }

    function getFeeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.FeeParams) storage history,
        uint256 version
    ) external view returns (DataTypes.FeeParams memory) {
        return history[params.at(version)];
    }

    function updateFeeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.FeeParams) storage history,
        DataTypes.FeeParams memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }

    function getLatestVersion(
        EnumerableSet.UintSet storage versions
    ) external view returns (uint256) {
        return versions.length() - 1;
    }

    function getDelayTimestamp(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DelayTimestamp) storage history
    ) external view returns (DataTypes.DelayTimestamp memory) {
        return history[params.at(params.length() - 1)];
    }

    function getDelayTimestamp(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DelayTimestamp) storage history,
        uint256 version
    ) external view returns (DataTypes.DelayTimestamp memory) {
        return history[params.at(version)];
    }

    function updateDelayTimestamp(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DelayTimestamp) storage history,
        DataTypes.DelayTimestamp memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }

    function getDisputeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DisputeParams) storage history
    ) external view returns (DataTypes.DisputeParams memory) {
        return history[params.at(params.length() - 1)];
    }

    function getDisputeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DisputeParams) storage history,
        uint256 version
    ) external view returns (DataTypes.DisputeParams memory) {
        return history[params.at(version)];
    }

    function updateDisputeParams(
        EnumerableSet.UintSet storage params,
        mapping(uint256 => DataTypes.DisputeParams) storage history,
        DataTypes.DisputeParams memory newParams
    ) external {
        uint256 newParamId = params.length();
        params.add(newParamId);
        history[newParamId] = newParams;
    }
}
