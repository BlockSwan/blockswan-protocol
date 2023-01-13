// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../../imports/openzeppelin/contracts/EnumerableSet.sol";

library DataTypes {
    using EnumerableSet for EnumerableSet.UintSet;

    struct User {
        string metadata;
        uint256 inviterId;
        uint256 buyerUntil;
        uint256 buyerInvites;
    }

    struct Gig {
        string metadata;
    }

    struct Order {
        string metadata;
        uint256 buyerId;
        uint256 sellerId;
        uint256 price;
        IERC20 currency;
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

    struct OrderParams {
        uint256 trialFlat;
        uint256 trialPercent;
        uint256 proceedFlat;
        uint256 proceesPercent;
    }

    struct RetributionParams {
        uint256 affiliate;
        uint256 lvl0AffiliateShare;
    }
}
