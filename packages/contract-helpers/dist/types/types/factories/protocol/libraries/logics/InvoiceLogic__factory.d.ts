import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { InvoiceLogic, InvoiceLogicInterface } from "../../../../protocol/libraries/logics/InvoiceLogic";
type InvoiceLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InvoiceLogic__factory extends ContractFactory {
    constructor(...args: InvoiceLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<InvoiceLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): InvoiceLogic;
    connect(signer: Signer): InvoiceLogic__factory;
    static readonly bytecode = "0x61033461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c80631a9d78131461006657806378645da714610066578063b92aa3c01461008c578063da6e40d51461009f578063f4b84e59146100cf575b600080fd5b61007961007436600461020c565b6100e2565b6040519081526020015b60405180910390f35b61007961009a366004610239565b610109565b8180156100ab57600080fd5b506100bf6100ba366004610252565b610122565b6040519015158152602001610083565b6100796100dd366004610239565b610176565b80516020820151600091906100f8908590610189565b61010291906102cf565b9392505050565b6002810154815460009161011c916102e7565b92915050565b838555600061013185846100e2565b600187015561014085836100e2565b6002870155504260038601556004850180546001600160a01b0385166001600160a01b0319909116179055600195945050505050565b6001810154815460009161011c916102cf565b6000811561138819839004841115176101a157600080fd5b506127109102611388010490565b6000604082840312156101c157600080fd5b6040516040810181811067ffffffffffffffff821117156101f257634e487b7160e01b600052604160045260246000fd5b604052823581526020928301359281019290925250919050565b6000806060838503121561021f57600080fd5b8235915061023084602085016101af565b90509250929050565b60006020828403121561024b57600080fd5b5035919050565b600080600080600060e0868803121561026a57600080fd5b853594506020860135935060408601356001600160a01b038116811461028f57600080fd5b925061029e87606088016101af565b91506102ad8760a088016101af565b90509295509295909350565b634e487b7160e01b600052601160045260246000fd5b600082198211156102e2576102e26102b9565b500190565b6000828210156102f9576102f96102b9565b50039056fea2646970667358221220d08e3de379e273125faca032bae81baa3bff3a84575ebf641f9563a851f08baf64736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "buyerFees";
            readonly type: "tuple";
        }];
        readonly name: "calcBuyerFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "sellerFees";
            readonly type: "tuple";
        }];
        readonly name: "calcSellerFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): InvoiceLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InvoiceLogic;
}
export {};
