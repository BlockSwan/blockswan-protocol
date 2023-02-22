// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {SortitionSumTreeFactory} from "../../imports/kleros/contracts/SortitionSumTreeFactory.sol";

/**
 * @title Jury storage
 * @author Blockswan
 * @notice Contract used as storage of the jury contract.
 * @dev It defines the storage layout of the jury contract.
 */
contract JuryStorage {
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;
    using EnumerableSet for EnumerableSet.AddressSet;

    bytes32 internal constant TREE_KEY = "Blockswan/SortitionSumTrees";
    uint256 internal constant MAX_TREE_LEAVES = 2 ** 18;

    // The sortition sum trees for staked tokens
    SortitionSumTreeFactory.SortitionSumTrees _sortitionTree;

    // the juror mapping
    EnumerableSet.AddressSet internal _jurorSet; // The jurors.
    mapping(address => uint256) internal _jurorStakedToken; // The jurors stake mapping (address => uint256).
    mapping(address => uint256) internal _jurorFreezedToken; // The jurors freezed token mapping (address => uint256).
}
