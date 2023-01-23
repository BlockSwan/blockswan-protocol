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
 * @title OrderData logic library
 * @author Blockswan
 * @notice Implements the logic for order data specific functions
 */
library OrderDataLogic {
    using Counters for Counters.Counter;
    using EnumerableSet for EnumerableSet.UintSet;

    function setMetadata(
        DataTypes.Order storage order,
        string memory metadata
    ) external returns (bool) {
        order.metadata = metadata;
        return true;
    }

    function setBrief(
        DataTypes.Order storage order,
        string memory brief
    ) external returns (bool) {
        order.brief = brief;
        return true;
    }

    function setSellerFeesVersion(
        DataTypes.Order storage order,
        uint256 sellerFeesVersion
    ) external returns (bool) {
        order.sellerFeesVersion = sellerFeesVersion;
        return true;
    }

    function setToTrial(
        DataTypes.Order storage order,
        uint256 toTrial
    ) external returns (bool) {
        order.toTrial = toTrial;
        return true;
    }

    function setToProceed(
        DataTypes.Order storage order,
        uint256 toProceed
    ) external returns (bool) {
        order.toProceed = toProceed;
        return true;
    }

    function setCreatedAt(
        DataTypes.Order storage order
    ) external returns (bool) {
        order.createdAt = block.timestamp;
        return true;
    }

    function setBuyerId(
        DataTypes.Order storage order,
        uint256 buyerId
    ) external returns (bool) {
        order.buyerId = buyerId;
        return true;
    }

    function setSellerId(
        DataTypes.Order storage order,
        uint256 sellerId
    ) external returns (bool) {
        order.sellerId = sellerId;
        return true;
    }

    function setGigId(
        DataTypes.Order storage order,
        uint256 gigId
    ) external returns (bool) {
        order.gigId = gigId;
        return true;
    }

    function setPackage(
        DataTypes.Order storage order,
        DataTypes.Package memory package
    ) external returns (bool) {
        order.package = package;
        return true;
    }

    function setState(
        DataTypes.Order storage order,
        DataTypes.OrderState state
    ) external returns (bool) {
        order.state = state;
        return true;
    }

    function addReview(
        DataTypes.Order storage order,
        uint256 reviewId
    ) external returns (bool) {
        order.reviewIds.add(reviewId);
        return true;
    }

    function removeReview(
        DataTypes.Order storage order,
        uint256 reviewId
    ) external returns (bool) {
        order.reviewIds.remove(reviewId);
        return true;
    }

    function setCurrency(
        DataTypes.Order storage order,
        IERC20 currency
    ) external {
        order.currency = currency;
    }

    function isSeller(
        DataTypes.Order storage order,
        uint256 userId
    ) external view returns (bool) {
        return (order.sellerId == userId);
    }

    function isBuyer(
        DataTypes.Order storage order,
        uint256 userId
    ) external view returns (bool) {
        return (order.buyerId == userId);
    }

    function isState(
        DataTypes.Order storage order,
        DataTypes.OrderState state
    ) external view returns (bool) {
        return (order.state == state);
    }
}
