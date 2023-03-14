// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

/**
 * @title OrderStorage
 * @author Blockswan
 * @notice Contract used as storage of the order contract.
 * @dev It defines the storage layout of the order contract.
 */
contract OrderStorage {
    using EnumerableSet for EnumerableSet.UintSet;

    // set of order Ids
    EnumerableSet.UintSet internal _orderIds;

    // Map of the order id to the order data (orderId => Order)
    mapping(uint256 => DataTypes.Order) internal _orders;
}
