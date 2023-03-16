"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abi_1 = require("@ethersproject/abi");
const EIP712Domain = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
];
const ForwardRequest = [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "gas", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "data", type: "bytes" },
];
class MetaTxHekper {
    constructor(provider, forwarderAddress) {
        this.provider = provider;
        this.ForwarderInterface = new abi_1.Interface([
            "function forward(ForwardRequest calldata req) external payable",
        ]);
    }
}
