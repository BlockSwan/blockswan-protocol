// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";

/**
 * @title UserData logic library
 * @author Blockswan
 * @notice Implements the logic for user data specific functions
 */
library UserDataLogic {
    using EnumerableSet for EnumerableSet.UintSet;

    function updateMetadata(
        DataTypes.User storage user,
        string memory metadata
    ) external returns (bool) {
        user.metadata = metadata;
        return true;
    }

    function updateBuyerUntil(
        DataTypes.User storage user,
        uint256 buyerTimeAdded
    ) external returns (bool) {
        user.buyerUntil = block.timestamp + buyerTimeAdded;
        return true;
    }

    function addBuyerInvites(
        DataTypes.User storage user,
        uint8 invitesAdded
    ) external returns (bool) {
        user.buyerInvites += invitesAdded;
        return true;
    }

    function updateSellerUntil(
        DataTypes.User storage user,
        uint256 sellerTimeAdded
    ) external returns (bool) {
        user.sellerUntil = block.timestamp + sellerTimeAdded;
        return true;
    }

    function addSellerInvites(
        DataTypes.User storage user,
        uint8 invitesAdded
    ) external returns (bool) {
        user.sellerInvites += invitesAdded;
        return true;
    }

    function addGig(
        DataTypes.User storage user,
        uint256 newGigId
    ) external returns (bool) {
        user.gigIds.add(newGigId);
        return true;
    }

    function addBuyerOrder(
        DataTypes.User storage user,
        uint256 newOrderId
    ) external returns (bool) {
        user.buyerOrderIds.add(newOrderId);
        return true;
    }
}
