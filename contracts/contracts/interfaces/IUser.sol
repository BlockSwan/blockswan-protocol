// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";

/**
 * @title IUser
 * @author Blockswan
 * @notice Defines the basic interface for an blockswan user.
 **/
interface IUser {
    /**
     * @dev Emitted when a new user is created.
     * @param userId The id of the user
     * @param userAddress The wallet addresss of the user
     * @param userData The data associated with the user
     */
    event UserAdded(
        uint256 indexed userId,
        address indexed userAddress,
        DataTypes.User userData
    );

    /**
     * @dev Emitted when an user is created.
     * @param userId The id of the user
     * @param userAddress The wallet addresss of the user
     * @param userData The data associated with the user
     */
    event UserEdited(
        uint256 indexed userId,
        address indexed userAddress,
        DataTypes.User userData
    );

    /**
     * @notice Returns the user data.
     * @param userId The id of the user.
     * @return User The data associated to the user it
     **/
    function getUserById(
        uint256 userId
    ) external view returns (DataTypes.User memory);

    /**
     * @notice Returns the user for a given public key.
     * @param pubKey The address as parameter.
     * @return User the user linked to the public key
     **/
    function getUserByAddress(
        address pubKey
    ) external view returns (DataTypes.User memory);

    /**
     * @notice Returns the list of all initialized users.
     * @dev It does not include dropped users
     * @return A data array of the underlying user.
     **/
    function getUserList() external view returns (DataTypes.User[] memory);

    /**
     * @notice Returns the current revision of the contract
     * @return the current revision
     **/
    function getUsersCount() external view returns (uint256);

    /**
     * @notice Returns the user wallet address.
     * @param userId The id of the user.
     * @return userAddress the wallet of the user
     **/
    function getAddressById(uint256 userId) external view returns (address);

    /**
     * @notice Create a new users with the msg.sender wallet
     * @param metadata the user related information
     * @param inviterId the userID of whom invited the newUser
     **/
    function createUser(string memory metadata, uint256 inviterId) external;
}
