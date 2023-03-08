// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

/**
 * @title Choices library
 * @author Blockswan
 * @notice Defines the choices available for a juror upon a dispute in the Blockswan protocol.
 * The uint256 values chosen represents the % of the value in the order contract that the procecutor will receive.
 * (eg. 0 = 0% of the value in the order contract)
 * (eg. 1000000000000000000 = 100% of the value in the order contract)
 */
library Choices {
    uint256 public constant PERCENTAGE_FACTOR = 1e4;
    // ---- CHOICES ---- (in percentage from 0 to 100% with 10% incrementation - 100% = 1e4)
    uint256 public constant ZERO_PERCENT = 0;
    uint256 public constant TEN_PERCENT = 1e3;
    uint256 public constant TWENTY_PERCENT = 2e3;
    uint256 public constant THIRTY_PERCENT = 3e3;
    uint256 public constant FORTY_PERCENT = 4e3;
    uint256 public constant FIFTY_PERCENT = 5e3;
    uint256 public constant SIXTY_PERCENT = 6e3;
    uint256 public constant SEVENTY_PERCENT = 7e3;
    uint256 public constant EIGHTY_PERCENT = 8e3;
    uint256 public constant NINETY_PERCENT = 9e3;
    uint256 public constant ONE_HUNDRED_PERCENT = 1e4;
}
