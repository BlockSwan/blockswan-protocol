// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";

/**
 * @title Round Data logic library
 * @author Blockswan
 * @notice Implements the logic for round data specific functions
 */

library RoundDataLogic {
    using Counters for Counters.Counter;
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;

    function setTokensAtStakePerJuror(
        DataTypes.Round storage round,
        uint256 tokensAtStakePerJuror
    ) external returns (bool) {
        round.tokensAtStakePerJuror = tokensAtStakePerJuror;
        return true;
    }

    function setTotalFeesForJurors(
        DataTypes.Round storage round,
        uint256 totalFeesForJurors
    ) external returns (bool) {
        round.totalFeesForJurors = totalFeesForJurors;
        return true;
    }

    function setAppealFees(
        DataTypes.Round storage round,
        uint256 appealFeeRewards
    ) external returns (bool) {
        round.appealFeeRewards = appealFeeRewards;
        return true;
    }

    function setMaxVotes(
        DataTypes.Round storage round,
        uint256 maxVotes
    ) external returns (bool) {
        round.maxVotes = maxVotes;
        return true;
    }

    function setDrawnJurors(
        DataTypes.Round storage round,
        address[] memory drawnJurors
    ) external returns (bool) {
        for (uint256 i = 0; i < drawnJurors.length; i++) {
            round.drawnJurors.push(drawnJurors[i]);
        }
        console.log("round drawn jurors lengt: %d", round.drawnJurors.length);
        return true;
    }

    function getJurorWeight(
        DataTypes.Round storage round,
        address juror
    ) internal view returns (uint256 weight) {
        for (uint256 i = 0; i < round.drawnJurors.length; i++) {
            if (round.drawnJurors[i] == juror) {
                weight += 1;
            }
        }
    }

    function addEvidence(
        DataTypes.Round storage round,
        DataTypes.Evidence memory evidence
    ) external returns (bool) {
        round.evidences.push(evidence);
        round.evidenceSubmitters.add(evidence.userId);
        return true;
    }

    function hasSubmittedEvidence(
        DataTypes.Round storage round,
        uint256 userId
    ) internal view returns (bool) {
        return round.evidenceSubmitters.contains(userId);
    }
}
