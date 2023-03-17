import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { XP, XPInterface } from "../../../protocol/xp/XP";
type XPConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class XP__factory extends ContractFactory {
    constructor(...args: XPConstructorParams);
    deploy(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<XP>;
    getDeployTransaction(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): XP;
    connect(signer: Signer): XP__factory;
    static readonly bytecode = "0x60806040526000196008553480156200001757600080fd5b5060405162001d0838038062001d088339810160408190526200003a9162000234565b604080518082018252600a815269457870657269656e636560b01b602080830191825283518085019094526002845261058560f41b90840152815184939160009162000089916004916200018e565b5081516200009f9060059060208501906200018e565b506003805460ff191660ff9290921691909117905550620000c99050620000c33390565b6200013c565b6040805180820190915260018152603560f81b60208201526001600160a01b038216620001145760405162461bcd60e51b81526004016200010b919062000266565b60405180910390fd5b50600780546001600160a01b0319166001600160a01b039290921691909117905550620002fb565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200019c90620002be565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b6000602082840312156200024757600080fd5b81516001600160a01b03811681146200025f57600080fd5b9392505050565b600060208083528351808285015260005b81811015620002955785810183015185820160400152820162000277565b81811115620002a8576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c90821680620002d357607f821691505b60208210811415620002f557634e487b7160e01b600052602260045260246000fd5b50919050565b6119fd806200030b6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806372b0e3ed11610104578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e146103ce578063e5b5019a146103e1578063f2fde38b146103ea578063fcf6831e146103fd57600080fd5b8063a9059cbb14610382578063b817bcf714610395578063cfd8d6c0146103a8578063daea85c5146103bb57600080fd5b806395d89b41116100de57806395d89b4114610341578063985fadc8146103495780639dc29fac1461035c578063a457c2d71461036f57600080fd5b806372b0e3ed1461030a57806379a558e71461031d5780638da5cb5b1461033057600080fd5b806323b872dd11610171578063395093511161014b57806339509351146102be57806341c0e1b5146102d157806370a08231146102d9578063715018a61461030257600080fd5b806323b872dd14610281578063293c6a3a14610294578063313ce567146102a957600080fd5b806311e0c07b116101ad57806311e0c07b1461023657806318160ddd146102495780631848effa1461025b57806319872f761461026e57600080fd5b80630542975c146101d457806306fdde03146101fe578063095ea7b314610213575b600080fd5b6007546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b610206610427565b6040516101f5919061140a565b610226610221366004611452565b6104b9565b60405190151581526020016101f5565b61022661024436600461147e565b6104d3565b6002545b6040519081526020016101f5565b6007546101e1906001600160a01b031681565b6101e161027c3660046114b7565b61055d565b61022661028f3660046114d0565b6105da565b6102a76102a2366004611511565b6105fe565b005b60035460405160ff90911681526020016101f5565b6102266102cc366004611452565b610695565b6102a76106b7565b61024d6102e7366004611541565b6001600160a01b031660009081526020819052604090205490565b6102a76106df565b6102a761031836600461155e565b6106f3565b61022661032b366004611541565b61073d565b6006546001600160a01b03166101e1565b6102066107f3565b610226610357366004611511565b610802565b6102a761036a366004611452565b610866565b61022661037d366004611452565b610874565b610226610390366004611452565b6108ef565b6102266103a3366004611541565b6108fd565b6102a76103b6366004611541565b6109b4565b6102a76103c9366004611541565b610b02565b61024d6103dc366004611580565b610bd4565b61024d60085481565b6102a76103f8366004611541565b610bff565b61041061040b3660046114b7565b610c78565b6040805192151583526020830191909152016101f5565b606060048054610436906115ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610462906115ae565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b5050505050905090565b6000336104c7818585610c94565b60019150505b92915050565b60405163fbd2817f60e01b815260048101849052602481018390526000906001600160a01b0383169063fbd2817f9060440160206040518083038186803b15801561051d57600080fd5b505afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055591906115e9565b949350505050565b600754604051630cc397bb60e11b8152600481018390526000916001600160a01b0316906319872f769060240160206040518083038186803b1580156105a257600080fd5b505afa1580156105b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cd919061161b565b6000336105e8858285610db8565b6105f3858585610e2c565b506001949350505050565b672c282fa3a4ab22a960c11b6106148133610802565b6106395760405162461bcd60e51b815260040161063090611638565b60405180910390fd5b60008061064585610c78565b9150915081604051806040016040528060028152602001610c4d60f21b815250906106835760405162461bcd60e51b8152600401610630919061140a565b5061068e8482610fdb565b5050505050565b6000336104c78185856106a88383610bd4565b6106b2919061166f565b610c94565b6007546001600160a01b031633146106d1576106d1611695565b6007546001600160a01b0316ff5b6106e7610fe5565b6106f1600061103f565b565b6d282927aa27a1a7a62fa0a226a4a760911b61070f8133610802565b61072b5760405162461bcd60e51b815260040161063090611638565b61073760098484611091565b50505050565b600061075164212aaca2a960d91b83610802565b80156104cd575042610769632aa9a2a960e11b61055d565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b1580156107ac57600080fd5b505afa1580156107c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107e89190810190611800565b604001511192915050565b606060058054610436906115ae565b60008061081c6a20a1a62fa6a0a720a3a2a960a91b61055d565b604051632474521560e21b8152600481018690526001600160a01b03858116602483015291909116906391d148549060440160206040518083038186803b15801561051d57600080fd5b610870828261109e565b5050565b600033816108828286610bd4565b9050838110156108e25760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610630565b6105f38286868403610c94565b6000336104c7818585610e2c565b60006109126529a2a62622a960d11b83610802565b80156104cd57504261092a632aa9a2a960e11b61055d565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b15801561096d57600080fd5b505afa158015610981573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109a99190810190611800565b608001511192915050565b6001600160a01b03811615806109d457506007546001600160a01b031633145b80610a605750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1d57600080fd5b505afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a55919061161b565b6001600160a01b0316145b610ae05760405162461bcd60e51b815260206004820152604560248201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060448201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060648201526437bbb732b960d91b608482015260a401610630565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6d282927aa27a1a7a62fa0a226a4a760911b610b1e8133610802565b610b3a5760405162461bcd60e51b815260040161063090611638565b6000610b4b6211105560ea1b61055d565b60085460405163095ea7b360e01b81526001600160a01b038084166004830152602482019290925291925084169063095ea7b390604401602060405180830381600087803b158015610b9c57600080fd5b505af1158015610bb0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073791906115e9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610c07610fe5565b6001600160a01b038116610c6c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610630565b610c758161103f565b50565b6000808080610c886009866110a8565b90969095509350505050565b6001600160a01b038316610cf65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610630565b6001600160a01b038216610d575760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610630565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610dc48484610bd4565b905060001981146107375781811015610e1f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610630565b6107378484848403610c94565b6001600160a01b038316610e905760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610630565b6001600160a01b038216610ef25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610630565b610efd8383836110c6565b6001600160a01b03831660009081526020819052604090205481811015610f755760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610630565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610737565b61087082826110fd565b6006546001600160a01b031633146106f15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610630565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006105558484846111c8565b61087082826111e5565b60008080806110b78686611323565b909450925050505b9250929050565b672c282fa3a4ab22a960c11b6110dc8133610802565b6110f85760405162461bcd60e51b815260040161063090611638565b610737565b6001600160a01b0382166111535760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610630565b61115f600083836110c6565b8060026000828254611171919061166f565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60008281526002840160205260408120829055610555848461135d565b6001600160a01b0382166112455760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610630565b611251826000836110c6565b6001600160a01b038216600090815260208190526040902054818110156112c55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610630565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b6000818152600283016020526040812054819080611352576113458585611370565b9250600091506110bf9050565b6001925090506110bf565b6000611369838361138f565b9392505050565b6000611369838360008181526001830160205260408120541515611369565b60008181526001830160205260408120546113d6575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104cd565b5060006104cd565b60005b838110156113f95781810151838201526020016113e1565b838111156107375750506000910152565b60208152600082518060208401526114298160408501602087016113de565b601f01601f19169190910160400192915050565b6001600160a01b0381168114610c7557600080fd5b6000806040838503121561146557600080fd5b82356114708161143d565b946020939093013593505050565b60008060006060848603121561149357600080fd5b833592506020840135915060408401356114ac8161143d565b809150509250925092565b6000602082840312156114c957600080fd5b5035919050565b6000806000606084860312156114e557600080fd5b83356114f08161143d565b925060208401356115008161143d565b929592945050506040919091013590565b6000806040838503121561152457600080fd5b8235915060208301356115368161143d565b809150509250929050565b60006020828403121561155357600080fd5b81356113698161143d565b6000806040838503121561157157600080fd5b50508035926020909101359150565b6000806040838503121561159357600080fd5b823561159e8161143d565b915060208301356115368161143d565b600181811c908216806115c257607f821691505b602082108114156115e357634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156115fb57600080fd5b8151801515811461136957600080fd5b80516116168161143d565b919050565b60006020828403121561162d57600080fd5b81516113698161143d565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b6000821982111561169057634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff811182821017156116e5576116e56116ab565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611714576117146116ab565b604052919050565b600082601f83011261172d57600080fd5b815167ffffffffffffffff811115611747576117476116ab565b61175a601f8201601f19166020016116eb565b81815284602083860101111561176f57600080fd5b6105558260208301602087016113de565b600082601f83011261179157600080fd5b8151602067ffffffffffffffff8211156117ad576117ad6116ab565b8160051b6117bc8282016116eb565b92835284810182019282810190878511156117d657600080fd5b83870192505b848310156117f5578251825291830191908301906117dc565b979650505050505050565b60006020828403121561181257600080fd5b815167ffffffffffffffff8082111561182a57600080fd5b908301906101e0828603121561183f57600080fd5b6118476116c1565b82518281111561185657600080fd5b6118628782860161171c565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526118ad60e0840161160b565b60e082015261010080840151838111156118c657600080fd5b6118d288828701611780565b82840152505061012080840151838111156118ec57600080fd5b6118f888828701611780565b828401525050610140808401518381111561191257600080fd5b61191e88828701611780565b828401525050610160808401518381111561193857600080fd5b61194488828701611780565b828401525050610180808401518381111561195e57600080fd5b61196a88828701611780565b8284015250506101a0808401518381111561198457600080fd5b61199088828701611780565b8284015250506101c080840151838111156119aa57600080fd5b6119b688828701611780565b91830191909152509594505050505056fea26469706673582212207cf4d0ad0245812f6ee36a89513f4b38d353a9329fbc0036b7a9bd65c9a848cd64736f6c63430008090033";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
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
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
            readonly name: "xpKey";
            readonly type: "bytes32";
        }];
        readonly name: "getXpAmount";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "xpKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
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
            readonly internalType: "bytes32";
            readonly name: "xpKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "xpToReceive";
            readonly type: "uint256";
        }];
        readonly name: "setXpAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
    static createInterface(): XPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): XP;
}
export {};