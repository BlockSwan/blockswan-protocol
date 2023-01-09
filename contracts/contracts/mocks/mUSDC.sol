// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import {ERC20} from "../imports/openzeppelin/contracts/ERC20.sol";
import {Ownable} from "../imports/openzeppelin/contracts/Ownable.sol";

contract mUSDC is ERC20, Ownable {
    constructor() ERC20("MockUSDC", "mUSDC", 6) {}

    function mint(uint256 amountToMint) public {
        _mint(msg.sender, amountToMint);
    }

    function mintTo(address receiver, uint256 amountToMint) public {
        _mint(receiver, amountToMint);
    }
}
