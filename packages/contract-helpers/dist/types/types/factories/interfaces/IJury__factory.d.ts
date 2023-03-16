import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IJury, IJuryInterface } from "../../interfaces/IJury";
export declare class IJury__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "numberOfJurors";
            readonly type: "uint256";
        }];
        readonly name: "drawJurors";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "jurors";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly name: "freezeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "juror";
            readonly type: "address";
        }];
        readonly name: "rewardJuror";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "unfreezeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IJuryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IJury;
}
