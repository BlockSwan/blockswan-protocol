// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {UserStorage} from "./UserStorage.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IACLManager} from "../../interfaces/IACLManager.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";

import {InputTypes} from "../libraries/types/InputTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";

import {UserLogic} from "../libraries/logics/UserLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";

import {Errors} from "../libraries/helpers/Errors.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {RoleKeys} from "../libraries/helpers/RoleKeys.sol";
import {XPKeys} from "../libraries/helpers/XPKeys.sol";

import {DataTypes} from "../libraries/types/DataTypes.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";

/**
 * @title	User contract
 * @author	Blockswan
 * @notice  User data within an Blockswan protocol's marketplace
 * - Users can:
 *   # login
 *   # edit profile
 *   # invite users
 *   # choose affiliates
 *   # get the access rights to the protocol
 * @dev To be covered by a proxy contract, owned by the addressProvider of the specific marketplace
 * @dev All admin functions are callable by the protocolConfigurator contract defined also in the
 *   addressProvider
 **/

contract User is UserStorage, IUser, ProviderContract {
    using UserLogic for DataTypes.User;
    using UserLogic for EnumerableMap.AddressToUintMap;
    using InviterLogic for DataTypes.User;
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableMap for EnumerableMap.AddressToUintMap;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {}

    modifier onlyUser() {
        require(
            _userAddressToId.isUserExisting(_msgSender()),
            "must have created an account"
        );
        _;
    }

    /// @inheritdoc IUser
    function getUsersCount() public view virtual override returns (uint256) {
        uint256 count = _userIdToAddress.length();
        return count;
    }

    /// @inheritdoc IUser
    function getIdByAddress(
        address account
    ) public view override returns (uint256) {
        return (_userAddressToId.get(account));
    }

    /// @inheritdoc IUser
    function getAddressById(
        uint256 userId
    ) public view virtual override returns (address) {
        address userAddress = _userIdToAddress.at(userId);
        return userAddress;
    }

    /// @inheritdoc IUser
    function getUserById(
        uint256 userId
    ) public view virtual override returns (OutputTypes.UserOutput memory) {
        DataTypes.User storage user = _users[_userIdToAddress.at(userId)];
        return user.format(userId, getAddressById(userId));
    }

    /// @inheritdoc IUser
    function getUserByAddress(
        address pubKey
    ) public view virtual override returns (OutputTypes.UserOutput memory) {
        DataTypes.User storage user = _users[pubKey];
        return user.format(_userAddressToId.get(pubKey), pubKey);
    }

    /// @inheritdoc IUser
    function getUserList()
        external
        view
        virtual
        override
        returns (OutputTypes.UserOutput[] memory)
    {
        uint256 len = getUsersCount();
        OutputTypes.UserOutput[] memory userList = new OutputTypes.UserOutput[](
            len
        );
        for (uint256 i = 0; i < len; i++) {
            userList[i] = getUserById(i);
        }
        return userList;
    }

    /// @inheritdoc IUser
    function createUser(
        string memory metadata,
        uint256 inviterId
    ) external override {
        uint256 totalUser = getUsersCount();
        require(
            totalUser == 0 ? inviterId == 0 : inviterId < totalUser,
            Errors.INVALID_INVITER_ID
        );

        uint256 newId = totalUser;
        InputTypes.CreateUserInput memory userInput = InputTypes
            .CreateUserInput({
                newId: newId,
                metadata: metadata,
                inviterId: inviterId,
                wallet: _msgSender()
            });
        bool isCreated = UserLogic.executeCreateUser(
            _userIdToAddress,
            _userAddressToId,
            _users,
            userInput
        );
        require(
            isCreated && newId == getUsersCount() - 1,
            Errors.INVALID_USER_ID
        );
        emit UserAdded(newId, _msgSender(), userInput);
    }

    function becomeBuyer() external {
        address caller = _msgSender();
        bool isBuyer = hasProtocolRole(RoleKeys.BUYER_ROLE, caller);
        require(!isBuyer, Errors.RESTRICTED_TO_BUYER);

        OutputTypes.PrepareBecomeRoleOutput
            memory becomeBuyerParams = _prepareRoleParams(
                RoleKeys.BUYER_ROLE,
                caller
            );
        grantProtocolRole(RoleKeys.BUYER_ROLE, caller);
        bool isBecomeBuyer = _userAddressToId.executeBecomeBuyer(
            _users,
            _userIdToAddress,
            InputTypes.BecomeBuyerInput({
                account: caller,
                buyerTimeAdded: becomeBuyerParams.entryParams.timeAdded,
                invitationEarned: becomeBuyerParams.entryParams.invitationEarned
            })
        );
        require(isBecomeBuyer, Errors.FAILED_BECOMING_BUYER);
        _giveXP(XPKeys.BECOME_BUYER, caller);
        _processPayment(
            InputTypes.ProcessPaymentInput({
                caller: caller,
                inviter0: becomeBuyerParams.inviter0,
                inviter1: becomeBuyerParams.inviter1,
                inviter0Rewards: becomeBuyerParams.rewards.inviter0Rewards,
                inviter1Rewards: becomeBuyerParams.rewards.inviter1Rewards,
                remainingRewards: becomeBuyerParams.rewards.remainingRewards
            })
        );
    }

    function becomeSeller() external {
        address caller = _msgSender();
        bool isSeller = hasProtocolRole(RoleKeys.SELLER_ROLE, caller);
        require(!isSeller, Errors.RESTRICTED_TO_SELLER);

        OutputTypes.PrepareBecomeRoleOutput
            memory becomeSellerParams = _prepareRoleParams(
                RoleKeys.SELLER_ROLE,
                caller
            );
        grantProtocolRole(RoleKeys.SELLER_ROLE, caller);
        bool isBecomeSeller = _userAddressToId.executeBecomeSeller(
            _users,
            _userIdToAddress,
            InputTypes.BecomeSellerInput({
                account: caller,
                sellerTimeAdded: becomeSellerParams.entryParams.timeAdded,
                invitationEarned: becomeSellerParams
                    .entryParams
                    .invitationEarned
            })
        );
        require(isBecomeSeller, Errors.FAILED_BECOMING_SELLER);
        _giveXP(XPKeys.BECOME_SELLER, caller);
        _processPayment(
            InputTypes.ProcessPaymentInput({
                caller: caller,
                inviter0: becomeSellerParams.inviter0,
                inviter1: becomeSellerParams.inviter1,
                inviter0Rewards: becomeSellerParams.rewards.inviter0Rewards,
                inviter1Rewards: becomeSellerParams.rewards.inviter1Rewards,
                remainingRewards: becomeSellerParams.rewards.remainingRewards
            })
        );
    }

    /// @inheritdoc IUser
    function getInvitersById(
        uint256 userId
    ) public view override returns (address, address) {
        DataTypes.User storage user = UserLogic.getUserById(
            userId,
            _userIdToAddress,
            _users
        );
        return user.getInvitersAddresses(_userIdToAddress, _users);
    }

    /// @inheritdoc IUser
    function getInvitersByUserAddress(
        address account
    ) public view override returns (address, address) {
        DataTypes.User storage user = UserLogic.getUserByAddress(
            account,
            _userAddressToId,
            _userIdToAddress,
            _users
        );
        return user.getInvitersAddresses(_userIdToAddress, _users);
    }

    function getBecomeBuyerParams()
        internal
        view
        returns (DataTypes.EntryParams memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getBuyerEntryParams();
    }

    function getBecomeSellerParams()
        internal
        view
        returns (DataTypes.EntryParams memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getSellerEntryParams();
    }

    function getGigCreationParams()
        internal
        view
        returns (DataTypes.CreationParams memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getGigCreationParams();
    }

    function _prepareRoleParams(
        bytes32 role,
        address caller
    ) internal view returns (OutputTypes.PrepareBecomeRoleOutput memory) {
        DataTypes.EntryParams memory entryParams;
        if (role == RoleKeys.BUYER_ROLE) {
            entryParams = getBecomeBuyerParams();
        } else {
            entryParams = getBecomeSellerParams();
        }
        (address inviter0, address inviter1) = getInvitersByUserAddress(caller);
        DataTypes.RetributionParams
            memory retributionParams = getProtocolRetributionParams();
        OutputTypes.CalcInvitersRewardsOutput memory rewards = InviterLogic
            .calcInvitersRewards(
                InputTypes.CalcInvitersRewardsInput({
                    currencyValue: entryParams.currencyValue,
                    affiliateShare: retributionParams.affiliate,
                    lvl0AffiliateShare: retributionParams.lvl0AffiliateShare
                })
            );
        return (
            OutputTypes.PrepareBecomeRoleOutput({
                inviter0: inviter0,
                inviter1: inviter1,
                entryParams: entryParams,
                retributionParams: retributionParams,
                rewards: rewards
            })
        );
    }

    /// @inheritdoc IUser
    function createGig(
        address caller,
        uint256 newGigId
    ) external override onlyProvider(RegistryKeys.GIG) returns (bool) {
        bool success = UserLogic.executeAddGig(
            newGigId,
            getIdByAddress(caller),
            _userIdToAddress,
            _users
        );
        return success;
    }

    /// @inheritdoc IUser
    function createBuyerOrder(
        uint256 buyerId,
        uint256 newOrderId
    ) external override onlyProvider(RegistryKeys.ORDER) returns (bool) {
        bool success = UserLogic.executeAddBuyerOrder(
            newOrderId,
            buyerId,
            _userIdToAddress,
            _users
        );
        return success;
    }

    /// @inheritdoc IUser
    function isGigOwner(
        uint256 userId,
        uint256 gigId
    ) public view override returns (bool) {
        return UserLogic.isGigOwner(userId, gigId, _userIdToAddress, _users);
    }
}
