// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";

import {VoteDataLogic} from "./VoteDataLogic.sol";

/**
 * @title Vote logic library
 * @author Blockswan
 * @notice Implements the logic for vote specific functions
 */
library VoteLogic {
    using VoteDataLogic for DataTypes.Vote;

    modifier onlyValidChoice(uint256 choice) {
        require(choice >= 0 && choice <= 10, Errors.VOTE_INVALID_CHOICE);
        _;
    }

    modifier onlyValidReveal(
        DataTypes.Vote storage vote,
        uint256 choice,
        string memory salt
    ) {
        require(
            isRevealCorrect(vote.account, choice, salt, vote.commit),
            Errors.VOTE_REVEAL_INCORRECT
        );
        _;
    }

    function encodeChoice(
        address account,
        uint256 choice,
        string memory salt
    ) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(account, choice, salt));
    }

    function isRevealCorrect(
        address account,
        uint256 choice,
        string memory salt,
        bytes32 commitment
    ) internal pure returns (bool) {
        return encodeChoice(account, choice, salt) == commitment;
    }

    function isVoteCorrect(
        DataTypes.Vote storage vote,
        uint256 choice
    ) internal view returns (bool) {
        return vote.choice == choice;
    }

    function commit(
        address account,
        uint256 choice,
        uint256 weight,
        string memory salt
    ) external pure returns (DataTypes.Vote memory newVote) {
        newVote = DataTypes.Vote({
            account: account,
            choice: 0,
            justification: "",
            commit: encodeChoice(account, choice, salt),
            weight: weight,
            hasVoted: false
        });
    }

    function reveal(
        DataTypes.Vote storage vote,
        uint256 choice,
        string memory salt,
        string memory justification
    )
        external
        onlyValidChoice(choice)
        onlyValidReveal(vote, choice, salt)
        returns (bool)
    {
        vote.setChoice(choice);
        vote.setJustification(justification);
        vote.setVoted();
        return true;
    }

    function isBetweenRange(
        DataTypes.Vote memory vote,
        uint256 minRange,
        uint256 maxRange
    ) external pure returns (bool) {
        return vote.choice >= minRange && vote.choice <= maxRange;
    }

    function isVoteCorrect(
        DataTypes.Vote memory vote,
        uint256 winningChoice
    ) external pure returns (bool) {
        return vote.choice == winningChoice;
    }
}
