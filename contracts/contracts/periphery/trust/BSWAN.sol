// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

//import "hardhat/console.sol";

import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {ERC20} from "../../imports/openzeppelin/contracts/ERC20.sol";
import {Math} from "../../imports/openzeppelin/contracts/Math.sol";
import {Pausable} from "../../imports/openzeppelin/contracts/Pausable.sol";
import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {GPv2SafeERC20} from "../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {PercentageMath} from "../../imports/aave/contracts/PercentageMath.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";

contract BSWAN is ERC20, Pausable, Ownable, IBSWAN {
    using Math for uint256;
    using PercentageMath for uint256;
    using GPv2SafeERC20 for IERC20;

    event Buy(
        address indexed _from,
        address indexed _to,
        uint256 _currencyAmount,
        uint256 _bswanAmount
    );

    event Sell(
        address indexed _from,
        address indexed _to,
        uint256 _currencyAmount,
        uint256 _bswanAmount
    );

    event Burn(address indexed _from, uint256 _bswanAmount);

    event Pay(
        address indexed _from,
        address indexed _to,
        uint256 _currencyAmount,
        uint256 _bswanAmount
    );

    event UpdateConfig(
        address indexed _owner,
        uint256 _revenueCommitmentBasisPoints,
        uint256 _minInvestment
    );

    // When multiplying 2 terms, the max value is 2^128-1
    uint256 private constant MAX_BEFORE_SQUARE = 2 ** 128 - 1;

    // The max `totalSupply() + burnedSupply`
    // This limit ensures that the DAT's formulas do not overflow (<MAX_BEFORE_SQUARE/2)
    uint256 private constant MAX_SUPPLY = 10 ** 38;

    /// @notice The total number of burned BSWAN tokens, excluding tokens burned from a `Sell` action in the DAT.
    uint256 public burnedSupply;

    /// @notice The buy slope of the bonding curve.
    /// Does not affect the financial model, only the granularity of BSWAN.
    /// @dev This is the numerator component of the fractional value.
    uint256 public buySlopeNum;

    /// @notice The buy slope of the bonding curve.
    /// Does not affect the financial model, only the granularity of COT.
    /// @dev This is the denominator component of the fractional value.
    uint256 public buySlopeDen;

    /// @inheritdoc IBSWAN
    IERC20 public override currency;

    /// @notice The minimum amount of `currency` investment accepted.
    uint256 public minInvestment;

    /// @notice The revenue commitment of the organization. Defines the percentage of the value paid through the contract
    /// that is automatically funneled and held into the buyback_reserve expressed in basis points.
    uint256 public revenueCommitmentBasisPoints;

    /// @notice The investment reserve of the bswan. Defines the percentage of the value invested that is
    /// automatically funneled and held into the buyback_reserve expressed in basis points.
    uint256 public investmentReserveBasisPoints;

    /// @notice The total amount of currency value currently locked in the contract and available to sellers.
    function buybackReserve() public view returns (uint256) {
        uint256 reserve = address(this).balance;
        if (address(currency) != address(0)) {
            reserve = currency.balanceOf(address(this));
        }
        if (reserve > MAX_BEFORE_SQUARE) {
            /// Math: If the reserve becomes excessive, cap the value to prevent overflowing in other formulas
            return MAX_BEFORE_SQUARE;
        }
        return reserve;
    }

    /// @dev Removes tokens from the circulating supply.
    function _burn(address _from, uint _amount, bool _isSell) internal {
        super._burn(_from, _amount);

        if (!_isSell) {
            // SafeMath not required as we cap how high this value may get during mint
            burnedSupply += _amount;
            emit Burn(_from, _amount);
        }
    }

    /// @notice Called to mint tokens on `buy`.
    function _mint(address _to, uint256 _quantity) internal override {
        super._mint(_to, _quantity);
        require(totalSupply() + burnedSupply <= MAX_SUPPLY, "EXCESSIVE_SUPPLY");
    }

    /**
     * Transaction Helpers
     */

    /// @notice Confirms the transfer of `_quantityToInvest` currency to the contract.
    function _collectInvestment(uint256 _quantityToInvest) private {
        currency.safeTransferFrom(msg.sender, address(this), _quantityToInvest);
    }

    /// @dev Send `_amount` currency from the contract to the `_to` account.
    function _transferCurrency(address _to, uint256 _amount) private {
        if (_amount > 0) {
            currency.safeTransfer(_to, _amount);
        }
    }

    constructor(
        address _currencyAddress,
        uint _buySlopeNum,
        uint _buySlopeDen,
        uint _investmentReserveBasisPoints,
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol, ERC20(_currencyAddress).decimals()) {
        // Set initGoal, which in turn defines the initial state

        require(_buySlopeNum > 0, "INVALID_SLOPE_NUM");
        require(_buySlopeDen > 0, "INVALID_SLOPE_DEN");
        require(_buySlopeNum < MAX_BEFORE_SQUARE, "EXCESSIVE_SLOPE_NUM");
        require(_buySlopeDen < MAX_BEFORE_SQUARE, "EXCESSIVE_SLOPE_DEN");

        buySlopeNum = _buySlopeNum;
        buySlopeDen = _buySlopeDen;

        // 100% or less
        require(
            _investmentReserveBasisPoints <= PercentageMath.PERCENTAGE_FACTOR,
            "INVALID_RESERVE"
        );
        investmentReserveBasisPoints = _investmentReserveBasisPoints;

        // Set default values (which may be updated using `updateConfig`)
        minInvestment = 100 ** ERC20(_currencyAddress).decimals();

        // Save currency
        currency = IERC20(_currencyAddress);
    }

    /// @inheritdoc IBSWAN
    function updateConfig(
        address payable _newOwner,
        uint256 _revenueCommitmentBasisPoints,
        uint256 _minInvestment
    ) public override {
        require(
            _revenueCommitmentBasisPoints <= PercentageMath.PERCENTAGE_FACTOR,
            "INVALID_COMMITMENT"
        );
        require(
            _revenueCommitmentBasisPoints >= revenueCommitmentBasisPoints,
            "COMMITMENT_MAY_NOT_BE_REDUCED"
        );
        revenueCommitmentBasisPoints = _revenueCommitmentBasisPoints;

        require(_minInvestment > 0, "INVALID_MIN_INVESTMENT");
        minInvestment = _minInvestment;

        if (_newOwner != owner()) {
            require(_newOwner != address(0), "INVALID_ADDRESS");
            uint256 tokens = balanceOf(_newOwner);
            if (tokens > 0) {
                _transfer(owner(), _newOwner, tokens);
            }
            _transferOwnership(_newOwner);
        }

        emit UpdateConfig(
            _newOwner,
            _revenueCommitmentBasisPoints,
            _minInvestment
        );
    }

    /**
     * Functions for our business logic
     */

    /// @notice Burn the amount of tokens from the address msg.sender if authorized.
    /// @dev Note that this is not the same as a `sell` via the DAT.
    function burn(uint256 _amount) public {
        _burn(msg.sender, _amount, false);
    }

    /// @dev Distributes _value currency between the buybackReserve and beneficiary
    function _distributeInvestment(uint256 _value) private {
        // Rounding favors buybackReserve, then beneficiary, and feeCollector is last priority.

        // Math: if investment value is < (2^256 - 1) / 10000 this will never overflow.
        // Except maybe with a huge single investment, but they can try again with multiple smaller investments.
        uint256 reserve = investmentReserveBasisPoints * _value;
        reserve /= PercentageMath.PERCENTAGE_FACTOR;
        reserve = _value - reserve;

        _transferCurrency(owner(), reserve);
    }

    /// @inheritdoc IBSWAN
    function estimateBuyValue(
        uint256 _currencyValue
    ) public view override returns (uint256) {
        if (_currencyValue < minInvestment) {
            return 0;
        }
        uint256 tokenValue;
        // initReserve is reduced on sell as necessary to ensure that this line will not overflow
        uint256 supply = totalSupply() + burnedSupply;

        // Math: worst case
        // MAX * 2 * MAX_BEFORE_SQUARE
        // / MAX_BEFORE_SQUARE
        tokenValue = Math.mulDiv(_currencyValue, 2 * buySlopeDen, buySlopeNum);

        // Math: worst case MAX + (MAX_BEFORE_SQUARE * MAX_BEFORE_SQUARE)
        tokenValue += (supply * supply);
        tokenValue = tokenValue.sqrt();

        // Math: small chance of underflow due to possible rounding in sqrt
        tokenValue -= supply;

        return tokenValue;
    }

    /// @inheritdoc IBSWAN
    function buy(
        address _to,
        uint256 _currencyValue,
        uint256 _minTokensBought
    ) public payable override {
        require(_to != address(0), "INVALID_ADDRESS");
        require(_minTokensBought > 0, "MUST_BUY_AT_LEAST_1");

        // Calculate the tokenValue for this investment
        uint256 tokenValue = estimateBuyValue(_currencyValue);
        require(tokenValue >= _minTokensBought, "PRICE_SLIPPAGE");

        emit Buy(msg.sender, _to, _currencyValue, tokenValue);

        _collectInvestment(_currencyValue);

        if (_to != owner()) {
            _distributeInvestment(_currencyValue);
        }
        _mint(_to, tokenValue);
    }

    /// Sell

    function estimateSellValue(
        uint256 _quantityToSell
    ) public view returns (uint256) {
        uint256 reserve = buybackReserve();

        // Calculate currencyValue for this sale
        uint256 currencyValue;
        uint256 supply = totalSupply() + burnedSupply;

        // buyback_reserve = r
        // total_supply = t
        // burnt_supply = b
        // amount = a
        // source: (t+b)*a*(2*r)/((t+b)^2)-(((2*r)/((t+b)^2)*a^2)/2)+((2*r)/((t+b)^2)*a*b^2)/(2*(t))
        // imp: (a b^2 r)/(t (b + t)^2) + (2 a r)/(b + t) - (a^2 r)/(b + t)^2

        // Math: burnedSupply is capped in COT such that the square will never overflow
        // Math worst case:
        // MAX * MAX_BEFORE_SQUARE * MAX_BEFORE_SQUARE/2 * MAX_BEFORE_SQUARE/2
        // / MAX_BEFORE_SQUARE/2 * MAX_BEFORE_SQUARE/2 * MAX_BEFORE_SQUARE/2
        currencyValue = Math.mulDiv(
            _quantityToSell * reserve,
            burnedSupply * burnedSupply,
            totalSupply() * (supply * supply)
        );

        // Math: worst case currencyValue is MAX_BEFORE_SQUARE (max reserve, 1 supply)
        // Math worst case:
        // MAX * 2 * MAX_BEFORE_SQUARE
        uint256 temp = _quantityToSell * (2 * reserve);
        temp /= supply;

        // Math: worst-case temp is MAX_BEFORE_SQUARE (max reserve, 1 supply)
        // Math: considering the worst-case for currencyValue and temp, this can never overflow
        currencyValue += temp;

        // Math: worst case
        // MAX * MAX * MAX_BEFORE_SQUARE
        // / MAX_BEFORE_SQUARE/2 * MAX_BEFORE_SQUARE/2
        currencyValue -= Math.mulDiv(
            _quantityToSell * _quantityToSell,
            reserve,
            supply * supply,
            Math.Rounding.Up
        );

        return currencyValue;
    }

    /// @notice Sell BSWAN tokens for at least the given amount of currency.
    /// @param _to The account to receive the currency from this sale.
    /// @param _quantityToSell How many BSWAN tokens to sell for currency value.
    /// @param _minCurrencyReturned Get at least this many currency tokens or the transaction reverts.
    /// @dev _minCurrencyReturned is necessary as the price will change if some elses transaction mines after
    /// yours was submitted.

    function sell(
        address payable _to,
        uint256 _quantityToSell,
        uint256 _minCurrencyReturned
    ) public {
        require(msg.sender != owner(), "BENEFICIARY_CANT_SELL");
        require(_minCurrencyReturned > 0, "MUST_SELL_AT_LEAST_1");

        uint256 currencyValue = estimateSellValue(_quantityToSell);
        require(currencyValue >= _minCurrencyReturned, "PRICE_SLIPPAGE");

        _burn(msg.sender, _quantityToSell, true);
        _transferCurrency(_to, currencyValue);
        emit Sell(msg.sender, _to, currencyValue, _quantityToSell);
    }

    /// @inheritdoc IBSWAN
    function estimatePayValue(
        uint256 _currencyValue
    ) public view override returns (uint256) {
        // buy_slope = n/d
        // revenue_commitment = c/g
        // sqrt(
        //  (2 a c d)
        //  /
        //  (g n)
        //  + s^2
        // ) - s

        uint256 supply = totalSupply() + burnedSupply;

        // Math: worst case
        // MAX * 2 * 10000 * MAX_BEFORE_SQUARE
        // / 10000 * MAX_BEFORE_SQUARE
        uint256 tokenValue = Math.mulDiv(
            _currencyValue * (2 * revenueCommitmentBasisPoints),
            buySlopeDen,
            PercentageMath.PERCENTAGE_FACTOR * buySlopeNum
        );

        tokenValue += (supply * supply);
        tokenValue = tokenValue.sqrt();

        if (tokenValue > supply) {
            tokenValue -= supply;
        } else {
            tokenValue = 0;
        }

        return tokenValue;
    }

    /// @dev Pay the organization on-chain.
    /// @param _to The account which receives tokens for the contribution.
    /// @param _currencyValue How much currency which was paid.
    function _pay(address _to, uint256 _currencyValue) private {
        require(_currencyValue > 0, "MISSING_CURRENCY");

        // Send a portion of the funds to the beneficiary, the rest is added to the buybackReserve
        // Math: if _currencyValue is < (2^256 - 1) / 10000 this will not overflow
        uint256 reserve = _currencyValue * investmentReserveBasisPoints;
        reserve /= PercentageMath.PERCENTAGE_FACTOR;

        uint256 tokenValue = estimatePayValue(_currencyValue);

        // Update the to address to the beneficiary if the currency value would fail
        address to = _to;
        if (to == address(0)) {
            to = owner();
        }
        // Math: this will never underflow since investmentReserveBasisPoints is capped to BASIS_POINTS_DEN
        _transferCurrency(owner(), _currencyValue - reserve);

        // Distribute tokens
        if (tokenValue > 0) {
            _mint(to, tokenValue);
        }

        emit Pay(msg.sender, _to, _currencyValue, tokenValue);
    }

    /// @inheritdoc IBSWAN
    function pay(address _to, uint _currencyValue) public payable override {
        _collectInvestment(_currencyValue);
        _pay(_to, _currencyValue);
    }
}
