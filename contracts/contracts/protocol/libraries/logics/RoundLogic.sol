// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {RoleKeys} from "../helpers/RoleKeys.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {Errors} from "../helpers/Errors.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";
import {RoundDataLogic} from "./RoundDataLogic.sol";
import {VoteLogic} from "./VoteLogic.sol";

import {IJury} from "../../../interfaces/IJury.sol";

/**
 * @title Round logic library
 * @author Blockswan
 * @notice Implements the logic for round specific functions
 */
library RoundLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;
    using RoundDataLogic for DataTypes.Round;
    using VoteLogic for DataTypes.Vote;

    modifier onlyJuror(DataTypes.Round storage round, address account) {
        require(round.isJuror(account), Errors.RD_ACCOUNT_NOT_DRAWN_JUROR);
        _;
    }

    modifier onlyClosedRound(DataTypes.Round storage round) {
        require(round.isClosed(), Errors.ROUND_NOT_CLOSED);
        _;
    }

    modifier onlyAppealedRound(DataTypes.Round storage round) {
        require(round.isAppealed(), Errors.ROUND_NOT_APPEALED);
        _;
    }

    modifier onlyNotAppealedRound(DataTypes.Round storage round) {
        require(!round.isAppealed(), Errors.ROUND_IS_APPEALED);
        _;
    }

    modifier onlyNotCommited(DataTypes.Round storage round, address account) {
        require(
            !round.hasCommited(account),
            Errors.ROUND_VOTE_ALREADY_COMMITED
        );
        _;
    }

    modifier onlyNotSumbittedEvidence(
        DataTypes.Round storage round,
        uint256 userId
    ) {
        require(
            !round.hasSubmittedEvidence(userId),
            Errors.ROUND_EVIDENCE_ALREADY_SUBMITTED
        );
        _;
    }

    modifier onlyCommited(DataTypes.Round storage round, address account) {
        require(round.hasCommited(account), Errors.ROUND_VOTE_NOT_COMMITED);
        _;
    }

    modifier onlyNotRevealed(DataTypes.Round storage round, address account) {
        require(
            !round.hasRevealed(account),
            Errors.ROUND_VOTE_ALREADY_REVEALED
        );
        _;
    }

    modifier onlyCorrectRole(bytes32 role) {
        require(
            role == RoleKeys.BUYER_ROLE || role == RoleKeys.SELLER_ROLE,
            Errors.DS_EVIDENCE_ROLE_NOT_VALID
        );
        _;
    }

    modifier onlyRoundActor(DataTypes.Round storage round, uint256 userId) {
        require(
            round.isProcecutor(userId) || round.isDefendant(userId),
            Errors.DS_EVIDENCE_SENDER_NOT_PARTY
        );
        _;
    }

    // add a round
    function addRound(
        DataTypes.Round[] storage rounds,
        InputTypes.AddRoundInput memory params
    ) external returns (bool) {
        rounds.push();
        DataTypes.Round storage newRound = rounds[rounds.length - 1];
        newRound.setProcecutorId(params.procecutorId);
        newRound.setDefendantId(params.defendantId);
        newRound.setMaxVotes(params.maxVotes);
        newRound.setTotalFeesForJurors(params.totalFeesForJurors);
        newRound.setDrawnJurors(params.drawnJurors);
        newRound.setTokensAtStakePerJuror(params.tokensAtStakePerJuror);
        return true;
    }

    function submitEvidence(
        DataTypes.Round storage round,
        DataTypes.Evidence memory evidence
    )
        external
        onlyRoundActor(round, evidence.userId)
        onlyNotSumbittedEvidence(round, evidence.userId)
        onlyCorrectRole(evidence.role)
        returns (bool)
    {
        if (round.getEvidencesCount() == 1) {
            require(
                evidence.role != round.evidences[0].role,
                Errors.DS_EVIDENCE_ROLE_NOT_VALID
            );
        }
        round.addEvidence(evidence);
        return true;
    }

    function areEvidencesSubmitted(
        DataTypes.Round storage round
    ) external view returns (bool) {
        return round.getEvidencesCount() == 2;
    }

    function commitVote(
        DataTypes.Round storage round,
        address account,
        uint256 choice,
        string memory salt
    )
        external
        onlyJuror(round, account)
        onlyNotCommited(round, account)
        returns (bool)
    {
        uint256 weight = round.getJurorWeight(account);
        DataTypes.Vote memory newVote = VoteLogic.commit(
            account,
            choice,
            weight,
            salt
        );
        round.votes.push(newVote);
        round.incrementTotalCommited(weight);
        return true;
    }

    function revealVote(
        DataTypes.Round storage round,
        address account,
        uint256 choice,
        string memory salt,
        string memory justification
    )
        external
        onlyJuror(round, account)
        onlyCommited(round, account)
        onlyNotRevealed(round, account)
    {
        uint256 weight = round.getJurorWeight(account);
        round.incrementTotalVoted(weight);
        round.incrementChoiceCount(choice, weight);
        {
            (DataTypes.Vote storage vote, bool exists) = round
                .tryGetVoteByAccount(account);
            require(exists, Errors.RD_VOTE_NOT_FOUND);
            vote.reveal(choice, salt, justification);
        }
    }

    function appeal(
        DataTypes.Round storage round,
        uint256 appealFeeRewards,
        uint256 procecutorId
    ) external onlyRoundActor(round, procecutorId) {
        round.setAppealFeeRewards(appealFeeRewards);
        round.setAppealedBy(procecutorId);
    }

    function claimAsJudge(
        DataTypes.Round storage round,
        InputTypes.ClaimAsJudgeInput memory params
    )
        external
        onlyJuror(round, params.account)
        onlyClosedRound(round)
        returns (OutputTypes.ExecuteClaimAsJudgeOutput memory output)
    {
        DataTypes.Vote memory vote = round.fetchVoteByAccount(params.account);
        {
            output = OutputTypes.ExecuteClaimAsJudgeOutput({
                isVoteCorrect: vote.isVoteCorrect(params.winningChoice),
                isVoteInRange: vote.isBetweenRange(params.min, params.max),
                amountFromDisputeFees: calcEarnedFromDisputeFees(
                    vote.weight,
                    params.amountOfCorrectVotes,
                    params.totalFeesForJurors
                ),
                amountFromJurorsTokensAtStake: calcEarnedFromDisputeFees(
                    vote.weight,
                    params.amountOfCorrectVotes,
                    params.penalties
                ),
                tokensAtStakePerJuror: params.tokensAtStakePerJuror
            });
        }
        round.addJudgesClaimed(params.account);
    }

    function claimAppealFeeRewards(
        DataTypes.Round storage round,
        DataTypes.Round storage previousRound,
        uint256 userId
    )
        external
        onlyRoundActor(previousRound, userId)
        onlyAppealedRound(previousRound)
        returns (uint256 appealFeeRewards, bool isClaimable)
    {
        appealFeeRewards = previousRound.appealFeeRewards;
        isClaimable = checkIfClaimAppealIsPossible(
            round.winningChoice,
            previousRound.winningChoice,
            round.isProcecutor(userId)
        );
        previousRound.setAppealFeeClaimed();
    }

    function claimRuling(
        DataTypes.Round storage round
    )
        external
        view
        onlyNotAppealedRound(round)
        returns (uint256 ruling, uint256 procecutorId, uint256 defendantId)
    {
        ruling = round.winningChoice;
        procecutorId = round.procecutorId;
        defendantId = round.defendantId;
    }

    function checkIfClaimAppealIsPossible(
        uint256 winningChoice,
        uint256 previousWinningChoice,
        bool calledByProcecutor
    ) internal pure returns (bool) {
        if (calledByProcecutor) {
            return winningChoice > previousWinningChoice;
        } else {
            return winningChoice <= previousWinningChoice;
        }
    }

    function calcEarnedFromDisputeFees(
        uint256 jurorWeight,
        uint256 weightOfCorrectVotes,
        uint256 disputePrice
    ) public pure returns (uint256) {
        uint res = (disputePrice * jurorWeight) / weightOfCorrectVotes;
        return res;
    }

    function calcPenaltiesAmount(
        DataTypes.Round storage round,
        uint256 min,
        uint256 max
    ) external view returns (uint256 penaltiesAmount) {
        uint256 amountOfIncorrectVotes = round.getAmountOfIncorrectVote(
            min,
            max
        );
        penaltiesAmount = amountOfIncorrectVotes * round.tokensAtStakePerJuror;
    }

    function format(
        DataTypes.Round storage round,
        uint256 id
    ) public view returns (OutputTypes.RoundOutput memory) {
        return (
            OutputTypes.RoundOutput({
                roundId: id,
                procecutorId: round.procecutorId,
                defendantId: round.defendantId,
                appealFeeRewards: round.appealFeeRewards,
                tokensAtStakePerJuror: round.tokensAtStakePerJuror,
                totalFeesForJurors: round.totalFeesForJurors,
                maxVotes: round.maxVotes,
                penalties: round.penalties,
                winningChoice: round.winningChoice,
                totalRepartitions: round.totalRepartitions,
                totalVoted: round.totalVoted,
                totalCommited: round.totalCommited,
                counts: round.counts,
                evidenceSubmitters: round.evidenceSubmitters.values(),
                appealedBy: round.appealedBy,
                votes: round.votes,
                evidences: round.evidences,
                drawnJurors: round.drawnJurors,
                judgesClaimed: round.judgesClaimed.values(),
                closed: round.closed
            })
        );
    }

    function formatAll(
        DataTypes.Round[] storage rounds
    ) external view returns (OutputTypes.RoundOutput[] memory) {
        OutputTypes.RoundOutput[] memory output = new OutputTypes.RoundOutput[](
            rounds.length
        );
        for (uint256 i = 0; i < rounds.length; i++) {
            output[i] = format(rounds[i], i);
        }
        return output;
    }
}
