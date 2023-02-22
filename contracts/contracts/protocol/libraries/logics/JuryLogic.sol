// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {Errors} from "../helpers/Errors.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";
import {SortitionSumTreeFactory} from "../../../imports/kleros/contracts/SortitionSumTreeFactory.sol";
import {JuryDataLogic} from "./JuryDataLogic.sol";

/**
 * @title Jury logic library
 * @author Blockswan
 * @notice Implements the logic for jury specific functions
 */

library JuryLogic {
    using EnumerableSet for EnumerableSet.AddressSet;
    using PercentageMath for uint256;
    using JuryDataLogic for address;
    using JuryDataLogic for SortitionSumTreeFactory.SortitionSumTrees;

    // @return A random number less than the _max
    function random(
        uint256 entropy,
        uint256 max
    ) internal pure returns (uint256) {
        require(max > 0, "max must be greater than 0");
        return uint256(keccak256(abi.encodePacked(entropy))) % max;
    }

    function createEntropy(
        uint256 disputeId,
        uint256 roundId,
        uint256 jurorNumber
    ) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        disputeId,
                        roundId,
                        jurorNumber,
                        blockhash(block.number)
                    )
                )
            );
    }

    function randomlyDrawJuror(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        bytes32 treeKey,
        uint256 disputeId,
        uint256 roundId,
        uint256 intHash
    ) public view returns (address) {
        uint256 entropy = createEntropy(disputeId, roundId, intHash);
        uint256 rng = random(entropy, tree.total(treeKey));
        return tree.draw(treeKey, rng);
    }

    function executeDepositStake(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        mapping(address => uint256) storage jurorStakedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        if (!(jurorSet.contains(juror))) {
            jurorSet.add(juror);
        }
        juror.incrementStake(amount, treeKey, jurorStakedToken, tree);
        return true;
    }

    function executeWithdrawStake(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        mapping(address => uint256) storage jurorStakedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        juror.decrementStake(amount, treeKey, jurorStakedToken, tree);
        if (jurorStakedToken[juror] == 0) {
            jurorSet.remove(juror);
        }
        return true;
    }

    function executeFreezeTokens(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        mapping(address => uint256) storage jurorStakedToken,
        mapping(address => uint256) storage jurorFreezedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        console.log("juror: %s", juror);
        console.log("stake: %d", jurorStakedToken[juror]);
        console.log("amount: %d", amount);
        juror.decrementStake(amount, treeKey, jurorStakedToken, tree);
        console.log("newStake: %d", jurorStakedToken[juror]);
        console.log("freezedStake: %d", jurorFreezedToken[juror]);
        // uint256 newFreeze = jurorFreezedToken.get(juror) + amount;
        //console.log("newFreeze: %d", newFreeze);
        //console.log("get(juror): %d", jurorFreezedToken.get(juror));

        //       jurorFreezedToken.set(juror, newFreeze);

        return true;
    }

    function executeUnfreezeTokens(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        mapping(address => uint256) storage jurorStakedToken,
        mapping(address => uint256) storage jurorFreezedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        uint256 newFreeze = jurorFreezedToken[juror] - amount;
        jurorFreezedToken[juror] = newFreeze;
        juror.incrementStake(amount, treeKey, jurorStakedToken, tree);
        return true;
    }

    function calcTokenToFreeze(
        uint256 minStake,
        uint256 alpha
    ) public pure returns (uint256) {
        return PercentageMath.percentMul(minStake, alpha);
    }

    function readJuror(
        address juror,
        mapping(address => uint256) storage jurorStakedToken,
        mapping(address => uint256) storage jurorFreezedToken
    ) external view returns (DataTypes.Juror memory) {
        return (
            DataTypes.Juror({
                stakedTokens: jurorStakedToken[juror],
                freezedTokens: jurorFreezedToken[juror]
            })
        );
    }
}
