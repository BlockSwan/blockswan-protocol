import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ProviderContract, ProviderContractInterface } from "../../../protocol/configuration/ProviderContract";
type ProviderContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProviderContract__factory extends ContractFactory {
    constructor(...args: ProviderContractConstructorParams);
    deploy(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ProviderContract>;
    getDeployTransaction(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ProviderContract;
    connect(signer: Signer): ProviderContract__factory;
    static readonly bytecode = "0x608060405260001960025534801561001657600080fd5b50604051610ed0380380610ed0833981016040819052610035916100fc565b61003e336100ac565b6040805180820190915260018152603560f81b60208201526001600160a01b0382166100865760405162461bcd60e51b815260040161007d919061012c565b60405180910390fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055610181565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561010e57600080fd5b81516001600160a01b038116811461012557600080fd5b9392505050565b600060208083528351808285015260005b818110156101595785810183015185820160400152820161013d565b8181111561016b576000604083870101525b50601f01601f1916929092016040019392505050565b610d40806101906000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063cfd8d6c011610066578063cfd8d6c0146101be578063daea85c5146101d1578063e5b5019a146101e4578063f2fde38b146101fb57600080fd5b80638da5cb5b14610187578063985fadc814610198578063b817bcf7146101ab57600080fd5b806319872f76116100c857806319872f761461014f57806341c0e1b514610162578063715018a61461016c57806379a558e71461017457600080fd5b80630542975c146100ef57806311e0c07b146101195780631848effa1461013c575b600080fd5b6001546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b61012c6101273660046108bb565b61020e565b6040519015158152602001610110565b6001546100fc906001600160a01b031681565b6100fc61015d3660046108f4565b610298565b61016a61031b565b005b61016a610343565b61012c61018236600461090d565b610357565b6000546001600160a01b03166100fc565b61012c6101a6366004610931565b61040d565b61012c6101b936600461090d565b610471565b61016a6101cc36600461090d565b610528565b61016a6101df36600461090d565b61067b565b6101ed60025481565b604051908152602001610110565b61016a61020936600461090d565b610783565b60405163fbd2817f60e01b815260048101849052602481018390526000906001600160a01b0383169063fbd2817f9060440160206040518083038186803b15801561025857600080fd5b505afa15801561026c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102909190610961565b949350505050565b600154604051630cc397bb60e11b8152600481018390526000916001600160a01b0316906319872f769060240160206040518083038186803b1580156102dd57600080fd5b505afa1580156102f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103159190610993565b92915050565b6001546001600160a01b03163314610335576103356109b0565b6001546001600160a01b0316ff5b61034b6107fc565b6103556000610856565b565b600061036b64212aaca2a960d91b8361040d565b8015610315575042610383632aa9a2a960e11b610298565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b1580156103c657600080fd5b505afa1580156103da573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104029190810190610b43565b604001511192915050565b6000806104276a20a1a62fa6a0a720a3a2a960a91b610298565b604051632474521560e21b8152600481018690526001600160a01b03858116602483015291909116906391d148549060440160206040518083038186803b15801561025857600080fd5b60006104866529a2a62622a960d11b8361040d565b801561031557504261049e632aa9a2a960e11b610298565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b1580156104e157600080fd5b505afa1580156104f5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261051d9190810190610b43565b608001511192915050565b6001600160a01b038116158061054857506001546001600160a01b031633145b806105d45750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561059157600080fd5b505afa1580156105a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c99190610993565b6001600160a01b0316145b6106595760405162461bcd60e51b815260206004820152604560248201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060448201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060648201526437bbb732b960d91b608482015260a4015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6d282927aa27a1a7a62fa0a226a4a760911b610697813361040d565b6106e35760405162461bcd60e51b815260206004820152601c60248201527f5265717569726573206d73672e73656e6465722068617320726f6c65000000006044820152606401610650565b60006106f46211105560ea1b610298565b60025460405163095ea7b360e01b81526001600160a01b038084166004830152602482019290925291925084169063095ea7b390604401602060405180830381600087803b15801561074557600080fd5b505af1158015610759573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077d9190610961565b50505050565b61078b6107fc565b6001600160a01b0381166107f05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610650565b6107f981610856565b50565b6000546001600160a01b031633146103555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610650565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146107f957600080fd5b6000806000606084860312156108d057600080fd5b833592506020840135915060408401356108e9816108a6565b809150509250925092565b60006020828403121561090657600080fd5b5035919050565b60006020828403121561091f57600080fd5b813561092a816108a6565b9392505050565b6000806040838503121561094457600080fd5b823591506020830135610956816108a6565b809150509250929050565b60006020828403121561097357600080fd5b8151801515811461092a57600080fd5b805161098e816108a6565b919050565b6000602082840312156109a557600080fd5b815161092a816108a6565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715610a0057610a006109c6565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a2f57610a2f6109c6565b604052919050565b600082601f830112610a4857600080fd5b815167ffffffffffffffff811115610a6257610a626109c6565b6020610a76601f8301601f19168201610a06565b8281528582848701011115610a8a57600080fd5b60005b83811015610aa8578581018301518282018401528201610a8d565b83811115610ab95760008385840101525b5095945050505050565b600082601f830112610ad457600080fd5b8151602067ffffffffffffffff821115610af057610af06109c6565b8160051b610aff828201610a06565b9283528481018201928281019087851115610b1957600080fd5b83870192505b84831015610b3857825182529183019190830190610b1f565b979650505050505050565b600060208284031215610b5557600080fd5b815167ffffffffffffffff80821115610b6d57600080fd5b908301906101e08286031215610b8257600080fd5b610b8a6109dc565b825182811115610b9957600080fd5b610ba587828601610a37565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152610bf060e08401610983565b60e08201526101008084015183811115610c0957600080fd5b610c1588828701610ac3565b8284015250506101208084015183811115610c2f57600080fd5b610c3b88828701610ac3565b8284015250506101408084015183811115610c5557600080fd5b610c6188828701610ac3565b8284015250506101608084015183811115610c7b57600080fd5b610c8788828701610ac3565b8284015250506101808084015183811115610ca157600080fd5b610cad88828701610ac3565b8284015250506101a08084015183811115610cc757600080fd5b610cd388828701610ac3565b8284015250506101c08084015183811115610ced57600080fd5b610cf988828701610ac3565b91830191909152509594505050505056fea26469706673582212207246201f7e1700d947360e091bfece7808e469b1bebfdb16ae5b9e13d7c21b0d64736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAddressProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
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
        readonly inputs: readonly [];
        readonly name: "ADDRESS_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "contract IAddressProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_UINT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "erc20";
            readonly type: "address";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasProtocolRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IUser";
            readonly name: "UserContract";
            readonly type: "address";
        }];
        readonly name: "isGigOwner";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isStillBuyer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isStillSeller";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProviderContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProviderContract;
}
export {};