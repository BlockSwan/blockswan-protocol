import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { BSWAN, BSWANInterface } from "../../../periphery/trust/BSWAN";
type BSWANConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BSWAN__factory extends ContractFactory {
    constructor(...args: BSWANConstructorParams);
    deploy(_currencyAddress: PromiseOrValue<string>, _buySlopeNum: PromiseOrValue<BigNumberish>, _buySlopeDen: PromiseOrValue<BigNumberish>, _investmentReserveBasisPoints: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BSWAN>;
    getDeployTransaction(_currencyAddress: PromiseOrValue<string>, _buySlopeNum: PromiseOrValue<BigNumberish>, _buySlopeDen: PromiseOrValue<BigNumberish>, _investmentReserveBasisPoints: PromiseOrValue<BigNumberish>, _name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BSWAN;
    connect(signer: Signer): BSWAN__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620025fe380380620025fe83398101604081905262000034916200051d565b8181876001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200007057600080fd5b505afa15801562000085573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ab9190620005c4565b8251620000c0906004906020860190620003aa565b508151620000d6906005906020850190620003aa565b506003805460ff90921660ff1992831617905560068054909116905550620001079050620001013390565b62000350565b60008511620001515760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f534c4f50455f4e554d60781b60448201526064015b60405180910390fd5b60008411620001975760405162461bcd60e51b815260206004820152601160248201527024a72b20a624a22fa9a627a822afa222a760791b604482015260640162000148565b6001600160801b038510620001ef5760405162461bcd60e51b815260206004820152601360248201527f4558434553534956455f534c4f50455f4e554d00000000000000000000000000604482015260640162000148565b6001600160801b038410620002475760405162461bcd60e51b815260206004820152601360248201527f4558434553534956455f534c4f50455f44454e00000000000000000000000000604482015260640162000148565b60088590556009849055612710831115620002975760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f5245534552564560881b604482015260640162000148565b82600d81905550856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620002d857600080fd5b505afa158015620002ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003139190620005c4565b6200032090606462000705565b600b555050600a80546001600160a01b0319166001600160a01b0395909516949094179093555062000753915050565b600680546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620003b89062000716565b90600052602060002090601f016020900481019282620003dc576000855562000427565b82601f10620003f757805160ff191683800117855562000427565b8280016001018555821562000427579182015b82811115620004275782518255916020019190600101906200040a565b506200043592915062000439565b5090565b5b808211156200043557600081556001016200043a565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200047857600080fd5b81516001600160401b038082111562000495576200049562000450565b604051601f8301601f19908116603f01168101908282118183101715620004c057620004c062000450565b81604052838152602092508683858801011115620004dd57600080fd5b600091505b83821015620005015785820183015181830184015290820190620004e2565b83821115620005135760008385830101525b9695505050505050565b60008060008060008060c087890312156200053757600080fd5b86516001600160a01b03811681146200054f57600080fd5b6020880151604089015160608a015160808b0151939950919750955093506001600160401b03808211156200058357600080fd5b620005918a838b0162000466565b935060a0890151915080821115620005a857600080fd5b50620005b789828a0162000466565b9150509295509295509295565b600060208284031215620005d757600080fd5b815160ff81168114620005e957600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620006475781600019048211156200062b576200062b620005f0565b808516156200063957918102915b93841c93908002906200060b565b509250929050565b6000826200066057506001620006ff565b816200066f57506000620006ff565b81600181146200068857600281146200069357620006b3565b6001915050620006ff565b60ff841115620006a757620006a7620005f0565b50506001821b620006ff565b5060208310610133831016604e8410600b8410161715620006d8575081810a620006ff565b620006e4838362000606565b8060001904821115620006fb57620006fb620005f0565b0290505b92915050565b6000620005e960ff8416836200064f565b600181811c908216806200072b57607f821691505b602082108114156200074d57634e487b7160e01b600052602260045260246000fd5b50919050565b611e9b80620007636000396000f3fe6080604052600436106101d85760003560e01c80636a27246211610102578063a59ac6dd11610095578063dd62ed3e11610064578063dd62ed3e14610514578063e5a6b10f14610534578063f2fde38b14610554578063ff9095601461057457600080fd5b8063a59ac6dd146104ae578063a9059cbb146104c1578063b12f4153146104e1578063c40768761461050157600080fd5b80638da5cb5b116100d15780638da5cb5b1461042c57806395d89b41146104635780639df3f4f614610478578063a457c2d71461048e57600080fd5b80636a272462146103ab57806370a08231146103cb578063715018a6146104015780638ac2c6801461041657600080fd5b806335e5cc311161017a57806355d0a1d01161014957806355d0a1d01461035157806358439fa5146103675780635c975abb1461037d5780636177e37c1461039557600080fd5b806335e5cc31146102db57806339509351146102f157806342966c68146103115780634f3424df1461033157600080fd5b80631e1186ce116101b65780631e1186ce1461025757806323b872dd146102795780632e872bb314610299578063313ce567146102b957600080fd5b806306fdde03146101dd578063095ea7b31461020857806318160ddd14610238575b600080fd5b3480156101e957600080fd5b506101f2610589565b6040516101ff9190611bea565b60405180910390f35b34801561021457600080fd5b50610228610223366004611c54565b61061b565b60405190151581526020016101ff565b34801561024457600080fd5b506002545b6040519081526020016101ff565b34801561026357600080fd5b50610277610272366004611c80565b610633565b005b34801561028557600080fd5b50610228610294366004611cb5565b610813565b3480156102a557600080fd5b506102496102b4366004611cf6565b610839565b3480156102c557600080fd5b5060035460405160ff90911681526020016101ff565b3480156102e757600080fd5b5061024960085481565b3480156102fd57600080fd5b5061022861030c366004611c54565b6108b8565b34801561031d57600080fd5b5061027761032c366004611cf6565b6108da565b34801561033d57600080fd5b5061024961034c366004611cf6565b6108e9565b34801561035d57600080fd5b5061024960075481565b34801561037357600080fd5b5061024960095481565b34801561038957600080fd5b5060065460ff16610228565b3480156103a157600080fd5b50610249600c5481565b3480156103b757600080fd5b506102776103c6366004611c80565b61097f565b3480156103d757600080fd5b506102496103e6366004611d0f565b6001600160a01b031660009081526020819052604090205490565b34801561040d57600080fd5b50610277610ae0565b34801561042257600080fd5b50610249600b5481565b34801561043857600080fd5b5060065461010090046001600160a01b03165b6040516001600160a01b0390911681526020016101ff565b34801561046f57600080fd5b506101f2610af4565b34801561048457600080fd5b50610249600d5481565b34801561049a57600080fd5b506102286104a9366004611c54565b610b03565b6102776104bc366004611c80565b610b89565b3480156104cd57600080fd5b506102286104dc366004611c54565b610ce7565b3480156104ed57600080fd5b506102496104fc366004611cf6565b610cf5565b61027761050f366004611c54565b610db4565b34801561052057600080fd5b5061024961052f366004611d2c565b610dcb565b34801561054057600080fd5b50600a5461044b906001600160a01b031681565b34801561056057600080fd5b5061027761056f366004611d0f565b610df6565b34801561058057600080fd5b50610249610e6c565b60606004805461059890611d65565b80601f01602080910402602001604051908101604052809291908181526020018280546105c490611d65565b80156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b5050505050905090565b600033610629818585610f22565b5060019392505050565b61271082111561067f5760405162461bcd60e51b81526020600482015260126024820152711253959053125117d0d3d35352551351539560721b60448201526064015b60405180910390fd5b600c548210156106d15760405162461bcd60e51b815260206004820152601d60248201527f434f4d4d49544d454e545f4d41595f4e4f545f42455f524544554345440000006044820152606401610676565b600c8290558061071c5760405162461bcd60e51b81526020600482015260166024820152751253959053125117d3525397d253959154d51351539560521b6044820152606401610676565b600b8190556006546001600160a01b0384811661010090920416146107c9576001600160a01b0383166107835760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b6044820152606401610676565b6001600160a01b03831660009081526020819052604090205480156107be576006546107be9061010090046001600160a01b03168583611046565b6107c7846111ea565b505b60408051838152602081018390526001600160a01b038516917f61e70c2b58e36615943b6c2aceeeaf9a7e2178bcc30b8a9f6efb68fd50d1a06091015b60405180910390a2505050565b600033610821858285611244565b61082c858585611046565b60019150505b9392505050565b6000600b5482101561084d57506000919050565b60008060075461085c60025490565b6108669190611db0565b905061088384600954600261087b9190611dc8565b6008546112b8565b915061088f8180611dc8565b6108999083611db0565b91506108a482611368565b91506108b08183611de7565b949350505050565b6000336106298185856108cb8383610dcb565b6108d59190611db0565b610f22565b6108e63382600061144d565b50565b6000806007546108f860025490565b6109029190611db0565b90506000610939600c5460026109189190611dc8565b6109229086611dc8565b60095460085461093490612710611dc8565b6112b8565b90506109458280611dc8565b61094f9082611db0565b905061095a81611368565b9050818111156109755761096e8282611de7565b9050610832565b5060009392505050565b60065461010090046001600160a01b03166001600160a01b0316336001600160a01b031614156109e95760405162461bcd60e51b815260206004820152601560248201527410915391519250d250549657d0d0539517d4d15313605a1b6044820152606401610676565b60008111610a305760405162461bcd60e51b81526020600482015260146024820152734d5553545f53454c4c5f41545f4c454153545f3160601b6044820152606401610676565b6000610a3b83610cf5565b905081811015610a7e5760405162461bcd60e51b815260206004820152600e60248201526d50524943455f534c49505041474560901b6044820152606401610676565b610a8a3384600161144d565b610a9484826114b3565b60408051828152602081018590526001600160a01b0386169133917fa082022e93cfcd9f1da5f9236718053910f7e840da080c789c7845698dc032ff910160405180910390a350505050565b610ae86114d0565b610af260006111ea565b565b60606005805461059890611d65565b60003381610b118286610dcb565b905083811015610b715760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610676565b610b7e8286868403610f22565b506001949350505050565b6001600160a01b038316610bd15760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b6044820152606401610676565b60008111610c175760405162461bcd60e51b81526020600482015260136024820152724d5553545f4255595f41545f4c454153545f3160681b6044820152606401610676565b6000610c2283610839565b905081811015610c655760405162461bcd60e51b815260206004820152600e60248201526d50524943455f534c49505041474560901b6044820152606401610676565b60408051848152602081018390526001600160a01b0386169133917f89f5adc174562e07c9c9b1cae7109bbecb21cf9d1b2847e550042b8653c54a0e910160405180910390a3610cb483611530565b6006546001600160a01b038581166101009092041614610cd757610cd783611548565b610ce18482611595565b50505050565b600033610629818585611046565b600080610d00610e6c565b9050600080600754610d1160025490565b610d1b9190611db0565b9050610d4e610d2a8487611dc8565b600754610d379080611dc8565b610d418480611dc8565b6002546109349190611dc8565b91506000610d5d846002611dc8565b610d679087611dc8565b9050610d738282611e14565b9050610d7f8184611db0565b9250610da0610d8e8780611dc8565b85610d998580611dc8565b6001611607565b610daa9084611de7565b9695505050505050565b610dbd81611530565b610dc78282611664565b5050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610dfe6114d0565b6001600160a01b038116610e635760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610676565b6108e6816111ea565b600a5460009047906001600160a01b031615610f0057600a546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610ec557600080fd5b505afa158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd9190611e36565b90505b6001600160801b03811115610f1d576001600160801b0391505090565b919050565b6001600160a01b038316610f845760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610676565b6001600160a01b038216610fe55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610676565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166110aa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610676565b6001600160a01b03821661110c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610676565b6001600160a01b038316600090815260208190526040902054818110156111845760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610676565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610ce1565b600680546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006112508484610dcb565b90506000198114610ce157818110156112ab5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610676565b610ce18484848403610f22565b6000808060001985870985870292508281108382030391505080600014156112f3578382816112e9576112e9611dfe565b0492505050610832565b8084116112ff57600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60008161137757506000919050565b6000600161138484611778565b901c6001901b9050600181848161139d5761139d611dfe565b048201901c905060018184816113b5576113b5611dfe565b048201901c905060018184816113cd576113cd611dfe565b048201901c905060018184816113e5576113e5611dfe565b048201901c905060018184816113fd576113fd611dfe565b048201901c9050600181848161141557611415611dfe565b048201901c9050600181848161142d5761142d611dfe565b048201901c90506108328182858161144757611447611dfe565b0461180d565b6114578383611823565b806114ae57816007600082825461146e9190611db0565b90915550506040518281526001600160a01b038416907fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca590602001610806565b505050565b8015610dc757600a54610dc7906001600160a01b03168383611955565b6006546001600160a01b03610100909104163314610af25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610676565b600a546108e6906001600160a01b03163330846119e0565b600081600d546115589190611dc8565b905061156661271082611e14565b90506115728183611de7565b9050610dc761158f6006546001600160a01b036101009091041690565b826114b3565b61159f8282611a82565b6f4b3b4ca85a86c47a098a2240000000006007546115bc60025490565b6115c69190611db0565b1115610dc75760405162461bcd60e51b815260206004820152601060248201526f4558434553534956455f535550504c5960801b6044820152606401610676565b6000806116158686866112b8565b9050600183600281111561162b5761162b611e4f565b14801561164857506000848061164357611643611dfe565b868809115b1561165b57611658600182611db0565b90505b95945050505050565b600081116116a75760405162461bcd60e51b815260206004820152601060248201526f4d495353494e475f43555252454e435960801b6044820152606401610676565b6000600d54826116b79190611dc8565b90506116c561271082611e14565b905060006116d2836108e9565b9050836001600160a01b0381166116f75760065461010090046001600160a01b031690505b60065461171b9061010090046001600160a01b03166117168587611de7565b6114b3565b811561172b5761172b8183611595565b60408051858152602081018490526001600160a01b0387169133917f0849372be021f4dce74a8a4cc15fcfaa23fdcfa92ae99fa045f6cdf0c0836436910160405180910390a35050505050565b600080608083901c1561178d57608092831c92015b604083901c1561179f57604092831c92015b602083901c156117b157602092831c92015b601083901c156117c357601092831c92015b600883901c156117d557600892831c92015b600483901c156117e757600492831c92015b600283901c156117f957600292831c92015b600183901c15611807576001015b92915050565b600081831061181c5781610832565b5090919050565b6001600160a01b0382166118835760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610676565b6001600160a01b038216600090815260208190526040902054818110156118f75760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610676565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b60405163a9059cbb60e01b8082526001600160a01b0384166004830152602482018390529060008060448382895af1611992573d6000803e3d6000fd5b5061199c84611b41565b610ce15760405162461bcd60e51b815260206004820152601560248201527423a83b191d103330b4b632b2103a3930b739b332b960591b6044820152606401610676565b6040516323b872dd60e01b8082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af1611a25573d6000803e3d6000fd5b50611a2f85611b41565b611a7b5760405162461bcd60e51b815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610676565b5050505050565b6001600160a01b038216611ad85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610676565b8060026000828254611aea9190611db0565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6000611b67565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d8015611ba65760208114611bd757611ba17f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611b48565b611be4565b823b611bce57611bce7311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014611b48565b60019150611be4565b3d6000803e600051151591505b50919050565b600060208083528351808285015260005b81811015611c1757858101830151858201604001528201611bfb565b81811115611c29576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b03811681146108e657600080fd5b60008060408385031215611c6757600080fd5b8235611c7281611c3f565b946020939093013593505050565b600080600060608486031215611c9557600080fd5b8335611ca081611c3f565b95602085013595506040909401359392505050565b600080600060608486031215611cca57600080fd5b8335611cd581611c3f565b92506020840135611ce581611c3f565b929592945050506040919091013590565b600060208284031215611d0857600080fd5b5035919050565b600060208284031215611d2157600080fd5b813561083281611c3f565b60008060408385031215611d3f57600080fd5b8235611d4a81611c3f565b91506020830135611d5a81611c3f565b809150509250929050565b600181811c90821680611d7957607f821691505b60208210811415611be457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611dc357611dc3611d9a565b500190565b6000816000190483118215151615611de257611de2611d9a565b500290565b600082821015611df957611df9611d9a565b500390565b634e487b7160e01b600052601260045260246000fd5b600082611e3157634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611e4857600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220bc92b0b0e507b08b64ec0d8508ada54a2f5cb220768516ae7779ab464ac61c1264736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_currencyAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_buySlopeNum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_buySlopeDen";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_investmentReserveBasisPoints";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
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
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_bswanAmount";
            readonly type: "uint256";
        }];
        readonly name: "Burn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_currencyAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_bswanAmount";
            readonly type: "uint256";
        }];
        readonly name: "Buy";
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_currencyAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_bswanAmount";
            readonly type: "uint256";
        }];
        readonly name: "Pay";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_currencyAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_bswanAmount";
            readonly type: "uint256";
        }];
        readonly name: "Sell";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_revenueCommitmentBasisPoints";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_minInvestment";
            readonly type: "uint256";
        }];
        readonly name: "UpdateConfig";
        readonly type: "event";
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
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "burnedSupply";
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
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currencyValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minTokensBought";
            readonly type: "uint256";
        }];
        readonly name: "buy";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "buySlopeDen";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "buySlopeNum";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "buybackReserve";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currency";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "uint256";
            readonly name: "_currencyValue";
            readonly type: "uint256";
        }];
        readonly name: "estimateBuyValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_currencyValue";
            readonly type: "uint256";
        }];
        readonly name: "estimatePayValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quantityToSell";
            readonly type: "uint256";
        }];
        readonly name: "estimateSellValue";
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
        readonly inputs: readonly [];
        readonly name: "investmentReserveBasisPoints";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minInvestment";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "paused";
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
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currencyValue";
            readonly type: "uint256";
        }];
        readonly name: "pay";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revenueCommitmentBasisPoints";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_quantityToSell";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minCurrencyReturned";
            readonly type: "uint256";
        }];
        readonly name: "sell";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_newOwner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_revenueCommitmentBasisPoints";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minInvestment";
            readonly type: "uint256";
        }];
        readonly name: "updateConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): BSWANInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BSWAN;
}
export {};
