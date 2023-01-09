// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";

/**
 * @title User logic library
 * @author Blockswan
 * @notice Implements the logic for user specific functions
 */
library UserLogic {
    using EnumerableSet for EnumerableSet.AddressSet;

    function executeCreateUser(
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users,
        InputTypes.CreateUserInput memory params
    ) external returns (bool) {
        // add require !isContract
        bool added = userIdToAddress.add(params.wallet);
        require(added, Errors.ADDRESS_ALREADY_USED);
        users[params.wallet].metadata = params.metadata;
        return true;
    }
}
