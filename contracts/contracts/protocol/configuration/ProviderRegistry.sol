// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {IProviderRegistry} from "../../interfaces/IProviderRegistry.sol";

/**
 * @title Provider Registry
 * @author Blockswan
 * @notice Main registry of Addresses_provider of Blockswan marketplaces.
 * @dev Used for indexing purposes of Blockswan protocol's marketplaces. The id assigned to an AddressesProvider refers to the
 * market it is connected with, for example with `1` for the Blockswan main market and `2` for the next created.
 **/

contract ProviderRegistry is Ownable, IProviderRegistry {
    // List of addresses providers
    address[] private _addressProvidersList;
    // Map of address provider ids (addressProvider => id)
    mapping(address => uint256) private _addressProviderToId;
    // Map of id to address provider (id => addressProvider)
    mapping(uint256 => address) private _idToAddressProvider;
    // Map of address provider list indexes (addressProvider => indexInList)
    mapping(address => uint256) private _addressProvidersIndexes;

    /**
     * @dev Constructor.
     * @param owner The owner address of this contract.
     */
    constructor(address owner) {
        transferOwnership(owner);
    }

    /// @inheritdoc IProviderRegistry
    function getAddressProvidersList()
        external
        view
        override
        returns (address[] memory)
    {
        return _addressProvidersList;
    }

    /// @inheritdoc IProviderRegistry
    function registerAddressProvider(
        address provider,
        uint256 id
    ) external override onlyOwner {
        require(id != 0, Errors.INVALID_ADDRESS_PROVIDER_ID);
        require(
            _idToAddressProvider[id] == address(0),
            Errors.INVALID_ADDRESS_PROVIDER_ID
        );
        require(
            _addressProviderToId[provider] == 0,
            Errors.ADDRESS_PROVIDER_ALREADY_ADDED
        );

        _addressProviderToId[provider] = id;
        _idToAddressProvider[id] = provider;

        _addToAddressProviderslist(provider);
        emit AddressProviderRegistered(provider, id);
    }

    /// @inheritdoc IProviderRegistry
    function unregisterAddressProvider(
        address provider
    ) external override onlyOwner {
        require(
            _addressProviderToId[provider] != 0,
            Errors.ADDRESS_PROVIDER_NOT_REGISTERED
        );
        uint256 old_id = _addressProviderToId[provider];
        _idToAddressProvider[old_id] = address(0);
        _addressProviderToId[provider] = 0;

        _removeFromAddressProvidersList(provider);

        emit AddressProviderUnregistered(provider, old_id);
    }

    /// @inheritdoc IProviderRegistry
    function getAddressProviderIdByAddress(
        address addresses_provider
    ) external view override returns (uint256) {
        return _addressProviderToId[addresses_provider];
    }

    /// @inheritdoc IProviderRegistry
    function getAddressProviderById(
        uint256 id
    ) external view override returns (address) {
        return _idToAddressProvider[id];
    }

    /**
     * @notice Adds the addresses provider address to the list.
     * @param provider The address of the protocol AddressesProvider
     */
    function _addToAddressProviderslist(address provider) internal {
        _addressProvidersIndexes[provider] = _addressProvidersList.length;
        _addressProvidersList.push(provider);
    }

    /**
     * @notice Removes the addresses provider address from the list.
     * @param provider The address of the AddressesProvider
     */
    function _removeFromAddressProvidersList(address provider) internal {
        uint256 index = _addressProvidersIndexes[provider];

        _addressProvidersIndexes[provider] = 0;

        // Swap the index of the last addresses provider in the list with the index of the provider to remove
        uint256 last_index = _addressProvidersList.length - 1;
        if (index < last_index) {
            address last_provider = _addressProvidersList[last_index];
            _addressProvidersList[index] = last_provider;
            _addressProvidersIndexes[last_provider] = index;
        }
        _addressProvidersList.pop();
    }
}
