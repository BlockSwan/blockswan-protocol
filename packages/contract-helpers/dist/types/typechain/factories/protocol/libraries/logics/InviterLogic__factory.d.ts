import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { InviterLogic, InviterLogicInterface } from "../../../../protocol/libraries/logics/InviterLogic";
type InviterLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InviterLogic__factory extends ContractFactory {
    constructor(...args: InviterLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<InviterLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): InviterLogic;
    connect(signer: Signer): InviterLogic__factory;
    static readonly bytecode = "0x6103d361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c8063013a9d5b1461006657806301fdfdb6146100a05780636403c82c146100cb5780639917612f146100fe578063db043c5514610132575b600080fd5b6100796100743660046102aa565b610153565b60408051825181526020808401519082015291810151908201526060015b60405180910390f35b6100b36100ae366004610314565b6101e8565b6040516001600160a01b039091168152602001610097565b6100de6100d9366004610336565b610208565b604080516001600160a01b03938416815292909116602083015201610097565b81801561010a57600080fd5b50610122610119366004610314565b60019182015590565b6040519015158152602001610097565b610145610140366004610314565b61024b565b604051908152602001610097565b61017760405180606001604052806000815260200160008152602001600081525090565b600061018b8360000151846020015161024b565b905060006101a684604001518361025390919063ffffffff16565b905060006101b48284610362565b905060405180606001604052808381526020018281526020018487600001516101dd9190610362565b905295945050505050565b600061020183600101548361027990919063ffffffff16565b9392505050565b600080600061021786866101e8565b6001600160a01b03811660009081526020869052604081209192509061023d90876101e8565b919791965090945050505050565b600061020183835b60008115611388198390048411151761026b57600080fd5b506127109102611388010490565b60006102018383600082600001828154811061029757610297610387565b9060005260206000200154905092915050565b6000606082840312156102bc57600080fd5b6040516060810181811067ffffffffffffffff821117156102ed57634e487b7160e01b600052604160045260246000fd5b80604052508235815260208301356020820152604083013560408201528091505092915050565b6000806040838503121561032757600080fd5b50508035926020909101359150565b60008060006060848603121561034b57600080fd5b505081359360208301359350604090920135919050565b60008282101561038257634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fdfea264697066735822122019272d34c04a725cf365581bd8701e94894b266a13ac415777c8495eaf865cc664736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "currencyValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "affiliateShare";
            readonly type: "uint256";
        }];
        readonly name: "calcInviterRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "affiliateShare";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct InputTypes.CalcInvitersRewardsInput";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "calcInvitersRewards";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "inviter0Rewards";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviter1Rewards";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "remainingRewards";
                readonly type: "uint256";
            }];
            readonly internalType: "struct OutputTypes.CalcInvitersRewardsOutput";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): InviterLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InviterLogic;
}
export {};
