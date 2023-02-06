// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../../imports/openzeppelin/contracts/EnumerableMap.sol";
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
 * @title Jury logic library
 * @author Blockswan
 * @notice Implements the logic for jury specific functions
 */

library JuryLogic {
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableMap for EnumerableMap.AddressToUintMap;
    using DisputeDataLogic for DataTypes.Dispute;
    using RoundLogic for DataTypes.Round;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

    function updateStakeBalance(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        address account,
        bytes32 treeKey,
        uint256 amount
    ) internal {
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

    function incrStake(
        address juror,
        uint256 amount,
        bytes32 treeKey,
        EnumerableMap.AddressToUintMap storage jurorStakedToken,
        EnumerableMap.AddressToUintMap storage jurorFreezedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) internal returns (bool) {
        uint256 newStake;
        (bool exisiting, uint256 currentStake) = jurorStakedToken.tryGet(juror);
        if (exisiting) {
            newStake = currentStake + amount;
        } else {
            newStake = amount;
            jurorFreezedToken.set(juror, 0);
        }
        jurorStakedToken.set(juror, newStake);
        updateStakeBalance(tree, juror, treeKey, newStake);
        return true;
    }

    function executeDepositStake(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        EnumerableMap.AddressToUintMap storage jurorStakedToken,
        EnumerableMap.AddressToUintMap storage jurorFreezedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        if (!(jurorSet.contains(juror))) {
            jurorSet.add(juror);
        }
        incrStake(
            juror,
            amount,
            treeKey,
            jurorStakedToken,
            jurorFreezedToken,
            tree
        );
        return true;
    }

    function executeWithdrawStake(
        uint256 amount,
        address juror,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        EnumerableMap.AddressToUintMap storage jurorStakedToken,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        uint256 newStake = jurorStakedToken.get(juror) - amount;
        jurorStakedToken.set(juror, newStake);
        updateStakeBalance(tree, juror, treeKey, newStake);
        if (newStake == 0) {
            jurorSet.remove(juror);
        }
        return true;
    }

    function readJuror(
        address juror,
        EnumerableMap.AddressToUintMap storage jurorStakedToken,
        EnumerableMap.AddressToUintMap storage jurorFreezedToken
    ) external view returns (DataTypes.Juror memory) {
        return (
            DataTypes.Juror({
                stakedTokens: jurorStakedToken.get(juror),
                freezedTokens: jurorFreezedToken.get(juror)
            })
        );
    }
}
