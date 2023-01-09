// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {IProviderContract} from "../../interfaces/IProviderContract.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";

/**
 * @title Central hub for ProvidersContracts that stores all contract addresses
 *    and facilitates inter-contract communication
 * @dev The provider acts as the central hub for all ProviderContracts.
 *    It stores the addresses for all contracts so when one contract wants to
 *    communicate with with another, it must go:
 *      Calling Contract -> AddressProvider -> Destination Contract
 *    It also serves as a communication hub and a version manager that can
 *    upgrade existing contracts and remove contracts
 * @dev for simplicity, this is the only contract that does not have de-coupled storage
 */

contract AddressProvider is Ownable, IAddressProvider {
    // Identifier of the Blockswan MarketPlace
    string private _marketplaceId;

    /**
     * @dev addressStorage mapping allows efficient lookup of current contract version
     *     	addressStorageHistory maintains record of all contract versions
     */
    mapping(bytes32 => address) private addressStorage;
    mapping(bytes32 => address[]) private addressStorageHistory;

    bytes32 private constant GIG = "GIG";
    bytes32 private constant ORDER = "ORDER";
    bytes32 private constant USER = "USER";
    bytes32 private constant PROTOCOL_CONFIGURATOR = "PROTOCOL_CONFIGURATOR";
    bytes32 private constant DAT = "DAT";
    bytes32 private constant ACL_MANAGER = "ACL_MANAGER";
    bytes32 private constant DATA_PROVIDER = "DATA_PROVIDER";

    /**
     * @dev Constructor.
     * @param marketplaceId The identifier of the marketplace.
     * @param owner The owner address of this contract.
     */
    constructor(string memory marketplaceId, address owner) {
        _setMarketplaceId(marketplaceId);
        transferOwnership(owner);
    }

    function getMarketplaceId() external view returns (string memory) {
        return _marketplaceId;
    }

    function setMarketplaceId(
        string memory newMarketplaceId
    ) external onlyOwner {
        _setMarketplaceId(newMarketplaceId);
    }

    /// @inheritdoc IAddressProvider
    function addContract(
        bytes32 _name,
        address _address
    ) external override onlyOwner {
        require(
            addressStorage[_name] == address(0x00),
            Errors.CONTRACT_NAME_ALREADY_USED
        );
        require(_address != address(0x00), Errors.ZERO_ADDRESS_IS_INVALID);
        IProviderContract(_address).setProvider(this);
        setAddress(_name, _address);
        emit ContractAdded(_name, _address);
    }

    /// @inheritdoc IAddressProvider
    function getContract(
        bytes32 _name
    ) external view override returns (address contractAddr) {
        return addressStorage[_name];
    }

    /// @inheritdoc IAddressProvider
    function getContract(
        bytes32 _name,
        uint _version
    ) external view override returns (address contractAddr) {
        // array length for key implies version number
        require(
            _version <= addressStorageHistory[_name].length,
            Errors.INDEX_OUT_OF_RANGE
        );
        return addressStorageHistory[_name][_version - 1];
    }

    /// @inheritdoc IAddressProvider
    function getContractVersionCount(
        bytes32 _name
    ) external view override returns (uint) {
        return addressStorageHistory[_name].length;
    }

    /// @inheritdoc IAddressProvider
    function removeContract(bytes32 _name) external override onlyOwner {
        address contractAddress = addressStorage[_name];
        require(
            contractAddress != address(0x00),
            Errors.ZERO_ADDRESS_IS_INVALID
        );
        IProviderContract(contractAddress).kill();
        setAddress(_name, address(0x00));
        emit ContractRemoved(_name, contractAddress);
    }

    /// @inheritdoc IAddressProvider
    function upgradeContract(
        bytes32 _name,
        address _newAddress
    ) external override onlyOwner {
        address oldAddress = addressStorage[_name];
        require(oldAddress != address(0x00), Errors.ZERO_ADDRESS_IS_INVALID);
        IProviderContract(oldAddress).kill();
        IProviderContract(_newAddress).setProvider(this);
        setAddress(_name, _newAddress);
        emit ContractUpgraded(_name, oldAddress, _newAddress);
    }

    /**
     * @param _key the key for the contract address
     * @param _value the contract address
     */
    function setAddress(bytes32 _key, address _value) private {
        // main map for cheap lookup
        addressStorage[_key] = _value;
        // keep track of contract address history
        addressStorageHistory[_key].push(_value);
    }

    /**
     * @notice Updates the identifier of the Blockswan marketplace.
     * @param newMarketplaceId The new id of the marketplace
     **/
    function _setMarketplaceId(string memory newMarketplaceId) internal {
        string memory oldMarketplaceId = _marketplaceId;
        _marketplaceId = newMarketplaceId;
        emit MarketplaceIdSet(oldMarketplaceId, newMarketplaceId);
    }
}
