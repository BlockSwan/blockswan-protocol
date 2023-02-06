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
import {RoundDataLogic} from "./RoundDataLogic.sol";

/**
 * @title Round logic library
 * @author Blockswan
 * @notice Implements the logic for round specific functions
 */
library RoundLogic {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;
    using Counters for Counters.Counter;
    using PercentageMath for uint256;
    using RoundDataLogic for DataTypes.Round;

    function init(
        DataTypes.Round[] storage rounds,
        uint256 maxVotes,
        uint256 totalFeesForJurors
    ) external returns (bool) {
        rounds[0].setMaxVotes(maxVotes);
        rounds[0].setTotalFeesForJurors(totalFeesForJurors);
        return true;
    }

    function format(
        DataTypes.Round storage round,
        uint256 id
    ) public view returns (OutputTypes.RoundOutput memory) {
        return (
            OutputTypes.RoundOutput({
                roundId: id,
                tokensAtStakePerJuror: round.tokensAtStakePerJuror,
                totalFeesForJurors: round.totalFeesForJurors,
                maxVotes: round.maxVotes,
                penalties: round.penalties,
                winningChoice: round.winningChoice,
                totalRepartitions: round.totalRepartitions.current(),
                totalVoted: round.totalVoted.current(),
                totalCommited: round.totalCommited.current(),
                counts: round.counts.values(),
                votes: round.votes,
                evidences: round.evidences,
                drawnJurors: round.drawnJurors.values()
            })
        );
    }

    function formatAll(
        DataTypes.Round[] storage rounds
    ) external view returns (OutputTypes.RoundOutput[] memory) {
        OutputTypes.RoundOutput[] memory output = new OutputTypes.RoundOutput[](
            rounds.length
        );
        for (uint256 i = 0; i < rounds.length; i++) {
            output[i] = format(rounds[i], i);
        }
        return output;
    }
}
