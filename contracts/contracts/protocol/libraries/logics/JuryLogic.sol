// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

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
    using JuryDataLogic for DataTypes.Juror;

    // @return A random number less than the _max
    function random(
        uint256 entropy,
        uint256 max
    ) internal pure returns (uint256) {
        require(max > 0, "max must be greater than 0");
        return uint256(keccak256(abi.encodePacked(entropy))) % max;
    }

    function getJurorByAddress(
        address account,
        mapping(address => DataTypes.Juror) storage jurors
    ) internal view returns (DataTypes.Juror storage) {
        return jurors[account];
    }

    function createEntropy(uint256 intHash) internal view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        blockhash(block.number),
                        intHash
                    )
                )
            );
    }

    function randomlyDrawJuror(
        SortitionSumTreeFactory.SortitionSumTrees storage tree,
        bytes32 treeKey,
        uint256 intHash
    ) public view returns (address drawnJuror) {
        uint256 entropy = createEntropy(intHash);
        uint256 rng = random(entropy, tree.total(treeKey));
        drawnJuror = tree.draw(treeKey, rng);
    }

    function executeDepositStake(
        uint256 amount,
        address account,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        mapping(address => DataTypes.Juror) storage jurors,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        if (!(jurorSet.contains(account))) {
            jurorSet.add(account);
        }
        DataTypes.Juror storage juror = getJurorByAddress(account, jurors);
        juror.incrementStake(account, amount, treeKey, tree);
        return true;
    }

    function executeWithdrawStake(
        uint256 amount,
        address account,
        bytes32 treeKey,
        EnumerableSet.AddressSet storage jurorSet,
        mapping(address => DataTypes.Juror) storage jurors,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        DataTypes.Juror storage juror = getJurorByAddress(account, jurors);
        juror.decrementStake(account, amount, treeKey, tree);
        if (juror.stakedTokens == 0) {
            jurorSet.remove(account);
        }
        return true;
    }

    function executeFreezeTokens(
        uint256 amount,
        address[] memory accounts,
        bytes32 treeKey,
        mapping(address => DataTypes.Juror) storage jurors,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        for (uint256 i = 0; i < accounts.length; i++) {
            address account = accounts[i];

            DataTypes.Juror storage juror = getJurorByAddress(account, jurors);
            uint256 newFreeze = juror.freezedTokens + amount;
            juror.freezedTokens = newFreeze;
            juror.decrementStake(account, amount, treeKey, tree);
        }
        return true;
    }

    function executeUnfreezeTokens(
        uint256 amount,
        address account,
        bytes32 treeKey,
        mapping(address => DataTypes.Juror) storage jurors,
        SortitionSumTreeFactory.SortitionSumTrees storage tree
    ) external returns (bool) {
        DataTypes.Juror storage juror = getJurorByAddress(account, jurors);
        uint256 newFreeze = juror.freezedTokens - amount;
        juror.freezedTokens = newFreeze;
        juror.incrementStake(account, amount, treeKey, tree);
        return true;
    }

    function calcTokenToFreeze(
        uint256 minStake,
        uint256 alpha
    ) public pure returns (uint256) {
        return PercentageMath.percentMul(minStake, alpha);
    }

    function readJuror(
        address account,
        mapping(address => DataTypes.Juror) storage jurors
    ) public view returns (DataTypes.Juror memory juror) {
        juror = jurors[account];
    }
}
