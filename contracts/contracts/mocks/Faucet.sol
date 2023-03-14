// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {IERC20} from "../imports/openzeppelin/contracts/IERC20.sol";
import {GPv2SafeERC20} from "../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {ERC20} from "../imports/openzeppelin/contracts/ERC20.sol";
import {Ownable} from "../imports/openzeppelin/contracts/Ownable.sol";
import {MinimalForwarder} from "../imports/openzeppelin/contracts/MinimalForwarder.sol";
import {ERC2771Context} from "../imports/openzeppelin/contracts/ERC2771Context.sol";

import {Context} from "../imports/openzeppelin/contracts/Context.sol";

contract Faucet is ERC2771Context, Ownable {
    using GPv2SafeERC20 for IERC20;

    struct Tokens {
        uint256 native;
        uint256 erc20;
    }

    Tokens public mintDelays;
    Tokens public mintAmounts;
    // (user account => last claim timestamp)
    mapping(address => uint256) public lastNativeClaim;
    // (token address => (user account => last claim timestamp)
    mapping(address => mapping(address => uint256)) public lastERC20Claim;

    event ClaimNative(address indexed user, uint256 amount);
    event ClaimERC20(
        address indexed token,
        address indexed user,
        uint256 amount
    );

    constructor(
        Tokens memory _mintDelays,
        Tokens memory _mintAmount,
        MinimalForwarder _forwarder
    ) payable ERC2771Context(address(_forwarder)) {
        setMintDelays(_mintDelays);
        setMintAmounts(_mintAmount);
    }

    receive() external payable {}

    fallback() external payable {}

    function fundNative() public payable {}

    function setMintDelays(Tokens memory _mintDelays) public onlyOwner {
        mintDelays = _mintDelays;
    }

    function setMintAmounts(Tokens memory _mintAmounts) public onlyOwner {
        mintAmounts = _mintAmounts;
    }

    function claimNative() public {
        address caller = ERC2771Context._msgSender();
        require(
            block.timestamp - lastNativeClaim[caller] >= mintDelays.native,
            "Faucet: claim too soon"
        );
        lastNativeClaim[caller] = block.timestamp;
        payable(caller).transfer(mintAmounts.native);
        emit ClaimNative(caller, mintAmounts.native);
    }

    function claimERC20(address token) public {
        address caller = _msgSender();
        require(
            block.timestamp - lastERC20Claim[token][caller] >= mintDelays.erc20,
            "Faucet: claim too soon"
        );
        lastERC20Claim[token][caller] = block.timestamp;
        IERC20(token).safeTransfer(caller, mintAmounts.erc20);
        emit ClaimERC20(token, caller, mintAmounts.erc20);
    }

    function withdrawAllNative() public onlyOwner {
        payable(_msgSender()).transfer(address(this).balance);
    }

    function withdrawAllERC20(address token) public onlyOwner {
        IERC20(token).safeTransfer(
            _msgSender(),
            IERC20(token).balanceOf(address(this))
        );
    }

    function getSettings() public view returns (Tokens memory, Tokens memory) {
        return (mintDelays, mintAmounts);
    }

    function _msgData()
        internal
        view
        virtual
        override(Context, ERC2771Context)
        returns (bytes calldata)
    {
        return super._msgData();
    }

    function _msgSender()
        internal
        view
        virtual
        override(Context, ERC2771Context)
        returns (address sender)
    {
        return super._msgSender();
    }
}
