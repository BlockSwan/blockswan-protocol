import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ProtocolConfigurator, ProtocolConfiguratorInterface } from "../../../protocol/configuration/ProtocolConfigurator";
type ProtocolConfiguratorConstructorParams = [
    linkLibraryAddresses: ProtocolConfiguratorLibraryAddresses,
    signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ProtocolConfigurator__factory extends ContractFactory {
    constructor(...args: ProtocolConfiguratorConstructorParams);
    static linkBytecode(linkLibraryAddresses: ProtocolConfiguratorLibraryAddresses): string;
    deploy(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ProtocolConfigurator>;
    getDeployTransaction(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ProtocolConfigurator;
    connect(signer: Signer): ProtocolConfigurator__factory;
    static readonly bytecode = "0x60806040526000196002553480156200001757600080fd5b50604051620022b8380380620022b88339810160408190526200003a9162000109565b806200004633620000b9565b6040805180820190915260018152603560f81b60208201526001600160a01b038216620000915760405162461bcd60e51b81526004016200008891906200013b565b60405180910390fd5b50600180546001600160a01b0319166001600160a01b03929092169190911790555062000193565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200011c57600080fd5b81516001600160a01b03811681146200013457600080fd5b9392505050565b600060208083528351808285015260005b818110156200016a578581018301518582016040015282016200014c565b818111156200017d576000604083870101525b50601f01601f1916929092016040019392505050565b61211580620001a36000396000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c806372633f9811610130578063a92eaa75116100b8578063e5b5019a1161007c578063e5b5019a14610497578063ea532d46146104ae578063ee203f11146104c1578063f2fde38b146104d4578063f73afd96146104e757600080fd5b8063a92eaa7514610443578063b817bcf714610456578063cfd8d6c014610469578063d618cc641461047c578063daea85c51461048457600080fd5b80638da5cb5b116100ff5780638da5cb5b146103f157806391af5b3414610402578063985fadc8146104155780639af1da48146104285780639b7a220d1461043057600080fd5b806372633f98146103b057806379a558e7146103c357806382db8b07146103d65780638504ce21146103de57600080fd5b80632c53f6c4116101be5780634169a7d3116101825780634169a7d31461036557806341c0e1b51461038557806357ddafd31461038d578063688c4b24146103a0578063715018a6146103a857600080fd5b80632c53f6c41461031a57806333327472146103225780633388aed9146103375780633e8b9f191461033f57806340717f431461035257600080fd5b80631848effa116102055780631848effa146102c457806319872f76146102d757806319d9603a146102ea5780631cb64705146102ff578063247713021461030757600080fd5b80630542975c146102375780630adf05d0146102615780630b3f0b541461028157806311e0c07b146102a1575b600080fd5b6001546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b61027461026f366004611812565b6104fa565b604051610258919061182b565b61029461028f366004611812565b6105c0565b6040516102589190611859565b6102b46102af3660046118a7565b610682565b6040519015158152602001610258565b600154610244906001600160a01b031681565b6102446102e5366004611812565b61070c565b6102fd6102f83660046119ea565b610789565b005b61029461084a565b6102fd6103153660046119ea565b61090b565b610274610993565b61032a610a4c565b6040516102589190611a0d565b61032a610ae8565b61032a61034d366004611812565b610b39565b6102fd610360366004611a33565b610bdc565b610378610373366004611812565b610c51565b6040516102589190611a7f565b6102fd610d0d565b61032a61039b366004611812565b610d35565b610274610d8d565b6102fd610dfa565b6102fd6103be366004611a33565b610e0e565b6102b46103d1366004611aaa565b610e83565b610378610f39565b6102fd6103ec3660046119ea565b610fee565b6000546001600160a01b0316610244565b61032a610410366004611812565b611076565b6102b4610423366004611ac7565b6110ce565b61032a611132565b6102fd61043e3660046119ea565b611183565b6102fd610451366004611af7565b61120b565b6102b4610464366004611aaa565b611280565b6102fd610477366004611aaa565b611337565b61032a611485565b6102fd610492366004611aaa565b6114d6565b6104a060025481565b604051908152602001610258565b6102746104bc366004611812565b6115ae565b6102fd6104cf366004611b3d565b611622565b6102fd6104e2366004611aaa565b611697565b61032a6104f5366004611812565b611710565b6105286040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60405163038d39c160e11b815260036004820152600560248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063071a7382906064015b60806040518083038186803b15801561058257600080fd5b505af4158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190611b8d565b92915050565b6105f26040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405162ac321b60e31b815260156004820152601760248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063056190d89060640160a06040518083038186803b15801561064a57600080fd5b505af415801561065e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190611bcd565b60405163fbd2817f60e01b815260048101849052602481018390526000906001600160a01b0383169063fbd2817f9060440160206040518083038186803b1580156106cc57600080fd5b505afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107049190611c1d565b949350505050565b600154604051630cc397bb60e11b8152600481018390526000916001600160a01b0316906319872f769060240160206040518083038186803b15801561075157600080fd5b505afa158015610765573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190611c4f565b6d282927aa27a1a7a62fa0a226a4a760911b6107a581336110ce565b6107ca5760405162461bcd60e51b81526004016107c190611c6c565b60405180910390fd5b604051635f000b3960e01b8152600c6004820152600e6024820152825160448201526020830151606482015273__$60257ade2e9256c87b7577fd1b418be579$__90635f000b39906084015b60006040518083038186803b15801561082e57600080fd5b505af4158015610842573d6000803e3d6000fd5b505050505050565b61087c6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040516315d9c37560e11b8152601560048201526017602482015273__$60257ade2e9256c87b7577fd1b418be579$__90632bb386ea9060440160a06040518083038186803b1580156108ce57600080fd5b505af41580156108e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611bcd565b905090565b6d282927aa27a1a7a62fa0a226a4a760911b61092781336110ce565b6109435760405162461bcd60e51b81526004016107c190611c6c565b6040516305142c2f60e31b8152600f600482015260116024820152825160448201526020830151606482015273__$60257ade2e9256c87b7577fd1b418be579$__906328a1617890608401610816565b6109c16040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60405163a6b16b4360e01b8152600360048201526005602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063a6b16b43906044015b60806040518083038186803b158015610a1457600080fd5b505af4158015610a28573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611b8d565b60408051808201825260008082526020820152905163bfdb039960e01b8152600c6004820152600e602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063bfdb0399906044015b604080518083038186803b158015610ab057600080fd5b505af4158015610ac4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611cd3565b60408051808201825260008082526020820152905163bb395b3d60e01b8152601260048201526014602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063bb395b3d90604401610a99565b60408051808201825260008082526020820152905163907874e560e01b815260096004820152600b60248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063907874e5906064015b604080518083038186803b158015610ba457600080fd5b505af4158015610bb8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190611cd3565b6d282927aa27a1a7a62fa0a226a4a760911b610bf881336110ce565b610c145760405162461bcd60e51b81526004016107c190611c6c565b60405163eecd53b160e01b815273__$60257ade2e9256c87b7577fd1b418be579$__9063eecd53b190610816906003906005908790600401611cef565b610c7c6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405163bc57ade760e01b815260186004820152601a60248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063bc57ade79060640160806040518083038186803b158015610cd557600080fd5b505af4158015610ce9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190611d2e565b6001546001600160a01b03163314610d2757610d27611d74565b6001546001600160a01b0316ff5b604080518082018252600080825260208201529051639bb062d360e01b8152600c6004820152600e60248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__90639bb062d390606401610b8d565b610dbb6040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60405163a6b16b4360e01b8152600660048201526008602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063a6b16b43906044016109fc565b610e02611768565b610e0c60006117c2565b565b6d282927aa27a1a7a62fa0a226a4a760911b610e2a81336110ce565b610e465760405162461bcd60e51b81526004016107c190611c6c565b60405163eecd53b160e01b815273__$60257ade2e9256c87b7577fd1b418be579$__9063eecd53b190610816906006906008908790600401611cef565b6000610e9764212aaca2a960d91b836110ce565b80156105ba575042610eaf632aa9a2a960e11b61070c565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b158015610ef257600080fd5b505afa158015610f06573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f2e9190810190611e96565b604001511192915050565b610f646040518060800160405280600081526020016000815260200160008152602001600081525090565b604051631dc6afd560e31b815260186004820152601a602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063ee357ea89060440160806040518083038186803b158015610fb657600080fd5b505af4158015610fca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611d2e565b6d282927aa27a1a7a62fa0a226a4a760911b61100a81336110ce565b6110265760405162461bcd60e51b81526004016107c190611c6c565b6040516305142c2f60e31b81526012600482015260146024820152825160448201526020830151606482015273__$60257ade2e9256c87b7577fd1b418be579$__906328a1617890608401610816565b60408051808201825260008082526020820152905163ee999bd560e01b815260126004820152601460248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063ee999bd590606401610b8d565b6000806110e86a20a1a62fa6a0a720a3a2a960a91b61070c565b604051632474521560e21b8152600481018690526001600160a01b03858116602483015291909116906391d148549060440160206040518083038186803b1580156106cc57600080fd5b604080518082018252600080825260208201529051632fe2848160e01b815260096004820152600b602482015273__$60257ade2e9256c87b7577fd1b418be579$__90632fe2848190604401610a99565b6d282927aa27a1a7a62fa0a226a4a760911b61119f81336110ce565b6111bb5760405162461bcd60e51b81526004016107c190611c6c565b6040516313a6a97b60e11b815260096004820152600b6024820152825160448201526020830151606482015273__$60257ade2e9256c87b7577fd1b418be579$__9063274d52f690608401610816565b6d282927aa27a1a7a62fa0a226a4a760911b61122781336110ce565b6112435760405162461bcd60e51b81526004016107c190611c6c565b604051630fda974d60e41b815273__$60257ade2e9256c87b7577fd1b418be579$__9063fda974d09061081690601890601a90879060040161205d565b60006112956529a2a62622a960d11b836110ce565b80156105ba5750426112ad632aa9a2a960e11b61070c565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b1580156112f057600080fd5b505afa158015611304573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261132c9190810190611e96565b608001511192915050565b6001600160a01b038116158061135757506001546001600160a01b031633145b806113e35750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156113a057600080fd5b505afa1580156113b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d89190611c4f565b6001600160a01b0316145b6114635760405162461bcd60e51b815260206004820152604560248201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060448201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060648201526437bbb732b960d91b608482015260a4016107c1565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60408051808201825260008082526020820152905163bb395b3d60e01b8152600f60048201526011602482015273__$60257ade2e9256c87b7577fd1b418be579$__9063bb395b3d90604401610a99565b6d282927aa27a1a7a62fa0a226a4a760911b6114f281336110ce565b61150e5760405162461bcd60e51b81526004016107c190611c6c565b600061151f6211105560ea1b61070c565b60025460405163095ea7b360e01b81526001600160a01b038084166004830152602482019290925291925084169063095ea7b390604401602060405180830381600087803b15801561157057600080fd5b505af1158015611584573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a89190611c1d565b50505050565b6115dc6040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60405163038d39c160e11b815260066004820152600860248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063071a73829060640161056a565b6d282927aa27a1a7a62fa0a226a4a760911b61163e81336110ce565b61165a5760405162461bcd60e51b81526004016107c190611c6c565b60405163d93df20360e01b815273__$60257ade2e9256c87b7577fd1b418be579$__9063d93df20390610816906015906017908790600401612099565b61169f611768565b6001600160a01b0381166117045760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107c1565b61170d816117c2565b50565b60408051808201825260008082526020820152905163ee999bd560e01b8152600f6004820152601160248201526044810183905273__$60257ade2e9256c87b7577fd1b418be579$__9063ee999bd590606401610b8d565b6000546001600160a01b03163314610e0c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107c1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561182457600080fd5b5035919050565b81518152602080830151908201526040808301519082015260608083015160ff1690820152608081016105ba565b60a081016105ba828480518252602081015160208301526040810151604083015260608101516060830152608081015160808301525050565b6001600160a01b038116811461170d57600080fd5b6000806000606084860312156118bc57600080fd5b833592506020840135915060408401356118d581611892565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611919576119196118e0565b60405290565b6040516080810167ffffffffffffffff81118282101715611919576119196118e0565b60405160a0810167ffffffffffffffff81118282101715611919576119196118e0565b6040516101e0810167ffffffffffffffff81118282101715611919576119196118e0565b604051601f8201601f1916810167ffffffffffffffff811182821017156119b2576119b26118e0565b604052919050565b6000604082840312156119cc57600080fd5b6119d46118f6565b9050813581526020820135602082015292915050565b6000604082840312156119fc57600080fd5b611a0683836119ba565b9392505050565b8151815260208083015190820152604081016105ba565b60ff8116811461170d57600080fd5b600060808284031215611a4557600080fd5b611a4d61191f565b8235815260208301356020820152604083013560408201526060830135611a7381611a24565b60608201529392505050565b81518152602080830151908201526040808301519082015260608083015190820152608081016105ba565b600060208284031215611abc57600080fd5b8135611a0681611892565b60008060408385031215611ada57600080fd5b823591506020830135611aec81611892565b809150509250929050565b600060808284031215611b0957600080fd5b611b1161191f565b823581526020830135602082015260408301356040820152606083013560608201528091505092915050565b600060a08284031215611b4f57600080fd5b611b57611942565b82358152602083013560208201526040830135604082015260608301356060820152608083013560808201528091505092915050565b600060808284031215611b9f57600080fd5b611ba761191f565b8251815260208301516020820152604083015160408201526060830151611a7381611a24565b600060a08284031215611bdf57600080fd5b611be7611942565b82518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600060208284031215611c2f57600080fd5b81518015158114611a0657600080fd5b8051611c4a81611892565b919050565b600060208284031215611c6157600080fd5b8151611a0681611892565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b600060408284031215611cb557600080fd5b611cbd6118f6565b9050815181526020820151602082015292915050565b600060408284031215611ce557600080fd5b611a068383611ca3565b8381526020810183905260c08101610704604083018480518252602081015160208301526040810151604083015260ff60608201511660608301525050565b600060808284031215611d4057600080fd5b611d4861191f565b825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052600160045260246000fd5b600082601f830112611d9b57600080fd5b815167ffffffffffffffff811115611db557611db56118e0565b6020611dc9601f8301601f19168201611989565b8281528582848701011115611ddd57600080fd5b60005b83811015611dfb578581018301518282018401528201611de0565b83811115611e0c5760008385840101525b5095945050505050565b600082601f830112611e2757600080fd5b8151602067ffffffffffffffff821115611e4357611e436118e0565b8160051b611e52828201611989565b9283528481018201928281019087851115611e6c57600080fd5b83870192505b84831015611e8b57825182529183019190830190611e72565b979650505050505050565b600060208284031215611ea857600080fd5b815167ffffffffffffffff80821115611ec057600080fd5b908301906101e08286031215611ed557600080fd5b611edd611965565b825182811115611eec57600080fd5b611ef887828601611d8a565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152611f4360e08401611c3f565b60e08201526101008084015183811115611f5c57600080fd5b611f6888828701611e16565b8284015250506101208084015183811115611f8257600080fd5b611f8e88828701611e16565b8284015250506101408084015183811115611fa857600080fd5b611fb488828701611e16565b8284015250506101608084015183811115611fce57600080fd5b611fda88828701611e16565b8284015250506101808084015183811115611ff457600080fd5b61200088828701611e16565b8284015250506101a0808401518381111561201a57600080fd5b61202688828701611e16565b8284015250506101c0808401518381111561204057600080fd5b61204c88828701611e16565b918301919091525095945050505050565b8381526020810183905260c081016107046040830184805182526020810151602083015260408101516040830152606081015160608301525050565b8381526020810183905260e0810161070460408301848051825260208101516020830152604081015160408301526060810151606083015260808101516080830152505056fea2646970667358221220c45e7e88f01699deddc2cc84f42c7a4cab08e71374fa6cace85dd1694cf13e1564736f6c63430008090033";
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
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getBuyerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBuyerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getDelayTimestamp";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDelayTimestamp";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getDisputeParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDisputeParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGigCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getGigCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOrderCreationParams";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getOrderCreationParams";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getRetributionParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRetributionParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSellerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getSellerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSellerOrderFees";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getSellerOrderFees";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
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
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateBuyerEntryParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateDelayTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateDisputeParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateGigCreationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateOrderCreationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateRetributionParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateSellerEntryParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateSellerOrderFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProtocolConfiguratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProtocolConfigurator;
}
export interface ProtocolConfiguratorLibraryAddresses {
    ["contracts/protocol/libraries/logics/ParamsLogic.sol:ParamsLogic"]: string;
}
export {};
