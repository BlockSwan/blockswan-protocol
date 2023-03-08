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

    function setWinningChoice(
        DataTypes.Round storage round,
        uint256 winningChoice
    ) external returns (bool) {
        round.winningChoice = winningChoice;
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

    function setProcecutorId(
        DataTypes.Round storage round,
        uint256 procecutorId
    ) external returns (bool) {
        round.procecutorId = procecutorId;
        return true;
    }

    function setDefendantId(
        DataTypes.Round storage round,
        uint256 defendantId
    ) external returns (bool) {
        round.defendantId = defendantId;
        return true;
    }

    function isProcecutor(
        DataTypes.Round storage round,
        uint256 userId
    ) external view returns (bool) {
        return (round.procecutorId == userId);
    }

    function isDefendant(
        DataTypes.Round storage round,
        uint256 userId
    ) external view returns (bool) {
        return (round.defendantId == userId);
    }

    function isAppealed(
        DataTypes.Round storage round
    ) external view returns (bool) {
        return round.appealFeeRewards > 0;
    }

    function hasSubmittedEvidence(
        DataTypes.Round storage round,
        uint256 userId
    ) internal view returns (bool) {
        return round.evidenceSubmitters.contains(userId);
    }

    function getEvidencesCount(
        DataTypes.Round storage round
    ) internal view returns (uint256) {
        return round.evidences.length;
    }

    function setAppealedBy(
        DataTypes.Round storage round,
        uint256 appealedBy
    ) external returns (bool) {
        round.appealedBy = appealedBy;
        return true;
    }

    function isJuror(
        DataTypes.Round storage round,
        address account
    ) external view returns (bool) {
        for (uint256 i = 0; i < round.maxVotes; i++) {
            if (round.drawnJurors[i] == account) {
                return true;
            }
        }
        return false;
    }

    function hasRevealed(
        DataTypes.Round storage round,
        address account
    ) internal view returns (bool) {
        DataTypes.Vote memory vote = fetchVoteByAccount(round, account);
        return vote.hasVoted;
    }

    function hasCommited(
        DataTypes.Round storage round,
        address account
    ) internal view returns (bool) {
        DataTypes.Vote memory vote = fetchVoteByAccount(round, account);
        return vote.commit != 0x0;
    }

    function setTotalPenalties(
        DataTypes.Round storage round,
        uint256 penalties
    ) external returns (bool) {
        round.penalties = penalties;
        return true;
    }

    function incrementTotalVoted(
        DataTypes.Round storage round,
        uint256 weight
    ) external returns (bool) {
        round.totalVoted += weight;
        return true;
    }

    function incrementTotalCommited(
        DataTypes.Round storage round,
        uint256 weight
    ) external returns (bool) {
        round.totalCommited += weight;
        return true;
    }

    function areAllVotesCommitted(
        DataTypes.Round storage round
    ) external view returns (bool) {
        return round.totalCommited == round.maxVotes;
    }

    function areAllVotesRevealed(
        DataTypes.Round storage round
    ) external view returns (bool) {
        return round.totalVoted == round.maxVotes;
    }

    function getVoteByAccount(
        DataTypes.Round storage round,
        address account
    ) internal view returns (DataTypes.Vote storage) {
        uint256 i = 0;
        for (i = 0; i < round.votes.length; i++) {
            if (round.votes[i].account == account) {
                return round.votes[i];
            }
        }
        return round.votes[i];
    }

    function tryGetVoteByAccount(
        DataTypes.Round storage round,
        address account
    ) internal view returns (DataTypes.Vote storage, bool exists) {
        for (uint256 i = 0; i < round.votes.length; i++) {
            if (round.votes[i].account == account) {
                return (round.votes[i], true);
            }
        }
        return (round.votes[0], false);
    }

    function incrementChoiceCount(
        DataTypes.Round storage round,
        uint256 choice,
        uint256 weight
    ) external {
        round.counts[choice] += weight;
    }

    function fetchVoteByAccount(
        DataTypes.Round storage round,
        address account
    ) internal view returns (DataTypes.Vote memory) {
        uint256 length = round.votes.length;
        for (uint256 i = 0; i < length; i++) {
            if (round.votes[i].account == account) {
                return round.votes[i];
            }
        }
        return
            DataTypes.Vote(
                account,
                0x0,
                0,
                getJurorWeight(round, account),
                "",
                false
            );
    }

    function getWinningChoice(
        DataTypes.Round storage round
    ) internal view returns (uint256) {
        uint256 winningChoice = 0;
        uint256 winningCount = 0;
        for (uint256 i = 0; i < round.counts.length; i++) {
            if (round.counts[i] > winningCount) {
                winningChoice = i;
                winningCount = round.counts[i];
            }
        }
        return winningChoice;
    }

    function getAmountNotVoted(
        DataTypes.Round storage round
    ) public view returns (uint256) {
        return round.maxVotes - round.totalVoted;
    }

    function getMinRange(uint256 winningChoice) public pure returns (uint256) {
        return winningChoice == 0 ? 0 : winningChoice - 1;
    }

    function getMaxRange(uint256 winningChoice) public pure returns (uint256) {
        return winningChoice == 10 ? 10 : winningChoice + 1;
    }

    function getRanges(
        uint256 winningChoice
    ) public pure returns (uint256, uint256) {
        return (getMinRange(winningChoice), getMaxRange(winningChoice));
    }

    function setAppealFeeRewards(
        DataTypes.Round storage round,
        uint256 appealFeeRewards
    ) external returns (bool) {
        round.appealFeeRewards = appealFeeRewards;
        return true;
    }

    function setAppealFeeClaimed(
        DataTypes.Round storage round
    ) external returns (bool) {
        round.appealFeeRewards = 0;
        return true;
    }

    function close(DataTypes.Round storage round) external returns (bool) {
        round.closed = true;
        return true;
    }

    function isClosed(
        DataTypes.Round storage round
    ) external view returns (bool) {
        return round.closed;
    }

    function getAmountOfCorrectVote(
        DataTypes.Round storage round,
        uint256 winningChoice
    ) external view returns (uint256) {
        return round.counts[winningChoice];
    }

    function getAmountOfIncorrectVote(
        DataTypes.Round storage round,
        uint256 min,
        uint256 max
    ) external view returns (uint256 incorrectVotes) {
        incorrectVotes = round.maxVotes - round.totalVoted;
        for (uint256 i = 0; i < round.counts.length; i++) {
            if (!(i >= min && i <= max)) {
                incorrectVotes += round.counts[i];
            }
        }
    }

    function addJudgesClaimed(
        DataTypes.Round storage round,
        address account
    ) external returns (bool) {
        round.judgesClaimed.add(account);
        return true;
    }
}
