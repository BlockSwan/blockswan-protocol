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
} from "../../../common";

export interface RegistryKeysInterface extends utils.Interface {
  functions: {
    "ACL_ADMIN()": FunctionFragment;
    "ACL_MANAGER()": FunctionFragment;
    "DAT()": FunctionFragment;
    "DATA_PROVIDER()": FunctionFragment;
    "GIG()": FunctionFragment;
    "ORDER()": FunctionFragment;
    "PROTOCOL_CONFIGURATOR()": FunctionFragment;
    "USER()": FunctionFragment;
    "XP()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ACL_ADMIN"
      | "ACL_MANAGER"
      | "DAT"
      | "DATA_PROVIDER"
      | "GIG"
      | "ORDER"
      | "PROTOCOL_CONFIGURATOR"
      | "USER"
      | "XP"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ACL_ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ACL_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DAT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DATA_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GIG", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORDER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PROTOCOL_CONFIGURATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "USER", values?: undefined): string;
  encodeFunctionData(functionFragment: "XP", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ACL_ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ACL_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DAT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DATA_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GIG", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORDER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PROTOCOL_CONFIGURATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "USER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "XP", data: BytesLike): Result;

  events: {};
}

export interface RegistryKeys extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryKeysInterface;

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
    ACL_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    ACL_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    DAT(overrides?: CallOverrides): Promise<[string]>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    GIG(overrides?: CallOverrides): Promise<[string]>;

    ORDER(overrides?: CallOverrides): Promise<[string]>;

    PROTOCOL_CONFIGURATOR(overrides?: CallOverrides): Promise<[string]>;

    USER(overrides?: CallOverrides): Promise<[string]>;

    XP(overrides?: CallOverrides): Promise<[string]>;
  };

  ACL_ADMIN(overrides?: CallOverrides): Promise<string>;

  ACL_MANAGER(overrides?: CallOverrides): Promise<string>;

  DAT(overrides?: CallOverrides): Promise<string>;

  DATA_PROVIDER(overrides?: CallOverrides): Promise<string>;

  GIG(overrides?: CallOverrides): Promise<string>;

  ORDER(overrides?: CallOverrides): Promise<string>;

  PROTOCOL_CONFIGURATOR(overrides?: CallOverrides): Promise<string>;

  USER(overrides?: CallOverrides): Promise<string>;

  XP(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ACL_ADMIN(overrides?: CallOverrides): Promise<string>;

    ACL_MANAGER(overrides?: CallOverrides): Promise<string>;

    DAT(overrides?: CallOverrides): Promise<string>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<string>;

    GIG(overrides?: CallOverrides): Promise<string>;

    ORDER(overrides?: CallOverrides): Promise<string>;

    PROTOCOL_CONFIGURATOR(overrides?: CallOverrides): Promise<string>;

    USER(overrides?: CallOverrides): Promise<string>;

    XP(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ACL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    ACL_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    DAT(overrides?: CallOverrides): Promise<BigNumber>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    GIG(overrides?: CallOverrides): Promise<BigNumber>;

    ORDER(overrides?: CallOverrides): Promise<BigNumber>;

    PROTOCOL_CONFIGURATOR(overrides?: CallOverrides): Promise<BigNumber>;

    USER(overrides?: CallOverrides): Promise<BigNumber>;

    XP(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ACL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ACL_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GIG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROTOCOL_CONFIGURATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    USER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    XP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
