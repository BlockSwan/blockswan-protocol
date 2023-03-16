import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { RoleKeys, RoleKeysInterface } from "../../../../protocol/libraries/helpers/RoleKeys";
type RoleKeysConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoleKeys__factory extends ContractFactory {
    constructor(...args: RoleKeysConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RoleKeys>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RoleKeys;
    connect(signer: Signer): RoleKeys__factory;
    static readonly bytecode = "0x61019361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c806383d708261161007057806383d70826146100fb57806397125aa114610111578063aee2bc8614610126578063dbe4613d1461013e578063e0e475881461014e57600080fd5b806319afe463146100a25780631ed17e32146100c75780637a01a1da146100d95780637a997ab7146100e8575b600080fd5b6100b56810931050d2d31254d560ba1b81565b60405190815260200160405180910390f35b6100b5672c282fa3a4ab22a960c11b81565b6100b564212aaca2a960d91b81565b6100b56815d2125511531254d560ba1b81565b6100b56b29a2a62622a92fa0a226a4a760a11b81565b6100b56a212aaca2a92fa0a226a4a760a91b81565b6100b56d282927aa27a1a7a62fa0a226a4a760911b81565b6100b56529a2a62622a960d11b81565b6100b5644a5544474560d81b8156fea264697066735822122001e9ea64e60f2c90f98f3942da9bdcf29653772e490a918cae82261a6a546f9964736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "BLACKLIST_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BUYER_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BUYER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "JUDGE_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROTOCOL_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SELLER_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SELLER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "WHITELIST_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "XP_GIVER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RoleKeysInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoleKeys;
}
export {};
