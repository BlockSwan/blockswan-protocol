// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {Errors} from "../helpers/Errors.sol";
import {OrderDataLogic} from "./OrderDataLogic.sol";
import {InvoiceLogic} from "./InvoiceLogic.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";

/**
 * @title Order logic library
 * @author Blockswan
 * @notice Implements the logic for order specific functions
 */
library OrderLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using OrderDataLogic for DataTypes.Order;
    using InvoiceLogic for DataTypes.Invoice;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;

    function getOrderById(
        uint256 orderId,
        mapping(uint256 => DataTypes.Order) storage orders
    ) public view returns (DataTypes.Order storage) {
        return orders[orderId];
    }

    function executeCreateOrder(
        EnumerableSet.UintSet storage orderIds,
        mapping(uint256 => DataTypes.Order) storage orders,
        InputTypes.ExecuteCreateOrderInput memory params
    ) external returns (bool, uint256 paidByBuyer) {
        bool added = orderIds.add(params.relations.newId);
        DataTypes.Order storage order = getOrderById(
            params.relations.newId,
            orders
        );
        order.invoice.create(params.price, params.currency, params.fees.buyerFees, params.fees.sellerFees);
        order.setMetadata(params.metadata);
        order.setBrief(params.brief);
        order.setBuyerId(params.relations.buyerId);
        order.setSellerId(params.relations.sellerId);
        order.setGigId(params.relations.gigId);
        return (added, order.invoice.paidByBuyer());
    }

    function executeConfirmOrder(
        uint256 orderId,
        uint256 sellerId,
        mapping(uint256 => DataTypes.Order) storage orders
    ) external {
        DataTypes.Order storage order = getOrderById(orderId, orders);
        checkOrderSeller(order, sellerId);
        checkState(order, DataTypes.OrderState.UNCONFIRMED);
        order.setState(DataTypes.OrderState.CONFIRMED);
    }

    function executeAutoRefund(
        uint256 orderId,
        uint256 buyerId,
        uint256 selfRefundDelay,
        mapping(uint256 => DataTypes.Order) storage orders
    ) external returns (uint256, IERC20) {
        DataTypes.Order storage order = getOrderById(orderId, orders);
        checkOrderBuyer(order, buyerId);
        checkState(order, DataTypes.OrderState.UNCONFIRMED);
        require(
             block.timestamp > order.invoice.createdAt + selfRefundDelay,
            Errors.SELF_REFUND_DELAY_NOT_OVER
        );
        order.setState(DataTypes.OrderState.DONE);
        return (
            order.invoice.paidByBuyer(),
            order.invoice.currency
        );
    }

    function executeRefundOrder(
        uint256 orderId, 
        uint256 sellerId,
        uint256 buyerId,  
        mapping(uint256 => DataTypes.Order) storage orders
    ) external returns (uint256, IERC20){
        DataTypes.Order storage order = getOrderById(orderId, orders);
        checkOrderSeller(order, sellerId);
        checkOrderBuyer(order, buyerId);
        checkState(order, DataTypes.OrderState.CONFIRMED);
        order.setState(DataTypes.OrderState.DONE);
         return (
            order.invoice.paidByBuyer(),
            order.invoice.currency
        );
    }

    function executePayOrder(
        uint256 orderId,
        uint256 buyerId,
        mapping(uint256 => DataTypes.Order) storage orders
    )
        external
        returns (DataTypes.Invoice memory, uint256, uint256)
    {
        DataTypes.Order storage order = getOrderById(orderId, orders);
        checkOrderBuyer(order, buyerId);
        checkState(order, DataTypes.OrderState.CONFIRMED);
        order.setState(DataTypes.OrderState.DONE);
        return (
            order.invoice,
            order.sellerId,
            order.invoice.receivedBySeller()
        );
    }

    function executeDispute(
        uint256 orderId,
        uint256 buyerId,
        uint256 sellerId,
        uint256 disputeId,
        mapping(uint256 => DataTypes.Order) storage orders
    ) external returns (bool) {
        DataTypes.Order storage order = getOrderById(orderId, orders);
        checkOrderBuyer(order, buyerId);
        checkOrderSeller(order, sellerId);
        checkState(order, DataTypes.OrderState.CONFIRMED);
        order.setState(DataTypes.OrderState.DISPUTED);
        order.setDisputeId(disputeId);
        return (true);
    }

    function format(
        DataTypes.Order storage order,
        uint256 id
    ) external view returns (OutputTypes.OrderOutput memory) {
        return (
            OutputTypes.OrderOutput({
                metadata: order.metadata,
                brief: order.brief,
                orderId: id,
                buyerId: order.buyerId,
                sellerId: order.sellerId,
                gigId: order.gigId,
                disputeId: order.disputeId,
                reviewIds: order.reviewIds.values(),
                disputed: order.disputed,
                invoice: order.invoice,
                state: order.state
            })
        );
    }

    function checkOrderSeller(
        DataTypes.Order storage order,
        uint256 sellerId
    ) internal view {
        require(order.isSeller(sellerId), Errors.NOT_ORDER_SELLER);
    }

    function checkOrderBuyer(
        DataTypes.Order storage order,
        uint256 buyerId
    ) internal view {
        require(order.isBuyer(buyerId), Errors.NOT_ORDER_BUYER);
    }

    function checkState(
        DataTypes.Order storage order,
        DataTypes.OrderState state
    ) internal view {
        require(order.isState(state), Errors.INVALID_ORDER_STATE);
    }

}
