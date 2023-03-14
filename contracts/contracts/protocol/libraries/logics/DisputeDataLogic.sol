// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

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

    function setCreated(
        DataTypes.Dispute storage dispute
    ) external returns (bool) {
        dispute.createdAt = block.timestamp;
        return true;
    }

    function setOrderId(
        DataTypes.Dispute storage dispute,
        uint256 orderId
    ) external returns (bool) {
        dispute.orderId = orderId;
        return true;
    }

    function setRuling(
        DataTypes.Dispute storage dispute,
        uint256 ruling
    ) external returns (bool) {
        dispute.ruling = ruling;
        dispute.ruledAt = block.timestamp;
        return true;
    }

    function setState(
        DataTypes.Dispute storage dispute,
        DataTypes.DisputeState state
    ) external returns (bool) {
        dispute.state = state;
        return true;
    }

    function addTimestamp(
        DataTypes.Dispute storage dispute,
        uint256 delay
    ) external returns (bool) {
        dispute.timestamps.push(block.timestamp + delay);
        return true;
    }

    function deleteTimestamps(
        DataTypes.Dispute storage dispute
    ) external returns (bool) {
        delete dispute.timestamps;
        return true;
    }

    function isState(
        DataTypes.Dispute storage dispute,
        DataTypes.DisputeState state
    ) external view returns (bool) {
        return (dispute.state == state);
    }

    function getLatestRound(
        DataTypes.Dispute storage dispute
    ) external view returns (DataTypes.Round storage) {
        DataTypes.Round[] storage rounds = dispute.rounds;
        return rounds[rounds.length - 1];
    }

    function getRound(
        DataTypes.Dispute storage dispute,
        uint256 roundId
    ) external view returns (DataTypes.Round storage) {
        return dispute.rounds[roundId];
    }

    function isEvidencePeriod(
        DataTypes.Dispute storage dispute
    ) external view returns (bool) {
        return (block.timestamp < dispute.timestamps[0]);
    }

    function isCommitPeriod(
        DataTypes.Dispute storage dispute
    ) external view returns (bool) {
        return (block.timestamp >= dispute.timestamps[0] &&
            block.timestamp < dispute.timestamps[1]);
    }

    function isVotePeriod(
        DataTypes.Dispute storage dispute
    ) external view returns (bool) {
        return (block.timestamp >= dispute.timestamps[1] &&
            block.timestamp < dispute.timestamps[2]);
    }

    function isAppealPeriod(
        DataTypes.Dispute storage dispute
    ) external view returns (bool) {
        return (block.timestamp >= dispute.timestamps[2] &&
            block.timestamp < dispute.timestamps[3]);
    }
}
