// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";

library DataTypes {
    using EnumerableSet for EnumerableSet.UintSet;

    enum OrderState {
        UNCONFIRMED,
        CONFIRMED,
        TRIAL,
        PENDING,
        DONE
        // UPDATING
    }

    struct DelayTimestamp {
        uint256 selfRefund;
        uint256 closeTrial;
        uint256 endTrial;
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

    struct Order {
        string metadata;
        string brief;
        uint256 sellerFeesVersion;
        uint256 toTrial;
        uint256 toProceed;
        uint256 createdAt;
        uint256 buyerId;
        uint256 sellerId;
        uint256 gigId;
        Package package;
        OrderState state;
        IERC20 currency;
        EnumerableSet.UintSet reviewIds;
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

    struct RetributionParams {
        uint256 affiliate;
        uint256 lvl0AffiliateShare;
    }
}
