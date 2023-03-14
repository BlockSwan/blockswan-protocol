// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";

/**
 * @title DisputeStorage
 * @author Blockswan
 * @notice Contract used as storage of the dispute contract.
 * @dev It defines the storage layout of the dispute contract.
 */
contract DisputeStorage {
    using EnumerableSet for EnumerableSet.UintSet;

    // set of dispute Ids
    EnumerableSet.UintSet internal _disputeIds;
    // Map of the dispute id to the dispute data (disputeId => Dispute)
    mapping(uint256 => DataTypes.Dispute) internal _disputes;
}
