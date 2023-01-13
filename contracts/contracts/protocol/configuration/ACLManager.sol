// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {AccessControlEnumerable} from "../../imports/openzeppelin/contracts/AccessControlEnumerable.sol";
import {Strings} from "../../imports/openzeppelin/contracts/Strings.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IACLManager} from "../../interfaces/IACLManager.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {ProviderContract} from "./ProviderContract.sol";

/**
 * @title ACLManager
 * @author Blockswan
 * @notice Access Control List Manager. Main registry of system roles and permissions.
 */
contract ACLManager is AccessControlEnumerable, IACLManager, ProviderContract {
    /**
     * @dev Constructor
     * @dev The ACL_ADMIN should be initialized at the addresses provider beforehand
     * @param provider The address of the AddressProvider
     */

    constructor(IAddressProvider provider) ProviderContract(provider) {
        address aclAdmin = ADDRESS_PROVIDER.fetchContract(ACL_ADMIN);
        require(aclAdmin != address(0), Errors.ZERO_ADDRESS_IS_INVALID);
        _setupRole(DEFAULT_ADMIN_ROLE, aclAdmin);
    }

    /// @inheritdoc IACLManager
    function setRoleAdmin(
        bytes32 role,
        bytes32 adminRole
    ) external override onlyRole(DEFAULT_ADMIN_ROLE) {
        _setRoleAdmin(role, adminRole);
    }
}
