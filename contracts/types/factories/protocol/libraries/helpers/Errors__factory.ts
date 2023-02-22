/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Errors,
  ErrorsInterface,
} from "../../../../protocol/libraries/helpers/Errors";

const _abi = [
  {
    inputs: [],
    name: "ADDRESS_ALREADY_USED",
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
    name: "ADDRESS_PROVIDER_ALREADY_ADDED",
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
    name: "ADDRESS_PROVIDER_NOT_REGISTERED",
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
    name: "CALLER_NOT_BUYER_ID",
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
    name: "CALLER_NOT_SELLER_ID",
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
    name: "CONTRACT_NAME_ALREADY_USED",
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
    name: "DISPUTE_NOT_CREATED",
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
    name: "DS_EVIDENCE_PERIOD_OVER",
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
    name: "EVIDENCE_ALREADY_SUBMITTED",
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
    name: "EVIDENCE_NOT_SUBMITTED",
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
    name: "FAILED_BECOMING_BUYER",
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
    name: "FAILED_BECOMING_SELLER",
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
    name: "FAILED_TO_STAKE_JURY",
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
    name: "FAILED_TO_WITHDRAW_JURY",
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
    name: "GIG_ID_ALREADY_EXISING",
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
    name: "INDEX_OUT_OF_RANGE",
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
    name: "INVALID_ADDRESS_PROVIDER_ID",
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
    name: "INVALID_INVITER_ID",
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
    name: "INVALID_ORDER_STATE",
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
    name: "INVALID_USER_ID",
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
    name: "JURY_STAKE_NOT_ENOUGH",
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
    name: "NOT_GIG_OWNER",
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
    name: "NOT_ORDER_ACTOR",
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
    name: "NOT_ORDER_BUYER",
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
    name: "NOT_ORDER_SELLER",
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
    name: "NO_MATCHING_XP_KEY",
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
    name: "ONLY_BUYER",
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
    name: "ONLY_PROVIDER_ALLOWED",
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
    name: "ONLY_SELLER",
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
    name: "RESTRICTED_TO_BUYER",
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
    name: "RESTRICTED_TO_SELLER",
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
    name: "SELF_REFUND_DELAY_NOT_OVER",
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
    name: "ZERO_ADDRESS_IS_INVALID",
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
] as const;

const _bytecode =
  "0x61078661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102055760003560e01c806385b5cd7a11610124578063bdceb4af116100b7578063e407ada911610086578063e407ada914610300578063e6b9a31114610308578063e94402ea14610310578063f07617b214610318578063fd3a29001461032057610205565b8063bdceb4af146102e0578063cc8045e8146102e8578063d030157b146102f0578063e169e078146102f857610205565b8063a881ae1f116100f3578063a881ae1f146102c0578063b0687fa5146102c8578063b9d5e9ed146102d0578063bba1fdec146102d857610205565b806385b5cd7a146102a05780638b866cd1146102a857806399b1944d146102b0578063a18911fb146102b857610205565b80633d14e8701161019c5780635c65be551161016b5780635c65be551461028057806360aa5569146102885780636b040b2b146102905780637fe801631461029857610205565b80633d14e870146102605780633d714c0c14610268578063444b62f01461027057806347a809de1461027857610205565b806319923d7f116101d857806319923d7f146102405780632af4b5a8146102485780633903d4ba146102505780633ba5ef131461025857610205565b806302316e191461020a57806305d92c6f146102285780631652b9f11461023057806318fef85214610238575b600080fd5b610212610328565b60405161021f91906106fd565b60405180910390f35b610212610346565b610212610364565b610212610382565b6102126103a0565b6102126103bd565b6102126103da565b6102126103f8565b610212610416565b610212610434565b610212610452565b610212610470565b61021261048e565b6102126104ac565b6102126104ca565b6102126104e8565b610212610506565b610212610524565b610212610541565b61021261055e565b61021261057b565b610212610598565b6102126105b6565b6102126105d3565b6102126105f1565b61021261060f565b61021261062d565b61021261064b565b610212610668565b610212610685565b6102126106a3565b6102126106c1565b6102126106df565b60405180604001604052806002815260200161062760f31b81525081565b604051806040016040528060028152602001610c8d60f21b81525081565b60405180604001604052806002815260200161191b60f11b81525081565b60405180604001604052806002815260200161032360f41b81525081565b604051806040016040528060018152602001600d60fa1b81525081565b604051806040016040528060018152602001603360f81b81525081565b60405180604001604052806002815260200161333160f01b81525081565b60405180604001604052806002815260200161189960f11b81525081565b60405180604001604052806002815260200161033360f41b81525081565b60405180604001604052806002815260200161199b60f11b81525081565b60405180604001604052806002815260200161199960f11b81525081565b60405180604001604052806002815260200161313760f01b81525081565b60405180604001604052806002815260200161323360f01b81525081565b60405180604001604052806002815260200161189b60f11b81525081565b60405180604001604052806002815260200161064760f31b81525081565b60405180604001604052806002815260200161313360f01b81525081565b60405180604001604052806002815260200161313960f01b81525081565b604051806040016040528060018152602001603960f81b81525081565b604051806040016040528060018152602001603160f81b81525081565b604051806040016040528060018152602001601960f91b81525081565b604051806040016040528060018152602001603560f81b81525081565b60405180604001604052806002815260200161323960f01b81525081565b604051806040016040528060018152602001601b60f91b81525081565b60405180604001604052806002815260200161323160f01b81525081565b60405180604001604052806002815260200161323760f01b81525081565b60405180604001604052806002815260200161191960f11b81525081565b60405180604001604052806002815260200161313160f01b81525081565b604051806040016040528060018152602001600760fb1b81525081565b604051806040016040528060018152602001603760f81b81525081565b60405180604001604052806002815260200161313560f01b81525081565b604051806040016040528060028152602001610c4d60f21b81525081565b60405180604001604052806002815260200161323560f01b81525081565b60405180604001604052806002815260200161031360f41b81525081565b6000602080835283518082850152825b818110156107295785810183015185820160400152820161070d565b8181111561073a5783604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220404d26f1e60084fe4242f192806e51520eeeba8c7c554697c200b2ddc917021164736f6c63430008000033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
