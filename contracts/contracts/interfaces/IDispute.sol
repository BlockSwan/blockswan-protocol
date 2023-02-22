// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";
import {OutputTypes} from "../protocol/libraries/types/OutputTypes.sol";
import {InputTypes} from "../protocol/libraries/types/InputTypes.sol";

/**
 * @title IDispute
 * @author Blockswan
 * @notice Defines the basic interface for a blockswan dispute contract.
 **/
interface IDispute {
    /**
     * @dev Emitted when a new dispute is created.
     * @param orderId The order id
     * @param disputeId The new dispute id
   
     */
    event NewDispute(uint256 indexed orderId, uint256 indexed disputeId);

    /**
     * @notice Returns the dispute data.
     * @param disputeId The id of the dispute.
     * @return The data associated to the disputeId
     **/
    function getDisputeById(
        uint256 disputeId
    ) external view returns (OutputTypes.GigOutput memory);

    /**
     * @notice Returns the list of all initialized disputes.
     * @return A data array of the disputes.
     **/
    function getDisputeList()
        external
        view
        returns (OutputTypes.DisputeOutput[] memory);

    /**
     * @notice Returns the current amount of disputes
     * @return the current amount of disputes
     **/
    function getDisputesCount() external view returns (uint256);

    /**
     * @notice Create a new dispute
     * @param orderId the order from which the dispute has been created
     * @param sellerId the seller id
     * @param buyerId the buyer id
     * @return the new dispute id
     **/
    function createDispute(
        uint256 orderId,
        uint256 sellerId,
        uint256 buyerId
    ) external returns (uint256);
}
