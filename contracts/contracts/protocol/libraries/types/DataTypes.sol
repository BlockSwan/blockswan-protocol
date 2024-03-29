// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../../imports/openzeppelin/contracts/EnumerableMap.sol";

library DataTypes {
    using EnumerableSet for EnumerableSet.UintSet;
    using EnumerableSet for EnumerableSet.AddressSet;
    using EnumerableMap for EnumerableMap.UintToUintMap;

    enum OrderState {
        UNCONFIRMED,
        CONFIRMED,
        DISPUTED,
        DONE
    }

    enum DisputeState {
        EVIDENCE,
        COMMIT,
        VOTE,
        APPEAL,
        EXECUTION
    }

    struct DelayTimestamp {
        uint256 selfRefund;
        uint256 evidence;
        uint256 commit;
        uint256 vote;
        uint256 appeal;
    }

    struct User {
        string metadata;
        uint256 inviterId;
        uint256 buyerUntil;
        uint256 buyerInvites;
        uint256 sellerUntil;
        uint256 sellerInvites;
        EnumerableSet.UintSet gigIds;
        EnumerableSet.UintSet offerIds;
        EnumerableSet.UintSet bidIds;
        EnumerableSet.UintSet buyerOrderIds;
        EnumerableSet.UintSet gigReviewsIds;
        EnumerableSet.UintSet userReviewsIds;
        EnumerableSet.UintSet reviewsIds;
    }

    struct Package {
        uint256 price;
        uint256 timeDelivery;
    }

    struct Gig {
        string metadata;
        uint256 createdAt;
        bool isPaused;
        EnumerableSet.UintSet reviewIds;
        EnumerableSet.UintSet orderIds;
        Counters.Counter successSell;
        Counters.Counter failedSell;
        Package[3] packages;
    }

    struct Invoice {
        uint256 price;
        uint256 buyerFees;
        uint256 sellerFees;
        uint256 createdAt;
        IERC20 currency;
    }

    struct Order {
        string metadata;
        string brief;
        uint256 buyerId;
        uint256 sellerId;
        uint256 gigId;
        uint256 disputeId;
        bool disputed;
        Invoice invoice;
        OrderState state;
        EnumerableSet.UintSet reviewIds;
    }

    struct Evidence {
        uint256 userId;
        bytes32 role;
        string metadata;
    }

    struct Vote {
        address account;
        bytes32 commit;
        uint256 choice;
        uint256 weight;
        string justification;
        bool hasVoted;
    }

    struct Juror {
        uint256 stakedTokens;
        uint256 freezedTokens;
    }

    struct Round {
        uint256 procecutorId;
        uint256 defendantId;
        uint256 appealFeeRewards;
        uint256 maxVotes;
        uint256 tokensAtStakePerJuror;
        uint256 totalFeesForJurors;
        uint256 penalties;
        uint256 winningChoice;
        uint256 totalRepartitions;
        uint256 totalVoted;
        uint256 totalCommited;
        uint256 appealedBy;
        uint256[11] counts;
        EnumerableSet.UintSet evidenceSubmitters;
        EnumerableSet.AddressSet judgesClaimed;
        Vote[] votes;
        Evidence[] evidences;
        address[] drawnJurors;
        bool closed;
    }

    struct Dispute {
        uint256 createdAt;
        uint256 orderId;
        uint256 ruling;
        uint256 ruledAt;
        uint256[] timestamps;
        DisputeState state;
        Round[] rounds;
    }

    struct Review {
        uint256 authorId;
        string metadata;
    }

    struct ServiceProvider {
        address wallet;
        string endpoint;
    }

    struct EntryParams {
        uint256 currencyValue;
        uint256 timeAdded;
        uint256 xpEarned;
        uint8 invitationEarned;
    }

    struct CreationParams {
        uint256 currencyValue;
        uint256 xpEarned;
    }

    struct OrderPriceParams {
        uint256 trialFlat;
        uint256 trialPercent;
        uint256 proceedFlat;
        uint256 proceedPercent;
    }

    struct FeeParams {
        uint256 flat;
        uint256 percent;
    }

    struct RetributionParams {
        uint256 affiliate;
        uint256 lvl0AffiliateShare;
    }

    struct DisputeParams {
        uint256 minStake;
        uint256 alpha;
        uint256 feePerJuror;
        uint256 maxVotes;
    }
}
