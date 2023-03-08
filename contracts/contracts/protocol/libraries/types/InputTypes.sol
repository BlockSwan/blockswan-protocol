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
        DataTypes.FeeParams buyerFees;
        DataTypes.FeeParams sellerFees;
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
        uint256 price;
        string metadata;
        string brief;
        OrderFeesInput fees;
        OrderRelationInput relations;
        IERC20 currency;
    }

    struct ExecuteCreateDisputeInput {
        uint256 newId;
        uint256 orderId;
        uint256 procecutorId;
        uint256 defendantId;
        uint256 maxVotes;
        uint256 totalFeesForJurors;
        uint256 tokensAtStakePerJuror;
        uint256 evidenceUntil;
        address[] drawnJurors;
    }

    struct ExecuteNextRoundInput {
        uint256 evidenceUntil;
        uint256 maxVotes;
        uint256 totalFeesForJurors;
        uint256 tokensAtStakePerJuror;
        address[] drawnJurors;
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

    struct AddRoundInput {
        uint256 totalFeesForJurors;
        uint256 tokensAtStakePerJuror;
        uint256 maxVotes;
        uint256 procecutorId;
        uint256 defendantId;
        address[] drawnJurors;
    }

    struct ClaimAsJudgeInput {
        address account;
        uint256 min;
        uint256 max;
        uint256 winningChoice;
        uint256 amountOfCorrectVotes;
        uint256 tokensAtStakePerJuror;
        uint256 totalFeesForJurors;
        uint256 penalties;
    }
}
