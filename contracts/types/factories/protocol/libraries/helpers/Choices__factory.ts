/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Choices,
  ChoicesInterface,
} from "../../../../protocol/libraries/helpers/Choices";

const _abi = [
  {
    inputs: [],
    name: "EIGHTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FIFTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FORTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NINETY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE_HUNDRED_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEVENTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SIXTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TEN_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "THIRTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TWENTY_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6102b9610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c8063ad79d7c21161007b578063ad79d7c214610177578063ce47d6d414610195578063dd0081c7146101b3578063ea31d02f146101d1578063ed7867f7146101ef578063ee01e5e71461020d576100be565b80630e4ff258146100c357806318b66bc1146100e15780631e04cbf3146100ff57806356f039391461011d5780635f792fc81461013b578063886a9c5014610159575b600080fd5b6100cb61022b565b6040516100d89190610272565b60405180910390f35b6100e9610231565b6040516100f69190610272565b60405180910390f35b610107610236565b6040516101149190610272565b60405180910390f35b61012561023c565b6040516101329190610272565b60405180910390f35b610143610242565b6040516101509190610272565b60405180910390f35b610161610248565b60405161016e9190610272565b60405180910390f35b61017f61024e565b60405161018c9190610272565b60405180910390f35b61019d610254565b6040516101aa9190610272565b60405180910390f35b6101bb61025a565b6040516101c89190610272565b60405180910390f35b6101d9610260565b6040516101e69190610272565b60405180910390f35b6101f7610266565b6040516102049190610272565b60405180910390f35b61021561026c565b6040516102229190610272565b60405180910390f35b611b5881565b600081565b61138881565b610bb881565b61232881565b61177081565b610fa081565b6103e881565b61271081565b611f4081565b6107d081565b61271081565b60006020820190508282529291505056fea2646970667358221220cae9b768554abc88ccf14496e6535c7a7ba04936fb9cbf77c1c9bce78a4b0eae64736f6c63430008000033";

type ChoicesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChoicesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Choices__factory extends ContractFactory {
  constructor(...args: ChoicesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Choices> {
    return super.deploy(overrides || {}) as Promise<Choices>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Choices {
    return super.attach(address) as Choices;
  }
  override connect(signer: Signer): Choices__factory {
    return super.connect(signer) as Choices__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChoicesInterface {
    return new utils.Interface(_abi) as ChoicesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Choices {
    return new Contract(address, _abi, signerOrProvider) as Choices;
  }
}
