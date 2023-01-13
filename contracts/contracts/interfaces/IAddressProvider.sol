//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title The interface for contracts to interact with the Blockswan Address Provider contract
interface IAddressProvider {
    /**
     * @dev Emitted when a new marketplaceId is set.
     * @param oldMarketplaceId The address of the old marketplaceId
     * @param newMarketplaceId The address of the new marketplaceId
     */
    event MarketplaceIdSet(
        string indexed oldMarketplaceId,
        string indexed newMarketplaceId
    );

    /**
     * @dev Emitted when a new contract is added to the AddressProvider.
     * @param _name The name assigned in the AddressProvider.
     * @param _address The address of the new contract
     */
    event ContractAdded(bytes32 _name, address _address);

    /**
     * @dev Emitted when a new contract is removed from the AddressProvider.
     * @param _name The contract name removed in the AddressProvider.
     * @param _address The address of the removed contract
     */
    event ContractRemoved(bytes32 _name, address _address);

    /**
     * @dev Emitted when a contract is upgraded in the AddressProvider.
     * @param _name The contract name upraded in the AddressProvider.
     * @param _oldAddress The old address prior upgrade
     * @param _newAddress The new address after upgrade
     */
    event ContractUpgraded(
        bytes32 _name,
        address _oldAddress,
        address _newAddress
    );

    /**
     * @notice returns contract address registered under given provider key
     * @param _name - registry key for lookup
     * @return contractAddr - address of contract registered under given provider key
     */
    function getContract(bytes32 _name) external view returns (address);

    /** @notice overloaded getContract to return explicit version of contract */
    function getContract(
        bytes32 _name,
        uint _version
    ) external view returns (address);

    /** @notice requires returned address !== 0 */
    function fetchContract(bytes32 _name) external view returns (address);

    /** @notice requires returned address !== 0 */
    function fetchContract(
        bytes32 _name,
        uint _version
    ) external view returns (address);

    function getContractVersionCount(
        bytes32 _name
    ) external view returns (uint);

    /**
     * @dev addContract does two things:
     *      1.) registers the address of given ProviderContract in the registry
     *      2.) sets the registry address in given ProviderContract so only
     *          the registry can call functions on given contract
     */
    function addContract(bytes32 _name, address _address) external;

    /**
     * @dev removes contract address registered under given provider key
     * @param _name - registry key for lookup
     */
    function removeContract(bytes32 _name) external;

    /**
     * @notice replaces contract address registered under given key with provided address
     * @param _name - registry key for lookup
     * @param _newAddress - new contract address to register under given key
     */
    function upgradeContract(bytes32 _name, address _newAddress) external;
}
