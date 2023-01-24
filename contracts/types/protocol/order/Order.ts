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
} from "../../common";

export declare namespace InputTypes {
  export type CreateOrderInputStruct = {
    sellerId: PromiseOrValue<BigNumberish>;
    buyerId: PromiseOrValue<BigNumberish>;
    gigId: PromiseOrValue<BigNumberish>;
    packageId: PromiseOrValue<BigNumberish>;
    brief: PromiseOrValue<string>;
  };

  export type CreateOrderInputStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    sellerId: BigNumber;
    buyerId: BigNumber;
    gigId: BigNumber;
    packageId: BigNumber;
    brief: string;
  };
}

export declare namespace DataTypes {
  export type PackageStruct = {
    price: PromiseOrValue<BigNumberish>;
    timeDelivery: PromiseOrValue<BigNumberish>;
  };

  export type PackageStructOutput = [BigNumber, BigNumber] & {
    price: BigNumber;
    timeDelivery: BigNumber;
  };
}

export declare namespace OutputTypes {
  export type OrderOutputStruct = {
    metadata: PromiseOrValue<string>;
    brief: PromiseOrValue<string>;
    sellerFeesVersion: PromiseOrValue<BigNumberish>;
    toTrial: PromiseOrValue<BigNumberish>;
    toProceed: PromiseOrValue<BigNumberish>;
    orderId: PromiseOrValue<BigNumberish>;
    createdAt: PromiseOrValue<BigNumberish>;
    buyerId: PromiseOrValue<BigNumberish>;
    sellerId: PromiseOrValue<BigNumberish>;
    gigId: PromiseOrValue<BigNumberish>;
    reviewIds: PromiseOrValue<BigNumberish>[];
    package: DataTypes.PackageStruct;
    state: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
  };

  export type OrderOutputStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    DataTypes.PackageStructOutput,
    number,
    string
  ] & {
    metadata: string;
    brief: string;
    sellerFeesVersion: BigNumber;
    toTrial: BigNumber;
    toProceed: BigNumber;
    orderId: BigNumber;
    createdAt: BigNumber;
    buyerId: BigNumber;
    sellerId: BigNumber;
    gigId: BigNumber;
    reviewIds: BigNumber[];
    package: DataTypes.PackageStructOutput;
    state: number;
    currency: string;
  };
}

export interface OrderInterface extends utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "ADDRESS_PROVIDER()": FunctionFragment;
    "MAX_UINT()": FunctionFragment;
    "approve(address)": FunctionFragment;
    "autoRefund(uint256,uint256)": FunctionFragment;
    "confirmOrder(uint256,uint256)": FunctionFragment;
    "createOrder((uint256,uint256,uint256,uint256,string))": FunctionFragment;
    "fetchContract(bytes32)": FunctionFragment;
    "getInvitersByAddress(address,address)": FunctionFragment;
    "getInvitersById(uint256)": FunctionFragment;
    "getOrderById(uint256)": FunctionFragment;
    "getOrderCount()": FunctionFragment;
    "getOrderList()": FunctionFragment;
    "hasProtocolRole(bytes32,address)": FunctionFragment;
    "isCallerUser(address,uint256,address)": FunctionFragment;
    "isGigOwner(uint256,uint256,address)": FunctionFragment;
    "isStillBuyer(address)": FunctionFragment;
    "isStillSeller(address)": FunctionFragment;
    "kill()": FunctionFragment;
    "owner()": FunctionFragment;
    "payOrder(uint256,uint256)": FunctionFragment;
    "refundOrder(uint256,uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setProvider(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESSES_PROVIDER"
      | "ADDRESS_PROVIDER"
      | "MAX_UINT"
      | "approve"
      | "autoRefund"
      | "confirmOrder"
      | "createOrder"
      | "fetchContract"
      | "getInvitersByAddress"
      | "getInvitersById"
      | "getOrderById"
      | "getOrderCount"
      | "getOrderList"
      | "hasProtocolRole"
      | "isCallerUser"
      | "isGigOwner"
      | "isStillBuyer"
      | "isStillSeller"
      | "kill"
      | "owner"
      | "payOrder"
      | "refundOrder"
      | "renounceOwnership"
      | "setProvider"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ADDRESS_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "autoRefund",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmOrder",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [InputTypes.CreateOrderInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchContract",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInvitersByAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInvitersById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasProtocolRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isCallerUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isGigOwner",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isStillBuyer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isStillSeller",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payOrder",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "refundOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ADDRESS_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "autoRefund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "confirmOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvitersByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvitersById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasProtocolRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCallerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isStillBuyer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStillSeller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Order extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderInterface;

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
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    autoRefund(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      input: InputTypes.CreateOrderInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getInvitersByAddress(
      account: PromiseOrValue<string>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getInvitersById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getOrderById(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[OutputTypes.OrderOutputStructOutput]>;

    getOrderCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getOrderList(
      overrides?: CallOverrides
    ): Promise<[OutputTypes.OrderOutputStructOutput[]]>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payOrder(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    refundOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;

  MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  autoRefund(
    orderId: PromiseOrValue<BigNumberish>,
    buyerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmOrder(
    orderId: PromiseOrValue<BigNumberish>,
    sellerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    input: InputTypes.CreateOrderInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fetchContract(
    _name: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getInvitersByAddress(
    account: PromiseOrValue<string>,
    UserContract: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  getInvitersById(
    userId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  getOrderById(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<OutputTypes.OrderOutputStructOutput>;

  getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

  getOrderList(
    overrides?: CallOverrides
  ): Promise<OutputTypes.OrderOutputStructOutput[]>;

  hasProtocolRole(
    _role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCallerUser(
    caller: PromiseOrValue<string>,
    userId: PromiseOrValue<BigNumberish>,
    UserContract: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isGigOwner(
    userId: PromiseOrValue<BigNumberish>,
    gigId: PromiseOrValue<BigNumberish>,
    UserContract: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStillBuyer(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStillSeller(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kill(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  payOrder(
    orderId: PromiseOrValue<BigNumberish>,
    buyerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  refundOrder(
    orderId: PromiseOrValue<BigNumberish>,
    sellerId: PromiseOrValue<BigNumberish>,
    buyerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProvider(
    _providerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    autoRefund(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      input: InputTypes.CreateOrderInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getInvitersByAddress(
      account: PromiseOrValue<string>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getInvitersById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getOrderById(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<OutputTypes.OrderOutputStructOutput>;

    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

    getOrderList(
      overrides?: CallOverrides
    ): Promise<OutputTypes.OrderOutputStructOutput[]>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kill(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    payOrder(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    refundOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    autoRefund(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      input: InputTypes.CreateOrderInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvitersByAddress(
      account: PromiseOrValue<string>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvitersById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderById(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

    getOrderList(overrides?: CallOverrides): Promise<BigNumber>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payOrder(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    refundOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    autoRefund(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      input: InputTypes.CreateOrderInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvitersByAddress(
      account: PromiseOrValue<string>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvitersById(
      userId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderById(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrderList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payOrder(
      orderId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    refundOrder(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
