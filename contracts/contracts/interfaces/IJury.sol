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
   
     * @return jurors The list of jurors address
     */

    function drawJurors(
        uint256 numberOfJurors
    ) external view returns (address[] memory jurors);

    /**
     *
     * @param accounts The list of jurors to freeze
     */

    function freezeTokens(address[] memory accounts) external;

    /**
     * @param amount The amount to unfreeze
     * @param account The juror to unfreeze
     */

    function unfreezeTokens(uint256 amount, address account) external;

    /**
     * @param amount The amount of tokens added to the stake
     * @param juror The juror to reward
     */
    function rewardJuror(uint256 amount, address juror) external;
}
