/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUser, IUserInterface } from "../IUser";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "newId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "inviterId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct InputTypes.CreateUserInput",
        name: "userData",
        type: "tuple",
      },
    ],
    name: "UserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "inviterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "gigIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "offerIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "bidIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "buyerOrderIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "gigReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "userReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "reviewsIds",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct OutputTypes.UserOutput",
        name: "userData",
        type: "tuple",
      },
    ],
    name: "UserEdited",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "buyerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newOrderId",
        type: "uint256",
      },
    ],
    name: "createBuyerOrder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newGigId",
        type: "uint256",
      },
    ],
    name: "createGig",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "inviterId",
        type: "uint256",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "getAddressById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getIdByAddress",
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
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "getInvitersById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getInvitersByUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pubKey",
        type: "address",
      },
    ],
    name: "getUserByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "inviterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "gigIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "offerIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "bidIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "buyerOrderIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "gigReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "userReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "reviewsIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct OutputTypes.UserOutput",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "getUserById",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "inviterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "gigIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "offerIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "bidIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "buyerOrderIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "gigReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "userReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "reviewsIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct OutputTypes.UserOutput",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserList",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "inviterId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerInvites",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "gigIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "offerIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "bidIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "buyerOrderIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "gigReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "userReviewsIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "reviewsIds",
            type: "uint256[]",
          },
        ],
        internalType: "struct OutputTypes.UserOutput[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsersCount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gigId",
        type: "uint256",
      },
    ],
    name: "isGigOwner",
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

export class IUser__factory {
  static readonly abi = _abi;
  static createInterface(): IUserInterface {
    return new utils.Interface(_abi) as IUserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IUser {
    return new Contract(address, _abi, signerOrProvider) as IUser;
  }
}
