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

export interface ChoicesInterface extends utils.Interface {
  functions: {
    "EIGHTY_PERCENT()": FunctionFragment;
    "FIFTY_PERCENT()": FunctionFragment;
    "FORTY_PERCENT()": FunctionFragment;
    "NINETY_PERCENT()": FunctionFragment;
    "ONE_HUNDRED_PERCENT()": FunctionFragment;
    "PERCENTAGE_FACTOR()": FunctionFragment;
    "SEVENTY_PERCENT()": FunctionFragment;
    "SIXTY_PERCENT()": FunctionFragment;
    "TEN_PERCENT()": FunctionFragment;
    "THIRTY_PERCENT()": FunctionFragment;
    "TWENTY_PERCENT()": FunctionFragment;
    "ZERO_PERCENT()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "EIGHTY_PERCENT"
      | "FIFTY_PERCENT"
      | "FORTY_PERCENT"
      | "NINETY_PERCENT"
      | "ONE_HUNDRED_PERCENT"
      | "PERCENTAGE_FACTOR"
      | "SEVENTY_PERCENT"
      | "SIXTY_PERCENT"
      | "TEN_PERCENT"
      | "THIRTY_PERCENT"
      | "TWENTY_PERCENT"
      | "ZERO_PERCENT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "EIGHTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIFTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FORTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NINETY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_HUNDRED_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERCENTAGE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SEVENTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIXTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TEN_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "THIRTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TWENTY_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_PERCENT",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "EIGHTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FIFTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FORTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NINETY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_HUNDRED_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERCENTAGE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SEVENTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIXTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TEN_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "THIRTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TWENTY_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_PERCENT",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Choices extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChoicesInterface;

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
    EIGHTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    FIFTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    FORTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    NINETY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERCENTAGE_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    SEVENTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    SIXTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    TEN_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    THIRTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    TWENTY_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    ZERO_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  EIGHTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  FIFTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  FORTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  NINETY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  PERCENTAGE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  SEVENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  SIXTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  TEN_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  THIRTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  TWENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  ZERO_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    EIGHTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    FIFTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    FORTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    NINETY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SEVENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    SIXTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    TEN_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    THIRTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    TWENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    EIGHTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    FIFTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    FORTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    NINETY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    PERCENTAGE_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    SEVENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    SIXTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    TEN_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    THIRTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    TWENTY_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    EIGHTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIFTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FORTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NINETY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE_HUNDRED_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERCENTAGE_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SEVENTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SIXTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEN_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    THIRTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TWENTY_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
