/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC2771Context,
  ERC2771ContextInterface,
} from "../ERC2771Context";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ERC2771Context__factory {
  static readonly abi = _abi;
  static createInterface(): ERC2771ContextInterface {
    return new utils.Interface(_abi) as ERC2771ContextInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC2771Context {
    return new Contract(address, _abi, signerOrProvider) as ERC2771Context;
  }
}
