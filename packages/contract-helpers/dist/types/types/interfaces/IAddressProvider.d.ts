import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IAddressProviderInterface extends utils.Interface {
    functions: {
        "addContract(bytes32,address)": FunctionFragment;
        "fetchContract(bytes32,uint256)": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "getContract(bytes32,uint256)": FunctionFragment;
        "getContract(bytes32)": FunctionFragment;
        "getContractVersionCount(bytes32)": FunctionFragment;
        "removeContract(bytes32)": FunctionFragment;
        "upgradeContract(bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addContract" | "fetchContract(bytes32,uint256)" | "fetchContract(bytes32)" | "getContract(bytes32,uint256)" | "getContract(bytes32)" | "getContractVersionCount" | "removeContract" | "upgradeContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "addContract", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fetchContract(bytes32,uint256)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fetchContract(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getContract(bytes32,uint256)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getContract(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getContractVersionCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "removeContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "upgradeContract", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract(bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContract(bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContract(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractVersionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeContract", data: BytesLike): Result;
    events: {
        "ContractAdded(bytes32,address)": EventFragment;
        "ContractRemoved(bytes32,address)": EventFragment;
        "ContractUpgraded(bytes32,address,address)": EventFragment;
        "MarketplaceIdSet(string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketplaceIdSet"): EventFragment;
}
export interface ContractAddedEventObject {
    _name: string;
    _address: string;
}
export type ContractAddedEvent = TypedEvent<[
    string,
    string
], ContractAddedEventObject>;
export type ContractAddedEventFilter = TypedEventFilter<ContractAddedEvent>;
export interface ContractRemovedEventObject {
    _name: string;
    _address: string;
}
export type ContractRemovedEvent = TypedEvent<[
    string,
    string
], ContractRemovedEventObject>;
export type ContractRemovedEventFilter = TypedEventFilter<ContractRemovedEvent>;
export interface ContractUpgradedEventObject {
    _name: string;
    _oldAddress: string;
    _newAddress: string;
}
export type ContractUpgradedEvent = TypedEvent<[
    string,
    string,
    string
], ContractUpgradedEventObject>;
export type ContractUpgradedEventFilter = TypedEventFilter<ContractUpgradedEvent>;
export interface MarketplaceIdSetEventObject {
    oldMarketplaceId: string;
    newMarketplaceId: string;
}
export type MarketplaceIdSetEvent = TypedEvent<[
    string,
    string
], MarketplaceIdSetEventObject>;
export type MarketplaceIdSetEventFilter = TypedEventFilter<MarketplaceIdSetEvent>;
export interface IAddressProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAddressProviderInterface;
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
        addContract(_name: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "fetchContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        "fetchContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        "getContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        "getContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getContractVersionCount(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        removeContract(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeContract(_name: PromiseOrValue<BytesLike>, _newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addContract(_name: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "fetchContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    "fetchContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    "getContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    "getContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getContractVersionCount(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    removeContract(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeContract(_name: PromiseOrValue<BytesLike>, _newAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addContract(_name: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "fetchContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "fetchContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "getContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "getContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getContractVersionCount(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        upgradeContract(_name: PromiseOrValue<BytesLike>, _newAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractAdded(bytes32,address)"(_name?: null, _address?: null): ContractAddedEventFilter;
        ContractAdded(_name?: null, _address?: null): ContractAddedEventFilter;
        "ContractRemoved(bytes32,address)"(_name?: null, _address?: null): ContractRemovedEventFilter;
        ContractRemoved(_name?: null, _address?: null): ContractRemovedEventFilter;
        "ContractUpgraded(bytes32,address,address)"(_name?: null, _oldAddress?: null, _newAddress?: null): ContractUpgradedEventFilter;
        ContractUpgraded(_name?: null, _oldAddress?: null, _newAddress?: null): ContractUpgradedEventFilter;
        "MarketplaceIdSet(string,string)"(oldMarketplaceId?: PromiseOrValue<string> | null, newMarketplaceId?: PromiseOrValue<string> | null): MarketplaceIdSetEventFilter;
        MarketplaceIdSet(oldMarketplaceId?: PromiseOrValue<string> | null, newMarketplaceId?: PromiseOrValue<string> | null): MarketplaceIdSetEventFilter;
    };
    estimateGas: {
        addContract(_name: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "fetchContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "fetchContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "getContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getContractVersionCount(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeContract(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeContract(_name: PromiseOrValue<BytesLike>, _newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addContract(_name: PromiseOrValue<BytesLike>, _address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "fetchContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "fetchContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getContract(bytes32,uint256)"(_name: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getContract(bytes32)"(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractVersionCount(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeContract(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeContract(_name: PromiseOrValue<BytesLike>, _newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
