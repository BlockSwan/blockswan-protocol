/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface XPKeysInterface extends utils.Interface {
  functions: {
    "BECOME_BUYER()": FunctionFragment;
    "BECOME_SELLER()": FunctionFragment;
    "CREATE_GIG()": FunctionFragment;
    "CREATE_ORDER()": FunctionFragment;
    "PAY_ORDER()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BECOME_BUYER"
      | "BECOME_SELLER"
      | "CREATE_GIG"
      | "CREATE_ORDER"
      | "PAY_ORDER"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BECOME_BUYER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BECOME_SELLER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CREATE_GIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CREATE_ORDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PAY_ORDER", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BECOME_BUYER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BECOME_SELLER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CREATE_GIG", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CREATE_ORDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PAY_ORDER", data: BytesLike): Result;

  events: {};
}

export interface XPKeys extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: XPKeysInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BECOME_BUYER(overrides?: CallOverrides): Promise<[string]>;

    BECOME_SELLER(overrides?: CallOverrides): Promise<[string]>;

    CREATE_GIG(overrides?: CallOverrides): Promise<[string]>;

    CREATE_ORDER(overrides?: CallOverrides): Promise<[string]>;

    PAY_ORDER(overrides?: CallOverrides): Promise<[string]>;
  };

  BECOME_BUYER(overrides?: CallOverrides): Promise<string>;

  BECOME_SELLER(overrides?: CallOverrides): Promise<string>;

  CREATE_GIG(overrides?: CallOverrides): Promise<string>;

  CREATE_ORDER(overrides?: CallOverrides): Promise<string>;

  PAY_ORDER(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BECOME_BUYER(overrides?: CallOverrides): Promise<string>;

    BECOME_SELLER(overrides?: CallOverrides): Promise<string>;

    CREATE_GIG(overrides?: CallOverrides): Promise<string>;

    CREATE_ORDER(overrides?: CallOverrides): Promise<string>;

    PAY_ORDER(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BECOME_BUYER(overrides?: CallOverrides): Promise<BigNumber>;

    BECOME_SELLER(overrides?: CallOverrides): Promise<BigNumber>;

    CREATE_GIG(overrides?: CallOverrides): Promise<BigNumber>;

    CREATE_ORDER(overrides?: CallOverrides): Promise<BigNumber>;

    PAY_ORDER(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BECOME_BUYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BECOME_SELLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATE_GIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATE_ORDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAY_ORDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
