"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "winningChoice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "calcRulingValues",
        outputs: [
            {
                internalType: "uint256",
                name: "toProcecutor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "toDefendant",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x61196761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063681caa2111610070578063681caa21146101af57806384323457146101df578063937bb083146102075780639ce385c014610227578063b54a2e191461024757600080fd5b8063146cc32c146100a257806334d61bae146100e45780634d5291571461011b578063679173cc1461013d575b600080fd5b8180156100ae57600080fd5b506100c26100bd3660046112c4565b610272565b604080519283526001600160a01b039091166020830152015b60405180910390f35b8180156100f057600080fd5b506101046100ff3660046114d7565b6103d9565b6040805192151583526020830191909152016100db565b81801561012757600080fd5b5061013b6101363660046115be565b61085f565b005b81801561014957600080fd5b5061015d6101583660046115be565b610913565b6040805184518152602080860151908201528482015191810191909152606080850151908201526080938401516001600160a01b03169381019390935260a083019190915260c082015260e0016100db565b8180156101bb57600080fd5b506101cf6101ca3660046115ea565b610ab6565b60405190151581526020016100db565b6101f26101ed366004611625565b610c06565b604080519283526020830191909152016100db565b81801561021357600080fd5b506100c26102223660046112c4565b610c33565b61023a610235366004611625565b610cf2565b6040516100db9190611707565b610264610255366004611625565b60009182526020526040902090565b6040519081526020016100db565b600080600061028b878560009182526020526040902090565b90506102978187610eee565b6102a18186610fb6565b6102ac816001611079565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc55427906102e690849060039060040161180f565b60206040518083038186803b1580156102fe57600080fd5b505af4158015610312573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103369190611823565b5060405163f4b84e5960e01b815260078201600482015273__$550f058dba878dd89fc9dbefa555bd334f$__9063f4b84e599060240160206040518083038186803b15801561038457600080fd5b505af4158015610398573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bc9190611845565b600b909101549092506001600160a01b0316905094509492505050565b60008060006103f98460800151600001518761113a90919063ffffffff16565b60808501515160009081526020878152604091829020875160a089015160608a0151805190850151955163da6e40d560e01b815260078501600482015260248101939093526001600160a01b039091166044830152805160648301528301516084820152835160a4820152929091015160c483015291925073__$550f058dba878dd89fc9dbefa555bd334f$__9063da6e40d59060e40160206040518083038186803b1580156104a857600080fd5b505af41580156104bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e09190611823565b50602085015160405163029af90f60e61b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9163a6be43c09161051d91859160040161185e565b60206040518083038186803b15801561053557600080fd5b505af4158015610549573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056d9190611823565b506040808601519051631a7bd7bd60e31b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9163d3debde8916105aa91859160040161185e565b60206040518083038186803b1580156105c257600080fd5b505af41580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190611823565b50608085015160200151604051632131ae7160e21b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__916384c6b9c491610644918591600401918252602082015260400190565b60206040518083038186803b15801561065c57600080fd5b505af4158015610670573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106949190611823565b5060808501516040908101519051638c20f44760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91638c20f447916106df918591600401918252602082015260400190565b60206040518083038186803b1580156106f757600080fd5b505af415801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190611823565b5060808501516060015160405163135310a560e21b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91634d4c429491610779918591600401918252602082015260400190565b60206040518083038186803b15801561079157600080fd5b505af41580156107a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c99190611823565b5060405163f4b84e5960e01b8152600782016004820152829073__$550f058dba878dd89fc9dbefa555bd334f$__9063f4b84e599060240160206040518083038186803b15801561081957600080fd5b505af415801561082d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108519190611845565b935093505050935093915050565b60008381526020829052604090206108778184610eee565b610882816000611079565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc55427906108bc90849060019060040161180f565b60206040518083038186803b1580156108d457600080fd5b505af41580156108e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090c9190611823565b5050505050565b61091b61122b565b6000806000610934878660009182526020526040902090565b90506109408187610fb6565b61094b816001611079565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc554279061098590849060039060040161180f565b60206040518083038186803b15801561099d57600080fd5b505af41580156109b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d59190611823565b5060038101546040516302e4aa8f60e61b81526007830160048201819052919073__$550f058dba878dd89fc9dbefa555bd334f$__9063b92aa3c09060240160206040518083038186803b158015610a2c57600080fd5b505af4158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611845565b6040805160a0810182528454815260018501546020820152600285015491810191909152600384015460608201526004909301546001600160a01b031660808401529199909850909650945050505050565b6000858152602082905260408120610ace8187610fb6565b610ad88186610eee565b610ae3816001611079565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc5542790610b1d90849060029060040161180f565b60206040518083038186803b158015610b3557600080fd5b505af4158015610b49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6d9190611823565b50604051635b4bca6b60e01b8152600481018290526024810185905273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90635b4bca6b9060440160206040518083038186803b158015610bc057600080fd5b505af4158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190611823565b506001979650505050505050565b600080610c1e83610c19866103e8611895565b61114d565b9150610c2a82846118b4565b90509250929050565b6000806000610c4c878560009182526020526040902090565b9050610c588187610fb6565b610c63816000611079565b600a810154610c739086906118cb565b4211604051806040016040528060028152602001610c8d60f21b81525090610cb75760405162461bcd60e51b8152600401610cae91906118e3565b60405180910390fd5b50604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc55427906102e690849060039060040161180f565b610cfa611263565b604051806101600160405280846000018054610d15906118f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d41906118f6565b8015610d8e5780601f10610d6357610100808354040283529160200191610d8e565b820191906000526020600020905b815481529060010190602001808311610d7157829003601f168201915b50505050508152602001846001018054610da7906118f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd3906118f6565b8015610e205780601f10610df557610100808354040283529160200191610e20565b820191906000526020600020905b815481529060010190602001808311610e0357829003601f168201915b5050505050815260200183815260200184600201548152602001846003015481526020018460040154815260200184600501548152602001610e6485600d01611173565b8152600685015460ff90811615156020808401919091526040805160a08101825260078901548152600889015492810192909252600988015482820152600a880154606080840191909152600b8901546001600160a01b0316608084015290840191909152600c870154920191166003811115610ee357610ee36116cf565b905290505b92915050565b60405163a6bbe89f60e01b8152600481018390526024810182905273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9063a6bbe89f9060440160206040518083038186803b158015610f4057600080fd5b505af4158015610f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f789190611823565b60405180604001604052806002815260200161323160f01b81525090610fb15760405162461bcd60e51b8152600401610cae91906118e3565b505050565b60405163bad1835360e01b8152600481018390526024810182905273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9063bad183539060440160206040518083038186803b15801561100857600080fd5b505af415801561101c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110409190611823565b60405180604001604052806002815260200161191960f11b81525090610fb15760405162461bcd60e51b8152600401610cae91906118e3565b60405162a2d74b60e41b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90630a2d74b0906110b1908590859060040161180f565b60206040518083038186803b1580156110c957600080fd5b505af41580156110dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111019190611823565b60405180604001604052806002815260200161323360f01b81525090610fb15760405162461bcd60e51b8152600401610cae91906118e3565b60006111468383611180565b9392505050565b60008115611388198390048411151761116557600080fd5b506127109102611388010490565b60606000611146836111cf565b60008181526001830160205260408120546111c757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610ee8565b506000610ee8565b60608160000180548060200260200160405190810160405280929190818152602001828054801561121f57602002820191906000526020600020905b81548152602001906001019080831161120b575b50505050509050919050565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b60405180610160016040528060608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001606081526020016000151581526020016112b861122b565b81526020016000905290565b600080600080608085870312156112da57600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561132f5761132f6112f6565b60405290565b60405160c0810167ffffffffffffffff8111828210171561132f5761132f6112f6565b600082601f83011261136957600080fd5b813567ffffffffffffffff80821115611384576113846112f6565b604051601f8301601f19908116603f011681019082821181831017156113ac576113ac6112f6565b816040528381528660208588010111156113c557600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000604082840312156113f757600080fd5b6113ff61130c565b9050813581526020820135602082015292915050565b60006080828403121561142757600080fd5b61142f61130c565b905061143b83836113e5565b815261144a83604084016113e5565b602082015292915050565b60006080828403121561146757600080fd5b6040516080810181811067ffffffffffffffff8211171561148a5761148a6112f6565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b80356001600160a01b03811681146114d257600080fd5b919050565b6000806000606084860312156114ec57600080fd5b8335925060208401359150604084013567ffffffffffffffff8082111561151257600080fd5b90850190610180828803121561152757600080fd5b61152f611335565b8235815260208301358281111561154557600080fd5b61155189828601611358565b60208301525060408301358281111561156957600080fd5b61157589828601611358565b6040830152506115888860608501611415565b606082015261159a8860e08501611455565b60808201526115ac61016084016114bb565b60a08201528093505050509250925092565b6000806000606084860312156115d357600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561160257600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000806040838503121561163857600080fd5b50508035926020909101359150565b6000815180845260005b8181101561166d57602081850181015186830182015201611651565b8181111561167f576000602083870101525b50601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b838110156116c4578151875295820195908201906001016116a8565b509495945050505050565b634e487b7160e01b600052602160045260246000fd5b6004811061170357634e487b7160e01b600052602160045260246000fd5b9052565b60208152600082516101e0806020850152611726610200850183611647565b91506020850151601f19808685030160408701526117448483611647565b93506040870151606087015260608701516080870152608087015160a087015260a087015160c087015260c087015160e087015260e087015191506101008187860301818801526117958584611694565b945080880151925050506101206117af8187018315159052565b8601518051610140878101919091526020820151610160880152604082015161018088015260608201516101a08801526080909101516001600160a01b03166101c08701528601519050611805828601826116e5565b5090949350505050565b8281526040810161114660208301846116e5565b60006020828403121561183557600080fd5b8151801515811461114657600080fd5b60006020828403121561185757600080fd5b5051919050565b8281526040602082015260006118776040830184611647565b949350505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156118af576118af61187f565b500290565b6000828210156118c6576118c661187f565b500390565b600082198211156118de576118de61187f565b500190565b6020815260006111466020830184611647565b600181811c9082168061190a57607f821691505b6020821081141561192b57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b35bdba777c165474b350c263d6dd3f78e0ed9240fe3a9b635c3588915e3d88464736f6c63430008090033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class OrderLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, OrderLogic__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$b4fe748c53f8821a645d4d1b5c6d8eb652\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/OrderDataLogic.sol:OrderDataLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$550f058dba878dd89fc9dbefa555bd334f\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/InvoiceLogic.sol:InvoiceLogic"]
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
exports.OrderLogic__factory = OrderLogic__factory;
OrderLogic__factory.bytecode = _bytecode;
OrderLogic__factory.abi = _abi;
