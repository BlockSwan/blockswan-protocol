import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProviderContract, IProviderContractInterface } from "../../interfaces/IProviderContract";
export declare class IProviderContract__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ADDRESSES_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "contract IAddressProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }];
        readonly name: "fetchContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "kill";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IAddressProvider";
            readonly name: "_providerAddress";
            readonly type: "address";
        }];
        readonly name: "setProvider";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IProviderContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProviderContract;
}
