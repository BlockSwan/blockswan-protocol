// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";
import {OutputTypes} from "../protocol/libraries/types/OutputTypes.sol";
import {InputTypes} from "../protocol/libraries/types/InputTypes.sol";

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
        InputTypes.CreateUserInput userData
    );

    /**
     * @dev Emitted when an user is edited.
     * @param userId The id of the user
     * @param userAddress The wallet addresss of the user
     * @param userData The data associated with the user
     */
    event UserEdited(
        uint256 indexed userId,
        address indexed userAddress,
        OutputTypes.UserOutput userData
    );

    /**
     * @notice Returns the user id from a given address.
     * @param account The address of the user
     * @return userId The userId associated to the account address
     **/
    function getIdByAddress(address account) external view returns (uint256);

    /**
     * @notice Returns the user data.
     * @param userId The id of the user.
     * @return User The data associated to the user it
     **/
    function getUserById(
        uint256 userId
    ) external view returns (OutputTypes.UserOutput memory);

    /**
     * @notice Returns the user for a given public key.
     * @param pubKey The address as parameter.
     * @return User the user linked to the public key
     **/
    function getUserByAddress(
        address pubKey
    ) external view returns (OutputTypes.UserOutput memory);

    /**
     * @notice Returns the list of all initialized users.
     * @dev It does not include dropped users
     * @return A data array of the underlying user.
     **/
    function getUserList()
        external
        view
        returns (OutputTypes.UserOutput[] memory);

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

    /**
     * @notice retrieves the inviters wallet for a given wallet account
     * @param account the wallet to get the inviters from
     * @return address the pubkey of inviter0
     * @return address the pubkey of inviter1
     **/
    function getInvitersByUserAddress(
        address account
    ) external view returns (address, address);

    /**
     * @notice add the gig id to the user gigIds set.
     * @param caller the wallet creating the gig.
     * @param newGigId the new gig id.
     * @return success the relation has been addded.
     **/
    function createGig(
        address caller,
        uint256 newGigId
    ) external returns (bool);

    /**
     * @notice add the order id to the user buyerOrderIds set.
     * @param buyerId the id of the buyer
     * @param newOrderId the new gig orderId.
     * @return success the relation has been addded.
     **/
    function createBuyerOrder(
        uint256 buyerId,
        uint256 newOrderId
    ) external returns (bool);

    /**
     * @notice retrieves the inviters wallet for a given userId
     * @param userId the user id to get the inviters from
     * @return address the pubkey of inviter0
     * @return address the pubkey of inviter1
     **/
    function getInvitersById(
        uint256 userId
    ) external view returns (address, address);

    /**
     * @notice return true if the gigId is owned by the given userId
     * @param userId the user id to check if he own the gig
     * @param gigId the gigId
     * @return bool if the gigId is owned by the given userId
     **/
    function isGigOwner(
        uint256 userId,
        uint256 gigId
    ) external view returns (bool);
}
