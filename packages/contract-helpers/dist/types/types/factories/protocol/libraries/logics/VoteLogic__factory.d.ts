import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { VoteLogic, VoteLogicInterface } from "../../../../protocol/libraries/logics/VoteLogic";
type VoteLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class VoteLogic__factory extends ContractFactory {
    constructor(...args: VoteLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<VoteLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): VoteLogic;
    connect(signer: Signer): VoteLogic__factory;
    static readonly bytecode = "0x6107db61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80630a6c668c1461005b5780630b97b4171461008957806334d8dbe2146100a9578063e6de1c04146100c9575b600080fd5b6100746100693660046104f2565b604091909101511490565b60405190151581526020015b60405180910390f35b81801561009557600080fd5b506100746100a4366004610537565b6100dc565b6100bc6100b73660046105ae565b6101c5565b604051610080919061065f565b6100746100d73660046106c3565b610253565b600083600a81111560405180604001604052806002815260200161353560f01b815250906101265760405162461bcd60e51b815260040161011d9190610711565b60405180910390fd5b508585856101518360000160009054906101000a90046001600160a01b031683838660010154610275565b60405180604001604052806002815260200161343760f01b8152509061018a5760405162461bcd60e51b815260040161011d9190610711565b506002890188905561019c898761028d565b506101b589600501805460ff1916600190811790915590565b5060019998505050505050505050565b6040805160c0810182526000808252602082018190529181018290526060808201839052608082015260a08101919091526040518060c00160405280866001600160a01b0316815260200161021b8787866102af565b815260200160008152602001848152602001604051806020016040528060008152508152602001600015158152509050949350505050565b60008284604001511015801561026d575081846040015111155b949350505050565b6000816102838686866102af565b1495945050505050565b80516000906102a590600485019060208501906102e5565b5060019392505050565b60008383836040516020016102c69392919061072b565b6040516020818303038152906040528051906020012090509392505050565b8280546102f19061076a565b90600052602060002090601f0160209004810192826103135760008555610359565b82601f1061032c57805160ff1916838001178555610359565b82800160010185558215610359579182015b8281111561035957825182559160200191906001019061033e565b50610365929150610369565b5090565b5b80821115610365576000815560010161036a565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b03811681146103ab57600080fd5b919050565b600082601f8301126103c157600080fd5b813567ffffffffffffffff808211156103dc576103dc61037e565b604051601f8301601f19908116603f011681019082821181831017156104045761040461037e565b8160405283815286602085880101111561041d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803580151581146103ab57600080fd5b600060c0828403121561045f57600080fd5b60405160c0810167ffffffffffffffff82821081831117156104835761048361037e565b8160405282935061049385610394565b835260208501356020840152604085013560408401526060850135606084015260808501359150808211156104c757600080fd5b506104d4858286016103b0565b6080830152506104e660a0840161043d565b60a08201525092915050565b6000806040838503121561050557600080fd5b823567ffffffffffffffff81111561051c57600080fd5b6105288582860161044d565b95602094909401359450505050565b6000806000806080858703121561054d57600080fd5b8435935060208501359250604085013567ffffffffffffffff8082111561057357600080fd5b61057f888389016103b0565b9350606087013591508082111561059557600080fd5b506105a2878288016103b0565b91505092959194509250565b600080600080608085870312156105c457600080fd5b6105cd85610394565b93506020850135925060408501359150606085013567ffffffffffffffff8111156105f757600080fd5b6105a2878288016103b0565b60005b8381101561061e578181015183820152602001610606565b8381111561062d576000848401525b50505050565b6000815180845261064b816020860160208601610603565b601f01601f19169290920160200192915050565b6020815260018060a01b0382511660208201526020820151604082015260408201516060820152606082015160808201526000608083015160c060a08401526106ab60e0840182610633565b905060a0840151151560c08401528091505092915050565b6000806000606084860312156106d857600080fd5b833567ffffffffffffffff8111156106ef57600080fd5b6106fb8682870161044d565b9660208601359650604090950135949350505050565b6020815260006107246020830184610633565b9392505050565b6bffffffffffffffffffffffff198460601b1681528260148201526000825161075b816034850160208701610603565b91909101603401949350505050565b600181811c9082168061077e57607f821691505b6020821081141561079f57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212205c03af02ce34a63f8f0202dcfaa0deef95fc5158ead6f376a19a9bbc8b64815a64736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "choice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "salt";
            readonly type: "string";
        }];
        readonly name: "commit";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "commit";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "choice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "weight";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "justification";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }];
            readonly internalType: "struct DataTypes.Vote";
            readonly name: "newVote";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "commit";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "choice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "weight";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "justification";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }];
            readonly internalType: "struct DataTypes.Vote";
            readonly name: "vote";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "minRange";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxRange";
            readonly type: "uint256";
        }];
        readonly name: "isBetweenRange";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "commit";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "choice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "weight";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "justification";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }];
            readonly internalType: "struct DataTypes.Vote";
            readonly name: "vote";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "winningChoice";
            readonly type: "uint256";
        }];
        readonly name: "isVoteCorrect";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): VoteLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VoteLogic;
}
export {};
