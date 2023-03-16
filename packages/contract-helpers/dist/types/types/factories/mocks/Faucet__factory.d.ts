import { Signer, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Faucet, FaucetInterface } from "../../mocks/Faucet";
type FaucetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Faucet__factory extends ContractFactory {
    constructor(...args: FaucetConstructorParams);
    deploy(_mintDelays: Faucet.TokensStruct, _mintAmount: Faucet.TokensStruct, _forwarder: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Faucet>;
    getDeployTransaction(_mintDelays: Faucet.TokensStruct, _mintAmount: Faucet.TokensStruct, _forwarder: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Faucet;
    connect(signer: Signer): Faucet__factory;
    static readonly bytecode = "0x60a060405260405162000da938038062000da9833981016040819052620000269162000220565b6001600160a01b038116608052620000476200004162000066565b62000082565b6200005283620000d2565b6200005d82620000ea565b5050506200027c565b60006200007d6200010260201b620007471760201c565b905090565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000dc6200013b565b805160015560200151600255565b620000f46200013b565b805160035560200151600455565b6080516000906001600160a01b031633141562000126575060131936013560601c90565b6200007d620001be60201b620007911760201c565b6200014562000066565b6001600160a01b0316620001616000546001600160a01b031690565b6001600160a01b031614620001bc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b3390565b600060408284031215620001d557600080fd5b604080519081016001600160401b03811182821017156200020657634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b600080600060a084860312156200023657600080fd5b620002428585620001c2565b9250620002538560408601620001c2565b60808501519092506001600160a01b03811681146200027157600080fd5b809150509250925092565b608051610b0a6200029f600039600081816101c1015261074b0152610b0a6000f3fe6080604052600436106100eb5760003560e01c806385b4bb5311610084578063e0016b6211610056578063e0016b6214610319578063e3cd9b5614610334578063f2fde38b14610354578063f48562301461037457005b806385b4bb53146102635780638da5cb5b146102d1578063c9c61eab146100f2578063d2df3e0f146102f957005b8063572b6c05116100bd578063572b6c05146101a4578063715018a61461020157806380f5c2d914610216578063857abbd41461024357005b8063333a22ab146100f4578063376916c914610129578063482fe0241461016f5780634a00816b1461018457005b366100f257005b005b34801561010057600080fd5b5060035460045461010f919082565b604080519283526020830191909152015b60405180910390f35b34801561013557600080fd5b506101616101443660046109be565b600660209081526000928352604080842090915290825290205481565b604051908152602001610120565b34801561017b57600080fd5b506100f2610389565b34801561019057600080fd5b506100f261019f3660046109f1565b6103d4565b3480156101b057600080fd5b506101f16101bf366004610a4e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6040519015158152602001610120565b34801561020d57600080fd5b506100f26103ea565b34801561022257600080fd5b50610161610231366004610a4e565b60056020526000908152604090205481565b34801561024f57600080fd5b506100f261025e366004610a4e565b6103fe565b34801561026f57600080fd5b506102c3604080518082018252600080825260209182018190528251808401845281815282015281518083018352600154815260025481830152825180840190935260035483526004549183019190915291565b604051610120929190610a70565b3480156102dd57600080fd5b506000546040516001600160a01b039091168152602001610120565b34801561030557600080fd5b506100f2610314366004610a4e565b610499565b34801561032557600080fd5b5060015460025461010f919082565b34801561034057600080fd5b506100f261034f3660046109f1565b6105b6565b34801561036057600080fd5b506100f261036f366004610a4e565b6105cc565b34801561038057600080fd5b506100f2610642565b610391610795565b61039961080e565b6001600160a01b03166108fc479081150290604051600060405180830381858888f193505050501580156103d1573d6000803e3d6000fd5b50565b6103dc610795565b805160035560200151600455565b6103f2610795565b6103fc6000610818565b565b610406610795565b6103d161041161080e565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a082319060240160206040518083038186803b15801561045057600080fd5b505afa158015610464573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104889190610a96565b6001600160a01b0384169190610868565b60006104a361080e565b6002546001600160a01b03808516600090815260066020908152604080832093861683529290522054919250906104da9042610aaf565b10156105265760405162461bcd60e51b81526020600482015260166024820152752330bab1b2ba1d1031b630b4b6903a37b79039b7b7b760511b60448201526064015b60405180910390fd5b6001600160a01b03808316600081815260066020908152604080832094861683529390529190912042905560045461056091908390610868565b806001600160a01b0316826001600160a01b03167fda6fbab5e075b39ed1a3f1543da029890678b3e7a3a711b6d9e63f2a505e66556003600101546040516105aa91815260200190565b60405180910390a35050565b6105be610795565b805160015560200151600255565b6105d4610795565b6001600160a01b0381166106395760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161051d565b6103d181610818565b600061064c610747565b6001546001600160a01b038216600090815260056020526040902054919250906106769042610aaf565b10156106bd5760405162461bcd60e51b81526020600482015260166024820152752330bab1b2ba1d1031b630b4b6903a37b79039b7b7b760511b604482015260640161051d565b6001600160a01b038116600081815260056020526040808220429055600354905181156108fc0292818181858888f19350505050158015610702573d6000803e3d6000fd5b506003546040519081526001600160a01b038216907f71ef1bda272b61b452433fab6f7847cfd8d3e527aca53310782d4763e80e32359060200160405180910390a250565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316331415610787575060131936013560601c90565b503390565b905090565b3390565b61079d61080e565b6001600160a01b03166107b86000546001600160a01b031690565b6001600160a01b0316146103fc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b600061078c610747565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405163a9059cbb60e01b8082526001600160a01b0384166004830152602482018390529060008060448382895af16108a5573d6000803e3d6000fd5b506108af846108f9565b6108f35760405162461bcd60e51b815260206004820152601560248201527423a83b191d103330b4b632b2103a3930b739b332b960591b604482015260640161051d565b50505050565b600061091f565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d801561095e576020811461098f576109597f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f610900565b61099c565b823b610986576109867311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014610900565b6001915061099c565b3d6000803e600051151591505b50919050565b80356001600160a01b03811681146109b957600080fd5b919050565b600080604083850312156109d157600080fd5b6109da836109a2565b91506109e8602084016109a2565b90509250929050565b600060408284031215610a0357600080fd5b6040516040810181811067ffffffffffffffff82111715610a3457634e487b7160e01b600052604160045260246000fd5b604052823581526020928301359281019290925250919050565b600060208284031215610a6057600080fd5b610a69826109a2565b9392505050565b825181526020808401518183015282516040830152820151606082015260808101610a69565b600060208284031215610aa857600080fd5b5051919050565b600082821015610acf57634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220c6f67a5c40c5a4cdcd5896777a29c050204283a9c611463d027c90910e42f1d164736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "_mintDelays";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "_mintAmount";
            readonly type: "tuple";
        }, {
            readonly internalType: "contract MinimalForwarder";
            readonly name: "_forwarder";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ClaimERC20";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ClaimNative";
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
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "claimERC20";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimNative";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fundNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSettings";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "isTrustedForwarder";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lastERC20Claim";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lastNativeClaim";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintAmounts";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "native";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "erc20";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintDelays";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "native";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "erc20";
            readonly type: "uint256";
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
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "_mintAmounts";
            readonly type: "tuple";
        }];
        readonly name: "setMintAmounts";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "native";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "erc20";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Faucet.Tokens";
            readonly name: "_mintDelays";
            readonly type: "tuple";
        }];
        readonly name: "setMintDelays";
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
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "withdrawAllERC20";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawAllNative";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): FaucetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Faucet;
}
export {};
