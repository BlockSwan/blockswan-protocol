// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {Errors} from "../helpers/Errors.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";
import {RoundLogic} from "./RoundLogic.sol";
import {DisputeDataLogic} from "./DisputeDataLogic.sol";
import {SortitionSumTreeFactory} from "../../../imports/kleros/contracts/SortitionSumTreeFactory.sol";
import {Choices} from "../helpers/Choices.sol";
import {RoundDataLogic} from "./RoundDataLogic.sol";

/**
 * @title Dispute logic library
 * @author Blockswan
 * @notice Implements the logic for dispute specific functions
 */
library DisputeLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;
    using DisputeDataLogic for DataTypes.Dispute;
    using RoundDataLogic for DataTypes.Round;
    using RoundLogic for *;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

    modifier onlyIfTimeElapsed(uint256 timestamp) {
        require(block.timestamp >= timestamp, Errors.DS_TIME_NOT_PASSED);
        _;
    }

    modifier onlyIfState(
        DataTypes.Dispute storage dispute,
        DataTypes.DisputeState state
    ) {
        require(dispute.state == state, Errors.DS_INVALID_STATE);
        _;
    }

    modifier onlyIfAtLeastOneCommit(DataTypes.Dispute storage dispute) {
        DataTypes.Round storage round = dispute.getLatestRound();
        require(
            round.totalCommited > 0,
            Errors.DS_NO_COMMITMENTS_MADE_FOR_ROUND
        );
        _;
    }

    modifier onlyIfAtLeastOneVote(DataTypes.Dispute storage dispute) {
        DataTypes.Round storage round = dispute.getLatestRound();
        require(round.totalVoted > 0, Errors.DS_NO_VOTES_MADE_FOR_ROUND);
        _;
    }

    function getDisputeById(
        uint256 disputeId,
        mapping(uint256 => DataTypes.Dispute) storage disputes
    ) public view returns (DataTypes.Dispute storage) {
        return disputes[disputeId];
    }

    function executeCreateDispute(
        EnumerableSet.UintSet storage disputeIds,
        mapping(uint256 => DataTypes.Dispute) storage disputes,
        InputTypes.ExecuteCreateDisputeInput memory params
    ) external returns (bool) {
        bool added = disputeIds.add(params.newId);
        DataTypes.Dispute storage newDispute = getDisputeById(
            params.newId,
            disputes
        );
        newDispute.addTimestamp(params.evidenceUntil);
        newDispute.rounds.addRound(
            InputTypes.AddRoundInput({
                maxVotes: params.maxVotes,
                totalFeesForJurors: params.totalFeesForJurors,
                tokensAtStakePerJuror: params.tokensAtStakePerJuror,
                procecutorId: params.procecutorId,
                defendantId: params.defendantId,
                drawnJurors: params.drawnJurors
            })
        );
        newDispute.setCreated();
        return added;
    }

    function executeNextRound(
        DataTypes.Dispute storage dispute,
        InputTypes.ExecuteNextRoundInput memory params
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.EXECUTION)
        returns (bool)
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        require(round.isAppealed(), Errors.ROUND_NOT_APPEALED);
        dispute.setState(DataTypes.DisputeState.EVIDENCE);
        dispute.deleteTimestamps();
        dispute.addTimestamp(params.evidenceUntil);
        dispute.rounds.addRound(
            InputTypes.AddRoundInput({
                maxVotes: params.maxVotes,
                totalFeesForJurors: params.totalFeesForJurors,
                tokensAtStakePerJuror: params.tokensAtStakePerJuror,
                procecutorId: round.procecutorId,
                defendantId: round.defendantId,
                drawnJurors: params.drawnJurors
            })
        );
        return true;
    }

    modifier onlyNotRuled(DataTypes.Dispute storage dispute) {
        require(dispute.ruledAt == 0, Errors.DS_DISPUTE_ALREADY_RULED);
        _;
    }

    function executeSendEvidence(
        DataTypes.Dispute storage dispute,
        DataTypes.Evidence memory evidence
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.EVIDENCE)
        returns (bool)
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        round.submitEvidence(evidence);
        return true;
    }

    function executeClaimRuling(
        DataTypes.Dispute storage dispute
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.EXECUTION)
        onlyNotRuled(dispute)
        returns (
            uint256 ruling,
            uint256 orderId,
            uint256 procecutorId,
            uint256 defendantId
        )
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        (ruling, procecutorId, defendantId) = round.claimRuling();
        orderId = dispute.orderId;
        dispute.setRuling(ruling);
    }

    function calcDisputeDelaysFromBlock(
        uint256 evidenceUntil,
        uint256 commitUntil,
        uint256 voteUntil,
        uint256 appealUntil
    ) public view returns (uint256[] memory delays) {
        uint256 blockTimestamp = block.timestamp;
        delays = new uint256[](4);
        delays[0] = blockTimestamp + evidenceUntil;
        delays[1] = delays[0] + commitUntil;
        delays[2] = delays[1] + voteUntil;
        delays[3] = delays[2] + appealUntil;
    }

    function format(
        DataTypes.Dispute storage dispute,
        uint256 id
    ) external view returns (OutputTypes.DisputeOutput memory) {
        return (
            OutputTypes.DisputeOutput({
                createdAt: dispute.createdAt,
                disputeId: id,
                orderId: dispute.orderId,
                ruling: dispute.ruling,
                ruledAt: dispute.ruledAt,
                timestamps: dispute.timestamps,
                state: dispute.state,
                rounds: RoundLogic.formatAll(dispute.rounds)
            })
        );
    }

    function setEvidencePhase(DataTypes.Dispute storage dispute) external {}

    function goCommitState(
        DataTypes.Dispute storage dispute,
        DataTypes.DelayTimestamp memory delayTimestamp
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.EVIDENCE)
        onlyIfTimeElapsed(dispute.timestamps[0])
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        if (round.areEvidencesSubmitted()) {
            dispute.addTimestamp(delayTimestamp.commit);
            dispute.setState(DataTypes.DisputeState.COMMIT);
        } else {
            dispute.addTimestamp(delayTimestamp.commit);
            dispute.addTimestamp(delayTimestamp.vote);
            dispute.addTimestamp(delayTimestamp.appeal);
            dispute.setState(DataTypes.DisputeState.APPEAL);
            round.setWinningChoice(Choices.ONE_HUNDRED_PERCENT);
        }
    }

    function goVoteState(
        DataTypes.Dispute storage dispute,
        uint256 voteDelay
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.COMMIT)
        onlyIfTimeElapsed(dispute.timestamps[1])
        onlyIfAtLeastOneCommit(dispute)
    {
        dispute.addTimestamp(voteDelay);
        dispute.setState(DataTypes.DisputeState.VOTE);
    }

    function goAppealState(
        DataTypes.Dispute storage dispute,
        uint256 appealDelay
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.VOTE)
        onlyIfTimeElapsed(dispute.timestamps[2])
        onlyIfAtLeastOneVote(dispute)
    {
        dispute.setState(DataTypes.DisputeState.APPEAL);
        dispute.addTimestamp(appealDelay);
        DataTypes.Round storage round = dispute.getLatestRound();
        round.setWinningChoice(round.getWinningChoice());
    }

    function goExecutionState(
        DataTypes.Dispute storage dispute
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.APPEAL)
        onlyIfTimeElapsed(dispute.timestamps[3])
    {
        dispute.setState(DataTypes.DisputeState.EXECUTION);
        DataTypes.Round storage round = dispute.getLatestRound();
        uint256 winningChoice = round.winningChoice;
        (uint256 min, uint256 max) = RoundDataLogic.getRanges(winningChoice);
        round.setTotalPenalties(round.calcPenaltiesAmount(min, max));
        round.close();
    }

    //function goNextRound() external {}

    function executeCommitVote(
        DataTypes.Dispute storage dispute,
        uint256 choice,
        string memory salt,
        address account
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.COMMIT)
        returns (bool)
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        round.commitVote(account, choice, salt);
        return true;
    }

    function executeRevealVote(
        DataTypes.Dispute storage dispute,
        uint256 choice,
        string memory salt,
        string memory justification,
        address account
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.VOTE)
        returns (bool)
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        round.revealVote(account, choice, salt, justification);
        return true;
    }

    function executeAppeal(
        DataTypes.Dispute storage dispute,
        uint256 appealFeeRewards,
        uint256 procecutorId
    )
        external
        onlyIfState(dispute, DataTypes.DisputeState.APPEAL)
        returns (bool)
    {
        DataTypes.Round storage round = dispute.getLatestRound();
        round.appeal(appealFeeRewards, procecutorId);
        return true;
    }

    function executeClaimAsJudge(
        DataTypes.Dispute storage dispute,
        address account,
        uint256 roundId
    ) external returns (OutputTypes.ExecuteClaimAsJudgeOutput memory params) {
        DataTypes.Round storage round = dispute.getRound(roundId);
        uint256 winningChoice = round.winningChoice;
        uint256 amountOfCorrectVotes = round.getAmountOfCorrectVote(
            winningChoice
        );

        (uint256 min, uint256 max) = RoundDataLogic.getRanges(winningChoice);

        params = round.claimAsJudge(
            InputTypes.ClaimAsJudgeInput({
                account: account,
                min: min,
                max: max,
                winningChoice: winningChoice,
                amountOfCorrectVotes: amountOfCorrectVotes,
                tokensAtStakePerJuror: round.tokensAtStakePerJuror,
                totalFeesForJurors: round.totalFeesForJurors,
                penalties: round.penalties
            })
        );
    }

    function executeClaimAppealFeeRewards(
        DataTypes.Dispute storage dispute,
        uint256 callerId,
        uint256 roundId
    ) external returns (uint256) {
        require(roundId > 0, Errors.ROUND_ID_INVALID);
        (uint256 appealFeeAmount, bool isClaimable) = RoundLogic
            .claimAppealFeeRewards(
                dispute.getRound(roundId),
                dispute.getRound(roundId - 1),
                callerId
            );
        require(isClaimable, Errors.CLAIM_NOT_ALLOWED);
        return appealFeeAmount;
    }

    function calcAppealFees(
        DataTypes.Dispute storage dispute,
        uint256 feePerJuror
    ) public view returns (uint256) {
        DataTypes.Round storage round = dispute.getLatestRound();
        uint256 appealFee = feePerJuror * round.maxVotes * 2;
        return PercentageMath.percentMul(appealFee, 0.1e4);
    }
}
