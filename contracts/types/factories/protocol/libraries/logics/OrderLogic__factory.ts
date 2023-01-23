/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OrderLogic,
  OrderLogicInterface,
} from "../../../../protocol/libraries/logics/OrderLogic";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "trialFlat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "trialPercent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proceedFlat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proceedPercent",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.OrderPriceParams",
        name: "params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "orderPrice",
        type: "uint256",
      },
    ],
    name: "calcOrderPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
  "0x6117f461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c8063679173cc11610065578063679173cc14610106578063937bb083146101385780639ce385c014610166578063b54a2e191461018657610087565b806327d016be1461008c57806334d61bae146100b75780634d529157146100e4575b600080fd5b61009f61009a3660046112e8565b6101a6565b6040516100ae939291906116d8565b60405180910390f35b8180156100c357600080fd5b506100d76100d2366004611333565b61021c565b6040516100ae919061153f565b8180156100f057600080fd5b506101046100ff366004611420565b610852565b005b81801561011257600080fd5b50610126610121366004611420565b610906565b6040516100ae969594939291906116ee565b81801561014457600080fd5b5061015861015336600461144b565b6109ff565b6040516100ae92919061166a565b610179610174366004611312565b610b49565b6040516100ae919061155d565b610199610194366004611312565b610d4a565b6040516100ae9190611661565b60008060008085600001516101c8876020015187610d5990919063ffffffff16565b6101d29190611749565b865160208801519192506000916101ea908890610d59565b6101f49190611749565b9050818180610203838a611749565b61020d9190611749565b94509450945050509250925092565b6060810151516000908190610232908690610d7f565b9050600061024884606001516000015186610d4a565b845160405163029af90f60e61b815291925073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9163a6be43c09161028591859190600401611695565b60206040518083038186803b15801561029d57600080fd5b505af41580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d591906112c8565b506020840151604051631a7bd7bd60e31b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9163d3debde891610312918591600401611695565b60206040518083038186803b15801561032a57600080fd5b505af415801561033e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036291906112c8565b50604051635b9a696d60e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90635b9a696d9061039a908490600401611661565b60206040518083038186803b1580156103b257600080fd5b505af41580156103c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ea91906112c8565b50606084015160200151604051632131ae7160e21b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__916384c6b9c49161042b9185916004016116ca565b60206040518083038186803b15801561044357600080fd5b505af4158015610457573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047b91906112c8565b5060608401516040908101519051638c20f44760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91638c20f447916104bd9185916004016116ca565b60206040518083038186803b1580156104d557600080fd5b505af41580156104e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050d91906112c8565b50606080850151015160405163135310a560e21b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91634d4c42949161054d9185916004016116ca565b60206040518083038186803b15801561056557600080fd5b505af4158015610579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059d91906112c8565b506080840151604051639523d6dd60e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91639523d6dd916105da9185916004016116b6565b60206040518083038186803b1580156105f257600080fd5b505af4158015610606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062a91906112c8565b50604080850151810151905163013542ad60e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9163013542ad9161066a9185916004016116ca565b60206040518083038186803b15801561068257600080fd5b505af4158015610696573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ba91906112c8565b506040808501516020015190516340d1140b60e11b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__916381a22816916106fb9185916004016116ca565b60206040518083038186803b15801561071357600080fd5b505af4158015610727573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074b91906112c8565b50604080850151519051634420682360e11b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91638840d046916107899185916004016116ca565b60206040518083038186803b1580156107a157600080fd5b505af41580156107b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d991906112c8565b5060a0840151604051631addc62360e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__91631addc6239161081691859160040161166a565b60006040518083038186803b15801561082e57600080fd5b505af4158015610842573d6000803e3d6000fd5b50939450505050505b9392505050565b600061085e8483610d4a565b905061086a8184610d8b565b610875816000610e52565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc55427906108af908490600190600401611681565b60206040518083038186803b1580156108c757600080fd5b505af41580156108db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ff91906112c8565b5050505050565b600080600080600080600061091b8a89610d4a565b9050610927818a610f13565b610932816001610e52565b604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc554279061096b9084906004908101611681565b60206040518083038186803b15801561098357600080fd5b505af4158015610997573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bb91906112c8565b5060098101546003820154600483015460078401546002850154600b90950154939e929d50909b50995091975061010090046001600160a01b031695509350505050565b6000806000610a0e8785610d4a565b9050610a1a8187610f13565b610a25816000610e52565b848160050154610a359190611749565b4211604051806040016040528060028152602001610c8d60f21b81525090610a795760405162461bcd60e51b8152600401610a70919061154a565b60405180910390fd5b50604051638cc5542760e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90638cc5542790610ab39084906004908101611681565b60206040518083038186803b158015610acb57600080fd5b505af4158015610adf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0391906112c8565b50600481015460038201546009830154610b1d9190611749565b610b279190611749565b600b919091015490976101009091046001600160a01b03169650945050505050565b610b516110a9565b604051806101c00160405280846000018054610b6c9061176d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b989061176d565b8015610be55780601f10610bba57610100808354040283529160200191610be5565b820191906000526020600020905b815481529060010190602001808311610bc857829003601f168201915b50505050508152602001846001018054610bfe9061176d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2a9061176d565b8015610c775780601f10610c4c57610100808354040283529160200191610c77565b820191906000526020600020905b815481529060010190602001808311610c5a57829003601f168201915b5050505050815260200184600201548152602001846003015481526020018460040154815260200183815260200184600501548152602001846006015481526020018460070154815260200184600801548152602001610cd985600c01610fd5565b815260408051808201825260098701548152600a870154602082810191909152830152600b86015491019060ff166004811115610d2657634e487b7160e01b600052602160045260246000fd5b8152600b85015461010090046001600160a01b031660209091015290505b92915050565b60009182526020526040902090565b600081156113881983900484111517610d7157600080fd5b506127109102611388010490565b600061084b8383610feb565b60405163a6bbe89f60e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9063a6bbe89f90610dc490859085906004016116ca565b60206040518083038186803b158015610ddc57600080fd5b505af4158015610df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1491906112c8565b60405180604001604052806002815260200161323160f01b81525090610e4d5760405162461bcd60e51b8152600401610a70919061154a565b505050565b60405162a2d74b60e41b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__90630a2d74b090610e8a9085908590600401611681565b60206040518083038186803b158015610ea257600080fd5b505af4158015610eb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eda91906112c8565b60405180604001604052806002815260200161323360f01b81525090610e4d5760405162461bcd60e51b8152600401610a70919061154a565b60405163bad1835360e01b815273__$b4fe748c53f8821a645d4d1b5c6d8eb652$__9063bad1835390610f4c90859085906004016116ca565b60206040518083038186803b158015610f6457600080fd5b505af4158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c91906112c8565b60405180604001604052806002815260200161191960f11b81525090610e4d5760405162461bcd60e51b8152600401610a70919061154a565b60606000610fe283611035565b9150505b919050565b6000610ff78383611091565b61102d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610d44565b506000610d44565b60608160000180548060200260200160405190810160405280929190818152602001828054801561108557602002820191906000526020600020905b815481526020019060010190808311611071575b50505050509050919050565b60009081526001919091016020526040902054151590565b604051806101c00160405280606081526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016060815260200161110a61111e565b815260200160008152600060209091015290565b604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114610fe657600080fd5b600082601f83011261115f578081fd5b813567ffffffffffffffff811115611179576111796117a8565b61118c601f8201601f191660200161171f565b8181528460208386010111156111a0578283fd5b816020850160208301379081016020019190915292915050565b6000606082840312156111cb578081fd5b6040516060810181811067ffffffffffffffff821117156111ee576111ee6117a8565b80604052508091508235815260208301356020820152604083013560408201525092915050565b600060808284031215611226578081fd5b6040516080810181811067ffffffffffffffff82111715611249576112496117a8565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006040828403121561128b578081fd5b6040516040810181811067ffffffffffffffff821117156112ae576112ae6117a8565b604052823581526020928301359281019290925250919050565b6000602082840312156112d9578081fd5b8151801515811461084b578182fd5b60008060a083850312156112fa578081fd5b6113048484611215565b946080939093013593505050565b60008060408385031215611324578182fd5b50508035926020909101359150565b600080600060608486031215611347578081fd5b8335925060208401359150604084013567ffffffffffffffff8082111561136c578283fd5b908501906101808288031215611380578283fd5b61138a60c061171f565b823582811115611398578485fd5b6113a48982860161114f565b8252506020830135828111156113b8578485fd5b6113c48982860161114f565b6020830152506113d788604085016111ba565b60408201526113e98860a08501611215565b60608201526113fc88610120850161127a565b608082015261140e6101608401611138565b60a08201528093505050509250925092565b600080600060608486031215611434578283fd5b505081359360208301359350604090920135919050565b60008060008060808587031215611460578081fd5b5050823594602084013594506040840135936060013592509050565b6000815180845260208085019450808401835b838110156114ab5781518752958201959082019060010161148f565b509495945050505050565b6001600160a01b03169052565b600581106114e157634e487b7160e01b600052602160045260246000fd5b9052565b60008151808452815b8181101561150a576020818501810151868301820152016114ee565b8181111561151b5782602083870101525b50601f01601f19169290920160200192915050565b80518252602090810151910152565b901515815260200190565b60006020825261084b60208301846114e5565b60006020825282516101e080602085015261157c6102008501836114e5565b91506020850151601f198086850301604087015261159a84836114e5565b93506040870151606087015260608701516080870152608087015160a087015260a087015160c087015260c087015160e087015260e08701519150610100828188015280880151925050610120828188015280880151925050610140828188015280880151925050610160818786030181880152611618858461147c565b9450808801519250505061018061163181870183611530565b86015190506116446101c08601826114c3565b506101a0850151611657828601826114b6565b5090949350505050565b90815260200190565b9182526001600160a01b0316602082015260400190565b8281526040810161084b60208301846114c3565b6000838252604060208301526116ae60408301846114e5565b949350505050565b8281526060810161084b6020830184611530565b918252602082015260400190565b9283526020830191909152604082015260600190565b95865260208601949094526040850192909252606084015260808301526001600160a01b031660a082015260c00190565b60405181810167ffffffffffffffff81118282101715611741576117416117a8565b604052919050565b6000821982111561176857634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061178157607f821691505b602082108114156117a257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212207fd3d28d1426ec4cb2917f06f6e0dacfe530a2f04e9369016c9fde561f0ef47364736f6c63430008000033";

type OrderLogicConstructorParams =
  | [linkLibraryAddresses: OrderLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OrderLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class OrderLogic__factory extends ContractFactory {
  constructor(...args: OrderLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        OrderLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: OrderLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b4fe748c53f8821a645d4d1b5c6d8eb652\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/OrderDataLogic.sol:OrderDataLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OrderLogic> {
    return super.deploy(overrides || {}) as Promise<OrderLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OrderLogic {
    return super.attach(address) as OrderLogic;
  }
  override connect(signer: Signer): OrderLogic__factory {
    return super.connect(signer) as OrderLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderLogicInterface {
    return new utils.Interface(_abi) as OrderLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderLogic {
    return new Contract(address, _abi, signerOrProvider) as OrderLogic;
  }
}

export interface OrderLogicLibraryAddresses {
  ["contracts/protocol/libraries/logics/OrderDataLogic.sol:OrderDataLogic"]: string;
}