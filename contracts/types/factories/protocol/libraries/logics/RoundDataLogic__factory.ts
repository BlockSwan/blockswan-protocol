/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RoundDataLogic,
  RoundDataLogicInterface,
} from "../../../../protocol/libraries/logics/RoundDataLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "winningChoice",
        type: "uint256",
      },
    ],
    name: "getMaxRange",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "winningChoice",
        type: "uint256",
      },
    ],
    name: "getMinRange",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "winningChoice",
        type: "uint256",
      },
    ],
    name: "getRanges",
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
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610db761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101ef5760003560e01c80639978e64811610119578063cc8a0498116100ac578063e4dfdc1b1161007b578063e4dfdc1b146104eb578063ec94c1f6146104fe578063ecd668821461051e578063fb607366146103cc576101ef565b8063cc8a049814610478578063d1e1ddff14610498578063d7eab64e146104b8578063e0728f91146104d8576101ef565b8063aee11946116100e8578063aee119461461041f578063b26523381461043f578063be12048a14610452578063c52af8e914610465576101ef565b80639978e648146103ac5780639df6b1e5146103cc578063a2e0e179146103ec578063a80e73a21461040c576101ef565b806361bfa341116101915780637e084e3b116101605780637e084e3b146103455780637f8dc8e71461035857806389e48ba11461036b57806396571bfd1461038c576101ef565b806361bfa341146102df57806366b4161b146102ff5780636b8af673146103125780637acb513514610332576101ef565b806332da9d4b116101cd57806332da9d4b1461026c57806346afea401461028c5780635347e6b8146102ac57806357d47234146102bf576101ef565b80630368443b146101f4578063194ebd531461022a5780631f05a7e21461024a575b600080fd5b81801561020057600080fd5b5061021461020f366004610c38565b61053e565b6040516102219190610c84565b60405180910390f35b81801561023657600080fd5b50610214610245366004610a8f565b610564565b81801561025657600080fd5b5061026a610265366004610c59565b6105ec565b005b61027f61027a366004610a4c565b61062a565b6040516102219190610c8f565b81801561029857600080fd5b506102146102a7366004610c38565b61064f565b6102146102ba366004610c38565b610658565b8180156102cb57600080fd5b506102146102da366004610c38565b61065e565b8180156102eb57600080fd5b506102146102fa366004610c38565b61066a565b61027f61030d366004610a4c565b610680565b81801561031e57600080fd5b5061021461032d366004610c38565b610696565b610214610340366004610a4c565b6106a2565b61027f610353366004610c59565b6106b1565b610214610366366004610a4c565b610735565b61037e610379366004610a4c565b61073f565b604051610221929190610c98565b81801561039857600080fd5b506102146103a7366004610b49565b61075d565b8180156103b857600080fd5b506102146103c7366004610a4c565b6107b8565b8180156103d857600080fd5b506102146103e7366004610c38565b6107c6565b8180156103f857600080fd5b50610214610407366004610c38565b6107d2565b61027f61041a366004610a4c565b6107de565b81801561042b57600080fd5b5061021461043a366004610a64565b6107f9565b61021461044d366004610a4c565b610808565b61027f610460366004610c38565b610811565b610214610473366004610a64565b61083f565b81801561048457600080fd5b50610214610493366004610c38565b6108bd565b8180156104a457600080fd5b506102146104b3366004610a4c565b6108c4565b8180156104c457600080fd5b506102146104d3366004610c38565b6108d8565b6102146104e6366004610a4c565b6108e4565b6102146104f9366004610c38565b6108f3565b81801561050a57600080fd5b50610214610519366004610c38565b6108fe565b81801561052a57600080fd5b50610214610539366004610c38565b61090a565b60008183600a0160008282546105549190610cd0565b9091555060019150505b92915050565b6000805b82518110156105e25783601d0183828151811061059557634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055806105da81610d3a565b915050610568565b5060019392505050565b8083600c0183600b811061061057634e487b7160e01b600052603260045260246000fd5b0160008282546106209190610cd0565b9091555050505050565b600081600a146106445761063f826001610cd0565b610647565b600a5b90505b919050565b60019182015590565b90541490565b60069190910155600190565b6000818360090160008282546105549190610cd0565b6000816009015482600301546106479190610ce8565b60059190910155600190565b6003810154600a909101541490565b6000836009015484600301546106c79190610ce8565b905060005b600b81101561072d578381101580156106e55750828111155b61071b5784600c0181600b811061070c57634e487b7160e01b600052603260045260246000fd5b01546107189083610cd0565b91505b8061072581610d3a565b9150506106cc565b509392505050565b601e015460ff1690565b60008061074b836107de565b6107548461062a565b91509150915091565b601c82018054600181810183556000928352602080842085516003909402019283558085015191830191909155604084015180518593926107a592600285019291019061099c565b505082516105e291506017850190610916565b600060028201556001919050565b60029190910155600190565b60049190910155600190565b600081156107f15761063f600183610ce8565b506000919050565b60006105e26019840183610929565b60020154151590565b600082600c0182600b811061083657634e487b7160e01b600052603260045260246000fd5b01549392505050565b6000805b83600301548110156108b357826001600160a01b031684601d01828154811061087c57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031614156108a157600191505061055e565b806108ab81610d3a565b915050610843565b5060009392505050565b9055600190565b601e01805460ff1916600190811790915590565b60039190910155600190565b60038101546009909101541490565b600191909101541490565b60079190910155600190565b600b9190910155600190565b6000610922838361093a565b9392505050565b6000610922836001600160a01b0384165b60006109468383610984565b61097c5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561055e565b50600061055e565b60009081526001919091016020526040902054151590565b8280546109a890610cff565b90600052602060002090601f0160209004810192826109ca5760008555610a10565b82601f106109e357805160ff1916838001178555610a10565b82800160010185558215610a10579182015b82811115610a105782518255916020019190600101906109f5565b50610a1c929150610a20565b5090565b5b80821115610a1c5760008155600101610a21565b80356001600160a01b038116811461064a57600080fd5b600060208284031215610a5d578081fd5b5035919050565b60008060408385031215610a76578081fd5b82359150610a8660208401610a35565b90509250929050565b60008060408385031215610aa1578182fd5b8235915060208084013567ffffffffffffffff80821115610ac0578384fd5b818601915086601f830112610ad3578384fd5b813581811115610ae557610ae5610d6b565b8381029150610af5848301610ca6565b8181528481019084860184860187018b1015610b0f578788fd5b8795505b83861015610b3857610b2481610a35565b835260019590950194918601918601610b13565b508096505050505050509250929050565b60008060408385031215610b5b578182fd5b8235915060208084013567ffffffffffffffff80821115610b7a578384fd5b9085019060608288031215610b8d578384fd5b604051606081018181108382111715610ba857610ba8610d6b565b604090815283358252848401358583015283013582811115610bc8578586fd5b80840193505087601f840112610bdc578485fd5b823582811115610bee57610bee610d6b565b610c00601f8201601f19168601610ca6565b92508083528885828601011115610c15578586fd5b808585018685013782019093019390935250604081019190915290939092509050565b60008060408385031215610c4a578182fd5b50508035926020909101359150565b600080600060608486031215610c6d578081fd5b505081359360208301359350604090920135919050565b901515815260200190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715610cc857610cc8610d6b565b604052919050565b60008219821115610ce357610ce3610d55565b500190565b600082821015610cfa57610cfa610d55565b500390565b600281046001821680610d1357607f821691505b60208210811415610d3457634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610d4e57610d4e610d55565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220111711b13e1e3b8818fd984d0280f4f92527cf8ff08e48e01cba7eb93aec21b264736f6c63430008000033";

type RoundDataLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoundDataLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoundDataLogic__factory extends ContractFactory {
  constructor(...args: RoundDataLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoundDataLogic> {
    return super.deploy(overrides || {}) as Promise<RoundDataLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoundDataLogic {
    return super.attach(address) as RoundDataLogic;
  }
  override connect(signer: Signer): RoundDataLogic__factory {
    return super.connect(signer) as RoundDataLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoundDataLogicInterface {
    return new utils.Interface(_abi) as RoundDataLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoundDataLogic {
    return new Contract(address, _abi, signerOrProvider) as RoundDataLogic;
  }
}