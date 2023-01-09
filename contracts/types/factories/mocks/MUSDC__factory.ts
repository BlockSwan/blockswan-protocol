/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MUSDC, MUSDCInterface } from "../../mocks/MUSDC";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260088152674d6f636b5553444360c01b6020808301918252835180850190945260058452646d5553444360d81b90840152815191929160069162000063916004919062000101565b5081516200007990600590602085019062000101565b506003805460ff191660ff9290921691909117905550620000a590506200009f620000ab565b620000af565b620001e4565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010f90620001a7565b90600052602060002090601f0160209004810192826200013357600085556200017e565b82601f106200014e57805160ff19168380011785556200017e565b828001600101855582156200017e579182015b828111156200017e57825182559160200191906001019062000161565b506200018c92915062000190565b5090565b5b808211156200018c576000815560010162000191565b600281046001821680620001bc57607f821691505b60208210811415620001de57634e487b7160e01b600052602260045260246000fd5b50919050565b610c5c80620001f46000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d7146101f3578063a9059cbb14610206578063dd62ed3e14610219578063f2fde38b1461022c57610100565b8063715018a6146101bb5780638da5cb5b146101c357806395d89b41146101d8578063a0712d68146101e057610100565b8063313ce567116100d3578063313ce5671461016b5780633950935114610180578063449a52f81461019357806370a08231146101a857610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014357806323b872dd14610158575b600080fd5b61010d61023f565b60405161011a91906108db565b60405180910390f35b61013661013136600461087b565b6102d1565b60405161011a91906108d0565b61014b6102f3565b60405161011a9190610bb0565b610136610166366004610840565b6102f9565b610173610327565b60405161011a9190610bb9565b61013661018e36600461087b565b610330565b6101a66101a136600461087b565b61035c565b005b61014b6101b63660046107ed565b61036a565b6101a6610389565b6101cb61039d565b60405161011a91906108bc565b61010d6103ac565b6101a66101ee3660046108a4565b6103bb565b61013661020136600461087b565b6103c8565b61013661021436600461087b565b610419565b61014b61022736600461080e565b610431565b6101a661023a3660046107ed565b61045c565b60606004805461024e90610beb565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610beb565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905090565b6000806102dc610493565b90506102e9818585610497565b5060019392505050565b60025490565b600080610304610493565b905061031185828561054b565b61031c858585610595565b506001949350505050565b60035460ff1690565b60008061033b610493565b90506102e981858561034d8589610431565b6103579190610bc7565b610497565b6103668282610696565b5050565b6001600160a01b0381166000908152602081905260409020545b919050565b610391610740565b61039b600061077f565b565b6006546001600160a01b031690565b60606005805461024e90610beb565b6103c53382610696565b50565b6000806103d3610493565b905060006103e18286610431565b90508381101561040c5760405162461bcd60e51b815260040161040390610b34565b60405180910390fd5b61031c8286868403610497565b600080610424610493565b90506102e9818585610595565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610464610740565b6001600160a01b03811661048a5760405162461bcd60e51b815260040161040390610971565b6103c58161077f565b3390565b6001600160a01b0383166104bd5760405162461bcd60e51b815260040161040390610af0565b6001600160a01b0382166104e35760405162461bcd60e51b8152600401610403906109b7565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061053e908590610bb0565b60405180910390a3505050565b60006105578484610431565b9050600019811461058f57818110156105825760405162461bcd60e51b8152600401610403906109f9565b61058f8484848403610497565b50505050565b6001600160a01b0383166105bb5760405162461bcd60e51b815260040161040390610aab565b6001600160a01b0382166105e15760405162461bcd60e51b81526004016104039061092e565b6105ec8383836107d1565b6001600160a01b038316600090815260208190526040902054818110156106255760405162461bcd60e51b815260040161040390610a30565b6001600160a01b0380851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610683908690610bb0565b60405180910390a361058f8484846107d1565b6001600160a01b0382166106bc5760405162461bcd60e51b815260040161040390610b79565b6106c8600083836107d1565b80600260008282546106da9190610bc7565b90915550506001600160a01b038216600081815260208190526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061072c908590610bb0565b60405180910390a3610366600083836107d1565b610748610493565b6001600160a01b031661075961039d565b6001600160a01b03161461039b5760405162461bcd60e51b815260040161040390610a76565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b505050565b80356001600160a01b038116811461038457600080fd5b6000602082840312156107fe578081fd5b610807826107d6565b9392505050565b60008060408385031215610820578081fd5b610829836107d6565b9150610837602084016107d6565b90509250929050565b600080600060608486031215610854578081fd5b61085d846107d6565b925061086b602085016107d6565b9150604084013590509250925092565b6000806040838503121561088d578182fd5b610896836107d6565b946020939093013593505050565b6000602082840312156108b5578081fd5b5035919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610907578581018301518582016040015282016108eb565b818111156109185783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610be657634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610bff57607f821691505b60208210811415610c2057634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122062640994b47d09803367d91ddd0d9d2977dac50e41a8c176584e926157da54bc64736f6c63430008000033";

type MUSDCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MUSDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MUSDC__factory extends ContractFactory {
  constructor(...args: MUSDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MUSDC> {
    return super.deploy(overrides || {}) as Promise<MUSDC>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MUSDC {
    return super.attach(address) as MUSDC;
  }
  override connect(signer: Signer): MUSDC__factory {
    return super.connect(signer) as MUSDC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MUSDCInterface {
    return new utils.Interface(_abi) as MUSDCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MUSDC {
    return new Contract(address, _abi, signerOrProvider) as MUSDC;
  }
}