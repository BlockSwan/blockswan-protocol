// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";

import {DataTypes} from "../types/DataTypes.sol";
import {InviterLogic} from "./InviterLogic.sol";
import {UserDataLogic} from "./UserDataLogic.sol";

import {IACLManager} from "../../../interfaces/IACLManager.sol";

/**
 * @title User logic library
 * @author Blockswan
 * @notice Implements the logic for user specific functions
 */
library UserLogic {
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableMap for EnumerableMap.AddressToUintMap;
    using InviterLogic for DataTypes.User;
    using UserDataLogic for DataTypes.User;

    function executeCreateUser(
        EnumerableSet.AddressSet storage userIdToAddress,
        EnumerableMap.AddressToUintMap storage userAddressToId,
        mapping(address => DataTypes.User) storage users,
        InputTypes.CreateUserInput memory params
    ) external returns (bool) {
        bool added = userIdToAddress.add(params.wallet);
        userAddressToId.set(params.wallet, params.newId);
        bool inviterSet = users[params.wallet].addInviter(params.inviterId);
        bool metadataSet = users[params.wallet].updateMetadata(params.metadata);
        require(
            added && inviterSet && metadataSet,
            Errors.ADDRESS_ALREADY_USED
        );

        return true;
    }

    function executeBecomeBuyer(
        EnumerableMap.AddressToUintMap storage userAddressToId,
        mapping(address => DataTypes.User) storage users,
        EnumerableSet.AddressSet storage userIdToAddress,
        InputTypes.BecomeBuyerInput memory inputParams
    ) external returns (bool) {
        DataTypes.User storage user = getUserByAddress(
            inputParams.account,
            userAddressToId,
            userIdToAddress,
            users
        );
        user.updateBuyerUntil(inputParams.buyerTimeAdded);
        user.addBuyerInviter(inputParams.invitationEarned);
        return true;
    }

    function getUserById(
        uint256 userId,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) public view returns (DataTypes.User storage) {
        return (users[userIdToAddress.at(userId)]);
    }

    function getUserByAddress(
        address account,
        EnumerableMap.AddressToUintMap storage userAddressToId,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) public view returns (DataTypes.User storage) {
        require(isUserExisting(userAddressToId, account), "No such userId");

        DataTypes.User storage user = getUserById(
            userAddressToId.get(account),
            userIdToAddress,
            users
        );
        return user;
    }

    function isUserExisting(
        EnumerableMap.AddressToUintMap storage userAddressToId,
        address account
    ) public view returns (bool) {
        return (userAddressToId.contains(account));
    }
}
