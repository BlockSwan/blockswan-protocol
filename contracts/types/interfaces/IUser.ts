/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace DataTypes {
  export type UserStruct = {
    metadata: PromiseOrValue<string>;
    inviterId: PromiseOrValue<BigNumberish>;
  };

  export type UserStructOutput = [string, BigNumber] & {
    metadata: string;
    inviterId: BigNumber;
  };
}

export interface IUserInterface extends utils.Interface {
  functions: {
    "createUser(string,uint256)": FunctionFragment;
    "getAddressById(uint256)": FunctionFragment;
    "getUserByAddress(address)": FunctionFragment;
    "getUserById(uint256)": FunctionFragment;
    "getUserList()": FunctionFragment;
    "getUsersCount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createUser"
      | "getAddressById"
      | "getUserByAddress"
      | "getUserById"
      | "getUserList"
      | "getUsersCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createUser",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUsersCount",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "createUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddressById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUsersCount",
    data: BytesLike
  ): Result;

  events: {
    "UserAdded(uint256,address,tuple)": EventFragment;
    "UserEdited(uint256,address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserEdited"): EventFragment;
}

export interface UserAddedEventObject {
  userId: BigNumber;
  userAddress: string;
  userData: DataTypes.UserStructOutput;
}
export type UserAddedEvent = TypedEvent<
  [BigNumber, string, DataTypes.UserStructOutput],
  UserAddedEventObject
>;

export type UserAddedEventFilter = TypedEventFilter<UserAddedEvent>;

export interface UserEditedEventObject {
  userId: BigNumber;
  userAddress: string;
  userData: DataTypes.UserStructOutput;
}
export type UserEditedEvent = TypedEvent<
  [BigNumber, string, DataTypes.UserStructOutput],
  UserEditedEventObject
>;

export type UserEditedEventFilter = TypedEventFilter<UserEditedEvent>;

export interface IUser extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUserInterface;

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
    createUser(
      metadata: PromiseOrValue<string>,
      inviterId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddressById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserByAddress(
      pubKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[DataTypes.UserStructOutput]>;

    getUserById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[DataTypes.UserStructOutput]>;

    getUserList(
      overrides?: CallOverrides
    ): Promise<[DataTypes.UserStructOutput[]]>;

    getUsersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  createUser(
    metadata: PromiseOrValue<string>,
    inviterId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddressById(
    userId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserByAddress(
    pubKey: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<DataTypes.UserStructOutput>;

  getUserById(
    userId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<DataTypes.UserStructOutput>;

  getUserList(overrides?: CallOverrides): Promise<DataTypes.UserStructOutput[]>;

  getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createUser(
      metadata: PromiseOrValue<string>,
      inviterId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddressById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserByAddress(
      pubKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<DataTypes.UserStructOutput>;

    getUserById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<DataTypes.UserStructOutput>;

    getUserList(
      overrides?: CallOverrides
    ): Promise<DataTypes.UserStructOutput[]>;

    getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "UserAdded(uint256,address,tuple)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      userAddress?: PromiseOrValue<string> | null,
      userData?: null
    ): UserAddedEventFilter;
    UserAdded(
      userId?: PromiseOrValue<BigNumberish> | null,
      userAddress?: PromiseOrValue<string> | null,
      userData?: null
    ): UserAddedEventFilter;

    "UserEdited(uint256,address,tuple)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      userAddress?: PromiseOrValue<string> | null,
      userData?: null
    ): UserEditedEventFilter;
    UserEdited(
      userId?: PromiseOrValue<BigNumberish> | null,
      userAddress?: PromiseOrValue<string> | null,
      userData?: null
    ): UserEditedEventFilter;
  };

  estimateGas: {
    createUser(
      metadata: PromiseOrValue<string>,
      inviterId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddressById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserByAddress(
      pubKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserList(overrides?: CallOverrides): Promise<BigNumber>;

    getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createUser(
      metadata: PromiseOrValue<string>,
      inviterId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddressById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserByAddress(
      pubKey: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUsersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}