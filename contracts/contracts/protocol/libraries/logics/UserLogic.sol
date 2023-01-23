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
    using EnumerableSet for EnumerableSet.UintSet;
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
        DataTypes.User storage newUser = users[params.wallet];
        newUser.addInviter(params.inviterId);
        newUser.updateMetadata(params.metadata);
        require(added, Errors.ADDRESS_ALREADY_USED);

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
        user.addBuyerInvites(inputParams.invitationEarned);
        return true;
    }

    function executeBecomeSeller(
        EnumerableMap.AddressToUintMap storage userAddressToId,
        mapping(address => DataTypes.User) storage users,
        EnumerableSet.AddressSet storage userIdToAddress,
        InputTypes.BecomeSellerInput memory inputParams
    ) external returns (bool) {
        DataTypes.User storage user = getUserByAddress(
            inputParams.account,
            userAddressToId,
            userIdToAddress,
            users
        );
        user.updateSellerUntil(inputParams.sellerTimeAdded);
        user.addSellerInvites(inputParams.invitationEarned);
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

    function format(
        DataTypes.User storage user,
        uint256 id,
        address wallet
    ) external view returns (OutputTypes.UserOutput memory) {
        return (
            OutputTypes.UserOutput({
                metadata: user.metadata,
                inviterId: user.inviterId,
                buyerUntil: user.buyerUntil,
                buyerInvites: user.buyerInvites,
                sellerUntil: user.sellerUntil,
                sellerInvites: user.sellerInvites,
                userId: id,
                wallet: wallet,
                gigIds: user.gigIds.values(),
                offerIds: user.offerIds.values(),
                bidIds: user.bidIds.values(),
                buyerOrderIds: user.buyerOrderIds.values(),
                gigReviewsIds: user.gigReviewsIds.values(),
                userReviewsIds: user.userReviewsIds.values(),
                reviewsIds: user.reviewsIds.values()
            })
        );
    }

    function executeAddGig(
        uint256 gigId,
        uint256 userId,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) external returns (bool) {
        bool success = getUserById(userId, userIdToAddress, users).addGig(
            gigId
        );
        return success;
    }

    function isGigOwner(
        uint256 userId,
        uint256 gigId,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) public view returns (bool) {
        return
            getUserById(userId, userIdToAddress, users).gigIds.contains(gigId);
    }

    function executeAddBuyerOrder(
        uint256 orderId,
        uint256 buyerId,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) external returns (bool) {
        bool success = getUserById(buyerId, userIdToAddress, users)
            .addBuyerOrder(orderId);
        return success;
    }
}
