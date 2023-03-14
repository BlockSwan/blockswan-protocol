// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {Errors} from "../helpers/Errors.sol";
import {OrderDataLogic} from "./OrderDataLogic.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";

/**
 * @title Invoice logic library
 * @author Blockswan
 * @notice Implements the logic for invoice specific functions
 */
library InvoiceLogic {
    using PercentageMath for uint256;

    function calcSellerFee(
        uint256 price,
        DataTypes.FeeParams memory sellerFees
    ) public pure returns (uint256) {
        return price.percentMul(sellerFees.percent) + sellerFees.flat;
    }

    function calcBuyerFee(
        uint256 price,
        DataTypes.FeeParams memory buyerFees
    ) public pure returns (uint256) {
        return price.percentMul(buyerFees.percent) + buyerFees.flat;
    }

    function paidByBuyer(
        DataTypes.Invoice storage invoice
    ) external view returns (uint256) {
        return invoice.price + invoice.buyerFees;
    }

    function receivedBySeller(
        DataTypes.Invoice storage invoice
    ) external view returns (uint256) {
        return invoice.price - invoice.sellerFees;
    }

    function create(
        DataTypes.Invoice storage invoice,
        uint256 price,
        IERC20 currency,
        DataTypes.FeeParams memory buyerFees,
        DataTypes.FeeParams memory sellerFees
    ) external returns (bool) {
        invoice.price = price;
        invoice.buyerFees = calcBuyerFee(price, buyerFees);
        invoice.sellerFees = calcSellerFee(price, sellerFees);
        invoice.createdAt = block.timestamp;
        invoice.currency = currency;
        return true;
    }
}
