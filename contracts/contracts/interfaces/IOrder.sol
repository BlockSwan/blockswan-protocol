// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IAddressProvider} from "./IAddressProvider.sol";
import {DataTypes} from "../protocol/libraries/types/DataTypes.sol";
import {OutputTypes} from "../protocol/libraries/types/OutputTypes.sol";
import {InputTypes} from "../protocol/libraries/types/InputTypes.sol";

/**
 * @title IOrder
 * @author Blockswan
 * @notice Defines the basic interface for a blockswan order contract.
 **/
interface IOrder {
    function getOrderById(
        uint256 orderId
    ) external view returns (OutputTypes.OrderOutput memory);

    function rule(
        uint256 winningChoice,
        uint256 orderId,
        uint256 procecutorId,
        uint256 defendantId
    ) external returns (bool);
}
