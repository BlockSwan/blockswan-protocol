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

    function setInvoice(
        DataTypes.Order storage order,
        DataTypes.Invoice memory invoice 
    ) external returns (bool) {
        order.invoice = invoice;
        return true;
    }

    function setState(
        DataTypes.Order storage order,
        DataTypes.OrderState state
    ) external returns (bool) {
        order.state = state;
        return true;
    }


    function setDisputeId(
        DataTypes.Order storage order,
        uint256 disputeId
    ) external returns (bool) {
        order.disputeId = disputeId;
        order.disputed = true;
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
