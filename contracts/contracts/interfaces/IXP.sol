// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {IERC20} from "../imports/openzeppelin/contracts/IERC20.sol";

/**
 * @title IXP
 * @author Blockswan
 * @notice Defines the basic interface for the Experience
 **/
interface IXP is IERC20 {
    /**
     * @notice set the xp amount to earn for a bytes32 key action
     * @param xpKey The key associated to the xp to earn
     * @param xpToReceive the xp to earn for the key action
     */
    function setXpAmount(bytes32 xpKey, uint256 xpToReceive) external;

    /**
     * @notice get the xp amount to earn for a bytes32 key action
     * @param xpKey The action key as bytes32
     * @return success There is an action matching the key
     * @return _amount the xp to earn for the key action
     */
    function getXpAmount(bytes32 xpKey) external returns (bool, uint256);

    /**
     * @notice mint the xp amount to earn for a bytes32 key action
     * @param xpKey The action key as bytes32
     * @param to the addres receiving the XP
     */
    function mint(bytes32 xpKey, address to) external;
}
