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
        newDispute.setOrderId(params.orderId);
        newDispute.setBuyerId(params.buyerId);
        newDispute.setSellerId(params.sellerId);
        RoundLogic.init(
            newDispute.rounds,
            params.maxVotes,
            params.totalFeesForJurors
        );
        return added;
    }

    function updateStakeBalance(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        address account,
        bytes32 treeKey,
        uint256 amount
    ) external {
        tree.set(treeKey, amount, bytes32(uint256(uint160(account))));
    }

    // @return A random number less than the _max
    function random(
        uint256 entropy,
        uint256 max
    ) internal pure returns (uint256) {
        require(max > 0, "max must be greater than 0");
        return uint256(keccak256(abi.encodePacked(entropy))) % max;
    }

    function randomlyDrawJuror(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        bytes32 treeKey,
        uint256 bound
    ) public view returns (address) {
        bytes32 entropy = blockhash(1);
        uint256 rng = random(uint256(entropy), bound);
        return address(uint160(uint256(tree.draw(treeKey, rng))));
    }

    function format(
        DataTypes.Dispute storage dispute,
        uint256 id
    ) external view returns (OutputTypes.DisputeOutput memory) {
        return (
            OutputTypes.DisputeOutput({
                disputeId: id,
                orderId: dispute.orderId,
                buyerId: dispute.buyerId,
                sellerId: dispute.sellerId,
                ruling: dispute.ruling,
                state: dispute.state,
                rounds: RoundLogic.formatAll(dispute.rounds)
            })
        );
    }
}
