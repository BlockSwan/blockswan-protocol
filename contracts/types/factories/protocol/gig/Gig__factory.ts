/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Gig, GigInterface } from "../../../protocol/gig/Gig";

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
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeDelivery",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Package[3]",
        name: "packages",
        type: "tuple[3]",
      },
    ],
    name: "createGig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newOrderId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gigId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "packageId",
        type: "uint256",
      },
    ],
    name: "createOrder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeDelivery",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Package",
        name: "",
        type: "tuple",
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
        internalType: "uint256",
        name: "gigId",
        type: "uint256",
      },
    ],
    name: "getGigById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gigId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "successSell",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "failedSell",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "reviewIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "orderIds",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "timeDelivery",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.Package[3]",
            name: "packages",
            type: "tuple[3]",
          },
        ],
        internalType: "struct OutputTypes.GigOutput",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGigList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gigId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "successSell",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "failedSell",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "reviewIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "orderIds",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "timeDelivery",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.Package[3]",
            name: "packages",
            type: "tuple[3]",
          },
        ],
        internalType: "struct OutputTypes.GigOutput[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGigsCount",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getInvitersAddresses",
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
  "0x60806040526000196005553480156200001757600080fd5b5060405162002577380380620025778339810160408190526200003a9162000118565b806200004f62000049620000c2565b620000c6565b6040805180820190915260018152603560f81b60208201526001600160a01b0382166200009a5760405162461bcd60e51b815260040162000091919062000148565b60405180910390fd5b50600480546001600160a01b0319166001600160a01b0392909216919091179055506200019e565b3390565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200012a578081fd5b81516001600160a01b038116811462000141578182fd5b9392505050565b6000602080835283518082850152825b81811015620001765785810183015185820160400152820162000158565b81811115620001885783604083870101525b50601f01601f1916929092016040019392505050565b6123c980620001ae6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063985fadc8116100ad578063cfd8d6c011610071578063cfd8d6c01461025d578063d107c21214610270578063daea85c514610290578063e5b5019a146102a3578063f2fde38b146102ab5761012c565b8063985fadc8146101e15780639a2dc738146101f4578063a1ba444d14610207578063a5a8a61014610229578063b817bcf71461024a5761012c565b806341c0e1b5116100f457806341c0e1b51461019f578063715018a6146101a957806379a558e7146101b15780638da5cb5b146101c45780639011b9cc146101cc5761012c565b80630542975c1461013157806311e0c07b1461014f5780631848effa1461016f57806319872f76146101775780631af140e81461018a575b600080fd5b6101396102be565b6040516101469190611e7f565b60405180910390f35b61016261015d366004611cf6565b6102cd565b6040516101469190611f26565b610139610356565b610139610185366004611877565b610365565b6101926103ef565b6040516101469190611ec6565b6101a76104bb565b005b6101a76104f1565b6101626101bf3660046117e6565b610505565b6101396105bb565b6101d46105ca565b6040516101469190611f5b565b6101626101ef36600461188f565b6105dd565b6101a76102023660046118b3565b610624565b61021a610215366004611d2e565b610941565b60405161014693929190611f31565b61023c6102373660046117e6565b610bfc565b604051610146929190611e93565b6101626102583660046117e6565b610c92565b6101a761026b3660046117e6565b610d49565b61028361027e366004611877565b610e33565b60405161014691906121b8565b6101a761029e3660046117e6565b610f5f565b6101d4611035565b6101a76102b93660046117e6565b61103b565b6004546001600160a01b031690565b60405163fbd2817f60e01b81526000906001600160a01b0383169063fbd2817f906102fe90879087906004016121cb565b60206040518083038186803b15801561031657600080fd5b505afa15801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e9190611857565b949350505050565b6004546001600160a01b031681565b60048054604051630cc397bb60e11b81526000926001600160a01b03909216916319872f769161039791869101611f5b565b60206040518083038186803b1580156103af57600080fd5b505afa1580156103c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e79190611802565b90505b919050565b606060006103fb6105ca565b905060008167ffffffffffffffff81111561042657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561045f57816020015b61044c6115b6565b8152602001906001900390816104445790505b50905060005b828110156104b45761047681610e33565b82828151811061049657634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806104ac90612337565b915050610465565b5091505090565b6004546001600160a01b031633146104e357634e487b7160e01b600052600160045260246000fd5b6004546001600160a01b0316ff5b6104f9611075565b61050360006110b4565b565b600061051964212aaca2a960d91b836105dd565b80156103e7575042610531632aa9a2a960e11b610365565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b815260040161055c9190611e7f565b60006040518083038186803b15801561057457600080fd5b505afa158015610588573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105b09190810190611b35565b604001511192915050565b6003546001600160a01b031690565b6000806105d76000611106565b91505090565b6000806105f76a20a1a62fa6a0a720a3a2a960a91b610365565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b81526004016102fe929190611f64565b61062f610258611111565b60405180604001604052806002815260200161189b60f11b815250906106715760405162461bcd60e51b81526004016106689190611f7b565b60405180910390fd5b50600061067c611111565b905060006106886105ca565b9050600073__$1c13fa74a81089071ad74f3376e739188f$__636810420d6000600260405180606001604052808781526020018981526020018a8152506040518463ffffffff1660e01b81526004016106e3939291906121d9565b60206040518083038186803b1580156106fb57600080fd5b505af415801561070f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107339190611857565b90506000610747632aa9a2a960e11b610365565b6001600160a01b031663adcd2d2185856040518363ffffffff1660e01b8152600401610774929190611ead565b602060405180830381600087803b15801561078e57600080fd5b505af11580156107a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c69190611857565b90508180156107d25750805b6107ee5760405162461bcd60e51b81526004016106689061203f565b610805694352454154455f47494760b01b85611115565b60008061081186610bfc565b91509150600061081f611186565b9050600061082b611223565b6040805160608101825282518152845160208083019190915285015181830152905163013a9d5b60e01b815291925060009173__$30e2c0763bc74e29ca837c0a99f7d1b333$__9163013a9d5b916108869190600401612197565b60606040518083038186803b15801561089e57600080fd5b505af41580156108b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d691906119ba565b90506109346040518060c001604052808b6001600160a01b03168152602001876001600160a01b03168152602001866001600160a01b0316815260200183600001518152602001836020015181526020018360400151815250611283565b5050505050505050505050565b6000606061094d611600565b6427a92222a960d91b61095f81610365565b6001600160a01b0316610970611111565b6001600160a01b0316146109965760405162461bcd60e51b815260040161066890612139565b604051631813c0cb60e21b815260009073__$1c13fa74a81089071ad74f3376e739188f$__9063604f032c906109d3908a906002906004016121cb565b60206040518083038186803b1580156109eb57600080fd5b505af41580156109ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a239190611b1d565b9050610a73816009018760038110610a4b57634e487b7160e01b600052603260045260246000fd5b6002020160405180604001604052908160008201548152602001600182015481525050611481565b610a8f5760405162461bcd60e51b81526004016106689061206d565b60405163aa371aeb60e01b815260009073__$1c13fa74a81089071ad74f3376e739188f$__9063aa371aeb90610acb9085908d906004016121cb565b60206040518083038186803b158015610ae357600080fd5b505af4158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b9190611857565b90508082600981018960038110610b4257634e487b7160e01b600052603260045260246000fd5b60020201818054610b5290612302565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7e90612302565b8015610bcb5780601f10610ba057610100808354040283529160200191610bcb565b820191906000526020600020905b815481529060010190602001808311610bae57829003601f168201915b50506040805180820190915285548152600190950154602086015250949e919d50919b509950505050505050505050565b600080610c0f632aa9a2a960e11b610365565b6001600160a01b031663dd06ef02846040518263ffffffff1660e01b8152600401610c3a9190611e7f565b604080518083038186803b158015610c5157600080fd5b505afa158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c89919061181e565b91509150915091565b6000610ca76529a2a62622a960d11b836105dd565b80156103e7575042610cbf632aa9a2a960e11b610365565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b8152600401610cea9190611e7f565b60006040518083038186803b158015610d0257600080fd5b505afa158015610d16573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d3e9190810190611b35565b608001511192915050565b6001600160a01b0381161580610d6957506004546001600160a01b031633145b80610df55750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610db257600080fd5b505afa158015610dc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dea9190611802565b6001600160a01b0316145b610e115760405162461bcd60e51b815260040161066890611fd4565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b610e3b6115b6565b604051631813c0cb60e21b815260009073__$1c13fa74a81089071ad74f3376e739188f$__9063604f032c90610e789086906002906004016121cb565b60206040518083038186803b158015610e9057600080fd5b505af4158015610ea4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec89190611b1d565b60405163561a6ee760e01b815290915073__$1c13fa74a81089071ad74f3376e739188f$__9063561a6ee790610f0490849087906004016121cb565b60006040518083038186803b158015610f1c57600080fd5b505af4158015610f30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f589190810190611a30565b9392505050565b6d282927aa27a1a7a62fa0a226a4a760911b610f7d816101ef611111565b610f995760405162461bcd60e51b815260040161066890612102565b6000610faa6211105560ea1b610365565b60055460405163095ea7b360e01b81529192506001600160a01b0385169163095ea7b391610fdd91859190600401611ead565b602060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102f9190611857565b50505050565b60055481565b611043611075565b6001600160a01b0381166110695760405162461bcd60e51b815260040161066890611f8e565b611072816110b4565b50565b61107d611111565b6001600160a01b031661108e6105bb565b6001600160a01b0316146105035760405162461bcd60e51b8152600401610668906120cd565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006103e782611499565b3390565b61112361058560f41b610365565b6001600160a01b031663293c6a3a83836040518363ffffffff1660e01b8152600401611150929190611f64565b600060405180830381600087803b15801561116a57600080fd5b505af115801561117e573d6000803e3d6000fd5b505050505050565b61118e611600565b6111af74282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b610365565b6001600160a01b0316639af1da486040518163ffffffff1660e01b8152600401604080518083038186803b1580156111e657600080fd5b505afa1580156111fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121e9190611a15565b905090565b61122b611600565b61124c74282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b610365565b6001600160a01b031663333274726040518163ffffffff1660e01b8152600401604080518083038186803b1580156111e657600080fd5b60006112946211105560ea1b610365565b905060008260a00151836080015184606001516112b191906122be565b6112bb91906122be565b905061134b83600001513083856001600160a01b031663e5a6b10f6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561130257600080fd5b505af1158015611316573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133a9190611802565b6001600160a01b031692919061149d565b60208301516060840151604051636203b43b60e11b81526001600160a01b0385169263c40768769261137f92600401611ead565b600060405180830381600087803b15801561139957600080fd5b505af11580156113ad573d6000803e3d6000fd5b50505060408085015160808601519151636203b43b60e11b81526001600160a01b038616935063c4076876926113e69291600401611ead565b600060405180830381600087803b15801561140057600080fd5b505af1158015611414573d6000803e3d6000fd5b5050505060a0830151604051636203b43b60e11b81526001600160a01b0384169163c40768769161144a91600091600401611ead565b600060405180830381600087803b15801561146457600080fd5b505af1158015611478573d6000803e3d6000fd5b50505050505050565b8051600090158015906103e757505060200151151590565b5490565b6040516323b872dd60e01b8082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af16114e2573d6000803e3d6000fd5b506114ec8561150f565b6115085760405162461bcd60e51b815260040161066890612096565b5050505050565b6000611533565b62461bcd60e51b6000526020600452806024528160445260646000fd5b3d801561157257602081146115a35761156d7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611516565b6115b0565b823b61159a5761159a7311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014611516565b600191506115b0565b3d6000803e600051151591505b50919050565b604051806101000160405280600081526020016060815260200160008152602001600081526020016000815260200160608152602001606081526020016115fb61161a565b905290565b604051806040016040528060008152602001600081525090565b60405180606001604052806003905b611631611600565b8152602001906001900390816116295790505090565b80516103ea8161237e565b600082601f830112611662578081fd5b604080516060810181811067ffffffffffffffff8211171561168657611686612368565b8252808460c08101871015611699578485fd5b845b60038110156116c2576116ae8883611798565b83526020909201919084019060010161169b565b50919695505050505050565b600082601f8301126116de578081fd5b8151602067ffffffffffffffff8211156116fa576116fa612368565b80820261170882820161224b565b838152828101908684018388018501891015611722578687fd5b8693505b85841015611744578051835260019390930192918401918401611726565b50979650505050505050565b600082601f830112611760578081fd5b815161177361176e82612296565b61224b565b818152846020838601011115611787578283fd5b61034e8260208301602087016122d6565b6000604082840312156117a9578081fd5b6040516040810181811067ffffffffffffffff821117156117cc576117cc612368565b604052825181526020928301519281019290925250919050565b6000602082840312156117f7578081fd5b8135610f588161237e565b600060208284031215611813578081fd5b8151610f588161237e565b60008060408385031215611830578081fd5b825161183b8161237e565b602084015190925061184c8161237e565b809150509250929050565b600060208284031215611868578081fd5b81518015158114610f58578182fd5b600060208284031215611888578081fd5b5035919050565b600080604083850312156118a1578182fd5b82359150602083013561184c8161237e565b60008060e083850312156118c5578182fd5b823567ffffffffffffffff808211156118dc578384fd5b818501915085601f8301126118ef578384fd5b813560206118ff61176e83612296565b8281528882848701011115611912578687fd5b8282860183830137808301820196909652603f87018813611931578485fd5b6003935061194161176e85612275565b9150818188018960e08a011115611956578687fd5b865b868110156119aa57604080838d031215611970578889fd5b8051818101818110898211171561198957611989612368565b82528335815285840135868201528652948401949190910190600101611958565b5096999098509650505050505050565b6000606082840312156119cb578081fd5b6040516060810181811067ffffffffffffffff821117156119ee576119ee612368565b80604052508251815260208301516020820152604083015160408201528091505092915050565b600060408284031215611a26578081fd5b610f588383611798565b600060208284031215611a41578081fd5b815167ffffffffffffffff80821115611a58578283fd5b908301906101a08286031215611a6c578283fd5b611a7761010061224b565b82518152602083015182811115611a8c578485fd5b611a9887828601611750565b60208301525060408301516040820152606083015160608201526080830151608082015260a083015182811115611acd578485fd5b611ad9878286016116ce565b60a08301525060c083015182811115611af0578485fd5b611afc878286016116ce565b60c083015250611b0f8660e08501611652565b60e082015295945050505050565b600060208284031215611b2e578081fd5b5051919050565b600060208284031215611b46578081fd5b815167ffffffffffffffff80821115611b5d578283fd5b81840191506101e0808387031215611b73578384fd5b611b7c8161224b565b9050825182811115611b8c578485fd5b611b9887828601611750565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152611be360e08401611647565b60e08201526101008084015183811115611bfb578586fd5b611c07888287016116ce565b8284015250506101208084015183811115611c20578586fd5b611c2c888287016116ce565b8284015250506101408084015183811115611c45578586fd5b611c51888287016116ce565b8284015250506101608084015183811115611c6a578586fd5b611c76888287016116ce565b8284015250506101808084015183811115611c8f578586fd5b611c9b888287016116ce565b8284015250506101a08084015183811115611cb4578586fd5b611cc0888287016116ce565b8284015250506101c08084015183811115611cd9578586fd5b611ce5888287016116ce565b918301919091525095945050505050565b600080600060608486031215611d0a578081fd5b83359250602084013591506040840135611d238161237e565b809150509250925092565b600080600060608486031215611d42578081fd5b505081359360208301359350604090920135919050565b6000815180845260208085019450808401835b83811015611d8857815187529582019590820190600101611d6c565b509495945050505050565b60008151808452611dab8160208601602086016122d6565b601f01601f19169290920160200192915050565b60006101a0825184526020808401518282870152611ddf83870182611d93565b92505060408085015181870152606085015160608701526080850151608087015260a085015186840360a0880152611e178482611d59565b93505060c085015186840360c0880152611e318482611d59565b93505060e085015160e08701855b6003811015611e6357611e53828451611e70565b9184019190830190600101611e3f565b5093979650505050505050565b80518252602090810151910152565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03929092168252602082015260400190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015611f1957603f19888603018452611f07858351611dbf565b94509285019290850190600101611eeb565b5092979650505050505050565b901515815260200190565b6000841515825260806020830152611f4c6080830185611d93565b905061034e6040830184611e70565b90815260200190565b9182526001600160a01b0316602082015260400190565b600060208252610f586020830184611d93565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252601490820152736661696c656420746f206372656174652067696760601b604082015260600190565b6020808252600f908201526e496e76616c6964205061636b61676560881b604082015260600190565b60208082526019908201527f475076323a206661696c6564207472616e7366657246726f6d00000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b602080825260409082018190527f5265717569726573206d73672e73656e6465722069732066726f6d20636f6e74908201527f726163742061646472657373207265676973746572656420746f205f6e616d65606082015260800190565b81518152602080830151908201526040918201519181019190915260600190565b600060208252610f586020830184611dbf565b918252602082015260400190565b6000848252602084818401526040606081850152845160608501528185015160808501845b600381101561222257612212828451611e70565b91840191908301906001016121fe565b5050508401516101006101408501529050612241610160840182611d93565b9695505050505050565b60405181810167ffffffffffffffff8111828210171561226d5761226d612368565b604052919050565b600067ffffffffffffffff82111561228f5761228f612368565b5060200290565b600067ffffffffffffffff8211156122b0576122b0612368565b50601f01601f191660200190565b600082198211156122d1576122d1612352565b500190565b60005b838110156122f15781810151838201526020016122d9565b8381111561102f5750506000910152565b60028104600182168061231657607f821691505b602082108114156115b057634e487b7160e01b600052602260045260246000fd5b600060001982141561234b5761234b612352565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461107257600080fdfea2646970667358221220443dbba3d8bba5ca4671dc0c411d6ad415b777d5da7444d83e131d3a35808d2864736f6c63430008000033";

type GigConstructorParams =
  | [linkLibraryAddresses: GigLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Gig__factory extends ContractFactory {
  constructor(...args: GigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Gig__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: GigLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1c13fa74a81089071ad74f3376e739188f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/GigLogic.sol:GigLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$30e2c0763bc74e29ca837c0a99f7d1b333\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/InviterLogic.sol:InviterLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Gig> {
    return super.deploy(provider, overrides || {}) as Promise<Gig>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): Gig {
    return super.attach(address) as Gig;
  }
  override connect(signer: Signer): Gig__factory {
    return super.connect(signer) as Gig__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GigInterface {
    return new utils.Interface(_abi) as GigInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Gig {
    return new Contract(address, _abi, signerOrProvider) as Gig;
  }
}

export interface GigLibraryAddresses {
  ["contracts/protocol/libraries/logics/GigLogic.sol:GigLogic"]: string;
  ["contracts/protocol/libraries/logics/InviterLogic.sol:InviterLogic"]: string;
}
