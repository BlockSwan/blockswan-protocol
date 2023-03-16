import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { RoundDataLogic, RoundDataLogicInterface } from "../../../../protocol/libraries/logics/RoundDataLogic";
type RoundDataLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoundDataLogic__factory extends ContractFactory {
    constructor(...args: RoundDataLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RoundDataLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RoundDataLogic;
    connect(signer: Signer): RoundDataLogic__factory;
    static readonly bytecode = "0x610d2a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101ef5760003560e01c80639978e64811610119578063cc8a0498116100ac578063e4dfdc1b1161007b578063e4dfdc1b14610550578063ec94c1f614610569578063ecd6688214610590578063fb607366146103fd57600080fd5b8063cc8a0498146104bb578063d1e1ddff146104dd578063d7eab64e1461050c578063e0728f911461053357600080fd5b8063aee11946116100e8578063aee119461461045e578063b26523381461047e578063be12048a14610495578063c52af8e9146104a857600080fd5b80639978e648146103d55780639df6b1e5146103fd578063a2e0e17914610424578063a80e73a21461044b57600080fd5b806361bfa341116101915780637e084e3b116101605780637e084e3b146103625780637f8dc8e71461037557806389e48ba11461038d57806396571bfd146103b557600080fd5b806361bfa341146102eb57806366b4161b1461030b5780636b8af6731461031e5780637acb51351461034557600080fd5b806332da9d4b116101cd57806332da9d4b1461026b57806346afea401461028c5780635347e6b8146102b057806357d47234146102c457600080fd5b80630368443b146101f4578063194ebd53146102295780631f05a7e214610249575b600080fd5b81801561020057600080fd5b5061021461020f36600461098a565b6105b7565b60405190151581526020015b60405180910390f35b81801561023557600080fd5b50610214610244366004610a38565b6105dd565b81801561025557600080fd5b50610269610264366004610af1565b610657565b005b61027e610279366004610b1d565b610687565b604051908152602001610220565b81801561029857600080fd5b506102146102a736600461098a565b60019182015590565b6102146102be36600461098a565b90541490565b8180156102d057600080fd5b506102146102df36600461098a565b60069190910155600190565b8180156102f757600080fd5b5061021461030636600461098a565b6106a9565b61027e610319366004610b1d565b6106bf565b81801561032a57600080fd5b5061021461033936600461098a565b60059190910155600190565b610214610353366004610b1d565b6003810154600a909101541490565b61027e610370366004610af1565b6106d5565b610214610383366004610b1d565b601e015460ff1690565b6103a061039b366004610b1d565b61074b565b60408051928352602083019190915201610220565b8180156103c157600080fd5b506102146103d0366004610b36565b610769565b8180156103e157600080fd5b506102146103f0366004610b1d565b6000600290910155600190565b81801561040957600080fd5b5061021461041836600461098a565b60029190910155600190565b81801561043057600080fd5b5061021461043f36600461098a565b60049190910155600190565b61027e610459366004610b1d565b6107c4565b81801561046a57600080fd5b50610214610479366004610c17565b6107df565b61021461048c366004610b1d565b60020154151590565b61027e6104a336600461098a565b6107ee565b6102146104b6366004610c17565b61080e565b8180156104c757600080fd5b506102146104d636600461098a565b9055600190565b8180156104e957600080fd5b506102146104f8366004610b1d565b601e01805460ff1916600190811790915590565b81801561051857600080fd5b5061021461052736600461098a565b60039190910155600190565b610214610541366004610b1d565b60038101546009909101541490565b61021461055e36600461098a565b600191909101541490565b81801561057557600080fd5b5061021461058436600461098a565b60079190910155600190565b81801561059c57600080fd5b506102146105ab36600461098a565b600b9190910155600190565b60008183600a0160008282546105cd9190610c59565b9091555060019150505b92915050565b6000805b825181101561064d5783601d0183828151811061060057610600610c71565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558061064581610c87565b9150506105e1565b5060019392505050565b8083600c0183600b811061066d5761066d610c71565b01600082825461067d9190610c59565b9091555050505050565b600081600a146106a15761069c826001610c59565b6105d7565b600a92915050565b6000818360090160008282546105cd9190610c59565b6000816009015482600301546105d79190610ca2565b6000836009015484600301546106eb9190610ca2565b905060005b600b811015610743578381101580156107095750828111155b6107315784600c0181600b811061072257610722610c71565b015461072e9083610c59565b91505b8061073b81610c87565b9150506106f0565b509392505050565b600080610757836107c4565b61076084610687565b91509150915091565b601c82018054600181810183556000928352602080842085516003909402019283558085015191830191909155604084015180518593926107b19260028501929101906108f1565b5050825161064d9150601785019061087e565b600081156107d75761069c600183610ca2565b600092915050565b600061064d6019840183610891565b600082600c0182600b811061080557610805610c71565b01549392505050565b6000805b836003015481101561087457826001600160a01b031684601d01828154811061083d5761083d610c71565b6000918252602090912001546001600160a01b031614156108625760019150506105d7565b8061086c81610c87565b915050610812565b5060009392505050565b600061088a83836108a2565b9392505050565b600061088a836001600160a01b0384165b60008181526001830160205260408120546108e9575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105d7565b5060006105d7565b8280546108fd90610cb9565b90600052602060002090601f01602090048101928261091f5760008555610965565b82601f1061093857805160ff1916838001178555610965565b82800160010185558215610965579182015b8281111561096557825182559160200191906001019061094a565b50610971929150610975565b5090565b5b808211156109715760008155600101610976565b6000806040838503121561099d57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156109e5576109e56109ac565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a1457610a146109ac565b604052919050565b80356001600160a01b0381168114610a3357600080fd5b919050565b60008060408385031215610a4b57600080fd5b8235915060208084013567ffffffffffffffff80821115610a6b57600080fd5b818601915086601f830112610a7f57600080fd5b813581811115610a9157610a916109ac565b8060051b9150610aa28483016109eb565b8181529183018401918481019089841115610abc57600080fd5b938501935b83851015610ae157610ad285610a1c565b82529385019390850190610ac1565b8096505050505050509250929050565b600080600060608486031215610b0657600080fd5b505081359360208301359350604090920135919050565b600060208284031215610b2f57600080fd5b5035919050565b60008060408385031215610b4957600080fd5b8235915060208084013567ffffffffffffffff80821115610b6957600080fd5b9085019060608288031215610b7d57600080fd5b610b856109c2565b823581528383013584820152604083013582811115610ba357600080fd5b80840193505087601f840112610bb857600080fd5b823582811115610bca57610bca6109ac565b610bdc601f8201601f191686016109eb565b92508083528885828601011115610bf257600080fd5b8085850186850137600085828501015250816040820152809450505050509250929050565b60008060408385031215610c2a57600080fd5b82359150610c3a60208401610a1c565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c6c57610c6c610c43565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610c9b57610c9b610c43565b5060010190565b600082821015610cb457610cb4610c43565b500390565b600181811c90821680610ccd57607f821691505b60208210811415610cee57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220c722ed1ce5ce496dda44ef69a4e21936ed7bd78a765696dd66d76cf8c7be45e564736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "winningChoice";
            readonly type: "uint256";
        }];
        readonly name: "getMaxRange";
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
            readonly name: "winningChoice";
            readonly type: "uint256";
        }];
        readonly name: "getMinRange";
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
            readonly name: "winningChoice";
            readonly type: "uint256";
        }];
        readonly name: "getRanges";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): RoundDataLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoundDataLogic;
}
export {};
