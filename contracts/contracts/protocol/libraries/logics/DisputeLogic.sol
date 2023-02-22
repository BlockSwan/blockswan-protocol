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

/**
 * @title Dispute logic library
 * @author Blockswan
 * @notice Implements the logic for dispute specific functions
 */
library DisputeLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;

    using DisputeDataLogic for DataTypes.Dispute;
    using RoundLogic for DataTypes.Round;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

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
        newDispute.setProcecutorId(params.procecutorId);
        newDispute.setDefendantId(params.defendantId);
        newDispute.setTimestamps(
            params.delaysUntil[0],
            params.delaysUntil[1],
            params.delaysUntil[2],
            params.delaysUntil[3]
        );
        newDispute.setCreated();
        RoundLogic.addRound(
            newDispute.rounds,
            params.maxVotes,
            params.totalFeesForJurors,
            params.drawnJurors
        );
        return added;
    }

    function executeSendEvidence(
        mapping(uint256 => DataTypes.Dispute) storage disputes,
        InputTypes.ExecuteSendEvidenceInput memory params
    ) external returns (bool) {
        DataTypes.Dispute storage dispute = getDisputeById(
            params.disputeId,
            disputes
        );
        DataTypes.Round storage round = dispute.getLatestRound();
        require(dispute.isEvidencePeriod(), Errors.DS_EVIDENCE_PERIOD_OVER);
        round.submitEvidence(params.evidence);
        return true;
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
                procecutorId: dispute.procecutorId,
                defendantId: dispute.defendantId,
                ruling: dispute.ruling,
                timestamps: dispute.timestamps,
                state: dispute.state,
                rounds: RoundLogic.formatAll(dispute.rounds)
            })
        );
    }
}
