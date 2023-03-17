/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DisputeLogic, DisputeLogicInterface } from "../DisputeLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "evidenceUntil",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commitUntil",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "voteUntil",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "appealUntil",
        type: "uint256",
      },
    ],
    name: "calcDisputeDelaysFromBlock",
    outputs: [
      {
        internalType: "uint256[]",
        name: "delays",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class DisputeLogic__factory {
  static readonly abi = _abi;
  static createInterface(): DisputeLogicInterface {
    return new utils.Interface(_abi) as DisputeLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisputeLogic {
    return new Contract(address, _abi, signerOrProvider) as DisputeLogic;
  }
}