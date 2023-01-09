// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {UserStorage} from "./UserStorage.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
//import {i_acl_manager} from "../../interfaces/i_acl_manager.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {UserLogic} from "../libraries/logics/UserLogic.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";

import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";

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
    using EnumerableSet for EnumerableSet.AddressSet;

    bytes32 constant REGISTRY_KEY = "USER";

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) {
        require(
            address(provider) != address(0x00),
            Errors.ZERO_ADDRESS_IS_INVALID
        );
        ADDRESS_PROVIDER = IAddressProvider(provider);
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
    ) external view virtual override returns (DataTypes.User memory) {
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
        uint256 newId = totalUser + 1;
        bool isCreated = UserLogic.executeCreateUser(
            _userIdToAddress,
            _users,
            InputTypes.CreateUserInput({
                metadata: metadata,
                inviterId: inviterId,
                wallet: msg.sender
            })
        );
        require(
            isCreated && newId == _userIdToAddress.length(),
            Errors.INVALID_USER_ID
        );
    }
}
