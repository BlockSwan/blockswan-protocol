// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";

interface IProviderContract {
    /**
     * @notice set the provider address of the ProviderContract
     * @param _providerAddress The address of the AddressProvider
     */
    function setProvider(IAddressProvider _providerAddress) external;

    /**
     * @notice fetch the contract address from the ADDRESSS_PROVIDER
     * @notice throws error if address === 0
     * @param _name the bytes32 name of the contract
     */
    function fetchContract(bytes32 _name) external view returns (address);

    /**
     * @notice kill the current address provider, only callable by the AddressProvider
     */
    function kill() external;

    /**
     * @notice Returns the contract address of the IAddressProvider
     * @return The address of the AddressProvider
     */
    function ADDRESSES_PROVIDER() external view returns (IAddressProvider);

    /**
     * @notice Returns the identifier of the protocol_admin role
     * @return The id of the protocol_admin role
     */
    function PROTOCOL_ADMIN_ROLE() external view returns (bytes32);

    /**
     * @notice Returns the identifier of the buyer role
     * @return The id of the buyer role
     */
    function BUYER_ROLE() external view returns (bytes32);

    /**
     * @notice Returns the identifier of the seller role
     * @return The id of the seller role
     */
    function SELLER_ROLE() external view returns (bytes32);

    /**
     * @notice Returns the identifier of the judge role
     * @return The id of the judge role
     */
    function JUDGE_ROLE() external view returns (bytes32);

    /**
     * @notice Returns the identifier of the Blacklist role
     * @return The id of the Blacklist role
     */
    function BLACKLIST_ROLE() external view returns (bytes32);

    /**
     * @notice Returns the identifier of the whitelist role
     * @return The id of the whitelist role
     */
    function WHITELIST_ROLE() external view returns (bytes32);
}
