// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";

library InputTypes {
    struct CreateUserInput {
        uint256 newId;
        string metadata;
        uint256 inviterId;
        address wallet;
    }

    struct BecomeBuyerInput {
        address account;
        uint256 buyerTimeAdded;
        uint8 invitationEarned;
    }

    struct CalcInvitersRewardsInput {
        uint256 currencyValue;
        uint256 affiliateShare;
        uint256 lvl0AffiliateShare;
    }

    struct ProcessPaymentInput {
        address caller;
        address inviter0;
        address inviter1;
        uint256 inviter0Rewards;
        uint256 inviter1Rewards;
        uint256 remainingRewards;
    }
}
