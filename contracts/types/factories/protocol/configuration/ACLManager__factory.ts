/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ACLManager,
  ACLManagerInterface,
} from "../../../protocol/configuration/ACLManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAddressProvider",
        name: "provider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ACL_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACL_MANAGER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IAddressProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ADDRESS_PROVIDER",
    outputs: [
      {
        internalType: "contract IAddressProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BLACKLIST_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BUYER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DATA_PROVIDER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "JUDGE_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_UINT",
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
    name: "ORDER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROTOCOL_CONFIGURATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WHITELIST_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "datCurrency",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "fetchContract",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasProtocolRole",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isStillBuyer",
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
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAddressProvider",
        name: "_providerAddress",
        type: "address",
      },
    ],
    name: "setProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRole",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x60806040526000196004553480156200001757600080fd5b5060405162001b9f38038062001b9f8339810160408190526200003a9162000382565b806200004f620000496200019f565b620001a3565b6040805180820190915260018152603560f81b60208201526001600160a01b0382166200009a5760405162461bcd60e51b8152600401620000919190620003b1565b60405180910390fd5b50600380546001600160a01b0319166001600160a01b039283161790819055604051630cc397bb60e11b815260009291909116906319872f7690620000f0906820a1a62fa0a226a4a760b91b90600401620003a8565b60206040518083038186803b1580156200010957600080fd5b505afa1580156200011e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000144919062000382565b6040805180820190915260018152603560f81b60208201529091506001600160a01b038216620001895760405162461bcd60e51b8152600401620000919190620003b1565b5062000197600082620001f5565b505062000420565b3390565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b62000201828262000205565b5050565b6200021c82826200024860201b62000b2d1760201c565b60008281526001602090815260409091206200024391839062000bb2620002d2821b17901c565b505050565b620002548282620002f2565b62000201576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200028e6200019f565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620002e9836001600160a01b0384166200031b565b90505b92915050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006200032983836200036a565b6200036157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002ec565b506000620002ec565b60009081526001919091016020526040902054151590565b60006020828403121562000394578081fd5b8151620003a18162000407565b9392505050565b90815260200190565b6000602080835283518082850152825b81811015620003df57858101830151858201604001528201620003c1565b81811115620003f15783604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b03811681146200041d57600080fd5b50565b61176f80620004306000396000f3fe608060405234801561001057600080fd5b50600436106102275760003560e01c806381e167cf11610130578063c396cbf4116100b8578063dbe4613d1161007c578063dbe4613d146103f8578063e0e4758814610400578063e5b5019a14610408578063f2fde38b14610410578063fbfb816b1461042357610227565b8063c396cbf4146103a4578063ca15c873146103ac578063cfd8d6c0146103bf578063d547741f146103d2578063daea85c5146103e557610227565b80639359021b116100ff5780639359021b14610371578063985fadc814610379578063a217fddf1461038c578063a8a652eb14610394578063aee2bc861461039c57610227565b806381e167cf1461033b5780638da5cb5b146103435780639010d07c1461034b57806391d148541461035e57610227565b806336568abe116101b3578063715018a611610182578063715018a614610308578063742b12821461031057806379a558e7146103185780637a01a1da1461032b5780637a997ab71461033357610227565b806336568abe146102dd57806341c0e1b5146102f05780634d5e07fb146102f85780635e2092491461030057610227565b806319872f76116101fa57806319872f761461027a57806319afe4631461028d5780631e4e0091146102a2578063248a9ca3146102b75780632f2ff15d146102ca57610227565b806301ffc9a71461022c5780630542975c146102555780630ed0a6611461026a5780631848effa14610272575b600080fd5b61023f61023a366004611289565b61042b565b60405161024c919061143e565b60405180910390f35b61025d610456565b60405161024c9190611411565b61025d610465565b61025d6104f5565b61025d610288366004611221565b610504565b610295610585565b60405161024c9190611449565b6102b56102b0366004611268565b61059a565b005b6102956102c5366004611221565b6105b4565b6102b56102d8366004611239565b6105c9565b6102b56102eb366004611239565b6105e5565b6102b5610634565b61029561066a565b610295610676565b6102b5610686565b61029561069a565b61023f6103263660046111c9565b6106b6565b61029561076c565b610295610778565b61029561078d565b61025d610798565b61025d610359366004611268565b6107a7565b61023f61036c366004611239565b6107c6565b6102956107ef565b61023f610387366004611239565b6107f9565b610295610898565b61029561089d565b6102956108af565b6102956108c4565b6102956103ba366004611221565b6108d8565b6102b56103cd3660046111c9565b6108ef565b6102b56103e0366004611239565b6109d9565b6102b56103f33660046111c9565b6109f5565b610295610aca565b610295610ad7565b610295610ae3565b6102b561041e3660046111c9565b610ae9565b610295610b23565b60006001600160e01b03198216635a05180f60e01b1480610450575061045082610bc7565b92915050565b6003546001600160a01b031690565b6000806104776211105560ea1b610504565b90506000816001600160a01b031663e5a6b10f6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156104b657600080fd5b505af11580156104ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ee91906111e5565b9250505090565b6003546001600160a01b031681565b600354604051630cc397bb60e11b81526000916001600160a01b0316906319872f7690610535908590600401611449565b60206040518083038186803b15801561054d57600080fd5b505afa158015610561573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045091906111e5565b6d424c41434b4c4953545f524f4c4560901b81565b60006105a581610bec565b6105af8383610bfd565b505050565b60009081526020819052604090206001015490565b6105d2826105b4565b6105db81610bec565b6105af8383610c50565b6105ed610c72565b6001600160a01b0316816001600160a01b0316146106265760405162461bcd60e51b815260040161061d906115ee565b60405180910390fd5b6106308282610c76565b5050565b6003546001600160a01b0316331461065c57634e487b7160e01b600052600160045260246000fd5b6003546001600160a01b0316ff5b6427a92222a960d91b81565b6820a1a62fa0a226a4a760b91b81565b61068e610c98565b6106986000610cd7565b565b74282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b81565b60006106ca64212aaca2a960d91b836107f9565b80156104505750426106e2632aa9a2a960e11b610504565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b815260040161070d9190611411565b60006040518083038186803b15801561072557600080fd5b505afa158015610739573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261076191908101906112b1565b604001511192915050565b64212aaca2a960d91b81565b6d57484954454c4953545f524f4c4560901b81565b632aa9a2a960e11b81565b6002546001600160a01b031690565b60008281526001602052604081206107bf9083610d29565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6247494760e81b81565b6000806108136a20a1a62fa6a0a720a3a2a960a91b610504565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b8152600401610840929190611452565b60206040518083038186803b15801561085857600080fd5b505afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190611201565b949350505050565b600081565b6a20a1a62fa6a0a720a3a2a960a91b81565b6d282927aa27a1a7a62fa0a226a4a760911b81565b6c2220aa20afa82927ab24a222a960991b81565b600081815260016020526040812061045090610d35565b6001600160a01b038116158061090f57506003546001600160a01b031633145b8061099b5750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561095857600080fd5b505afa15801561096c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099091906111e5565b6001600160a01b0316145b6109b75760405162461bcd60e51b815260040161061d90611517565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6109e2826105b4565b6109eb81610bec565b6105af8383610c76565b6d282927aa27a1a7a62fa0a226a4a760911b610a1381610387610c72565b610a2f5760405162461bcd60e51b815260040161061d906115b7565b6000610a406211105560ea1b610504565b9050826001600160a01b031663095ea7b3826004546040518363ffffffff1660e01b8152600401610a72929190611425565b602060405180830381600087803b158015610a8c57600080fd5b505af1158015610aa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac49190611201565b50505050565b6529a2a62622a960d11b81565b644a5544474560d81b81565b60045481565b610af1610c98565b6001600160a01b038116610b175760405162461bcd60e51b815260040161061d906114d1565b610b2081610cd7565b50565b6211105560ea1b81565b610b3782826107c6565b610630576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610b6e610c72565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006107bf836001600160a01b038416610d40565b60006001600160e01b03198216637965db0b60e01b1480610450575061045082610d8a565b610b2081610bf8610c72565b610da3565b6000610c08836105b4565b600084815260208190526040808220600101859055519192508391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b610c5a8282610b2d565b60008281526001602052604090206105af9082610bb2565b3390565b610c808282610dfc565b60008281526001602052604090206105af9082610e7f565b610ca0610c72565b6001600160a01b0316610cb1610798565b6001600160a01b0316146106985760405162461bcd60e51b815260040161061d90611582565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006107bf8383610e94565b600061045082610ecc565b6000610d4c8383610ed0565b610d8257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610450565b506000610450565b6001600160e01b031981166301ffc9a760e01b14919050565b610dad82826107c6565b61063057610dba81610ee8565b610dc5836020610efa565b604051602001610dd692919061139c565b60408051601f198184030181529082905262461bcd60e51b825261061d91600401611469565b610e0682826107c6565b15610630576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610e3b610c72565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006107bf836001600160a01b0384166110ac565b6000826000018281548110610eb957634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b5490565b60009081526001919091016020526040902054151590565b60606104506001600160a01b03831660145b60606000610f0983600261167f565b610f14906002611667565b67ffffffffffffffff811115610f3a57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f64576020820181803683370190505b509050600360fc1b81600081518110610f8d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610fca57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610fee84600261167f565b610ff9906001611667565b90505b600181111561108d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061103b57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061105f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93611086816116e1565b9050610ffc565b5083156107bf5760405162461bcd60e51b815260040161061d9061149c565b600081815260018301602052604081205480156111bf5760006110d060018361169e565b85549091506000906110e49060019061169e565b905081811461116557600086600001828154811061111257634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061114357634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061118457634e487b7160e01b600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610450565b6000915050610450565b6000602082840312156111da578081fd5b81356107bf81611724565b6000602082840312156111f6578081fd5b81516107bf81611724565b600060208284031215611212578081fd5b815180151581146107bf578182fd5b600060208284031215611232578081fd5b5035919050565b6000806040838503121561124b578081fd5b82359150602083013561125d81611724565b809150509250929050565b6000806040838503121561127a578182fd5b50508035926020909101359150565b60006020828403121561129a578081fd5b81356001600160e01b0319811681146107bf578182fd5b600060208083850312156112c3578182fd5b825167ffffffffffffffff808211156112da578384fd5b90840190608082870312156112ed578384fd5b6040516080810181811083821117156113085761130861170e565b604052825182811115611319578586fd5b8301601f81018813611329578586fd5b80518381111561133b5761133b61170e565b61134d601f8201601f1916870161163d565b93508084528886828401011115611362578687fd5b611371818786018885016116b5565b5050908152818301519281019290925260408082015190830152606090810151908201529392505050565b60007f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000825283516113d48160178501602088016116b5565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516114058160288401602088016116b5565b01602801949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60006020825282518060208401526114888160408501602087016116b5565b601f01601f19169190910160400192915050565b6020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b60405181810167ffffffffffffffff8111828210171561165f5761165f61170e565b604052919050565b6000821982111561167a5761167a6116f8565b500190565b6000816000190483118215151615611699576116996116f8565b500290565b6000828210156116b0576116b06116f8565b500390565b60005b838110156116d05781810151838201526020016116b8565b83811115610ac45750506000910152565b6000816116f0576116f06116f8565b506000190190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610b2057600080fdfea2646970667358221220969d880c11492b64f644e8f6d2bc5c66c973ac1defe7f282ea40a9164507fa7f64736f6c63430008000033";

type ACLManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ACLManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ACLManager__factory extends ContractFactory {
  constructor(...args: ACLManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ACLManager> {
    return super.deploy(provider, overrides || {}) as Promise<ACLManager>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): ACLManager {
    return super.attach(address) as ACLManager;
  }
  override connect(signer: Signer): ACLManager__factory {
    return super.connect(signer) as ACLManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLManagerInterface {
    return new utils.Interface(_abi) as ACLManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ACLManager {
    return new Contract(address, _abi, signerOrProvider) as ACLManager;
  }
}