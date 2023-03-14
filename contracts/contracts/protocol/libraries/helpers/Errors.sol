// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.9;

/**
 * @title Errors  library
 * @author Blockswan
 * @notice Defines the error messages emitted by the different contracts of the Blockswan protocol
 */
library Errors {
    string public constant INVALID_ADDRESS_PROVIDER_ID = "1"; // The addresses provider is not valid
    string public constant ADDRESS_PROVIDER_ALREADY_ADDED = "2"; // This addresses provider already exists
    string public constant ADDRESS_PROVIDER_NOT_REGISTERED = "3"; // 'This addresses provider is not registered'
    string public constant CONTRACT_NAME_ALREADY_USED = "4"; // 'Requires that given _name does not already have non-zero registered contract address'
    string public constant ZERO_ADDRESS_IS_INVALID = "5"; // the address provided is 0x00
    string public constant INDEX_OUT_OF_RANGE = "6"; // the index provided is out of range
    string public constant ADDRESS_ALREADY_USED = "7"; // 'The address provided has already been unsed to initialise an account'
    string public constant INVALID_USER_ID = "8"; // 'The userId is incorrect'
    string public constant RESTRICTED_TO_BUYER = "9"; // this function can't  be called by buyers
    string public constant INVALID_INVITER_ID = "10"; // The inviter ID provided is incorrect
    string public constant FAILED_BECOMING_BUYER = "11"; // The execution to becomeBuyer failed
    string public constant RESTRICTED_TO_SELLER = "12"; // this function can't  be called by sellers
    string public constant FAILED_BECOMING_SELLER = "13"; // The execution to becomeSeller failed
    string public constant NO_MATCHING_XP_KEY = "14"; // There is no xp value to give for this byte32
    string public constant GIG_ID_ALREADY_EXISING = "15"; // There is already an id for this gig.
    string public constant ONLY_SELLER = "16"; // Only account with the seller role can call the functions
    string public constant ONLY_BUYER = "17"; // Only buyers can call those functions.
    string public constant NOT_GIG_OWNER = "18"; // The id provided does not match with the gig owner id
    string public constant CALLER_NOT_SELLER_ID = "19"; // The seller id provided is not matching with the account address calling the function
    string public constant CALLER_NOT_BUYER_ID = "20"; // The buyer id provided is not matching with the account address calling the function
    string public constant NOT_ORDER_SELLER = "21"; // The id provided is not the order seller
    string public constant NOT_ORDER_BUYER = "22"; // The id provided is not the order buyer
    string public constant INVALID_ORDER_STATE = "23"; // The function can't be called under the current order state
    string public constant SELF_REFUND_DELAY_NOT_OVER = "24"; // The self refund delay is not over
    string public constant NOT_ORDER_ACTOR = "25"; // The account address calling the function is not matching with the buyerId nor sellerId.
    string public constant DISPUTE_NOT_CREATED = "26"; // The dispute has not been created yet
    string public constant JURY_STAKE_NOT_ENOUGH = "27"; // The jury stake is not enough
    string public constant FAILED_TO_STAKE_JURY = "28"; // The jury stake failed
    string public constant FAILED_TO_WITHDRAW_JURY = "29"; // The jury withdraw failed
    string public constant ROUND_EVIDENCE_ALREADY_SUBMITTED = "30"; // The evidence has already been submitted
    string public constant EVIDENCE_NOT_SUBMITTED = "31"; // The evidence has not been submitted
    string public constant DS_EVIDENCE_PERIOD_OVER = "32"; // The evidence period is over
    // string public constant DS_VOTING_PERIOD_OVER = "33"; // The voting period is over
    // string public constant DS_VOTING_PERIOD_NOT_OVER = "34"; // The voting period is not over
    // string public constant DS_VOTING_PERIOD_NOT_STARTED = "35"; // The voting period has not started yet
    string public constant ONLY_PROVIDER_ALLOWED = "36"; // Only the provider can call this function
    string public constant DS_EVIDENCE_SENDER_NOT_PARTY = "37"; // The sender is not a party of the dispute
    string public constant CALLER_NOT_USER = "38"; // The caller is not the user Id
    string public constant DS_EVIDENCE_ROLE_NOT_VALID = "39"; // The role is not valid
    string public constant RD_ROUND_DOES_NOT_EXIST = "40"; // The round does not exist
    string public constant DS_IN_EXECUTION_PERIOD = "46"; //     The dispute is in execution state
    string public constant VOTE_REVEAL_INCORRECT = "47"; //     The vote reveal is incorrect
    string public constant ROUND_VOTE_ALREADY_COMMITED = "48"; //     The vote has already been commited
    string public constant ROUND_VOTE_NOT_COMMITED = "49"; //     The vote has not been commited
    string public constant ROUND_VOTE_ALREADY_REVEALED = "50"; //     The vote has already been revealed
    string public constant RD_ACCOUNT_NOT_DRAWN_JUROR = "51"; //     The account is not a drawn juror
    string public constant DS_COMMIT_STATE_REQUIRED = "52"; //    The dispute is not in commit state
    string public constant DS_TIME_NOT_PASSED = "53"; //   The time has not passed
    string public constant DS_INVALID_STATE = "54"; //   The state is invalid
    string public constant VOTE_INVALID_CHOICE = "55"; //  The vote choice is invalid
    string public constant DS_NO_COMMITMENTS_MADE_FOR_ROUND = "56"; //  No commitments were made for the round
    string public constant DS_NO_VOTES_MADE_FOR_ROUND = "57"; //  No votes were made for the round
    string public constant RD_VOTE_NOT_FOUND = "58"; //  The vote was not found
    string public constant ROUND_NOT_CLOSED = "59"; //  The round is not closed
    string public constant VOTE_INCORRECT = "60"; //  The vote is incorrect
    string public constant ROUND_NOT_APPEALED = "61"; //  The round is not appealed
    string public constant ROUND_ID_INVALID = "62"; //  The round id is invalid
    string public constant CLAIM_NOT_ALLOWED = "63"; //  The claim is not allowed
    string public constant ROUND_IS_APPEALED = "64"; //  The round is appealed
    string public constant DS_DISPUTE_ALREADY_RULED = "65"; //  The dispute is already ruled
}
