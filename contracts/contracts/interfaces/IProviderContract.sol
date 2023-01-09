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
     * @notice kill the current address provider, only callable by the AddressProvider
     */
    function kill() external;
}
