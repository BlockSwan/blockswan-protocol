// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import {Counters} from "../../../imports/openzeppelin/contracts/Counters.sol";
import {IERC20} from "../../../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../../../imports/gnosis/contracts/GPv2SafeERC20.sol";

library DataTypes {
    struct User {
        string metadata;
        uint256 inviterId;
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
}
