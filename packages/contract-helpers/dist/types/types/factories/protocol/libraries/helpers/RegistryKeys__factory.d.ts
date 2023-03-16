import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { RegistryKeys, RegistryKeysInterface } from "../../../../protocol/libraries/helpers/RegistryKeys";
type RegistryKeysConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RegistryKeys__factory extends ContractFactory {
    constructor(...args: RegistryKeysConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RegistryKeys>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RegistryKeys;
    connect(signer: Signer): RegistryKeys__factory;
    static readonly bytecode = "0x6101f261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c80639359021b1161007b5780639359021b1461015c578063a8a652eb14610169578063c396cbf41461017e578063db7895e214610195578063e5a379dd146101a3578063fbfb816b146101af57600080fd5b80633a21453b146100c35780634d5e07fb146100e65780635e209249146100f5578063742b12821461010857806381e167cf146101275780639035d57b14610135575b600080fd5b6100d4664449535055544560c81b81565b60405190815260200160405180910390f35b6100d46427a92222a960d91b81565b6100d46820a1a62fa0a226a4a760b91b81565b6100d474282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b81565b6100d4632aa9a2a960e11b81565b6100d47f426c6f636b7377616e2f536f72746974696f6e53756d5472656573000000000081565b6100d46247494760e81b81565b6100d46a20a1a62fa6a0a720a3a2a960a91b81565b6100d46c2220aa20afa82927ab24a222a960991b81565b6100d4634a55525960e01b81565b6100d461058560f41b81565b6100d46211105560ea1b8156fea2646970667358221220eaaa5a43a50bcf720b545cfc4c37d95becf6131f507af0096316f3039f7ca2e564736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ACL_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ACL_MANAGER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DAT";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DATA_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DISPUTE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "GIG";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "JURY";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ORDER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROTOCOL_CONFIGURATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TREE_KEY";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "USER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "XP";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RegistryKeysInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RegistryKeys;
}
export {};
