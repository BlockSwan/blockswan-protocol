// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";

import {Errors} from "../helpers/Errors.sol";

import {GigDataLogic} from "./GigDataLogic.sol";

/**
 * @title Gig logic library
 * @author Blockswan
 * @notice Implements the logic for gig specific functions
 */
library GigLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using GigDataLogic for DataTypes.Gig;
    using Counters for Counters.Counter;

    function getGigById(
        uint256 gigId,
        mapping(uint256 => DataTypes.Gig) storage gigs
    ) public view returns (DataTypes.Gig storage) {
        return gigs[gigId];
    }

    function executeCreateGig(
        EnumerableSet.UintSet storage gigIds,
        mapping(uint256 => DataTypes.Gig) storage gigs,
        InputTypes.CreateGigInput memory params
    ) external returns (bool) {
        bool added = gigIds.add(params.newId);
        DataTypes.Gig storage newGig = getGigById(params.newId, gigs);
        newGig.setCreatedAt();
        newGig.updateMetadata(params.metadata);
        newGig.updatePackages(params.packages);
        require(added, Errors.GIG_ID_ALREADY_EXISING);
        return true;
    }

    function executeCreateOrder(
        DataTypes.Gig storage gig,
        uint256 orderId
    ) external returns (bool) {
        gig.addOrder(orderId);
        return true;
    }

    function format(
        DataTypes.Gig storage gig,
        uint256 id
    ) external view returns (OutputTypes.GigOutput memory) {
        return (
            OutputTypes.GigOutput({
                gigId: id,
                metadata: gig.metadata,
                createdAt: gig.createdAt,
                successSell: gig.successSell.current(),
                failedSell: gig.failedSell.current(),
                reviewIds: gig.reviewIds.values(),
                orderIds: gig.orderIds.values(),
                packages: [gig.packages[0], gig.packages[1], gig.packages[2]]
            })
        );
    }
}
