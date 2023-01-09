//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IProviderContract} from "../../interfaces/IProviderContract.sol";

/**
 * @title Parent class to all contracts used to check that a contract is registerable
 * @notice ProviderContract is Ownable so the deployer can re-register it against new registries
 * @dev The Provider uses this to talk to all contracts that inherit from this contract.
 */

contract ProviderContract is Ownable, IProviderContract {
    IAddressProvider ADDRESS_PROVIDER;

    /// @notice all contracts that inherit from ProviderContract are automatically Ownable()
    /// @dev internal constructor makes ProviderContract abstract
    constructor() Ownable() {}

    /// @notice only allow storage contracts to be called by the respective factory.
    ///     i.e. GigStorage methods can only be invoked by GigFactory.
    modifier onlyProvider(bytes32 _name) {
        require(
            msg.sender == IAddressProvider(ADDRESS_PROVIDER).getContract(_name),
            "Requires msg.sender is from contract address registered to _name"
        );
        _;
    }

    /// @inheritdoc IProviderContract
    function setProvider(IAddressProvider _providerAddress) external override {
        require(
            address(_providerAddress) == address(0x00) ||
                address(ADDRESS_PROVIDER) == msg.sender ||
                this.owner() == msg.sender,
            "Can only be called if addressesProvider is empty, msg.sender or owner"
        );
        ADDRESS_PROVIDER = _providerAddress;
    }

    /// @inheritdoc IProviderContract
    function kill() external override {
        assert(msg.sender == address(ADDRESS_PROVIDER));
        selfdestruct(payable(address(ADDRESS_PROVIDER)));
    }
}
