import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ErrorsInterface extends utils.Interface {
    functions: {
        "ADDRESS_ALREADY_USED()": FunctionFragment;
        "ADDRESS_PROVIDER_ALREADY_ADDED()": FunctionFragment;
        "ADDRESS_PROVIDER_NOT_REGISTERED()": FunctionFragment;
        "CALLER_NOT_BUYER_ID()": FunctionFragment;
        "CALLER_NOT_SELLER_ID()": FunctionFragment;
        "CALLER_NOT_USER()": FunctionFragment;
        "CLAIM_NOT_ALLOWED()": FunctionFragment;
        "CONTRACT_NAME_ALREADY_USED()": FunctionFragment;
        "DISPUTE_NOT_CREATED()": FunctionFragment;
        "DS_COMMIT_STATE_REQUIRED()": FunctionFragment;
        "DS_DISPUTE_ALREADY_RULED()": FunctionFragment;
        "DS_EVIDENCE_PERIOD_OVER()": FunctionFragment;
        "DS_EVIDENCE_ROLE_NOT_VALID()": FunctionFragment;
        "DS_EVIDENCE_SENDER_NOT_PARTY()": FunctionFragment;
        "DS_INVALID_STATE()": FunctionFragment;
        "DS_IN_EXECUTION_PERIOD()": FunctionFragment;
        "DS_NO_COMMITMENTS_MADE_FOR_ROUND()": FunctionFragment;
        "DS_NO_VOTES_MADE_FOR_ROUND()": FunctionFragment;
        "DS_TIME_NOT_PASSED()": FunctionFragment;
        "EVIDENCE_NOT_SUBMITTED()": FunctionFragment;
        "FAILED_BECOMING_BUYER()": FunctionFragment;
        "FAILED_BECOMING_SELLER()": FunctionFragment;
        "FAILED_TO_STAKE_JURY()": FunctionFragment;
        "FAILED_TO_WITHDRAW_JURY()": FunctionFragment;
        "GIG_ID_ALREADY_EXISING()": FunctionFragment;
        "INDEX_OUT_OF_RANGE()": FunctionFragment;
        "INVALID_ADDRESS_PROVIDER_ID()": FunctionFragment;
        "INVALID_INVITER_ID()": FunctionFragment;
        "INVALID_ORDER_STATE()": FunctionFragment;
        "INVALID_USER_ID()": FunctionFragment;
        "JURY_STAKE_NOT_ENOUGH()": FunctionFragment;
        "NOT_GIG_OWNER()": FunctionFragment;
        "NOT_ORDER_ACTOR()": FunctionFragment;
        "NOT_ORDER_BUYER()": FunctionFragment;
        "NOT_ORDER_SELLER()": FunctionFragment;
        "NO_MATCHING_XP_KEY()": FunctionFragment;
        "ONLY_BUYER()": FunctionFragment;
        "ONLY_PROVIDER_ALLOWED()": FunctionFragment;
        "ONLY_SELLER()": FunctionFragment;
        "RD_ACCOUNT_NOT_DRAWN_JUROR()": FunctionFragment;
        "RD_ROUND_DOES_NOT_EXIST()": FunctionFragment;
        "RD_VOTE_NOT_FOUND()": FunctionFragment;
        "RESTRICTED_TO_BUYER()": FunctionFragment;
        "RESTRICTED_TO_SELLER()": FunctionFragment;
        "ROUND_EVIDENCE_ALREADY_SUBMITTED()": FunctionFragment;
        "ROUND_ID_INVALID()": FunctionFragment;
        "ROUND_IS_APPEALED()": FunctionFragment;
        "ROUND_NOT_APPEALED()": FunctionFragment;
        "ROUND_NOT_CLOSED()": FunctionFragment;
        "ROUND_VOTE_ALREADY_COMMITED()": FunctionFragment;
        "ROUND_VOTE_ALREADY_REVEALED()": FunctionFragment;
        "ROUND_VOTE_NOT_COMMITED()": FunctionFragment;
        "SELF_REFUND_DELAY_NOT_OVER()": FunctionFragment;
        "VOTE_INCORRECT()": FunctionFragment;
        "VOTE_INVALID_CHOICE()": FunctionFragment;
        "VOTE_REVEAL_INCORRECT()": FunctionFragment;
        "ZERO_ADDRESS_IS_INVALID()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESS_ALREADY_USED" | "ADDRESS_PROVIDER_ALREADY_ADDED" | "ADDRESS_PROVIDER_NOT_REGISTERED" | "CALLER_NOT_BUYER_ID" | "CALLER_NOT_SELLER_ID" | "CALLER_NOT_USER" | "CLAIM_NOT_ALLOWED" | "CONTRACT_NAME_ALREADY_USED" | "DISPUTE_NOT_CREATED" | "DS_COMMIT_STATE_REQUIRED" | "DS_DISPUTE_ALREADY_RULED" | "DS_EVIDENCE_PERIOD_OVER" | "DS_EVIDENCE_ROLE_NOT_VALID" | "DS_EVIDENCE_SENDER_NOT_PARTY" | "DS_INVALID_STATE" | "DS_IN_EXECUTION_PERIOD" | "DS_NO_COMMITMENTS_MADE_FOR_ROUND" | "DS_NO_VOTES_MADE_FOR_ROUND" | "DS_TIME_NOT_PASSED" | "EVIDENCE_NOT_SUBMITTED" | "FAILED_BECOMING_BUYER" | "FAILED_BECOMING_SELLER" | "FAILED_TO_STAKE_JURY" | "FAILED_TO_WITHDRAW_JURY" | "GIG_ID_ALREADY_EXISING" | "INDEX_OUT_OF_RANGE" | "INVALID_ADDRESS_PROVIDER_ID" | "INVALID_INVITER_ID" | "INVALID_ORDER_STATE" | "INVALID_USER_ID" | "JURY_STAKE_NOT_ENOUGH" | "NOT_GIG_OWNER" | "NOT_ORDER_ACTOR" | "NOT_ORDER_BUYER" | "NOT_ORDER_SELLER" | "NO_MATCHING_XP_KEY" | "ONLY_BUYER" | "ONLY_PROVIDER_ALLOWED" | "ONLY_SELLER" | "RD_ACCOUNT_NOT_DRAWN_JUROR" | "RD_ROUND_DOES_NOT_EXIST" | "RD_VOTE_NOT_FOUND" | "RESTRICTED_TO_BUYER" | "RESTRICTED_TO_SELLER" | "ROUND_EVIDENCE_ALREADY_SUBMITTED" | "ROUND_ID_INVALID" | "ROUND_IS_APPEALED" | "ROUND_NOT_APPEALED" | "ROUND_NOT_CLOSED" | "ROUND_VOTE_ALREADY_COMMITED" | "ROUND_VOTE_ALREADY_REVEALED" | "ROUND_VOTE_NOT_COMMITED" | "SELF_REFUND_DELAY_NOT_OVER" | "VOTE_INCORRECT" | "VOTE_INVALID_CHOICE" | "VOTE_REVEAL_INCORRECT" | "ZERO_ADDRESS_IS_INVALID"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESS_ALREADY_USED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER_ALREADY_ADDED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER_NOT_REGISTERED", values?: undefined): string;
    encodeFunctionData(functionFragment: "CALLER_NOT_BUYER_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "CALLER_NOT_SELLER_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "CALLER_NOT_USER", values?: undefined): string;
    encodeFunctionData(functionFragment: "CLAIM_NOT_ALLOWED", values?: undefined): string;
    encodeFunctionData(functionFragment: "CONTRACT_NAME_ALREADY_USED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DISPUTE_NOT_CREATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_COMMIT_STATE_REQUIRED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_DISPUTE_ALREADY_RULED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_EVIDENCE_PERIOD_OVER", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_EVIDENCE_ROLE_NOT_VALID", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_EVIDENCE_SENDER_NOT_PARTY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_INVALID_STATE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_IN_EXECUTION_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_NO_COMMITMENTS_MADE_FOR_ROUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_NO_VOTES_MADE_FOR_ROUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "DS_TIME_NOT_PASSED", values?: undefined): string;
    encodeFunctionData(functionFragment: "EVIDENCE_NOT_SUBMITTED", values?: undefined): string;
    encodeFunctionData(functionFragment: "FAILED_BECOMING_BUYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "FAILED_BECOMING_SELLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "FAILED_TO_STAKE_JURY", values?: undefined): string;
    encodeFunctionData(functionFragment: "FAILED_TO_WITHDRAW_JURY", values?: undefined): string;
    encodeFunctionData(functionFragment: "GIG_ID_ALREADY_EXISING", values?: undefined): string;
    encodeFunctionData(functionFragment: "INDEX_OUT_OF_RANGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALID_ADDRESS_PROVIDER_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALID_INVITER_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALID_ORDER_STATE", values?: undefined): string;
    encodeFunctionData(functionFragment: "INVALID_USER_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "JURY_STAKE_NOT_ENOUGH", values?: undefined): string;
    encodeFunctionData(functionFragment: "NOT_GIG_OWNER", values?: undefined): string;
    encodeFunctionData(functionFragment: "NOT_ORDER_ACTOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "NOT_ORDER_BUYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "NOT_ORDER_SELLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_MATCHING_XP_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONLY_BUYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONLY_PROVIDER_ALLOWED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ONLY_SELLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "RD_ACCOUNT_NOT_DRAWN_JUROR", values?: undefined): string;
    encodeFunctionData(functionFragment: "RD_ROUND_DOES_NOT_EXIST", values?: undefined): string;
    encodeFunctionData(functionFragment: "RD_VOTE_NOT_FOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESTRICTED_TO_BUYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESTRICTED_TO_SELLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_EVIDENCE_ALREADY_SUBMITTED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_ID_INVALID", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_IS_APPEALED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_NOT_APPEALED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_NOT_CLOSED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_VOTE_ALREADY_COMMITED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_VOTE_ALREADY_REVEALED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUND_VOTE_NOT_COMMITED", values?: undefined): string;
    encodeFunctionData(functionFragment: "SELF_REFUND_DELAY_NOT_OVER", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_INCORRECT", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_INVALID_CHOICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_REVEAL_INCORRECT", values?: undefined): string;
    encodeFunctionData(functionFragment: "ZERO_ADDRESS_IS_INVALID", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ADDRESS_ALREADY_USED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER_ALREADY_ADDED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER_NOT_REGISTERED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CALLER_NOT_BUYER_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CALLER_NOT_SELLER_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CALLER_NOT_USER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CLAIM_NOT_ALLOWED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CONTRACT_NAME_ALREADY_USED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DISPUTE_NOT_CREATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_COMMIT_STATE_REQUIRED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_DISPUTE_ALREADY_RULED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_EVIDENCE_PERIOD_OVER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_EVIDENCE_ROLE_NOT_VALID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_EVIDENCE_SENDER_NOT_PARTY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_INVALID_STATE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_IN_EXECUTION_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_NO_COMMITMENTS_MADE_FOR_ROUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_NO_VOTES_MADE_FOR_ROUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DS_TIME_NOT_PASSED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EVIDENCE_NOT_SUBMITTED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FAILED_BECOMING_BUYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FAILED_BECOMING_SELLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FAILED_TO_STAKE_JURY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FAILED_TO_WITHDRAW_JURY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GIG_ID_ALREADY_EXISING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INDEX_OUT_OF_RANGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALID_ADDRESS_PROVIDER_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALID_INVITER_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALID_ORDER_STATE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INVALID_USER_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "JURY_STAKE_NOT_ENOUGH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NOT_GIG_OWNER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NOT_ORDER_ACTOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NOT_ORDER_BUYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NOT_ORDER_SELLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_MATCHING_XP_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONLY_BUYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONLY_PROVIDER_ALLOWED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ONLY_SELLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RD_ACCOUNT_NOT_DRAWN_JUROR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RD_ROUND_DOES_NOT_EXIST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RD_VOTE_NOT_FOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESTRICTED_TO_BUYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESTRICTED_TO_SELLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_EVIDENCE_ALREADY_SUBMITTED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_ID_INVALID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_IS_APPEALED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_NOT_APPEALED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_NOT_CLOSED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_VOTE_ALREADY_COMMITED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_VOTE_ALREADY_REVEALED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUND_VOTE_NOT_COMMITED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SELF_REFUND_DELAY_NOT_OVER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_INCORRECT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_INVALID_CHOICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_REVEAL_INCORRECT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ZERO_ADDRESS_IS_INVALID", data: BytesLike): Result;
    events: {};
}
export interface Errors extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ErrorsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        ADDRESS_ALREADY_USED(overrides?: CallOverrides): Promise<[string]>;
        ADDRESS_PROVIDER_ALREADY_ADDED(overrides?: CallOverrides): Promise<[string]>;
        ADDRESS_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<[string]>;
        CALLER_NOT_BUYER_ID(overrides?: CallOverrides): Promise<[string]>;
        CALLER_NOT_SELLER_ID(overrides?: CallOverrides): Promise<[string]>;
        CALLER_NOT_USER(overrides?: CallOverrides): Promise<[string]>;
        CLAIM_NOT_ALLOWED(overrides?: CallOverrides): Promise<[string]>;
        CONTRACT_NAME_ALREADY_USED(overrides?: CallOverrides): Promise<[string]>;
        DISPUTE_NOT_CREATED(overrides?: CallOverrides): Promise<[string]>;
        DS_COMMIT_STATE_REQUIRED(overrides?: CallOverrides): Promise<[string]>;
        DS_DISPUTE_ALREADY_RULED(overrides?: CallOverrides): Promise<[string]>;
        DS_EVIDENCE_PERIOD_OVER(overrides?: CallOverrides): Promise<[string]>;
        DS_EVIDENCE_ROLE_NOT_VALID(overrides?: CallOverrides): Promise<[string]>;
        DS_EVIDENCE_SENDER_NOT_PARTY(overrides?: CallOverrides): Promise<[string]>;
        DS_INVALID_STATE(overrides?: CallOverrides): Promise<[string]>;
        DS_IN_EXECUTION_PERIOD(overrides?: CallOverrides): Promise<[string]>;
        DS_NO_COMMITMENTS_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<[string]>;
        DS_NO_VOTES_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<[string]>;
        DS_TIME_NOT_PASSED(overrides?: CallOverrides): Promise<[string]>;
        EVIDENCE_NOT_SUBMITTED(overrides?: CallOverrides): Promise<[string]>;
        FAILED_BECOMING_BUYER(overrides?: CallOverrides): Promise<[string]>;
        FAILED_BECOMING_SELLER(overrides?: CallOverrides): Promise<[string]>;
        FAILED_TO_STAKE_JURY(overrides?: CallOverrides): Promise<[string]>;
        FAILED_TO_WITHDRAW_JURY(overrides?: CallOverrides): Promise<[string]>;
        GIG_ID_ALREADY_EXISING(overrides?: CallOverrides): Promise<[string]>;
        INDEX_OUT_OF_RANGE(overrides?: CallOverrides): Promise<[string]>;
        INVALID_ADDRESS_PROVIDER_ID(overrides?: CallOverrides): Promise<[string]>;
        INVALID_INVITER_ID(overrides?: CallOverrides): Promise<[string]>;
        INVALID_ORDER_STATE(overrides?: CallOverrides): Promise<[string]>;
        INVALID_USER_ID(overrides?: CallOverrides): Promise<[string]>;
        JURY_STAKE_NOT_ENOUGH(overrides?: CallOverrides): Promise<[string]>;
        NOT_GIG_OWNER(overrides?: CallOverrides): Promise<[string]>;
        NOT_ORDER_ACTOR(overrides?: CallOverrides): Promise<[string]>;
        NOT_ORDER_BUYER(overrides?: CallOverrides): Promise<[string]>;
        NOT_ORDER_SELLER(overrides?: CallOverrides): Promise<[string]>;
        NO_MATCHING_XP_KEY(overrides?: CallOverrides): Promise<[string]>;
        ONLY_BUYER(overrides?: CallOverrides): Promise<[string]>;
        ONLY_PROVIDER_ALLOWED(overrides?: CallOverrides): Promise<[string]>;
        ONLY_SELLER(overrides?: CallOverrides): Promise<[string]>;
        RD_ACCOUNT_NOT_DRAWN_JUROR(overrides?: CallOverrides): Promise<[string]>;
        RD_ROUND_DOES_NOT_EXIST(overrides?: CallOverrides): Promise<[string]>;
        RD_VOTE_NOT_FOUND(overrides?: CallOverrides): Promise<[string]>;
        RESTRICTED_TO_BUYER(overrides?: CallOverrides): Promise<[string]>;
        RESTRICTED_TO_SELLER(overrides?: CallOverrides): Promise<[string]>;
        ROUND_EVIDENCE_ALREADY_SUBMITTED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_ID_INVALID(overrides?: CallOverrides): Promise<[string]>;
        ROUND_IS_APPEALED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_NOT_APPEALED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_NOT_CLOSED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_VOTE_ALREADY_COMMITED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_VOTE_ALREADY_REVEALED(overrides?: CallOverrides): Promise<[string]>;
        ROUND_VOTE_NOT_COMMITED(overrides?: CallOverrides): Promise<[string]>;
        SELF_REFUND_DELAY_NOT_OVER(overrides?: CallOverrides): Promise<[string]>;
        VOTE_INCORRECT(overrides?: CallOverrides): Promise<[string]>;
        VOTE_INVALID_CHOICE(overrides?: CallOverrides): Promise<[string]>;
        VOTE_REVEAL_INCORRECT(overrides?: CallOverrides): Promise<[string]>;
        ZERO_ADDRESS_IS_INVALID(overrides?: CallOverrides): Promise<[string]>;
    };
    ADDRESS_ALREADY_USED(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>;
    CALLER_NOT_BUYER_ID(overrides?: CallOverrides): Promise<string>;
    CALLER_NOT_SELLER_ID(overrides?: CallOverrides): Promise<string>;
    CALLER_NOT_USER(overrides?: CallOverrides): Promise<string>;
    CLAIM_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
    CONTRACT_NAME_ALREADY_USED(overrides?: CallOverrides): Promise<string>;
    DISPUTE_NOT_CREATED(overrides?: CallOverrides): Promise<string>;
    DS_COMMIT_STATE_REQUIRED(overrides?: CallOverrides): Promise<string>;
    DS_DISPUTE_ALREADY_RULED(overrides?: CallOverrides): Promise<string>;
    DS_EVIDENCE_PERIOD_OVER(overrides?: CallOverrides): Promise<string>;
    DS_EVIDENCE_ROLE_NOT_VALID(overrides?: CallOverrides): Promise<string>;
    DS_EVIDENCE_SENDER_NOT_PARTY(overrides?: CallOverrides): Promise<string>;
    DS_INVALID_STATE(overrides?: CallOverrides): Promise<string>;
    DS_IN_EXECUTION_PERIOD(overrides?: CallOverrides): Promise<string>;
    DS_NO_COMMITMENTS_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<string>;
    DS_NO_VOTES_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<string>;
    DS_TIME_NOT_PASSED(overrides?: CallOverrides): Promise<string>;
    EVIDENCE_NOT_SUBMITTED(overrides?: CallOverrides): Promise<string>;
    FAILED_BECOMING_BUYER(overrides?: CallOverrides): Promise<string>;
    FAILED_BECOMING_SELLER(overrides?: CallOverrides): Promise<string>;
    FAILED_TO_STAKE_JURY(overrides?: CallOverrides): Promise<string>;
    FAILED_TO_WITHDRAW_JURY(overrides?: CallOverrides): Promise<string>;
    GIG_ID_ALREADY_EXISING(overrides?: CallOverrides): Promise<string>;
    INDEX_OUT_OF_RANGE(overrides?: CallOverrides): Promise<string>;
    INVALID_ADDRESS_PROVIDER_ID(overrides?: CallOverrides): Promise<string>;
    INVALID_INVITER_ID(overrides?: CallOverrides): Promise<string>;
    INVALID_ORDER_STATE(overrides?: CallOverrides): Promise<string>;
    INVALID_USER_ID(overrides?: CallOverrides): Promise<string>;
    JURY_STAKE_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>;
    NOT_GIG_OWNER(overrides?: CallOverrides): Promise<string>;
    NOT_ORDER_ACTOR(overrides?: CallOverrides): Promise<string>;
    NOT_ORDER_BUYER(overrides?: CallOverrides): Promise<string>;
    NOT_ORDER_SELLER(overrides?: CallOverrides): Promise<string>;
    NO_MATCHING_XP_KEY(overrides?: CallOverrides): Promise<string>;
    ONLY_BUYER(overrides?: CallOverrides): Promise<string>;
    ONLY_PROVIDER_ALLOWED(overrides?: CallOverrides): Promise<string>;
    ONLY_SELLER(overrides?: CallOverrides): Promise<string>;
    RD_ACCOUNT_NOT_DRAWN_JUROR(overrides?: CallOverrides): Promise<string>;
    RD_ROUND_DOES_NOT_EXIST(overrides?: CallOverrides): Promise<string>;
    RD_VOTE_NOT_FOUND(overrides?: CallOverrides): Promise<string>;
    RESTRICTED_TO_BUYER(overrides?: CallOverrides): Promise<string>;
    RESTRICTED_TO_SELLER(overrides?: CallOverrides): Promise<string>;
    ROUND_EVIDENCE_ALREADY_SUBMITTED(overrides?: CallOverrides): Promise<string>;
    ROUND_ID_INVALID(overrides?: CallOverrides): Promise<string>;
    ROUND_IS_APPEALED(overrides?: CallOverrides): Promise<string>;
    ROUND_NOT_APPEALED(overrides?: CallOverrides): Promise<string>;
    ROUND_NOT_CLOSED(overrides?: CallOverrides): Promise<string>;
    ROUND_VOTE_ALREADY_COMMITED(overrides?: CallOverrides): Promise<string>;
    ROUND_VOTE_ALREADY_REVEALED(overrides?: CallOverrides): Promise<string>;
    ROUND_VOTE_NOT_COMMITED(overrides?: CallOverrides): Promise<string>;
    SELF_REFUND_DELAY_NOT_OVER(overrides?: CallOverrides): Promise<string>;
    VOTE_INCORRECT(overrides?: CallOverrides): Promise<string>;
    VOTE_INVALID_CHOICE(overrides?: CallOverrides): Promise<string>;
    VOTE_REVEAL_INCORRECT(overrides?: CallOverrides): Promise<string>;
    ZERO_ADDRESS_IS_INVALID(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ADDRESS_ALREADY_USED(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>;
        CALLER_NOT_BUYER_ID(overrides?: CallOverrides): Promise<string>;
        CALLER_NOT_SELLER_ID(overrides?: CallOverrides): Promise<string>;
        CALLER_NOT_USER(overrides?: CallOverrides): Promise<string>;
        CLAIM_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
        CONTRACT_NAME_ALREADY_USED(overrides?: CallOverrides): Promise<string>;
        DISPUTE_NOT_CREATED(overrides?: CallOverrides): Promise<string>;
        DS_COMMIT_STATE_REQUIRED(overrides?: CallOverrides): Promise<string>;
        DS_DISPUTE_ALREADY_RULED(overrides?: CallOverrides): Promise<string>;
        DS_EVIDENCE_PERIOD_OVER(overrides?: CallOverrides): Promise<string>;
        DS_EVIDENCE_ROLE_NOT_VALID(overrides?: CallOverrides): Promise<string>;
        DS_EVIDENCE_SENDER_NOT_PARTY(overrides?: CallOverrides): Promise<string>;
        DS_INVALID_STATE(overrides?: CallOverrides): Promise<string>;
        DS_IN_EXECUTION_PERIOD(overrides?: CallOverrides): Promise<string>;
        DS_NO_COMMITMENTS_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<string>;
        DS_NO_VOTES_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<string>;
        DS_TIME_NOT_PASSED(overrides?: CallOverrides): Promise<string>;
        EVIDENCE_NOT_SUBMITTED(overrides?: CallOverrides): Promise<string>;
        FAILED_BECOMING_BUYER(overrides?: CallOverrides): Promise<string>;
        FAILED_BECOMING_SELLER(overrides?: CallOverrides): Promise<string>;
        FAILED_TO_STAKE_JURY(overrides?: CallOverrides): Promise<string>;
        FAILED_TO_WITHDRAW_JURY(overrides?: CallOverrides): Promise<string>;
        GIG_ID_ALREADY_EXISING(overrides?: CallOverrides): Promise<string>;
        INDEX_OUT_OF_RANGE(overrides?: CallOverrides): Promise<string>;
        INVALID_ADDRESS_PROVIDER_ID(overrides?: CallOverrides): Promise<string>;
        INVALID_INVITER_ID(overrides?: CallOverrides): Promise<string>;
        INVALID_ORDER_STATE(overrides?: CallOverrides): Promise<string>;
        INVALID_USER_ID(overrides?: CallOverrides): Promise<string>;
        JURY_STAKE_NOT_ENOUGH(overrides?: CallOverrides): Promise<string>;
        NOT_GIG_OWNER(overrides?: CallOverrides): Promise<string>;
        NOT_ORDER_ACTOR(overrides?: CallOverrides): Promise<string>;
        NOT_ORDER_BUYER(overrides?: CallOverrides): Promise<string>;
        NOT_ORDER_SELLER(overrides?: CallOverrides): Promise<string>;
        NO_MATCHING_XP_KEY(overrides?: CallOverrides): Promise<string>;
        ONLY_BUYER(overrides?: CallOverrides): Promise<string>;
        ONLY_PROVIDER_ALLOWED(overrides?: CallOverrides): Promise<string>;
        ONLY_SELLER(overrides?: CallOverrides): Promise<string>;
        RD_ACCOUNT_NOT_DRAWN_JUROR(overrides?: CallOverrides): Promise<string>;
        RD_ROUND_DOES_NOT_EXIST(overrides?: CallOverrides): Promise<string>;
        RD_VOTE_NOT_FOUND(overrides?: CallOverrides): Promise<string>;
        RESTRICTED_TO_BUYER(overrides?: CallOverrides): Promise<string>;
        RESTRICTED_TO_SELLER(overrides?: CallOverrides): Promise<string>;
        ROUND_EVIDENCE_ALREADY_SUBMITTED(overrides?: CallOverrides): Promise<string>;
        ROUND_ID_INVALID(overrides?: CallOverrides): Promise<string>;
        ROUND_IS_APPEALED(overrides?: CallOverrides): Promise<string>;
        ROUND_NOT_APPEALED(overrides?: CallOverrides): Promise<string>;
        ROUND_NOT_CLOSED(overrides?: CallOverrides): Promise<string>;
        ROUND_VOTE_ALREADY_COMMITED(overrides?: CallOverrides): Promise<string>;
        ROUND_VOTE_ALREADY_REVEALED(overrides?: CallOverrides): Promise<string>;
        ROUND_VOTE_NOT_COMMITED(overrides?: CallOverrides): Promise<string>;
        SELF_REFUND_DELAY_NOT_OVER(overrides?: CallOverrides): Promise<string>;
        VOTE_INCORRECT(overrides?: CallOverrides): Promise<string>;
        VOTE_INVALID_CHOICE(overrides?: CallOverrides): Promise<string>;
        VOTE_REVEAL_INCORRECT(overrides?: CallOverrides): Promise<string>;
        ZERO_ADDRESS_IS_INVALID(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ADDRESS_ALREADY_USED(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESS_PROVIDER_ALREADY_ADDED(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESS_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<BigNumber>;
        CALLER_NOT_BUYER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        CALLER_NOT_SELLER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        CALLER_NOT_USER(overrides?: CallOverrides): Promise<BigNumber>;
        CLAIM_NOT_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;
        CONTRACT_NAME_ALREADY_USED(overrides?: CallOverrides): Promise<BigNumber>;
        DISPUTE_NOT_CREATED(overrides?: CallOverrides): Promise<BigNumber>;
        DS_COMMIT_STATE_REQUIRED(overrides?: CallOverrides): Promise<BigNumber>;
        DS_DISPUTE_ALREADY_RULED(overrides?: CallOverrides): Promise<BigNumber>;
        DS_EVIDENCE_PERIOD_OVER(overrides?: CallOverrides): Promise<BigNumber>;
        DS_EVIDENCE_ROLE_NOT_VALID(overrides?: CallOverrides): Promise<BigNumber>;
        DS_EVIDENCE_SENDER_NOT_PARTY(overrides?: CallOverrides): Promise<BigNumber>;
        DS_INVALID_STATE(overrides?: CallOverrides): Promise<BigNumber>;
        DS_IN_EXECUTION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        DS_NO_COMMITMENTS_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<BigNumber>;
        DS_NO_VOTES_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<BigNumber>;
        DS_TIME_NOT_PASSED(overrides?: CallOverrides): Promise<BigNumber>;
        EVIDENCE_NOT_SUBMITTED(overrides?: CallOverrides): Promise<BigNumber>;
        FAILED_BECOMING_BUYER(overrides?: CallOverrides): Promise<BigNumber>;
        FAILED_BECOMING_SELLER(overrides?: CallOverrides): Promise<BigNumber>;
        FAILED_TO_STAKE_JURY(overrides?: CallOverrides): Promise<BigNumber>;
        FAILED_TO_WITHDRAW_JURY(overrides?: CallOverrides): Promise<BigNumber>;
        GIG_ID_ALREADY_EXISING(overrides?: CallOverrides): Promise<BigNumber>;
        INDEX_OUT_OF_RANGE(overrides?: CallOverrides): Promise<BigNumber>;
        INVALID_ADDRESS_PROVIDER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        INVALID_INVITER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        INVALID_ORDER_STATE(overrides?: CallOverrides): Promise<BigNumber>;
        INVALID_USER_ID(overrides?: CallOverrides): Promise<BigNumber>;
        JURY_STAKE_NOT_ENOUGH(overrides?: CallOverrides): Promise<BigNumber>;
        NOT_GIG_OWNER(overrides?: CallOverrides): Promise<BigNumber>;
        NOT_ORDER_ACTOR(overrides?: CallOverrides): Promise<BigNumber>;
        NOT_ORDER_BUYER(overrides?: CallOverrides): Promise<BigNumber>;
        NOT_ORDER_SELLER(overrides?: CallOverrides): Promise<BigNumber>;
        NO_MATCHING_XP_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        ONLY_BUYER(overrides?: CallOverrides): Promise<BigNumber>;
        ONLY_PROVIDER_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;
        ONLY_SELLER(overrides?: CallOverrides): Promise<BigNumber>;
        RD_ACCOUNT_NOT_DRAWN_JUROR(overrides?: CallOverrides): Promise<BigNumber>;
        RD_ROUND_DOES_NOT_EXIST(overrides?: CallOverrides): Promise<BigNumber>;
        RD_VOTE_NOT_FOUND(overrides?: CallOverrides): Promise<BigNumber>;
        RESTRICTED_TO_BUYER(overrides?: CallOverrides): Promise<BigNumber>;
        RESTRICTED_TO_SELLER(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_EVIDENCE_ALREADY_SUBMITTED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_ID_INVALID(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_IS_APPEALED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_NOT_APPEALED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_NOT_CLOSED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_VOTE_ALREADY_COMMITED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_VOTE_ALREADY_REVEALED(overrides?: CallOverrides): Promise<BigNumber>;
        ROUND_VOTE_NOT_COMMITED(overrides?: CallOverrides): Promise<BigNumber>;
        SELF_REFUND_DELAY_NOT_OVER(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_INCORRECT(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_INVALID_CHOICE(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_REVEAL_INCORRECT(overrides?: CallOverrides): Promise<BigNumber>;
        ZERO_ADDRESS_IS_INVALID(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESS_ALREADY_USED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESS_PROVIDER_ALREADY_ADDED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESS_PROVIDER_NOT_REGISTERED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CALLER_NOT_BUYER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CALLER_NOT_SELLER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CALLER_NOT_USER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CLAIM_NOT_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CONTRACT_NAME_ALREADY_USED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DISPUTE_NOT_CREATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_COMMIT_STATE_REQUIRED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_DISPUTE_ALREADY_RULED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_EVIDENCE_PERIOD_OVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_EVIDENCE_ROLE_NOT_VALID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_EVIDENCE_SENDER_NOT_PARTY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_INVALID_STATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_IN_EXECUTION_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_NO_COMMITMENTS_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_NO_VOTES_MADE_FOR_ROUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DS_TIME_NOT_PASSED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EVIDENCE_NOT_SUBMITTED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FAILED_BECOMING_BUYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FAILED_BECOMING_SELLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FAILED_TO_STAKE_JURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FAILED_TO_WITHDRAW_JURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GIG_ID_ALREADY_EXISING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INDEX_OUT_OF_RANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALID_ADDRESS_PROVIDER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALID_INVITER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALID_ORDER_STATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INVALID_USER_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        JURY_STAKE_NOT_ENOUGH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NOT_GIG_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NOT_ORDER_ACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NOT_ORDER_BUYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NOT_ORDER_SELLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_MATCHING_XP_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ONLY_BUYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ONLY_PROVIDER_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ONLY_SELLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RD_ACCOUNT_NOT_DRAWN_JUROR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RD_ROUND_DOES_NOT_EXIST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RD_VOTE_NOT_FOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESTRICTED_TO_BUYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESTRICTED_TO_SELLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_EVIDENCE_ALREADY_SUBMITTED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_ID_INVALID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_IS_APPEALED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_NOT_APPEALED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_NOT_CLOSED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_VOTE_ALREADY_COMMITED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_VOTE_ALREADY_REVEALED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUND_VOTE_NOT_COMMITED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SELF_REFUND_DELAY_NOT_OVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTE_INCORRECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTE_INVALID_CHOICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTE_REVEAL_INCORRECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ZERO_ADDRESS_IS_INVALID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
