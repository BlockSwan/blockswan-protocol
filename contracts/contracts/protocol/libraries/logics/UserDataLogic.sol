// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";

/**
 * @title UserData logic library
 * @author Blockswan
 * @notice Implements the logic for user data specific functions
 */
library UserDataLogic {
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

    function addBuyerInviter(
        DataTypes.User storage user,
        uint8 invitesAdded
    ) external returns (bool) {
        user.buyerInvites += invitesAdded;
        return true;
    }
}
