// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {DataTypes} from "./DataTypes.sol";

library OutputTypes {
    struct CalcInvitersRewardsOutput {
        uint256 inviter0Rewards;
        uint256 inviter1Rewards;
        uint256 remainingRewards;
    }

    struct PrepareBecomeRoleOutput {
        address inviter0;
        address inviter1;
        DataTypes.EntryParams entryParams;
        DataTypes.RetributionParams retributionParams;
        CalcInvitersRewardsOutput rewards;
    }

    struct GigOutput {
        uint256 gigId;
        string metadata;
        uint256 createdAt;
        uint256 successSell;
        uint256 failedSell;
        uint256[] reviewIds;
        uint256[] orderIds;
        DataTypes.Package[3] packages;
    }

    struct UserOutput {
        string metadata;
        uint256 inviterId;
        uint256 buyerUntil;
        uint256 buyerInvites;
        uint256 sellerUntil;
        uint256 sellerInvites;
        uint256 userId;
        address wallet;
        uint256[] gigIds;
        uint256[] offerIds;
        uint256[] bidIds;
        uint256[] buyerOrderIds;
        uint256[] gigReviewsIds;
        uint256[] userReviewsIds;
        uint256[] reviewsIds;
    }

    struct OrderOutput {
        string metadata;
        string brief;
        uint256 orderId;
        uint256 buyerId;
        uint256 sellerId;
        uint256 gigId;
        uint256 disputeId;
        uint256[] reviewIds;
        bool disputed;
        DataTypes.Invoice invoice;
        DataTypes.OrderState state;
    }

    struct RoundOutput {
        uint256 roundId;
        uint256 procecutorId;
        uint256 defendantId;
        uint256 appealFeeRewards;
        uint256 tokensAtStakePerJuror;
        uint256 totalFeesForJurors;
        uint256 maxVotes;
        uint256 penalties;
        uint256 winningChoice;
        uint256 totalRepartitions;
        uint256 totalVoted;
        uint256 totalCommited;
        uint256[11] counts;
        uint256[] evidenceSubmitters;
        uint256 appealedBy;
        DataTypes.Vote[] votes;
        DataTypes.Evidence[] evidences;
        address[] drawnJurors;
        address[] judgesClaimed;
        bool closed;
    }

    struct DisputeOutput {
        uint256 createdAt;
        uint256 disputeId;
        uint256 orderId;
        uint256 ruling;
        uint256 ruledAt;
        uint256[] timestamps;
        DataTypes.DisputeState state;
        RoundOutput[] rounds;
    }

    struct PopulatedGig {
        uint256 gigId;
        string metadata;
        uint256 createdAt;
        uint256 successSell;
        uint256 failedSell;
        DataTypes.Review[] reviews;
        DataTypes.Package[] packages;
    }

    struct CalcDisputeDelaysFromBlock {
        uint256 evidenceUntil;
        uint256 commitUntil;
        uint256 voteUntil;
        uint256 appealUntil;
    }

    struct PopulatedUser {
        uint256 userId;
        uint256 buyerUntil;
        uint256 buyerInvites;
        uint256 sellerUntil;
        uint256 sellerInvites;
        uint256 bswanBalance;
        uint256 usdcBalance;
        uint256 xpBalance;
        uint256[] gigIds;
        address wallet;
        bool isBuyer;
        bool isSeller;
        bool isJudge;
        UserOutput[] inviters;
    }

    struct ExecuteClaimAsJudgeOutput {
        bool isVoteCorrect;
        bool isVoteInRange;
        uint256 amountFromDisputeFees;
        uint256 amountFromJurorsTokensAtStake;
        uint256 tokensAtStakePerJuror;
    }
}
