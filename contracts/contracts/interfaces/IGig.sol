// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";
import {OutputTypes} from "../protocol/libraries/types/OutputTypes.sol";
import {InputTypes} from "../protocol/libraries/types/InputTypes.sol";

/**
 * @title IGig
 * @author Blockswan
 * @notice Defines the basic interface for a blockswan gig contract.
 **/
interface IGig {
    /**
     * @dev Emitted when a new gig is created.
     * @param gigId The id of the gig
     * @param userId The user creating the gig
     * @param metadata The gig metadata
     * @param packages The gig packages
     */
    event GigAdded(
        uint256 indexed gigId,
        uint256 indexed userId,
        string metadata,
        DataTypes.Package[3] packages
    );

    /**
     * @dev Emitted when a gig is edited.
     * @param gigId The id of the gig
     * @param userId The user creating the gig
     * @param metadata The gig metadata
     * @param packages The gig packages
     */
    event GigEdited(
        uint256 indexed gigId,
        uint256 indexed userId,
        string metadata,
        DataTypes.Package[3] packages
    );

    /**
     * @notice Returns the gig data.
     * @param gigId The id of the gig.
     * @return The data associated to the gigId
     **/
    function getGigById(
        uint256 gigId
    ) external view returns (OutputTypes.GigOutput memory);

    /**
     * @notice Returns the list of all initialized gigs.
     * @return A data array of the gigs.
     **/
    function getGigList()
        external
        view
        returns (OutputTypes.GigOutput[] memory);

    /**
     * @notice Returns the current amount of gigs
     * @return the current amount of gigs
     **/
    function getGigsCount() external view returns (uint256);

    /**
     * @notice Create a new gig with the msg.sender wallet
     * @param metadata the gig related information
     * @param packages the packages inside the gig
     **/
    function createGig(
        string memory metadata,
        DataTypes.Package[3] memory packages
    ) external;

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
     * @notice retrieves the inviters wallet for a given userId
     * @param userId the user id to get the inviters from
     * @return address the pubkey of inviter0
     * @return address the pubkey of inviter1
     **/
    function getInvitersById(
        uint256 userId
    ) external view returns (address, address);

    /**
     * @notice add the order id to the gig orderIds set.
     * @param newOrderId the new orderId.
     * @param gigId the new gig id.
     * @param packageId the packages inside the gig
     * @return success the relation has been addded.
     * @return metadata the gig metadata
     * @return packages the gig packages
     **/
    function createOrder(
        uint256 newOrderId,
        uint256 gigId,
        uint256 packageId
    ) external returns (bool, string memory, DataTypes.Package memory);
}
