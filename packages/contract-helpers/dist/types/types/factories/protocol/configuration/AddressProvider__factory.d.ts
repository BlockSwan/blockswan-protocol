import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { AddressProvider, AddressProviderInterface } from "../../../protocol/configuration/AddressProvider";
type AddressProviderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressProvider__factory extends ContractFactory {
    constructor(...args: AddressProviderConstructorParams);
    deploy(marketplaceId: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AddressProvider>;
    getDeployTransaction(marketplaceId: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AddressProvider;
    connect(signer: Signer): AddressProvider__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200125b3803806200125b8339810160408190526200003491620003a5565b6200003f336200005d565b6200004a82620000ad565b6200005581620001b8565b5050620004cd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060018054620000be9062000472565b80601f0160208091040260200160405190810160405280929190818152602001828054620000ec9062000472565b80156200013d5780601f1062000111576101008083540402835291602001916200013d565b820191906000526020600020905b8154815290600101906020018083116200011f57829003601f168201915b505085519394506200015b9360019350602087019250905062000299565b50816040516200016c9190620004af565b604051809103902081604051620001849190620004af565b604051908190038120907fc8a4db255dfa968e314eb5d064b4ded5d2454ba98dcb6e40a161964326b11ee590600090a35050565b620001c26200023b565b6001600160a01b0381166200022d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b62000238816200005d565b50565b6000546001600160a01b03163314620002975760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000224565b565b828054620002a79062000472565b90600052602060002090601f016020900481019282620002cb576000855562000316565b82601f10620002e657805160ff191683800117855562000316565b8280016001018555821562000316579182015b8281111562000316578251825591602001919060010190620002f9565b506200032492915062000328565b5090565b5b8082111562000324576000815560010162000329565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200037257818101518382015260200162000358565b8381111562000382576000848401525b50505050565b80516001600160a01b0381168114620003a057600080fd5b919050565b60008060408385031215620003b957600080fd5b82516001600160401b0380821115620003d157600080fd5b818501915085601f830112620003e657600080fd5b815181811115620003fb57620003fb6200033f565b604051601f8201601f19908116603f011681019083821181831017156200042657620004266200033f565b816040528281528860208487010111156200044057600080fd5b6200045383602083016020880162000355565b8096505050505050620004696020840162000388565b90509250929050565b600181811c908216806200048757607f821691505b60208210811415620004a957634e487b7160e01b600052602260045260246000fd5b50919050565b60008251620004c381846020870162000355565b9190910192915050565b610d7e80620004dd6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063a43e04d811610066578063a43e04d814610193578063e16c7d98146101a6578063efa6bc43146101cf578063f2fde38b146101fd57600080fd5b80638da5cb5b1461015c57806396f27b291461016d5780639c44d17a1461018057600080fd5b806306a87c59146100d457806319872f76146101045780632ef3b9b6146101175780635188f9961461012c5780635fb0db5a1461013f578063715018a614610154575b600080fd5b6100e76100e2366004610ae7565b610210565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e7610112366004610b09565b610270565b61012a610125366004610b38565b6102d3565b005b61012a61013a366004610c05565b6102e7565b610147610450565b6040516100fb9190610c61565b61012a6104e2565b6000546001600160a01b03166100e7565b6100e761017b366004610ae7565b6104f6565b61012a61018e366004610c05565b610587565b61012a6101a1366004610b09565b6106e7565b6100e76101b4366004610b09565b6000908152600260205260409020546001600160a01b031690565b6101ef6101dd366004610b09565b60009081526003602052604090205490565b6040519081526020016100fb565b61012a61020b366004610c94565b6107df565b60008061021d84846104f6565b6040805180820190915260018152603560f81b60208201529091506001600160a01b0382166102685760405162461bcd60e51b815260040161025f9190610c61565b60405180910390fd5b509392505050565b60008181526002602052604081205481906001600160a01b03166040805180820190915260018152603560f81b60208201529091506001600160a01b0382166102cc5760405162461bcd60e51b815260040161025f9190610c61565b5092915050565b6102db610855565b6102e4816108af565b50565b6102ef610855565b60008281526002602090815260409182902054825180840190935260018352600d60fa1b918301919091526001600160a01b0316156103415760405162461bcd60e51b815260040161025f9190610c61565b506040805180820190915260018152603560f81b60208201526001600160a01b0382166103815760405162461bcd60e51b815260040161025f9190610c61565b506001600160a01b0381163b151580156103a157506211105560ea1b8214155b156104005760405163033f635b60e61b81523060048201526001600160a01b0382169063cfd8d6c090602401600060405180830381600087803b1580156103e757600080fd5b505af11580156103fb573d6000803e3d6000fd5b505050505b61040a82826109ac565b604080518381526001600160a01b03831660208201527f643cefa5894755d9e02f78cb384977d4ee3a06c8394b062a290e19176e9c69de91015b60405180910390a15050565b60606001805461045f90610cb6565b80601f016020809104026020016040519081016040528092919081815260200182805461048b90610cb6565b80156104d85780601f106104ad576101008083540402835291602001916104d8565b820191906000526020600020905b8154815290600101906020018083116104bb57829003601f168201915b5050505050905090565b6104ea610855565b6104f460006109fe565b565b600082815260036020908152604080832054815180830190925260018252601b60f91b92820192909252908311156105415760405162461bcd60e51b815260040161025f9190610c61565b50600083815260036020526040902061055b600184610cf1565b8154811061056b5761056b610d16565b6000918252602090912001546001600160a01b03169392505050565b61058f610855565b60008281526002602090815260409182902054825180840190935260018352603560f81b918301919091526001600160a01b031690816105e25760405162461bcd60e51b815260040161025f9190610c61565b50806001600160a01b03166341c0e1b56040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561061e57600080fd5b505af1158015610632573d6000803e3d6000fd5b505060405163033f635b60e61b81523060048201526001600160a01b038516925063cfd8d6c09150602401600060405180830381600087803b15801561067757600080fd5b505af115801561068b573d6000803e3d6000fd5b5050505061069983836109ac565b604080518481526001600160a01b03838116602083015284168183015290517f8b3c9342e23b53b74b0f760c251b1b6b5553d1c3d23239357405f70d5fe43d559181900360600190a1505050565b6106ef610855565b60008181526002602090815260409182902054825180840190935260018352603560f81b918301919091526001600160a01b031690816107425760405162461bcd60e51b815260040161025f9190610c61565b50806001600160a01b03166341c0e1b56040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561077e57600080fd5b505af1158015610792573d6000803e3d6000fd5b505050506107a18260006109ac565b604080518381526001600160a01b03831660208201527f266f45300baf5abcdb8653dcec68c843b20fb984df2fae4cd1e3fecaf46199529101610444565b6107e7610855565b6001600160a01b03811661084c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161025f565b6102e4816109fe565b6000546001600160a01b031633146104f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161025f565b6000600180546108be90610cb6565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea90610cb6565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b5050855193945061095393600193506020870192509050610a4e565b50816040516109629190610d2c565b6040518091039020816040516109789190610d2c565b604051908190038120907fc8a4db255dfa968e314eb5d064b4ded5d2454ba98dcb6e40a161964326b11ee590600090a35050565b600091825260026020908152604080842080546001600160a01b039094166001600160a01b03199485168117909155600383529084208054600181018255908552919093200180549091169091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610a5a90610cb6565b90600052602060002090601f016020900481019282610a7c5760008555610ac2565b82601f10610a9557805160ff1916838001178555610ac2565b82800160010185558215610ac2579182015b82811115610ac2578251825591602001919060010190610aa7565b50610ace929150610ad2565b5090565b5b80821115610ace5760008155600101610ad3565b60008060408385031215610afa57600080fd5b50508035926020909101359150565b600060208284031215610b1b57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610b4a57600080fd5b813567ffffffffffffffff80821115610b6257600080fd5b818401915084601f830112610b7657600080fd5b813581811115610b8857610b88610b22565b604051601f8201601f19908116603f01168101908382118183101715610bb057610bb0610b22565b81604052828152876020848701011115610bc957600080fd5b826020860160208301376000928101602001929092525095945050505050565b80356001600160a01b0381168114610c0057600080fd5b919050565b60008060408385031215610c1857600080fd5b82359150610c2860208401610be9565b90509250929050565b60005b83811015610c4c578181015183820152602001610c34565b83811115610c5b576000848401525b50505050565b6020815260008251806020840152610c80816040850160208701610c31565b601f01601f19169190910160400192915050565b600060208284031215610ca657600080fd5b610caf82610be9565b9392505050565b600181811c90821680610cca57607f821691505b60208210811415610ceb57634e487b7160e01b600052602260045260246000fd5b50919050565b600082821015610d1157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b60008251610d3e818460208701610c31565b919091019291505056fea264697066735822122040688b156c1c3fd9ddf5485e6b573cad5f8610425343bfc4aaf3fb611646785764736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "marketplaceId";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "ContractAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "ContractRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_newAddress";
            readonly type: "address";
        }];
        readonly name: "ContractUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "oldMarketplaceId";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "newMarketplaceId";
            readonly type: "string";
        }];
        readonly name: "MarketplaceIdSet";
        readonly type: "event";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "addContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_version";
            readonly type: "uint256";
        }];
        readonly name: "fetchContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddr";
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
            readonly name: "contractAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_version";
            readonly type: "uint256";
        }];
        readonly name: "getContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddr";
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
        readonly name: "getContract";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "contractAddr";
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
        readonly name: "getContractVersionCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMarketplaceId";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }];
        readonly name: "removeContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "newMarketplaceId";
            readonly type: "string";
        }];
        readonly name: "setMarketplaceId";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_newAddress";
            readonly type: "address";
        }];
        readonly name: "upgradeContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AddressProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressProvider;
}
export {};
