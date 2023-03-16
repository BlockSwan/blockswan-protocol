import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOrder, IOrderInterface } from "../../interfaces/IOrder";
export declare class IOrder__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }];
        readonly name: "getOrderById";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "brief";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "gigId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "disputeId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "bool";
                readonly name: "disputed";
                readonly type: "bool";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "price";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "buyerFees";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sellerFees";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "createdAt";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "currency";
                    readonly type: "address";
                }];
                readonly internalType: "struct DataTypes.Invoice";
                readonly name: "invoice";
                readonly type: "tuple";
            }, {
                readonly internalType: "enum DataTypes.OrderState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct OutputTypes.OrderOutput";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "winningChoice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "procecutorId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "defendantId";
            readonly type: "uint256";
        }];
        readonly name: "rule";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IOrderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOrder;
}
