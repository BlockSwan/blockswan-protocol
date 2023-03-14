// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";

/**
 * @title VoteData logic library
 * @author Blockswan
 * @notice Implements the logic for vote data specific functions
 */
library VoteDataLogic {
    function setJustification(
        DataTypes.Vote storage vote,
        string memory justification
    ) internal returns (bool) {
        vote.justification = justification;
        return true;
    }

    function setCommit(
        DataTypes.Vote storage vote,
        bytes32 commitment
    ) internal returns (bool) {
        vote.commit = commitment;
        return true;
    }

    function setChoice(
        DataTypes.Vote storage vote,
        uint256 choice
    ) internal returns (bool) {
        vote.choice = choice;
        return true;
    }

    function setAccount(
        DataTypes.Vote storage vote,
        address account
    ) internal returns (bool) {
        vote.account = account;
        return true;
    }

    function setVoted(DataTypes.Vote storage vote) internal returns (bool) {
        vote.hasVoted = true;
        return true;
    }

    function setWeight(
        DataTypes.Vote storage vote,
        uint256 weight
    ) internal returns (bool) {
        vote.weight = weight;
        return true;
    }
}
