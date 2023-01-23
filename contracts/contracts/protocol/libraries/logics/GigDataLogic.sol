// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";

/**
 * @title GigData logic library
 * @author Blockswan
 * @notice Implements the logic for gig data specific functions
 */
library GigDataLogic {
    using Counters for Counters.Counter;
    using EnumerableSet for EnumerableSet.UintSet;

    function updateMetadata(
        DataTypes.Gig storage gig,
        string memory metadata
    ) external returns (bool) {
        gig.metadata = metadata;
        return true;
    }

    function setCreatedAt(DataTypes.Gig storage gig) external returns (bool) {
        gig.createdAt = block.timestamp;
        return true;
    }

    function addReview(
        DataTypes.Gig storage gig,
        uint256 reviewId
    ) external returns (bool) {
        gig.reviewIds.add(reviewId);
        return true;
    }

    function removeReview(
        DataTypes.Gig storage gig,
        uint256 reviewId
    ) external returns (bool) {
        gig.reviewIds.remove(reviewId);
        return true;
    }

    function addOrder(
        DataTypes.Gig storage gig,
        uint256 orderId
    ) external returns (bool) {
        gig.orderIds.add(orderId);
        return true;
    }

    function removeOrder(
        DataTypes.Gig storage gig,
        uint256 orderId
    ) external returns (bool) {
        gig.orderIds.remove(orderId);
        return true;
    }

    function incrSuccessSell(
        DataTypes.Gig storage gig
    ) external returns (bool) {
        gig.successSell.increment();
        return true;
    }

    function incrFailedSell(DataTypes.Gig storage gig) external returns (bool) {
        gig.failedSell.increment();
        return true;
    }

    function updatePackages(
        DataTypes.Gig storage gig,
        DataTypes.Package[3] memory packages
    ) external returns (bool) {
        for (uint256 i = 0; i < 3; i++) {
            gig.packages[i] = packages[i];
        }
        return true;
    }
}
