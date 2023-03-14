// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/**
 * @title IProviderRegistry
 * @author Blockswan
 * @notice Defines the basic interface for an Blockswan Protocol Provider Registry.
 **/
interface IProviderRegistry {
    /**
     * @dev Emitted when a new AddressProvider is registered.
     * @param addressProvider The address of the registered AddressProvider
     * @param id The id of the registered AddressProvider
     */
    event AddressProviderRegistered(
        address indexed addressProvider,
        uint256 indexed id
    );

    /**
     * @dev Emitted when an addressProvider is unregistered.
     * @param addressProvider The address of the unregistered AddressProvider
     * @param id The id of the unregistered AddressProvider
     */
    event AddressProviderUnregistered(
        address indexed addressProvider,
        uint256 indexed id
    );

    /**
     * @notice Returns the list of registered addresses providers
     * @return The list of addresses providers
     **/
    function getAddressProvidersList() external view returns (address[] memory);

    /**
     * @notice Returns the id of a registered AddressProvider
     * @param addressProvider The address of the AddressProvider
     * @return The id of the AddressProvider or 0 if is not registered
     */
    function getAddressProviderIdByAddress(
        address addressProvider
    ) external view returns (uint256);

    /**
     * @notice Returns the address of a registered AddressProvider
     * @param id The id of the marketplace
     * @return The address of the AddressProvider with the given id or zero address if it is not registered
     */
    function getAddressProviderById(uint256 id) external view returns (address);

    /**
     * @notice Registers an addresses provider
     * @dev The protocol AddressesProvider must not already be registered in the registry
     * @dev The id must not be used by an already registered protocol AddressesProvider
     * @param provider The address of the new protocol AddressesProvider
     * @param id The id for the new AddressesProvider, referring to the marketplace it belongs to
     **/
    function registerAddressProvider(address provider, uint256 id) external;

    /**
     * @notice Removes an addresses provider from the list of registered addresses providers
     * @param provider The protocol AddressesProvider address
     **/
    function unregisterAddressProvider(address provider) external;
}
