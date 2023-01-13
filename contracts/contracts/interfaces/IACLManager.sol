// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {IAccessControlEnumerable} from "../imports/openzeppelin/contracts/IAccessControlEnumerable.sol";

/**
 * @title IACLManager
 * @author Blockswan
 * @notice Defines the basic interface for the ACLManager
 **/
interface IACLManager is IAccessControlEnumerable {
    /**
     * @notice Set the role as admin of a specific role.
     * @dev By default the admin role for all roles is `DEFAULT_ADMIN_ROLE`.
     * @param role The role to be managed by the admin role
     * @param adminRole The admin role
     */
    function setRoleAdmin(bytes32 role, bytes32 adminRole) external;
}
