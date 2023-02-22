// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library RegistryKeys {
    /// REGISTRY
    //  ----  CONTRACT ------
    bytes32 public constant GIG = "GIG";
    bytes32 public constant ORDER = "ORDER";
    bytes32 public constant USER = "USER";
    bytes32 public constant DISPUTE = "DISPUTE";
    bytes32 public constant JURY = "JURY";
    bytes32 public constant PROTOCOL_CONFIGURATOR = "PROTOCOL_CONFIGURATOR";
    bytes32 public constant DAT = "DAT";
    bytes32 public constant ACL_MANAGER = "ACL_MANAGER";
    bytes32 public constant DATA_PROVIDER = "DATA_PROVIDER";
    bytes32 public constant XP = "XP";
    // ---- NON CONTRACT ------
    bytes32 public constant ACL_ADMIN = "ACL_ADMIN";

    bytes32 public constant TREE_KEY = "Blockswan/SortitionSumTrees";
}
