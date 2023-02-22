// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";
import {OutputTypes} from "../protocol/libraries/types/OutputTypes.sol";
import {InputTypes} from "../protocol/libraries/types/InputTypes.sol";

/**
 * @title IJury
 * @author Blockswan
 * @notice Defines the basic interface for a blockswan jury contract.
 **/
interface IJury {
    /**
     * @notice Randomly draws X jurors from the jurors pool
     * using entropy made with the blockhash and the disputeId among other things.
     * @param numberOfJurors The number of jurors to draw
     * @param disputeId The dispute id
     * @param roundId The round id
     * @return jurors The list of jurors address
     */

    function drawJurors(
        uint256 numberOfJurors,
        uint256 disputeId,
        uint256 roundId
    ) external view returns (address[] memory jurors);
}
