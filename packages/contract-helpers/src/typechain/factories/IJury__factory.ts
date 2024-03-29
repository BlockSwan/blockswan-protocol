/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IJury, IJuryInterface } from "../IJury";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfJurors",
        type: "uint256",
      },
    ],
    name: "drawJurors",
    outputs: [
      {
        internalType: "address[]",
        name: "jurors",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "freezeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "juror",
        type: "address",
      },
    ],
    name: "rewardJuror",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "unfreezeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IJury__factory {
  static readonly abi = _abi;
  static createInterface(): IJuryInterface {
    return new utils.Interface(_abi) as IJuryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IJury {
    return new Contract(address, _abi, signerOrProvider) as IJury;
  }
}
