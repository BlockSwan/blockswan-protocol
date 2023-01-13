// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

/**
 * @title Errors  library
 * @author Blockswan
 * @notice Defines the error messages emitted by the different contracts of the Blockswan protocol
 */
library Errors {
    // REGISTRY
    string public constant INVALID_ADDRESS_PROVIDER_ID = "1"; // The addresses provider is not valid
    string public constant ADDRESS_PROVIDER_ALREADY_ADDED = "2"; // This addresses provider already exists
    string public constant ADDRESS_PROVIDER_NOT_REGISTERED = "3"; // 'This addresses provider is not registered'

    // ADDRESSSES PROVIDER
    string public constant CONTRACT_NAME_ALREADY_USED = "4"; // 'Requires that given _name does not already have non-zero registered contract address'
    string public constant ZERO_ADDRESS_IS_INVALID = "5"; // the address provided is 0x00
    string public constant INDEX_OUT_OF_RANGE = "6"; // the index provided is out of range

    // USER
    string public constant ADDRESS_ALREADY_USED = "7"; // 'The address provided has already been unsed to initialise an account'
    string public constant INVALID_USER_ID = "8"; // 'The userId is incorrect'
    string public constant RESTRICTED_TO_BUYER = "9"; // this function can't  be called by buyers
    string public constant INVALID_INVITER_ID = "10"; // The inviter ID provided is incorrect
    string public constant FAILED_BECOMING_BUYER = "11"; // The execution to becomeBuyer failed
}
