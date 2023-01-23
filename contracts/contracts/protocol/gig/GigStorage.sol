// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";

/**
 * @title GigStorage
 * @author Blockswan
 * @notice Contract used as storage of the gig contract.
 * @dev It defines the storage layout of the gig contract.
 */
contract GigStorage {
    using EnumerableSet for EnumerableSet.UintSet;

    // set of gig Ids
    EnumerableSet.UintSet internal _gigIds;

    // Map of the gig id to the gig data (gigId => Gig)
    mapping(uint256 => DataTypes.Gig) internal _gigs;
}
