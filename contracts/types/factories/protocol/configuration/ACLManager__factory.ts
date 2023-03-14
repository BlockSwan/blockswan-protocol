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
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gigId",
        type: "uint256",
      },
      {
        internalType: "contract IUser",
        name: "UserContract",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isStillSeller",
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
  "0x60806040526000196004553480156200001757600080fd5b5060405162001ac938038062001ac98339810160408190526200003a916200035c565b8062000046336200018c565b6040805180820190915260018152603560f81b60208201526001600160a01b038216620000915760405162461bcd60e51b815260040162000088919062000383565b60405180910390fd5b50600380546001600160a01b0319166001600160a01b03929092169182179055604051630cc397bb60e11b81526820a1a62fa0a226a4a760b91b6004820152600091906319872f769060240160206040518083038186803b158015620000f657600080fd5b505afa1580156200010b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013191906200035c565b6040805180820190915260018152603560f81b60208201529091506001600160a01b038216620001765760405162461bcd60e51b815260040162000088919062000383565b5062000184600082620001de565b5050620003db565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001ea8282620001ee565b5050565b6200020582826200023160201b62000a961760201c565b60008281526001602090815260409091206200022c91839062000b1a620002d1821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620001ea576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200028d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620002e8836001600160a01b038416620002f1565b90505b92915050565b60008181526001830160205260408120546200033a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620002eb565b506000620002eb565b6001600160a01b03811681146200035957600080fd5b50565b6000602082840312156200036f57600080fd5b81516200037c8162000343565b9392505050565b600060208083528351808285015260005b81811015620003b25785810183015185820160400152820162000394565b81811115620003c5576000604083870101525b50601f01601f1916929092016040019392505050565b6116de80620003eb6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638da5cb5b116100c3578063ca15c8731161007c578063ca15c873146102d7578063cfd8d6c0146102ea578063d547741f146102fd578063daea85c514610310578063e5b5019a14610323578063f2fde38b1461032c57600080fd5b80638da5cb5b146102725780639010d07c1461028357806391d1485414610296578063985fadc8146102a9578063a217fddf146102bc578063b817bcf7146102c457600080fd5b8063248a9ca311610115578063248a9ca3146101f85780632f2ff15d1461022957806336568abe1461023c57806341c0e1b51461024f578063715018a61461025757806379a558e71461025f57600080fd5b806301ffc9a71461015d5780630542975c1461018557806311e0c07b146101aa5780631848effa146101bd57806319872f76146101d05780631e4e0091146101e3575b600080fd5b61017061016b3660046110ac565b61033f565b60405190151581526020015b60405180910390f35b6003546001600160a01b03165b6040516001600160a01b03909116815260200161017c565b6101706101b83660046110eb565b61036a565b600354610192906001600160a01b031681565b6101926101de366004611124565b6103f4565b6101f66101f136600461113d565b610471565b005b61021b610206366004611124565b60009081526020819052604090206001015490565b60405190815260200161017c565b6101f661023736600461115f565b61048b565b6101f661024a36600461115f565b6104b0565b6101f6610533565b6101f661055b565b61017061026d36600461118f565b61056f565b6002546001600160a01b0316610192565b61019261029136600461113d565b610625565b6101706102a436600461115f565b610644565b6101706102b736600461115f565b61066d565b61021b600081565b6101706102d236600461118f565b6106d1565b61021b6102e5366004611124565b610788565b6101f66102f836600461118f565b61079f565b6101f661030b36600461115f565b6108ed565b6101f661031e36600461118f565b610912565b61021b60045481565b6101f661033a36600461118f565b610a1d565b60006001600160e01b03198216635a05180f60e01b1480610364575061036482610b2f565b92915050565b60405163fbd2817f60e01b815260048101849052602481018390526000906001600160a01b0383169063fbd2817f9060440160206040518083038186803b1580156103b457600080fd5b505afa1580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec91906111ac565b949350505050565b600354604051630cc397bb60e11b8152600481018390526000916001600160a01b0316906319872f769060240160206040518083038186803b15801561043957600080fd5b505afa15801561044d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036491906111de565b600061047c81610b64565b6104868383610b6e565b505050565b6000828152602081905260409020600101546104a681610b64565b6104868383610bb9565b6001600160a01b03811633146105255760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61052f8282610bdb565b5050565b6003546001600160a01b0316331461054d5761054d6111fb565b6003546001600160a01b0316ff5b610563610bfd565b61056d6000610c57565b565b600061058364212aaca2a960d91b8361066d565b801561036457504261059b632aa9a2a960e11b6103f4565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b1580156105de57600080fd5b505afa1580156105f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261061a9190810190611392565b604001511192915050565b600082815260016020526040812061063d9083610ca9565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000806106876a20a1a62fa6a0a720a3a2a960a91b6103f4565b604051632474521560e21b8152600481018690526001600160a01b03858116602483015291909116906391d148549060440160206040518083038186803b1580156103b457600080fd5b60006106e66529a2a62622a960d11b8361066d565b80156103645750426106fe632aa9a2a960e11b6103f4565b6040516334e1097b60e11b81526001600160a01b03858116600483015291909116906369c212f69060240160006040518083038186803b15801561074157600080fd5b505afa158015610755573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261077d9190810190611392565b608001511192915050565b600081815260016020526040812061036490610cb5565b6001600160a01b03811615806107bf57506003546001600160a01b031633145b8061084b5750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561080857600080fd5b505afa15801561081c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084091906111de565b6001600160a01b0316145b6108cb5760405162461bcd60e51b815260206004820152604560248201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060448201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060648201526437bbb732b960d91b608482015260a40161051c565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60008281526020819052604090206001015461090881610b64565b6104868383610bdb565b6d282927aa27a1a7a62fa0a226a4a760911b61092e813361066d565b61097a5760405162461bcd60e51b815260206004820152601c60248201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604482015260640161051c565b600061098b6211105560ea1b6103f4565b6004805460405163095ea7b360e01b81526001600160a01b0380851693820193909352602481019190915291925084169063095ea7b390604401602060405180830381600087803b1580156109df57600080fd5b505af11580156109f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1791906111ac565b50505050565b610a25610bfd565b6001600160a01b038116610a8a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161051c565b610a9381610c57565b50565b610aa08282610644565b61052f576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610ad63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600061063d836001600160a01b038416610cbf565b60006001600160e01b03198216637965db0b60e01b148061036457506301ffc9a760e01b6001600160e01b0319831614610364565b610a938133610d0e565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b610bc38282610a96565b60008281526001602052604090206104869082610b1a565b610be58282610d67565b60008281526001602052604090206104869082610dcc565b6002546001600160a01b0316331461056d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051c565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600061063d8383610de1565b6000610364825490565b6000818152600183016020526040812054610d0657508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610364565b506000610364565b610d188282610644565b61052f57610d2581610e0b565b610d30836020610e1d565b604051602001610d41929190611559565b60408051601f198184030181529082905262461bcd60e51b825261051c916004016115ce565b610d718282610644565b1561052f576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600061063d836001600160a01b038416610fb9565b6000826000018281548110610df857610df8611601565b9060005260206000200154905092915050565b60606103646001600160a01b03831660145b60606000610e2c83600261162d565b610e3790600261164c565b67ffffffffffffffff811115610e4f57610e4f611211565b6040519080825280601f01601f191660200182016040528015610e79576020820181803683370190505b509050600360fc1b81600081518110610e9457610e94611601565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610ec357610ec3611601565b60200101906001600160f81b031916908160001a9053506000610ee784600261162d565b610ef290600161164c565b90505b6001811115610f6a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f2657610f26611601565b1a60f81b828281518110610f3c57610f3c611601565b60200101906001600160f81b031916908160001a90535060049490941c93610f6381611664565b9050610ef5565b50831561063d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161051c565b600081815260018301602052604081205480156110a2576000610fdd60018361167b565b8554909150600090610ff19060019061167b565b905081811461105657600086600001828154811061101157611011611601565b906000526020600020015490508087600001848154811061103457611034611601565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061106757611067611692565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610364565b6000915050610364565b6000602082840312156110be57600080fd5b81356001600160e01b03198116811461063d57600080fd5b6001600160a01b0381168114610a9357600080fd5b60008060006060848603121561110057600080fd5b83359250602084013591506040840135611119816110d6565b809150509250925092565b60006020828403121561113657600080fd5b5035919050565b6000806040838503121561115057600080fd5b50508035926020909101359150565b6000806040838503121561117257600080fd5b823591506020830135611184816110d6565b809150509250929050565b6000602082840312156111a157600080fd5b813561063d816110d6565b6000602082840312156111be57600080fd5b8151801515811461063d57600080fd5b80516111d9816110d6565b919050565b6000602082840312156111f057600080fd5b815161063d816110d6565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561124b5761124b611211565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561127a5761127a611211565b604052919050565b60005b8381101561129d578181015183820152602001611285565b83811115610a175750506000910152565b600082601f8301126112bf57600080fd5b815167ffffffffffffffff8111156112d9576112d9611211565b6112ec601f8201601f1916602001611251565b81815284602083860101111561130157600080fd5b6103ec826020830160208701611282565b600082601f83011261132357600080fd5b8151602067ffffffffffffffff82111561133f5761133f611211565b8160051b61134e828201611251565b928352848101820192828101908785111561136857600080fd5b83870192505b848310156113875782518252918301919083019061136e565b979650505050505050565b6000602082840312156113a457600080fd5b815167ffffffffffffffff808211156113bc57600080fd5b908301906101e082860312156113d157600080fd5b6113d9611227565b8251828111156113e857600080fd5b6113f4878286016112ae565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261143f60e084016111ce565b60e0820152610100808401518381111561145857600080fd5b61146488828701611312565b828401525050610120808401518381111561147e57600080fd5b61148a88828701611312565b82840152505061014080840151838111156114a457600080fd5b6114b088828701611312565b82840152505061016080840151838111156114ca57600080fd5b6114d688828701611312565b82840152505061018080840151838111156114f057600080fd5b6114fc88828701611312565b8284015250506101a0808401518381111561151657600080fd5b61152288828701611312565b8284015250506101c0808401518381111561153c57600080fd5b61154888828701611312565b918301919091525095945050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611591816017850160208801611282565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516115c2816028840160208801611282565b01602801949350505050565b60208152600082518060208401526115ed816040850160208701611282565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561164757611647611617565b500290565b6000821982111561165f5761165f611617565b500190565b60008161167357611673611617565b506000190190565b60008282101561168d5761168d611617565b500390565b634e487b7160e01b600052603160045260246000fdfea26469706673582212203e9f021ab889aac4ae96260419ac8a41648552691c3f77114070e4cb38a101c464736f6c63430008090033";

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
