// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {PercentageMath} from "../../../imports/aave/contracts/PercentageMath.sol";

import {Errors} from "../helpers/Errors.sol";
import {InputTypes} from "../types/InputTypes.sol";
import {OutputTypes} from "../types/OutputTypes.sol";
import {DataTypes} from "../types/DataTypes.sol";

/**
 * @title Inviter logic library
 * @author Blockswan
 * @notice Implements the logic for inviter specific functions
 */
library InviterLogic {
    using EnumerableSet for EnumerableSet.AddressSet;
    using PercentageMath for uint256;

    function addInviter(
        DataTypes.User storage user,
        uint256 inviterId
    ) external returns (bool) {
        user.inviterId = inviterId;
        return (true);
    }

    function getInviterAddress(
        DataTypes.User storage user,
        EnumerableSet.AddressSet storage userIdToAddress
    ) public view returns (address) {
        return (userIdToAddress.at(user.inviterId));
    }

    function getInvitersAddresses(
        DataTypes.User storage user,
        EnumerableSet.AddressSet storage userIdToAddress,
        mapping(address => DataTypes.User) storage users
    ) public view returns (address, address) {
        address inviter0 = getInviterAddress(user, userIdToAddress);
        address inviter1 = getInviterAddress(users[inviter0], userIdToAddress);
        return (inviter0, inviter1);
    }

    function calcInviterRewards(
        uint256 currencyValue,
        uint256 affiliateShare
    ) public pure returns (uint256) {
        return currencyValue.percentMul(affiliateShare);
    }

    function calcInvitersRewards(
        InputTypes.CalcInvitersRewardsInput memory params
    ) external pure returns (OutputTypes.CalcInvitersRewardsOutput memory) {
        uint256 totalRewards = calcInviterRewards(
            params.currencyValue,
            params.affiliateShare
        );
        uint256 inviter0Rewards = totalRewards.percentMul(
            params.lvl0AffiliateShare
        );
        uint256 inviter1Rewards = totalRewards - inviter0Rewards;

        return (
            OutputTypes.CalcInvitersRewardsOutput({
                inviter0Rewards: inviter0Rewards,
                inviter1Rewards: inviter1Rewards,
                remainingRewards: params.currencyValue - totalRewards
            })
        );
    }
}
