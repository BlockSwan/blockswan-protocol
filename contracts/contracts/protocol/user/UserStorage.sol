// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

/**
 * @title UserStorage
 * @author Blockswan
 * @notice Contract used as storage of the user contract.
 * @dev It defines the storage layout of the user contract.
 */
contract UserStorage {
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableMap for EnumerableMap.AddressToUintMap;

    //using l_account_logic for l_data_types.s_escrow;

    // set of address by userId  (userId => address)
    EnumerableSet.AddressSet internal _userIdToAddress;

    // Map of address and their userId (address => userId)
    EnumerableMap.AddressToUintMap internal _userAddressToId;

    // Map of the public key used and their user data (address => User)
    mapping(address => DataTypes.User) internal _users;
}
