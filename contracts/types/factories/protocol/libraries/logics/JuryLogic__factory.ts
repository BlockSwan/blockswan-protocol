/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  JuryLogic,
  JuryLogicInterface,
} from "../../../../protocol/libraries/logics/JuryLogic";

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
] as const;

const _bytecode =
  "0x610e0861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c80639ba4b2c5116100655780639ba4b2c514610102578063bf74405714610122578063f236205414610142578063fb20c8421461016257610087565b80633bf8c4311461008c5780633e8973e5146100b55780636779b257146100d5575b600080fd5b61009f61009a366004610ab4565b610182565b6040516100ac9190610c0a565b60405180910390f35b6100c86100c3366004610b6d565b6102c2565b6040516100ac9190610bd9565b8180156100e157600080fd5b506100f56100f0366004610b55565b6102d7565b6040516100ac9190610c1e565b81801561010e57600080fd5b506100f561011d366004610b06565b610317565b81801561012e57600080fd5b506100f561013d366004610b55565b61048b565b610155610150366004610a80565b6104cb565b6040516100ac9190610cac565b81801561016e57600080fd5b506100f561017d366004610b06565b610509565b600080610190858585610569565b90506000610228828973__$b1d473f7cf7b653a454669f58de072d057$__63b8c7740f90918b6040518363ffffffff1660e01b81526004016101d3929190610cc3565b60206040518083038186803b1580156101eb57600080fd5b505af41580156101ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102239190610aee565b6105a7565b6040516388c1d46760e01b815290915073__$b1d473f7cf7b653a454669f58de072d057$__906388c1d46790610266908b908b908690600401610cd1565b60206040518083038186803b15801561027e57600080fd5b505af4158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190610a5d565b98975050505050505050565b60006102ce8383610606565b90505b92915050565b60006102e3848761062c565b6102f3576102f18487610641565b505b6103096001600160a01b03871688878686610656565b506001979650505050505050565b6000610344604051806040016040528060098152602001686a75726f723a20257360b81b815250876106f3565b610393604051806040016040528060098152602001681cdd185ad94e88095960ba1b815250856000896001600160a01b03166001600160a01b031681526020019081526020016000205461073c565b6103bf6040518060400160405280600a815260200169185b5bdd5b9d0e88095960b21b8152508861073c565b6103d56001600160a01b03871688878786610781565b506104286040518060400160405280600c81526020016b1b995dd4dd185ad94e88095960a21b815250856000896001600160a01b03166001600160a01b031681526020019081526020016000205461073c565b61047e6040518060400160405280601081526020016f199c99595e995914dd185ad94e88095960821b815250846000896001600160a01b03166001600160a01b031681526020019081526020016000205461073c565b5060019695505050505050565b60006104a36001600160a01b03871688878686610781565b506001600160a01b03861660009081526020849052604090205461047e576103098487610812565b6104d3610a43565b506040805180820182526001600160a01b0394909416600081815260209485528281205486529081529183529020549082015290565b6001600160a01b038516600090815260208390526040812054819061052f908990610d1a565b6001600160a01b038816600081815260208790526040902082905590915061055a9089888887610656565b50600198975050505050505050565b60004442858585434060405160200161058796959493929190610be2565b60408051601f198184030181529190528051602090910120949350505050565b60008082116105d15760405162461bcd60e51b81526004016105c890610c75565b60405180910390fd5b81836040516020016105e39190610bd9565b6040516020818303038152906040528051906020012060001c6102ce9190610d31565b60008115611388198390048411151761061e57600080fd5b506127109102611388010490565b60006102ce836001600160a01b038416610827565b60006102ce836001600160a01b03841661083f565b6001600160a01b038516600090815260208390526040812080548691908390610680908490610d02565b90915550506001600160a01b0386166000908152602084905260409020546106ad90839088908790610889565b6106e7604051806060016040528060278152602001610dac602791396001600160a01b03881660009081526020869052604090205461073c565b50600195945050505050565b6107388282604051602401610709929190610c29565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052610905565b5050565b6107388282604051602401610752929190610c53565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610905565b6001600160a01b0385166000908152602083905260408120805486919083906107ab908490610d1a565b90915550506001600160a01b0386166000908152602084905260409020546107d890839088908790610889565b6106e76040518060600160405280602c8152602001610d80602c91396001600160a01b03881660009081526020869052604090205461073c565b60006102ce836001600160a01b038416610926565b60009081526001919091016020526040902054151590565b600061084b8383610827565b610881575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102d1565b5060006102d1565b604051631712e1c560e11b815273__$819dd864b9a28b29592cd77136582b47ce$__90632e25c38a906108cf908790869086906001600160a01b038a1690600401610ce7565b60006040518083038186803b1580156108e757600080fd5b505af41580156108fb573d6000803e3d6000fd5b5050505050505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008181526001830160205260408120548015610a3957600061094a600183610d1a565b855490915060009061095e90600190610d1a565b90508181146109df57600086600001828154811061098c57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050808760000184815481106109bd57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806109fe57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102d1565b60009150506102d1565b604051806040016040528060008152602001600081525090565b600060208284031215610a6e578081fd5b8151610a7981610d67565b9392505050565b600080600060608486031215610a94578182fd5b8335610a9f81610d67565b95602085013595506040909401359392505050565b600080600080600060a08688031215610acb578081fd5b505083359560208501359550604085013594606081013594506080013592509050565b600060208284031215610aff578081fd5b5051919050565b60008060008060008060c08789031215610b1e578081fd5b863595506020870135610b3081610d67565b95989597505050506040840135936060810135936080820135935060a0909101359150565b60008060008060008060c08789031215610b1e578182fd5b60008060408385031215610b7f578182fd5b50508035926020909101359150565b60008151808452815b81811015610bb357602081850181015186830182015201610b97565b81811115610bc45782602083870101525b50601f01601f19169290920160200192915050565b90815260200190565b958652602086019490945260408501929092526060840152608083015260a082015260c00190565b6001600160a01b0391909116815260200190565b901515815260200190565b600060408252610c3c6040830185610b8e565b905060018060a01b03831660208301529392505050565b600060408252610c666040830185610b8e565b90508260208301529392505050565b6020808252601a908201527f6d6178206d7573742062652067726561746572207468616e2030000000000000604082015260600190565b815181526020918201519181019190915260400190565b918252602082015260400190565b9283526020830191909152604082015260600190565b93845260208401929092526040830152606082015260800190565b60008219821115610d1557610d15610d51565b500190565b600082821015610d2c57610d2c610d51565b500390565b600082610d4c57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610d7c57600080fd5b5056fe64656372656d656e745374616b653a206a75726f725374616b6564546f6b656e5b6a75726f725d203d202573696e6372656d656e743a206a75726f725374616b6564546f6b656e5b6a75726f725d203d202573a2646970667358221220230c7c08129d47aed828d8edc52dc7f6fc954fc9db973e6a780ba14d3281ba1064736f6c63430008000033";

type JuryLogicConstructorParams =
  | [linkLibraryAddresses: JuryLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JuryLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class JuryLogic__factory extends ContractFactory {
  constructor(...args: JuryLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        JuryLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: JuryLogicLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b1d473f7cf7b653a454669f58de072d057\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/JuryDataLogic.sol:JuryDataLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$819dd864b9a28b29592cd77136582b47ce\\$__", "g"),
      linkLibraryAddresses[
        "contracts/imports/kleros/contracts/SortitionSumTreeFactory.sol:SortitionSumTreeFactory"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JuryLogic> {
    return super.deploy(overrides || {}) as Promise<JuryLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): JuryLogic {
    return super.attach(address) as JuryLogic;
  }
  override connect(signer: Signer): JuryLogic__factory {
    return super.connect(signer) as JuryLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JuryLogicInterface {
    return new utils.Interface(_abi) as JuryLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JuryLogic {
    return new Contract(address, _abi, signerOrProvider) as JuryLogic;
  }
}

export interface JuryLogicLibraryAddresses {
  ["contracts/protocol/libraries/logics/JuryDataLogic.sol:JuryDataLogic"]: string;
  ["contracts/imports/kleros/contracts/SortitionSumTreeFactory.sol:SortitionSumTreeFactory"]: string;
}
