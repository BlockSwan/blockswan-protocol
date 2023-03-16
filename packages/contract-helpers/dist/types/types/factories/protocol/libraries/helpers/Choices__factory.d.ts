import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { Choices, ChoicesInterface } from "../../../../protocol/libraries/helpers/Choices";
type ChoicesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Choices__factory extends ContractFactory {
    constructor(...args: ChoicesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Choices>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Choices;
    connect(signer: Signer): Choices__factory;
    static readonly bytecode = "0x61016d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c8063ad79d7c21161007b578063ad79d7c21461010a578063ce47d6d414610113578063dd0081c71461011c578063ea31d02f14610125578063ed7867f71461012e578063ee01e5e71461011c57600080fd5b80630e4ff258146100c357806318b66bc1146100de5780631e04cbf3146100e657806356f03939146100ef5780635f792fc8146100f8578063886a9c5014610101575b600080fd5b6100cc611b5881565b60405190815260200160405180910390f35b6100cc600081565b6100cc61138881565b6100cc610bb881565b6100cc61232881565b6100cc61177081565b6100cc610fa081565b6100cc6103e881565b6100cc61271081565b6100cc611f4081565b6100cc6107d08156fea264697066735822122058079ac645b27f8de08d7f6a0106acc640ac2ba861439b81c16ca594c12e62f064736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "EIGHTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FIFTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FORTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NINETY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONE_HUNDRED_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERCENTAGE_FACTOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SEVENTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SIXTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TEN_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "THIRTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TWENTY_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZERO_PERCENT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ChoicesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Choices;
}
export {};
