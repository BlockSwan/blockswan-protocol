/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { InvoiceLogic, InvoiceLogicInterface } from "../InvoiceLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "flat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.FeeParams",
        name: "buyerFees",
        type: "tuple",
      },
    ],
    name: "calcBuyerFee",
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
        name: "price",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "flat",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.FeeParams",
        name: "sellerFees",
        type: "tuple",
      },
    ],
    name: "calcSellerFee",
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

export class InvoiceLogic__factory {
  static readonly abi = _abi;
  static createInterface(): InvoiceLogicInterface {
    return new utils.Interface(_abi) as InvoiceLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InvoiceLogic {
    return new Contract(address, _abi, signerOrProvider) as InvoiceLogic;
  }
}