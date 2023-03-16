import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IProviderRegistryInterface extends utils.Interface {
    functions: {
        "getAddressProviderById(uint256)": FunctionFragment;
        "getAddressProviderIdByAddress(address)": FunctionFragment;
        "getAddressProvidersList()": FunctionFragment;
        "registerAddressProvider(address,uint256)": FunctionFragment;
        "unregisterAddressProvider(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAddressProviderById" | "getAddressProviderIdByAddress" | "getAddressProvidersList" | "registerAddressProvider" | "unregisterAddressProvider"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAddressProviderById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAddressProviderIdByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAddressProvidersList", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerAddressProvider", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unregisterAddressProvider", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getAddressProviderById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressProviderIdByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressProvidersList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAddressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterAddressProvider", data: BytesLike): Result;
    events: {
        "AddressProviderRegistered(address,uint256)": EventFragment;
        "AddressProviderUnregistered(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressProviderRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressProviderUnregistered"): EventFragment;
}
export interface AddressProviderRegisteredEventObject {
    addressProvider: string;
    id: BigNumber;
}
export type AddressProviderRegisteredEvent = TypedEvent<[
    string,
    BigNumber
], AddressProviderRegisteredEventObject>;
export type AddressProviderRegisteredEventFilter = TypedEventFilter<AddressProviderRegisteredEvent>;
export interface AddressProviderUnregisteredEventObject {
    addressProvider: string;
    id: BigNumber;
}
export type AddressProviderUnregisteredEvent = TypedEvent<[
    string,
    BigNumber
], AddressProviderUnregisteredEventObject>;
export type AddressProviderUnregisteredEventFilter = TypedEventFilter<AddressProviderUnregisteredEvent>;
export interface IProviderRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProviderRegistryInterface;
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
        getAddressProviderById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getAddressProviderIdByAddress(addressProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAddressProvidersList(overrides?: CallOverrides): Promise<[string[]]>;
        registerAddressProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterAddressProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAddressProviderById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getAddressProviderIdByAddress(addressProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getAddressProvidersList(overrides?: CallOverrides): Promise<string[]>;
    registerAddressProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterAddressProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddressProviderById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getAddressProviderIdByAddress(addressProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressProvidersList(overrides?: CallOverrides): Promise<string[]>;
        registerAddressProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unregisterAddressProvider(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressProviderRegistered(address,uint256)"(addressProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressProviderRegisteredEventFilter;
        AddressProviderRegistered(addressProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressProviderRegisteredEventFilter;
        "AddressProviderUnregistered(address,uint256)"(addressProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressProviderUnregisteredEventFilter;
        AddressProviderUnregistered(addressProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressProviderUnregisteredEventFilter;
    };
    estimateGas: {
        getAddressProviderById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressProviderIdByAddress(addressProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressProvidersList(overrides?: CallOverrides): Promise<BigNumber>;
        registerAddressProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterAddressProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddressProviderById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressProviderIdByAddress(addressProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressProvidersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAddressProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterAddressProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
