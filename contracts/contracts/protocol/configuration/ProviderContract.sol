//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {Ownable} from "../../imports/openzeppelin/contracts/Ownable.sol";
import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";

import {IProviderContract} from "../../interfaces/IProviderContract.sol";
import {IACLManager} from "../../interfaces/IACLManager.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";
import {IXP} from "../../interfaces/IXP.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {RoleKeys} from "../libraries/helpers/RoleKeys.sol";

/**
 * @title Parent class to all contracts used to check that a contract is registerable
 * @notice ProviderContract is Ownable so the deployer can re-register it against new registries
 * @dev The Provider uses this to talk to all contracts that inherit from this contract.
 */

contract ProviderContract is Ownable, IProviderContract {
    using GPv2SafeERC20 for IERC20;
    IAddressProvider public ADDRESS_PROVIDER;

    uint256 public MAX_UINT = 2 ** 256 - 1;

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
        require(isStillBuyer(_msgSender()), Errors.ONLY_BUYER);
        _;
    }

    modifier onlyStillSeller() {
        require(isStillSeller(_msgSender()), Errors.ONLY_SELLER);
        _;
    }

    function hasProtocolRole(
        bytes32 _role,
        address account
    ) public view returns (bool) {
        bool hasRole = IACLManager(fetchContract(RegistryKeys.ACL_MANAGER))
            .hasRole(_role, account);
        return hasRole;
    }

    // function hasProtocolRoles(
    //     bytes32[] memory _roles,
    //     address account
    // ) public view returns (bool) {
    //     for (uint256 i; i < _roles.length; i++) {
    //         bool hasRole = IACLManager(fetchContract(RegistryKeys.ACL_MANAGER))
    //             .hasRole(_roles[i], account);
    //         if (hasRole) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    function isStillBuyer(address account) public view returns (bool) {
        return
            hasProtocolRole(RoleKeys.BUYER_ROLE, account) &&
            IUser(fetchContract(RegistryKeys.USER))
                .getUserByAddress(account)
                .buyerUntil >
            block.timestamp;
    }

    function isStillSeller(address account) public view returns (bool) {
        return
            hasProtocolRole(RoleKeys.SELLER_ROLE, account) &&
            IUser(fetchContract(RegistryKeys.USER))
                .getUserByAddress(account)
                .sellerUntil >
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
        IACLManager(fetchContract(RegistryKeys.ACL_MANAGER)).grantRole(
            _role,
            account
        );
    }

    function approve(
        address erc20
    ) public onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        address dat = fetchContract(RegistryKeys.DAT);
        IERC20(erc20).approve(dat, MAX_UINT);
    }


    function _pay(InputTypes.ProcessPaymentInput memory params, IBSWAN dat) internal {
        dat.pay(params.inviter0, params.inviter0Rewards);
        dat.pay(params.inviter1, params.inviter1Rewards);
        dat.pay(address(0), params.remainingRewards); 
    }

    function _processPayment(
        InputTypes.ProcessPaymentInput memory params
    ) internal {
        IBSWAN dat = IBSWAN(fetchContract(RegistryKeys.DAT));
        uint256 total = params.inviter0Rewards +
            params.inviter1Rewards +
            params.remainingRewards;
        IERC20(dat.currency()).safeTransferFrom(
            params.caller,
            address(this),
            total
        );
        _pay(params, dat);
    }

   

    function _giveXP(bytes32 _key, address _to) internal {
        IXP(fetchContract(RegistryKeys.XP)).mint(_key, _to);
    }

    function getProtocolRetributionParams()
        internal
        view
        returns (DataTypes.RetributionParams memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getRetributionParams();
    }

    function getProtocolDelayTimestamp()
        internal
        view
        returns (DataTypes.DelayTimestamp memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getDelayTimestamp();
    }

    function isGigOwner(
        uint256 userId,
        uint256 gigId,
        IUser UserContract
    ) public view returns (bool) {
        return UserContract.isGigOwner(userId, gigId);
    }
}
