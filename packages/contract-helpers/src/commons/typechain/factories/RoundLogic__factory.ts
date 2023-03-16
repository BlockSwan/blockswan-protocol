/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RoundLogic, RoundLogicInterface } from "../RoundLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jurorWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weightOfCorrectVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "disputePrice",
        type: "uint256",
      },
    ],
    name: "calcEarnedFromDisputeFees",
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

export class RoundLogic__factory {
  static readonly abi = _abi;
  static createInterface(): RoundLogicInterface {
    return new utils.Interface(_abi) as RoundLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoundLogic {
    return new Contract(address, _abi, signerOrProvider) as RoundLogic;
  }
}
