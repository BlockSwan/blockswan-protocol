// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from '../../imports/openzeppelin/contracts/Counters.sol';

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

//import {l_account_logic} from "../libraries/logics/l_account_logic.sol";

/**
 * @title UserStorage
 * @author Blockswan
 * @notice Contract used as storage of the user contract.
 * @dev It defines the storage layout of the user contract.
 */
contract UserStorage {
    using EnumerableSet for EnumerableSet.AddressSet;

    //using l_account_logic for l_data_types.s_escrow;

    // Map of users and their data (userId => address)
    EnumerableSet.AddressSet internal _userIdToAddress;

    // Map of the public key used and their user data (address => User)
    mapping(address => DataTypes.User) internal _users;
}
