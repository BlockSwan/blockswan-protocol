import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { Errors, ErrorsInterface } from "../../../../protocol/libraries/helpers/Errors";
type ErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Errors__factory extends ContractFactory {
    constructor(...args: ErrorsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Errors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Errors;
    connect(signer: Signer): Errors__factory;
    static readonly bytecode = "0x610b8361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061038d5760003560e01c806385b5cd7a116101e8578063b9d5e9ed11610119578063d75f4092116100b7578063e6b9a31111610086578063e6b9a31114610a74578063e94402ea14610a95578063f07617b214610ab6578063fd3a290014610ad757600080fd5b8063d75f4092146109f2578063e169e07814610a13578063e407ada914610a33578063e68f101714610a5357600080fd5b8063bdceb4af116100f3578063bdceb4af1461096e578063c245a9851461098f578063cc8045e8146109b0578063d030157b146109d157600080fd5b8063b9d5e9ed1461090c578063bba1fdec1461092c578063bc7b94231461094d57600080fd5b80639bbd35dd11610186578063a881ae1f11610160578063a881ae1f14610889578063ae655519146108a9578063afb6f7c7146108ca578063b0687fa5146108eb57600080fd5b80639bbd35dd14610827578063a18911fb14610848578063a203ae051461086857600080fd5b80638b866cd1116101c25780638b866cd1146107a55780638d4587a7146107c557806396f98d47146107e657806399b1944d1461080757600080fd5b806385b5cd7a1461074257806387176d2b1461076357806389154f1b1461078457600080fd5b80633d714c0c116102c25780635e3e3321116102605780636b040b2b1161023a5780636b040b2b146106be5780636fdc7532146106df578063787fffad146107005780637fe801631461072157600080fd5b80635e3e33211461065b5780635f305c691461067c57806360aa55691461069d57600080fd5b806347a809de1161029c57806347a809de146105d757806348a105d8146105f857806348b24e01146106195780635c65be551461063a57600080fd5b80633d714c0c14610574578063444b62f01461059557806344cfc6df146105b657600080fd5b806319923d7f1161032f5780632af4b5a8116103095780632af4b5a8146104f15780633903d4ba146105115780633a5d8e6d146105325780633ba5ef131461055357600080fd5b806319923d7f1461048f578063207cf675146104af57806324016692146104d057600080fd5b806310a1b2811161036b57806310a1b2811461040b57806312db12761461042c5780631652b9f11461044d57806318fef8521461046e57600080fd5b806302316e191461039257806305d92c6f146103c95780630c881d8b146103ea575b600080fd5b6103b360405180604001604052806002815260200161062760f31b81525081565b6040516103c09190610af8565b60405180910390f35b6103b3604051806040016040528060028152602001610c8d60f21b81525081565b6103b360405180604001604052806002815260200161353760f01b81525081565b6103b360405180604001604052806002815260200161068760f31b81525081565b6103b360405180604001604052806002815260200161353960f01b81525081565b6103b360405180604001604052806002815260200161191b60f11b81525081565b6103b360405180604001604052806002815260200161032360f41b81525081565b6103b3604051806040016040528060018152602001600d60fa1b81525081565b6103b3604051806040016040528060028152602001611a1b60f11b81525081565b6103b3604051806040016040528060028152602001611a9b60f11b81525081565b6103b3604051806040016040528060018152602001603360f81b81525081565b6103b360405180604001604052806002815260200161333160f01b81525081565b6103b360405180604001604052806002815260200161363160f01b81525081565b6103b360405180604001604052806002815260200161189960f11b81525081565b6103b360405180604001604052806002815260200161199b60f11b81525081565b6103b360405180604001604052806002815260200161199960f11b81525081565b6103b360405180604001604052806002815260200161363360f01b81525081565b6103b360405180604001604052806002815260200161313760f01b81525081565b6103b360405180604001604052806002815260200161343760f01b81525081565b6103b360405180604001604052806002815260200161343960f01b81525081565b6103b360405180604001604052806002815260200161323360f01b81525081565b6103b360405180604001604052806002815260200161353560f01b81525081565b6103b360405180604001604052806002815260200161033360f41b81525081565b6103b360405180604001604052806002815260200161189b60f11b81525081565b6103b360405180604001604052806002815260200161064760f31b81525081565b6103b3604051806040016040528060028152602001610d4d60f21b81525081565b6103b36040518060400160405280600281526020016106a760f31b81525081565b6103b360405180604001604052806002815260200161313360f01b81525081565b6103b360405180604001604052806002815260200161313960f01b81525081565b6103b3604051806040016040528060028152602001611b1960f11b81525081565b6103b360405180604001604052806002815260200161034360f41b81525081565b6103b3604051806040016040528060018152602001603960f81b81525081565b6103b360405180604001604052806002815260200161035360f41b81525081565b6103b360405180604001604052806002815260200161036360f41b81525081565b6103b3604051806040016040528060018152602001603160f81b81525081565b6103b3604051806040016040528060028152602001610d8d60f21b81525081565b6103b3604051806040016040528060018152602001601960f91b81525081565b6103b360405180604001604052806002815260200161333960f01b81525081565b6103b3604051806040016040528060018152602001603560f81b81525081565b6103b3604051806040016040528060028152602001611a9960f11b81525081565b6103b360405180604001604052806002815260200161353360f01b81525081565b6103b360405180604001604052806002815260200161323960f01b81525081565b6103b3604051806040016040528060018152602001601b60f91b81525081565b6103b360405180604001604052806002815260200161323160f01b81525081565b6103b360405180604001604052806002815260200161333760f01b81525081565b6103b360405180604001604052806002815260200161323760f01b81525081565b6103b360405180604001604052806002815260200161363560f01b81525081565b6103b360405180604001604052806002815260200161191960f11b81525081565b6103b360405180604001604052806002815260200161313160f01b81525081565b6103b360405180604001604052806002815260200161353160f01b81525081565b6103b3604051806040016040528060018152602001600760fb1b81525081565b6103b3604051806040016040528060018152602001603760f81b81525081565b6103b360405180604001604052806002815260200161066760f31b81525081565b6103b360405180604001604052806002815260200161313560f01b81525081565b6103b3604051806040016040528060028152602001610c4d60f21b81525081565b6103b360405180604001604052806002815260200161323560f01b81525081565b6103b360405180604001604052806002815260200161031360f41b81525081565b600060208083528351808285015260005b81811015610b2557858101830151858201604001528201610b09565b81811115610b37576000604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220e0fb6abe23db1e7651739b848668de1664b254dc34a5a2c08746a7e73bcf774064736f6c63430008090033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ADDRESS_ALREADY_USED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADDRESS_PROVIDER_ALREADY_ADDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADDRESS_PROVIDER_NOT_REGISTERED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_BUYER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_SELLER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_USER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CLAIM_NOT_ALLOWED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONTRACT_NAME_ALREADY_USED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DISPUTE_NOT_CREATED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_COMMIT_STATE_REQUIRED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_DISPUTE_ALREADY_RULED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_EVIDENCE_PERIOD_OVER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_EVIDENCE_ROLE_NOT_VALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_EVIDENCE_SENDER_NOT_PARTY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_INVALID_STATE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_IN_EXECUTION_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_NO_COMMITMENTS_MADE_FOR_ROUND";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_NO_VOTES_MADE_FOR_ROUND";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DS_TIME_NOT_PASSED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EVIDENCE_NOT_SUBMITTED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FAILED_BECOMING_BUYER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FAILED_BECOMING_SELLER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FAILED_TO_STAKE_JURY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FAILED_TO_WITHDRAW_JURY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "GIG_ID_ALREADY_EXISING";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INDEX_OUT_OF_RANGE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_ADDRESS_PROVIDER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_INVITER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_ORDER_STATE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_USER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "JURY_STAKE_NOT_ENOUGH";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_GIG_OWNER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_ORDER_ACTOR";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_ORDER_BUYER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_ORDER_SELLER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_MATCHING_XP_KEY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONLY_BUYER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONLY_PROVIDER_ALLOWED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ONLY_SELLER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RD_ACCOUNT_NOT_DRAWN_JUROR";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RD_ROUND_DOES_NOT_EXIST";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RD_VOTE_NOT_FOUND";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESTRICTED_TO_BUYER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESTRICTED_TO_SELLER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_EVIDENCE_ALREADY_SUBMITTED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_ID_INVALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_IS_APPEALED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_NOT_APPEALED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_NOT_CLOSED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_VOTE_ALREADY_COMMITED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_VOTE_ALREADY_REVEALED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROUND_VOTE_NOT_COMMITED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SELF_REFUND_DELAY_NOT_OVER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTE_INCORRECT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTE_INVALID_CHOICE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTE_REVEAL_INCORRECT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZERO_ADDRESS_IS_INVALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Errors;
}
export {};