// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";

/**
 * @title DisputeData logic library
 * @author Blockswan
 * @notice Implements the logic for dispute data specific functions
 */

library DisputeDataLogic {
    using Counters for Counters.Counter;
    using EnumerableSet for EnumerableSet.UintSet;

    function setOrderId(
        DataTypes.Dispute storage dispute,
        uint256 orderId
    ) external returns (bool) {
        dispute.orderId = orderId;
        return true;
    }

    function setBuyerId(
        DataTypes.Dispute storage dispute,
        uint256 buyerId
    ) external returns (bool) {
        dispute.buyerId = buyerId;
        return true;
    }

    function setSellerId(
        DataTypes.Dispute storage dispute,
        uint256 sellerId
    ) external returns (bool) {
        dispute.sellerId = sellerId;
        return true;
    }

    function setRuling(
        DataTypes.Dispute storage dispute,
        uint256 ruling
    ) external returns (bool) {
        dispute.ruling = ruling;
        return true;
    }

    function setState(
        DataTypes.Dispute storage dispute,
        DataTypes.DisputeState state
    ) external returns (bool) {
        dispute.state = state;
        return true;
    }

    function isSeller(
        DataTypes.Dispute storage dispute,
        uint256 userId
    ) external view returns (bool) {
        return (dispute.sellerId == userId);
    }

    function isBuyer(
        DataTypes.Dispute storage dispute,
        uint256 userId
    ) external view returns (bool) {
        return (dispute.buyerId == userId);
    }

    function isState(
        DataTypes.Dispute storage dispute,
        DataTypes.DisputeState state
    ) external view returns (bool) {
        return (dispute.state == state);
    }
}
