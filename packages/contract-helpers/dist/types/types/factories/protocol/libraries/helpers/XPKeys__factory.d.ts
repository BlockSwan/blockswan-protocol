import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { XPKeys, XPKeysInterface } from "../../../../protocol/libraries/helpers/XPKeys";
type XPKeysConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class XPKeys__factory extends ContractFactory {
    constructor(...args: XPKeysConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<XPKeys>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): XPKeys;
    connect(signer: Signer): XPKeys__factory;
    static readonly bytecode = "0x61010d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610605b5760003560e01c80630a1ff2261460605780634097840114608857806388090a5d14609a578063baf7e3621460af578063d8ea86be1460c2575b600080fd5b60766c2122a1a7a6a2afa9a2a62622a960991b81565b60405190815260200160405180910390f35b6076682820acafa7a92222a960b91b81565b60766b21a922a0aa22afa7a92222a960a11b81565b6076694352454154455f47494760b01b81565b60766b2122a1a7a6a2afa12aaca2a960a11b8156fea26469706673582212202549a084a12878eec5d03403a4048a6988707e25a5472f8ee83f50c245a4605864736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "BECOME_BUYER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BECOME_SELLER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CREATE_GIG";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CREATE_ORDER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PAY_ORDER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): XPKeysInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): XPKeys;
}
export {};
