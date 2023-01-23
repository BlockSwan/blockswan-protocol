// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library RoleKeys {
    // ---- ADMIN ROLES  ------
    bytes32 public constant PROTOCOL_ADMIN_ROLE = "PROTOCOL_ADMIN";
    bytes32 public constant BUYER_ADMIN_ROLE = "BUYER_ADMIN";
    bytes32 public constant SELLER_ADMIN_ROLE = "SELLER_ADMIN";
    // ----  ROLES  ------
    bytes32 public constant BUYER_ROLE = "BUYER";
    bytes32 public constant SELLER_ROLE = "SELLER";
    bytes32 public constant JUDGE_ROLE = "JUDGE";
    bytes32 public constant BLACKLIST_ROLE = "BLACKLIST";
    bytes32 public constant WHITELIST_ROLE = "WHITELIST";
    bytes32 public constant XP_GIVER_ROLE = "XP_GIVER";
}
