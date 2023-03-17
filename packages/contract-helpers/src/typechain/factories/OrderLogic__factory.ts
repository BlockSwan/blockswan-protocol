/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { OrderLogic, OrderLogicInterface } from "../OrderLogic";

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
] as const;

export class OrderLogic__factory {
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