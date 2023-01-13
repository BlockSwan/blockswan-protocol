// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import {UserStorage} from "./UserStorage.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IACLManager} from "../../interfaces/IACLManager.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";

import {UserLogic} from "../libraries/logics/UserLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";

import {Errors} from "../libraries/helpers/Errors.sol";
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

    bytes32 constant REGISTRY_KEY = "USER";

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
    function getAddressById(
        uint256 userId
    ) public view virtual override returns (address) {
        address userAddress = _userIdToAddress.at(userId);
        return userAddress;
    }

    /// @inheritdoc IUser
    function getUserById(
        uint256 userId
    ) public view virtual override returns (DataTypes.User memory) {
        return _users[_userIdToAddress.at(userId)];
    }

    /// @inheritdoc IUser
    function getUserByAddress(
        address pubKey
    ) public view virtual override returns (DataTypes.User memory) {
        return _users[pubKey];
    }

    /// @inheritdoc IUser
    function getUserList()
        external
        view
        virtual
        override
        returns (DataTypes.User[] memory)
    {
        uint256 len = getUsersCount();
        DataTypes.User[] memory userList = new DataTypes.User[](len);
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

        bool isCreated = UserLogic.executeCreateUser(
            _userIdToAddress,
            _userAddressToId,
            _users,
            InputTypes.CreateUserInput({
                newId: newId,
                metadata: metadata,
                inviterId: inviterId,
                wallet: _msgSender()
            })
        );
        require(
            isCreated && newId == getUsersCount() - 1,
            Errors.INVALID_USER_ID
        );
        emit UserAdded(newId, _msgSender(), _users[_msgSender()]);
    }

    function becomeBuyer() external {
        address caller = _msgSender();
        bool isBuyer = hasProtocolRole(BUYER_ROLE, caller);
        require(!isBuyer, Errors.RESTRICTED_TO_BUYER);

        OutputTypes.PrepareBecomeRoleOutput
            memory becomeBuyerParams = _prepareRoleParams(BUYER_ROLE, caller);
        grantProtocolRole(BUYER_ROLE, caller);
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
        _processPayment(
            InputTypes.ProcessPaymentInput({
                caller: _msgSender(),
                inviter0: becomeBuyerParams.inviter0,
                inviter1: becomeBuyerParams.inviter1,
                inviter0Rewards: becomeBuyerParams.rewards.inviter0Rewards,
                inviter1Rewards: becomeBuyerParams.rewards.inviter1Rewards,
                remainingRewards: becomeBuyerParams.rewards.remainingRewards
            })
        );
    }

    function getInvitersById(
        uint256 userId
    ) public view returns (address, address) {
        DataTypes.User memory user = getUserById(userId);
        return user.getInvitersAddresses(_userIdToAddress, _users);
    }

    function getInvitersByUserAddress(
        address account
    ) public view returns (address, address) {
        DataTypes.User memory user = getUserByAddress(account);
        return user.getInvitersAddresses(_userIdToAddress, _users);
    }

    function getBecomeBuyerParams()
        internal
        view
        returns (DataTypes.EntryParams memory)
    {
        return
            IProtocolConfigurator(fetchContract(PROTOCOL_CONFIGURATOR))
                .getBuyerEntryParams();
    }

    function getRetributionParams()
        internal
        view
        returns (DataTypes.RetributionParams memory)
    {
        return
            IProtocolConfigurator(fetchContract(PROTOCOL_CONFIGURATOR))
                .getRetributionParams();
    }

    function _prepareRoleParams(
        bytes32 role,
        address caller
    ) internal view returns (OutputTypes.PrepareBecomeRoleOutput memory) {
        DataTypes.EntryParams memory entryParams;
        if (role == BUYER_ROLE) {
            entryParams = getBecomeBuyerParams();
        }
        (address inviter0, address inviter1) = getInvitersByUserAddress(caller);
        DataTypes.RetributionParams
            memory retributionParams = getRetributionParams();
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
}
