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

/**
 * @title JuryData logic library
 * @author Blockswan
 * @notice Implements the logic for jury data specific functions
 */
library JuryDataLogic {
    using EnumerableSet for EnumerableSet.AddressSet;
    using PercentageMath for uint256;
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

    function draw(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        bytes32 treeKey,
        uint256 rng
    ) public view returns (address) {
        return address(uint160(uint256(tree.draw(treeKey, rng))));
    }

    function total(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        bytes32 treeKey
    ) external view returns (uint256) {
        return tree.total(treeKey);
    }

    function updateTree(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        address account,
        bytes32 treeKey,
        uint256 amount
    ) internal {
        tree.set(treeKey, amount, bytes32(uint256(uint160(account))));
    }

    function incrementStake(
        DataTypes.Juror storage juror,
        address account,
        uint256 amount,
        bytes32 treeKey,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) internal returns (bool) {
        juror.stakedTokens += amount;
        updateTree(tree, account, treeKey, juror.stakedTokens);

        return true;
    }

    function decrementStake(
        DataTypes.Juror storage juror,
        address account,
        uint256 amount,
        bytes32 treeKey,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) internal returns (bool) {
        juror.stakedTokens -= amount;
        updateTree(tree, account, treeKey, juror.stakedTokens);

        return true;
    }

    function incremementFreeze(
        DataTypes.Juror storage juror,
        uint256 amount
    ) internal returns (bool) {
        juror.freezedTokens += amount;
        return true;
    }

    function decrementFreeze(
        DataTypes.Juror storage juror,
        uint256 amount
    ) internal returns (bool) {
        juror.freezedTokens -= amount;
        return true;
    }
}
