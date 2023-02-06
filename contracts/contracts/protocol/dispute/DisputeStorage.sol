// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {SortitionSumTreeFactory} from "../../imports/kleros/contracts/SortitionSumTreeFactory.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";

/**
 * @title DisputeStorage
 * @author Blockswan
 * @notice Contract used as storage of the dispute contract.
 * @dev It defines the storage layout of the dispute contract.
 */
contract DisputeStorage {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;
    using SortitionSumTreeFactory for SortitionSumTreeFactory.SortitionSumTrees;

    bytes32 public TREE_KEY = "Blockswan/SortitionSumTrees";
    uint256 internal constant MAX_TREE_LEAVES = 2 ** 18;

    // set of dispute Ids
    EnumerableSet.UintSet internal _disputeIds;
    // Map of the dispute id to the dispute data (disputeId => Dispute)
    mapping(uint256 => DataTypes.Dispute) internal _disputes;

    // The sortition sum trees.
    SortitionSumTreeFactory.SortitionSumTrees internal sortitionSumTrees;

    // set of jurors addresses
    EnumerableSet.AddressSet internal _jurorsAddresses;
    mapping(address => DataTypes.Juror) internal _jurors; // The jurors.
}
