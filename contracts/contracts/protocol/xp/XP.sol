// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "../../imports/openzeppelin/contracts/ERC20.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {RoleKeys} from "../libraries/helpers/RoleKeys.sol";
import {Errors} from "../libraries/helpers/Errors.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IXP} from "../../interfaces/IXP.sol";

contract XP is ERC20, ProviderContract, IXP {
    using EnumerableMap for EnumerableMap.Bytes32ToUintMap;

    EnumerableMap.Bytes32ToUintMap internal xpAmounts;

    constructor(
        IAddressProvider provider
    ) ProviderContract(provider) ERC20("Experience", "XP", 0) {}

    /// @inheritdoc IXP
    function setXpAmount(
        bytes32 xpKey,
        uint256 xpToReceive
    ) external override onlyProtocolRole(RoleKeys.PROTOCOL_ADMIN_ROLE) {
        xpAmounts.set(xpKey, xpToReceive);
    }

    /// @inheritdoc IXP
    function getXpAmount(
        bytes32 xpKey
    ) public view override returns (bool, uint256) {
        (bool success, uint256 _amount) = xpAmounts.tryGet(xpKey);
        return (success, _amount);
    }

    /// @inheritdoc IXP
    function mint(
        bytes32 xpKey,
        address to
    ) external override onlyProtocolRole(RoleKeys.XP_GIVER_ROLE) {
        (bool success, uint256 _amount) = getXpAmount(xpKey);
        require(success, Errors.NO_MATCHING_XP_KEY);
        _mint(to, _amount);
    }

    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override onlyProtocolRole(RoleKeys.XP_GIVER_ROLE) {
        super._beforeTokenTransfer(from, to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20) {
        super._burn(account, amount);
    }
}
