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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4d6f636b555344430000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f6d555344430000000000000000000000000000000000000000000000000000008152506006826004908051906020019062000098929190620001c4565b508160059080519060200190620000b1929190620001c4565b5080600360006101000a81548160ff021916908360ff160217905550505050620000f0620000e4620000f660201b60201c565b620000fe60201b60201c565b620002b5565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001d29062000274565b90600052602060002090601f016020900481019282620001f6576000855562000242565b82601f106200021157805160ff191683800117855562000242565b8280016001018555821562000242579182015b828111156200024157825182559160200191906001019062000224565b5b50905062000251919062000255565b5090565b5b808211156200027057600081600090555060010162000256565b5090565b600060028204905060018216806200028d57607f821691505b60208210811415620002af57634e487b7160e01b600052602260045260246000fd5b50919050565b61148a80620002c56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b8063715018a61461023b5780638da5cb5b1461024557806395d89b4114610263578063a0712d681461028157610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf578063449a52f8146101ef57806370a082311461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a9190610ff9565b60405180910390f35b61013d60048036038101906101389190610f87565b6103db565b60405161014a9190610fe6565b60405180910390f35b61015b6103fe565b60405161016891906113c6565b60405180910390f35b61018b60048036038101906101869190610f4c565b610408565b6040516101989190610fe6565b60405180910390f35b6101a9610437565b6040516101b691906113d7565b60405180910390f35b6101d960048036038101906101d49190610f87565b61044e565b6040516101e69190610fe6565b60405180910390f35b61020960048036038101906102049190610f87565b610485565b005b61022560048036038101906102209190610ef8565b610493565b60405161023291906113c6565b60405180910390f35b6102436104db565b005b61024d6104ef565b60405161025a9190610fcd565b60405180910390f35b61026b610519565b6040516102789190610ff9565b60405180910390f35b61029b60048036038101906102969190610fb2565b6105ab565b005b6102b760048036038101906102b29190610f87565b6105b8565b6040516102c49190610fe6565b60405180910390f35b6102e760048036038101906102e29190610f87565b61062f565b6040516102f49190610fe6565b60405180910390f35b61031760048036038101906103129190610f1a565b610652565b60405161032491906113c6565b60405180910390f35b61034760048036038101906103429190610ef8565b6106d9565b005b60606004805461035890611415565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611415565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000806103e661075d565b90506103f3818585610765565b600191505092915050565b6000600254905090565b60008061041361075d565b9050610420858285610930565b61042b8585856109bc565b60019150509392505050565b6000600360009054906101000a900460ff16905090565b60008061045961075d565b905061047a81858561046b8589610652565b61047591906113eb565b610765565b600191505092915050565b61048f8282610c34565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104e3610d8b565b6104ed6000610e09565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606005805461052890611415565b80601f016020809104026020016040519081016040528092919081815260200182805461055490611415565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b5050505050905090565b6105b53382610c34565b50565b6000806105c361075d565b905060006105d18286610652565b905083811015610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90611324565b60405180910390fd5b6106238286868403610765565b60019250505092915050565b60008061063a61075d565b90506106478185856109bc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106e1610d8b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610751576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610748906110b5565b60405180910390fd5b61075a81610e09565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cc906112c0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c90611119565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161092391906113c6565b60405180910390a3505050565b600061093c8484610652565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109b657818110156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f9061117d565b60405180910390fd5b6109b58484848403610765565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a239061125c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9390611051565b60405180910390fd5b610aa7838383610ecf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b24906111bb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c1b91906113c6565b60405180910390a3610c2e848484610ed4565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ca4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9b90611388565b60405180910390fd5b610cb060008383610ecf565b8060026000828254610cc291906113eb565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d7391906113c6565b60405180910390a3610d8760008383610ed4565b5050565b610d9361075d565b73ffffffffffffffffffffffffffffffffffffffff16610db16104ef565b73ffffffffffffffffffffffffffffffffffffffff1614610e07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfe9061121f565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008135905060018060a01b0381168114610ef357600080fd5b919050565b600060208284031215610f09578081fd5b610f1282610ed9565b905092915050565b60008060408385031215610f2c578081fd5b610f3583610ed9565b9150610f4360208401610ed9565b90509250929050565b600080600060608486031215610f60578081fd5b610f6984610ed9565b9250610f7760208501610ed9565b9150604084013590509250925092565b60008060408385031215610f99578182fd5b610fa283610ed9565b9150602083013590509250929050565b600060208284031215610fc3578081fd5b8135905092915050565b600060208201905060018060a01b038316825292915050565b6000602082019050821515825292915050565b6000602080835283518082850152825b8181101561102857828187010151604082870101528281019050611009565b818111156110395783604083870101525b506040601f19601f8301168501019250505092915050565b600060208252602360208301527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408301527f65737300000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602660208301527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408301527f64647265737300000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602260208301527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408301527f73730000000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252601d60208301527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006040830152606082019050919050565b600060208252602660208301527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408301527f616c616e636500000000000000000000000000000000000000000000000000006060830152608082019050919050565b6000602082526020808301527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726040830152606082019050919050565b600060208252602560208301527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408301527f64726573730000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602460208301527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408301527f72657373000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602560208301527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408301527f207a65726f0000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252601f60208301527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006040830152606082019050919050565b600060208201905082825292915050565b600060208201905060ff8316825292915050565b6000821982111561140a57634e487b7160e01b81526011600452602481fd5b828201905092915050565b6000600282049050600182168061142d57607f821691505b6020821081141561144e57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220bd06504d24eff08ccdb7058cb5706a9a8106456ce4406a10faca0db8e3586f9264736f6c63430008000033";

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
