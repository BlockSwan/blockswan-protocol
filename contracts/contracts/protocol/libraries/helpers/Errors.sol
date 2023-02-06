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
    string public constant RESTRICTED_TO_SELLER = "12"; // this function can't  be called by sellers
    string public constant FAILED_BECOMING_SELLER = "13"; // The execution to becomeSeller failed

    //XP
    string public constant NO_MATCHING_XP_KEY = "14"; // There is no xp value to give for this byte32

    // GIG
    string public constant GIG_ID_ALREADY_EXISING = "15"; // There is already an id for this gig.

    // modifiers
    string public constant ONLY_SELLER = "16"; // Only account with the seller role can call the functions
    string public constant ONLY_BUYER = "17"; // Only buyers can call those functions.

    // Order
    string public constant NOT_GIG_OWNER = "18"; // The id provided does not match with the gig owner id
    string public constant CALLER_NOT_SELLER_ID = "19"; // The seller id provided is not matching with the account address calling the function
    string public constant CALLER_NOT_BUYER_ID = "20"; // The buyer id provided is not matching with the account address calling the function
    string public constant NOT_ORDER_SELLER = "21"; // The id provided is not the order seller
    string public constant NOT_ORDER_BUYER = "22"; // The id provided is not the order buyer
    string public constant INVALID_ORDER_STATE = "23"; // The function can't be called under the current order state
    string public constant SELF_REFUND_DELAY_NOT_OVER = "24"; // The self refund delay is not over
    string public constant NOT_ORDER_ACTOR = "25"; // The account address calling the function is not matching with the buyerId nor sellerId.
    string public constant DISPUTE_NOT_CREATED = "26"; // The dispute has not been created yet

    // Jury
    string public constant JURY_STAKE_NOT_ENOUGH = "27"; // The jury stake is not enough
    string public constant FAILED_TO_STAKE_JURY = "28"; // The jury stake failed
    string public constant FAILED_TO_WITHDRAW_JURY = "29"; // The jury withdraw failed
}
