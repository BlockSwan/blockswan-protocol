//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IProviderContract} from "../../interfaces/IProviderContract.sol";
import {IACLManager} from "../../interfaces/IACLManager.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";

/**
 * @title Parent class to all contracts used to check that a contract is registerable
 * @notice ProviderContract is Ownable so the deployer can re-register it against new registries
 * @dev The Provider uses this to talk to all contracts that inherit from this contract.
 */

contract ProviderContract is Ownable, IProviderContract {
    IAddressProvider public ADDRESS_PROVIDER;

    uint256 public MAX_UINT = 2 ** 256 - 1;

    // contracts
    bytes32 public constant GIG = "GIG";
    bytes32 public constant ORDER = "ORDER";
    bytes32 public constant USER = "USER";
    bytes32 public constant PROTOCOL_CONFIGURATOR = "PROTOCOL_CONFIGURATOR";
    bytes32 public constant DAT = "DAT";
    bytes32 public constant ACL_MANAGER = "ACL_MANAGER";
    bytes32 public constant DATA_PROVIDER = "DATA_PROVIDER";
    // humans
    bytes32 public constant ACL_ADMIN = "ACL_ADMIN";

    // ---- ROLES ------

    bytes32 public constant override PROTOCOL_ADMIN_ROLE = "PROTOCOL_ADMIN";
    bytes32 public constant override BUYER_ROLE = "BUYER";
    bytes32 public constant override SELLER_ROLE = "SELLER";
    bytes32 public constant override JUDGE_ROLE = "JUDGE";
    bytes32 public constant override BLACKLIST_ROLE = "BLACKLIST_ROLE";
    bytes32 public constant override WHITELIST_ROLE = "WHITELIST_ROLE";

    /// @notice all contracts that inherit from ProviderContract are automatically Ownable()
    /// @dev internal constructor makes ProviderContract abstract
    constructor(IAddressProvider provider) Ownable() {
        require(
            address(provider) != address(0x00),
            Errors.ZERO_ADDRESS_IS_INVALID
        );

        ADDRESS_PROVIDER = IAddressProvider(provider);
    }

    /// @notice only allow  contracts to be called by the respective agent.
    ///     i.e. GigStorage methods can only be invoked by GigFactory.
    modifier onlyProvider(bytes32 _name) {
        require(
            _msgSender() == fetchContract(_name),
            "Requires msg.sender is from contract address registered to _name"
        );
        _;
    }

    /// @notice only allow function contracts to be called by the respective role.
    ///     i.e. GigStorage methods can only be invoked by BUYER_ROLE.
    modifier onlyProtocolRole(bytes32 _role) {
        require(
            hasProtocolRole(_role, _msgSender()),
            "Requires msg.sender has role"
        );
        _;
    }

    modifier onlyStillBuyer() {
        require(isStillBuyer(_msgSender()), "buyer time elapsed");
        _;
    }

    function hasProtocolRole(
        bytes32 _role,
        address account
    ) public view returns (bool) {
        bool hasRole = IACLManager(fetchContract(ACL_MANAGER)).hasRole(
            _role,
            account
        );
        return hasRole;
    }

    function isStillBuyer(address account) public view returns (bool) {
        return
            hasProtocolRole(BUYER_ROLE, account) &&
            IUser(fetchContract(USER)).getUserByAddress(account).buyerUntil >
            block.timestamp;
    }

    /// @inheritdoc IProviderContract
    function setProvider(IAddressProvider _providerAddress) public override {
        require(
            address(_providerAddress) == address(0x00) ||
                address(ADDRESS_PROVIDER) == msg.sender ||
                this.owner() == msg.sender,
            "Can only be called if addressesProvider is empty, msg.sender or owner"
        );
        ADDRESS_PROVIDER = _providerAddress;
    }

    function fetchContract(
        bytes32 _name
    ) public view override returns (address) {
        return address(IAddressProvider(ADDRESS_PROVIDER).fetchContract(_name));
    }

    /// @inheritdoc IProviderContract
    function kill() external override {
        assert(msg.sender == address(ADDRESS_PROVIDER));
        selfdestruct(payable(address(ADDRESS_PROVIDER)));
    }

    /// @inheritdoc IProviderContract
    function ADDRESSES_PROVIDER()
        external
        view
        override
        returns (IAddressProvider)
    {
        return ADDRESS_PROVIDER;
    }

    function grantProtocolRole(bytes32 _role, address account) internal {
        IACLManager(fetchContract(ACL_MANAGER)).grantRole(_role, account);
    }

    function approve(
        address erc20
    ) public onlyProtocolRole(PROTOCOL_ADMIN_ROLE) {
        address dat = fetchContract(DAT);
        IERC20(erc20).approve(dat, MAX_UINT);
    }

    function datCurrency() public returns (address) {
        address dat = fetchContract(DAT);
        address erc20 = address(IBSWAN(dat).currency());
        return erc20;
    }

    function pay(address _from, address _to, uint256 _currencyValue) internal {
        IERC20(datCurrency()).transferFrom(
            _from,
            address(this),
            _currencyValue
        );
        IBSWAN(fetchContract(DAT)).pay(_to, _currencyValue);
    }

    function _processPayment(
        InputTypes.ProcessPaymentInput memory params
    ) internal {
        pay(params.caller, params.inviter0, params.inviter0Rewards);
        pay(params.caller, params.inviter1, params.inviter1Rewards);
        pay(params.caller, address(0), params.remainingRewards);
    }
}
