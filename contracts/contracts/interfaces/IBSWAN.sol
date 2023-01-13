// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "../imports/openzeppelin/contracts/IERC20.sol";

/**
 * @title IBSWAN
 * @author Blockswan
 * @notice Defines the basic interface for the Blockswan Trust
 **/
interface IBSWAN is IERC20 {
    /**
     * @notice Update the DAT config.
     * @param _newOwner The new owner of the DAT
     * @param _revenueCommitmentBasisPoints the share of revenues tranfered to the buyback reserve
     * @param _minInvestment the min investment required in currency value
     */
    function updateConfig(
        address payable _newOwner,
        uint256 _revenueCommitmentBasisPoints,
        uint256 _minInvestment
    ) external;

    /**
     * @notice Update the DAT config.
     * @param _currencyValue the quantity of currency to buy
     * @return tokenValue the quantity of BSWAN bought for the _currencyValue
     */
    function estimateBuyValue(
        uint256 _currencyValue
    ) external view returns (uint256);

    /** @notice Purchase BSWAN tokens with the given amount of currency.
     * @param _to The account to receive the BSWAN tokens from this purchase.
     * @param _currencyValue How much currency to spend in order to buy BSWAN.
     * @param _minTokensBought Buy at least this many BSWAN tokens or the transaction reverts.
     * @dev _minTokensBought is necessary as the price will change if some elses transaction mines after
     * yours was submitted.
     */
    function buy(
        address _to,
        uint256 _currencyValue,
        uint256 _minTokensBought
    ) external payable;

    /// Pay
    function estimatePayValue(
        uint256 _currencyValue
    ) external view returns (uint256);

    /**
     * @dev Pay the organization on-chain.
     * @param _to The account which receives tokens for the contribution. If this address
     * is not authorized to receive tokens then they will be sent to the beneficiary account instead.
     * @param _currencyValue How much currency which was paid.
     */
    function pay(address _to, uint _currencyValue) external payable;

    /// @notice The address of the token used as reserve in the bonding curve
    /// (e.g. the DAI contract)
    function currency() external returns (IERC20);
}
