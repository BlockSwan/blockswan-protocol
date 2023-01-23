// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {IAccessControlEnumerable} from "../imports/openzeppelin/contracts/IAccessControlEnumerable.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";

/**
 * @title IProtocolConfigurator
 * @author Blockswan
 * @notice Defines the basic interface for the ProtocolConfigurator
 **/
interface IProtocolConfigurator {
    /**
     * @notice Retrieves the parameters when enterering the protocol as a buyer.
     * @return parameters The paramaters  when accessing the role status
     */
    function getBuyerEntryParams()
        external
        view
        returns (DataTypes.EntryParams memory);

    // extends the above function specifying a version to retrieve
    function getBuyerEntryParams(
        uint256 version
    ) external view returns (DataTypes.EntryParams memory);

    /**
     * @notice Update the  parameters when enterering the protocol as as buyer.
     * @param newParams The new buyer entry paramaters
     */
    function updateBuyerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external;

    /**
     * @notice Retrieves the parameters when enterering the protocol as a seller.
     * @return parameters The paramaters  when accessing the role status
     */
    function getSellerEntryParams()
        external
        view
        returns (DataTypes.EntryParams memory);

    // extends the above function specifying a version to retrieve
    function getSellerEntryParams(
        uint256 version
    ) external view returns (DataTypes.EntryParams memory);

    /**
     * @notice Update the  parameters when enterering the protocol as as seller.
     * @param newParams The new buyer entry paramaters
     */
    function updateSellerEntryParams(
        DataTypes.EntryParams memory newParams
    ) external;

    /**
     * @notice Retrieves the retribution percentage values of the protocol.
     * @return retributions The retribution percentage values of the protocol.
     */
    function getRetributionParams()
        external
        view
        returns (DataTypes.RetributionParams memory);

    // extends the above function specifying a version to retrieve
    function getRetributionParams(
        uint256 version
    ) external view returns (DataTypes.RetributionParams memory);

    /**
     * @notice Update the retributin  parameters of the protocol.
     * @param newParams The new retribution paramaters
     */
    function updateRetributionParams(
        DataTypes.RetributionParams memory newParams
    ) external;

    /**
     * @notice Retrieves the parameters when creating a gig.
     * @return parameters The parameters when creating a gig
     */
    function getGigCreationParams()
        external
        view
        returns (DataTypes.CreationParams memory);

    // extends the above function specifying a version to retrieve
    function getGigCreationParams(
        uint256 version
    ) external view returns (DataTypes.CreationParams memory);

    /**
     * @notice Update the gig creation parameters of the protocol.
     * @param newParams The new gig creation paramaters
     */
    function updateGigCreationParams(
        DataTypes.CreationParams memory newParams
    ) external;

    /**
     * @notice Retrieves the parameters when creating an order.
     * @return parameters The parameters when creating an order.
     * @return sellerFeesParamsVersion The latest fee structur version that will be applied to the seller upon order completion.
     */
    function getOrderCreationParams()
        external
        view
        returns (DataTypes.OrderPriceParams memory, uint256);

    // extends the above function specifying a version to retrieve
    function getOrderCreationParams(
        uint256 version
    ) external view returns (DataTypes.OrderPriceParams memory, uint256);

    /**
     * @notice Update the order creation parameters of the protocol.
     * @param newParams The new order creation paramaters
     */
    function updateOrderCreationParams(
        DataTypes.OrderPriceParams memory newParams
    ) external;

    /**
     * @notice Retrieves the parameters fees for the seller after an order.
     * @return parameters The seller parameters upon odder completion
     */
    function getSellerOrderFees()
        external
        view
        returns (DataTypes.OrderPriceParams memory);

    // extends the above function specifying a version to retrieve
    function getSellerOrderFees(
        uint256 version
    ) external view returns (DataTypes.OrderPriceParams memory);

    /**
     * @notice Update the order creation parameters of the protocol applied to a seller.
     * @param newParams The new sellerr-applied order creation paramaters
     */
    function updateSellerOrderFees(
        DataTypes.OrderPriceParams memory newParams
    ) external;

    /**
     * @notice Retrieves the protocol delay timestamp.
     * @return parameters The delay timestamp parametes
     */
    function getDelayTimestamp()
        external
        view
        returns (DataTypes.DelayTimestamp memory);

    // extends the above function specifying a version to retrieve
    function getDelayTimestamp(
        uint256 version
    ) external view returns (DataTypes.DelayTimestamp memory);

    /**
     * @notice Update the delays timestamp parameters of the protocol.
     * @param newParams The new order creation paramaters
     */
    function updateDelayTimestamp(
        DataTypes.DelayTimestamp memory newParams
    ) external;
}
