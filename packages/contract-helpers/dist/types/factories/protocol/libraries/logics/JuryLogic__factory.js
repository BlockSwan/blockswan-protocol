"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuryLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "minStake",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "alpha",
                type: "uint256",
            },
        ],
        name: "calcTokenToFreeze",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x610b3b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c806360b1276a1161006557806360b1276a1461010d578063aeee99be1461012d578063c818c6341461014d578063f4c811bc146101b857600080fd5b8063043abc961461008c5780633e8973e5146100c1578063425a03c4146100e2575b600080fd5b81801561009857600080fd5b506100ac6100a7366004610808565b6101d8565b60405190151581526020015b60405180910390f35b6100d46100cf366004610858565b610228565b6040519081526020016100b8565b6100f56100f036600461087a565b61023d565b6040516001600160a01b0390911681526020016100b8565b81801561011957600080fd5b506100ac6101283660046108a6565b6103b4565b81801561013957600080fd5b506100ac610148366004610904565b6103f4565b61019d61015b3660046109ee565b604080518082018252600080825260209182018190526001600160a01b0394909416845291825291829020825180840190935280548352600101549082015290565b604080518251815260209283015192810192909252016100b8565b8180156101c457600080fd5b506100ac6101d3366004610808565b610487565b60006101e484876104cb565b6101f4576101f284876104ed565b505b6001600160a01b038616600090815260208490526040902061021981888a8987610502565b50600198975050505050505050565b6000610234838361053b565b90505b92915050565b604080514460208083019190915242828401524340606083015260808083018590528351808403909101815260a09092019092528051910120600090819060405163b8c7740f60e01b8152600481018790526024810186905290915060009061031690839073__$b1d473f7cf7b653a454669f58de072d057$__9063b8c7740f9060440160206040518083038186803b1580156102d957600080fd5b505af41580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103119190610a1a565b610561565b6040516388c1d46760e01b815260048101889052602481018790526044810182905290915073__$b1d473f7cf7b653a454669f58de072d057$__906388c1d4679060640160206040518083038186803b15801561037257600080fd5b505af4158015610386573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103aa9190610a33565b9695505050505050565b6001600160a01b038416600090815260208390526040812060008782600101546103de9190610a6d565b60018301819055905061021982888a8988610502565b6000805b855181101561047a57600086828151811061041557610415610a84565b6020908102919091018101516001600160a01b038116600090815291879052604082206001810154919350919061044d908b90610a9a565b60018301819055905061046382848c8b8a6105ed565b50505050808061047290610ab2565b9150506103f8565b5060019695505050505050565b6001600160a01b03851660009081526020839052604081206104ac81888a89876105ed565b5080546104bd576102198588610603565b506001979650505050505050565b6001600160a01b03811660009081526001830160205260408120541515610234565b6000610234836001600160a01b038416610618565b6000838660000160008282546105189190610a9a565b9250508190555061052f8286858960000154610667565b50600195945050505050565b60008115611388198390048411151761055357600080fd5b506127109102611388010490565b60008082116105b65760405162461bcd60e51b815260206004820152601a60248201527f6d6178206d7573742062652067726561746572207468616e2030000000000000604482015260640160405180910390fd5b81836040516020016105ca91815260200190565b6040516020818303038152906040528051906020012060001c6102349190610acd565b6000838660000160008282546105189190610a6d565b6000610234836001600160a01b0384166106ed565b600081815260018301602052604081205461065f57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610237565b506000610237565b604051631712e1c560e11b81526004810185905260248101839052604481018290526001600160a01b038416606482015273__$819dd864b9a28b29592cd77136582b47ce$__90632e25c38a9060840160006040518083038186803b1580156106cf57600080fd5b505af41580156106e3573d6000803e3d6000fd5b5050505050505050565b600081815260018301602052604081205480156107d6576000610711600183610a6d565b855490915060009061072590600190610a6d565b905081811461078a57600086600001828154811061074557610745610a84565b906000526020600020015490508087600001848154811061076857610768610a84565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061079b5761079b610aef565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610237565b6000915050610237565b6001600160a01b03811681146107f557600080fd5b50565b8035610803816107e0565b919050565b60008060008060008060c0878903121561082157600080fd5b863595506020870135610833816107e0565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000806040838503121561086b57600080fd5b50508035926020909101359150565b60008060006060848603121561088f57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156108be57600080fd5b8535945060208601356108d0816107e0565b94979496505050506040830135926060810135926080909101359150565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a0868803121561091c57600080fd5b8535945060208087013567ffffffffffffffff8082111561093c57600080fd5b818901915089601f83011261095057600080fd5b813581811115610962576109626108ee565b8060051b604051601f19603f83011681018181108582111715610987576109876108ee565b60405291825284820192508381018501918c8311156109a557600080fd5b938501935b828510156109ca576109bb856107f8565b845293850193928501926109aa565b999c999b505050506040880135976060810135976080909101359650945050505050565b60008060408385031215610a0157600080fd5b8235610a0c816107e0565b946020939093013593505050565b600060208284031215610a2c57600080fd5b5051919050565b600060208284031215610a4557600080fd5b8151610a50816107e0565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a7f57610a7f610a57565b500390565b634e487b7160e01b600052603260045260246000fd5b60008219821115610aad57610aad610a57565b500190565b6000600019821415610ac657610ac6610a57565b5060010190565b600082610aea57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603160045260246000fdfea26469706673582212202705805a0f2ab8c66195370ee096fa84a4cb7f1027e33bad16f8e1169fbf3e1c64736f6c63430008090033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class JuryLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, JuryLogic__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$b1d473f7cf7b653a454669f58de072d057\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/JuryDataLogic.sol:JuryDataLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$819dd864b9a28b29592cd77136582b47ce\\$__", "g"), linkLibraryAddresses["contracts/imports/kleros/contracts/SortitionSumTreeFactory.sol:SortitionSumTreeFactory"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.JuryLogic__factory = JuryLogic__factory;
JuryLogic__factory.bytecode = _bytecode;
JuryLogic__factory.abi = _abi;
