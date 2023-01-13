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
}
