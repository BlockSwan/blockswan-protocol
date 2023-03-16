import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ProviderRegistry, ProviderRegistryInterface } from "../../../protocol/configuration/ProviderRegistry";
type ProviderRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProviderRegistry__factory extends ContractFactory {
    constructor(...args: ProviderRegistryConstructorParams);
    deploy(owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ProviderRegistry>;
    getDeployTransaction(owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ProviderRegistry;
    connect(signer: Signer): ProviderRegistry__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516109c93803806109c983398101604081905261002f91610171565b61003833610047565b61004181610097565b506101a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61009f610115565b6001600160a01b0381166101095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61011281610047565b50565b6000546001600160a01b0316331461016f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610100565b565b60006020828403121561018357600080fd5b81516001600160a01b038116811461019a57600080fd5b9392505050565b610819806101b06000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c4ea1e0d1161005b578063c4ea1e0d146100e7578063d1bb2da1146100fc578063f2e596b014610133578063f2fde38b1461015c57600080fd5b8063389140b81461008d578063715018a6146100a25780638da5cb5b146100aa5780639219d4f5146100d4575b600080fd5b6100a061009b36600461068b565b61016f565b005b6100a0610253565b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6100a06100e23660046106ad565b610267565b6100ef6103fa565b6040516100cb91906106d7565b61012561010a36600461068b565b6001600160a01b031660009081526002602052604090205490565b6040519081526020016100cb565b6100b7610141366004610724565b6000908152600360205260409020546001600160a01b031690565b6100a061016a36600461068b565b61045c565b6101776104d5565b6001600160a01b03811660009081526002602090815260409182902054825180840190935260018352603360f81b918301919091526101d25760405162461bcd60e51b81526004016101c9919061073d565b60405180910390fd5b506001600160a01b038116600081815260026020818152604080842080548086526003845291852080546001600160a01b031916905594845291905291556102198261052f565b60405181906001600160a01b038416907f3e06e57ffab5d06682097dfd2c8e17f93d2bbc7402a5c2f707aed83bac07524b90600090a35050565b61025b6104d5565b610265600061061f565b565b61026f6104d5565b6040805180820190915260018152603160f81b6020820152816102a55760405162461bcd60e51b81526004016101c9919061073d565b5060008181526003602090815260409182902054825180840190935260018352603160f81b918301919091526001600160a01b0316156102f85760405162461bcd60e51b81526004016101c9919061073d565b506001600160a01b03821660009081526002602090815260409182902054825180840190935260018352601960f91b918301919091521561034c5760405162461bcd60e51b81526004016101c9919061073d565b506001600160a01b03821660008181526002602090815260408083208590558483526003825280832080546001600160a01b03199081168617909155600180548686526004909452828520849055838101815584527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690920180549092168417909155518392917fa02a24d3ac97788fe126a9444ac70c0ec7f66c5021cec9f2c9d5682b142904cc91a35050565b6060600180548060200260200160405190810160405280929190818152602001828054801561045257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610434575b5050505050905090565b6104646104d5565b6001600160a01b0381166104c95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101c9565b6104d28161061f565b50565b6000546001600160a01b031633146102655760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c9565b6001600160a01b03811660009081526004602052604081208054908290556001805491929161055e9190610792565b9050808210156105e75760006001828154811061057d5761057d6107b7565b600091825260209091200154600180546001600160a01b0390921692508291859081106105ac576105ac6107b7565b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559290911681526004909152604090208290555b60018054806105f8576105f86107cd565b600082815260209020810160001990810180546001600160a01b0319169055019055505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461068657600080fd5b919050565b60006020828403121561069d57600080fd5b6106a68261066f565b9392505050565b600080604083850312156106c057600080fd5b6106c98361066f565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156107185783516001600160a01b0316835292840192918401916001016106f3565b50909695505050505050565b60006020828403121561073657600080fd5b5035919050565b600060208083528351808285015260005b8181101561076a5785810183015185820160400152820161074e565b8181111561077c576000604083870101525b50601f01601f1916929092016040019392505050565b6000828210156107b257634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212208e6e5a0c6e6f6140ba107c7c0f232c6ea616e23460d391e101537c51f2d16b3064736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addressProvider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "AddressProviderRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addressProvider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "AddressProviderUnregistered";
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
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "getAddressProviderById";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addresses_provider";
            readonly type: "address";
        }];
        readonly name: "getAddressProviderIdByAddress";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddressProvidersList";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
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
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "registerAddressProvider";
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
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "unregisterAddressProvider";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProviderRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProviderRegistry;
}
export {};
