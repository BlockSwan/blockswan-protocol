// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {DataTypes} from "./DataTypes.sol";

library InputTypes {
    struct CreateUserInput {
        uint256 newId;
        string metadata;
        uint256 inviterId;
        address wallet;
    }

    struct CreateGigInput {
        uint256 newId;
        DataTypes.Package[3] packages;
        string metadata;
    }

    struct OrderFeesInput {
        uint256 sellerFeesVersion;
        uint256 toTrial;
        uint256 toProceed;
    }

    struct OrderRelationInput {
        uint256 newId;
        uint256 buyerId;
        uint256 sellerId;
        uint256 gigId;
    }

    struct CreateOrderInput {
        uint256 sellerId;
        uint256 buyerId;
        uint256 gigId;
        uint256 packageId;
        string brief;
    }

    struct ExecuteCreateOrderInput {
        string metadata;
        string brief;
        OrderFeesInput fees;
        OrderRelationInput relations;
        DataTypes.Package package;
        IERC20 currency;
    }

    struct BecomeBuyerInput {
        address account;
        uint256 buyerTimeAdded;
        uint8 invitationEarned;
    }

    struct BecomeSellerInput {
        address account;
        uint256 sellerTimeAdded;
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
