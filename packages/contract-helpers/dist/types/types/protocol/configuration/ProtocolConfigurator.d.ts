import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace DataTypes {
    type EntryParamsStruct = {
        currencyValue: PromiseOrValue<BigNumberish>;
        timeAdded: PromiseOrValue<BigNumberish>;
        xpEarned: PromiseOrValue<BigNumberish>;
        invitationEarned: PromiseOrValue<BigNumberish>;
    };
    type EntryParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        currencyValue: BigNumber;
        timeAdded: BigNumber;
        xpEarned: BigNumber;
        invitationEarned: number;
    };
    type DelayTimestampStruct = {
        selfRefund: PromiseOrValue<BigNumberish>;
        evidence: PromiseOrValue<BigNumberish>;
        commit: PromiseOrValue<BigNumberish>;
        vote: PromiseOrValue<BigNumberish>;
        appeal: PromiseOrValue<BigNumberish>;
    };
    type DelayTimestampStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        selfRefund: BigNumber;
        evidence: BigNumber;
        commit: BigNumber;
        vote: BigNumber;
        appeal: BigNumber;
    };
    type DisputeParamsStruct = {
        minStake: PromiseOrValue<BigNumberish>;
        alpha: PromiseOrValue<BigNumberish>;
        feePerJuror: PromiseOrValue<BigNumberish>;
        maxVotes: PromiseOrValue<BigNumberish>;
    };
    type DisputeParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minStake: BigNumber;
        alpha: BigNumber;
        feePerJuror: BigNumber;
        maxVotes: BigNumber;
    };
    type CreationParamsStruct = {
        currencyValue: PromiseOrValue<BigNumberish>;
        xpEarned: PromiseOrValue<BigNumberish>;
    };
    type CreationParamsStructOutput = [BigNumber, BigNumber] & {
        currencyValue: BigNumber;
        xpEarned: BigNumber;
    };
    type FeeParamsStruct = {
        flat: PromiseOrValue<BigNumberish>;
        percent: PromiseOrValue<BigNumberish>;
    };
    type FeeParamsStructOutput = [BigNumber, BigNumber] & {
        flat: BigNumber;
        percent: BigNumber;
    };
    type RetributionParamsStruct = {
        affiliate: PromiseOrValue<BigNumberish>;
        lvl0AffiliateShare: PromiseOrValue<BigNumberish>;
    };
    type RetributionParamsStructOutput = [BigNumber, BigNumber] & {
        affiliate: BigNumber;
        lvl0AffiliateShare: BigNumber;
    };
}
export interface ProtocolConfiguratorInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ADDRESS_PROVIDER()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "approve(address)": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "getBuyerEntryParams(uint256)": FunctionFragment;
        "getBuyerEntryParams()": FunctionFragment;
        "getDelayTimestamp(uint256)": FunctionFragment;
        "getDelayTimestamp()": FunctionFragment;
        "getDisputeParams(uint256)": FunctionFragment;
        "getDisputeParams()": FunctionFragment;
        "getGigCreationParams()": FunctionFragment;
        "getGigCreationParams(uint256)": FunctionFragment;
        "getOrderCreationParams()": FunctionFragment;
        "getOrderCreationParams(uint256)": FunctionFragment;
        "getRetributionParams(uint256)": FunctionFragment;
        "getRetributionParams()": FunctionFragment;
        "getSellerEntryParams()": FunctionFragment;
        "getSellerEntryParams(uint256)": FunctionFragment;
        "getSellerOrderFees()": FunctionFragment;
        "getSellerOrderFees(uint256)": FunctionFragment;
        "hasProtocolRole(bytes32,address)": FunctionFragment;
        "isGigOwner(uint256,uint256,address)": FunctionFragment;
        "isStillBuyer(address)": FunctionFragment;
        "isStillSeller(address)": FunctionFragment;
        "kill()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateBuyerEntryParams((uint256,uint256,uint256,uint8))": FunctionFragment;
        "updateDelayTimestamp((uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "updateDisputeParams((uint256,uint256,uint256,uint256))": FunctionFragment;
        "updateGigCreationParams((uint256,uint256))": FunctionFragment;
        "updateOrderCreationParams((uint256,uint256))": FunctionFragment;
        "updateRetributionParams((uint256,uint256))": FunctionFragment;
        "updateSellerEntryParams((uint256,uint256,uint256,uint8))": FunctionFragment;
        "updateSellerOrderFees((uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ADDRESS_PROVIDER" | "MAX_UINT" | "approve" | "fetchContract" | "getBuyerEntryParams(uint256)" | "getBuyerEntryParams()" | "getDelayTimestamp(uint256)" | "getDelayTimestamp()" | "getDisputeParams(uint256)" | "getDisputeParams()" | "getGigCreationParams()" | "getGigCreationParams(uint256)" | "getOrderCreationParams()" | "getOrderCreationParams(uint256)" | "getRetributionParams(uint256)" | "getRetributionParams()" | "getSellerEntryParams()" | "getSellerEntryParams(uint256)" | "getSellerOrderFees()" | "getSellerOrderFees(uint256)" | "hasProtocolRole" | "isGigOwner" | "isStillBuyer" | "isStillSeller" | "kill" | "owner" | "renounceOwnership" | "setProvider" | "transferOwnership" | "updateBuyerEntryParams" | "updateDelayTimestamp" | "updateDisputeParams" | "updateGigCreationParams" | "updateOrderCreationParams" | "updateRetributionParams" | "updateSellerEntryParams" | "updateSellerOrderFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fetchContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getBuyerEntryParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBuyerEntryParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDelayTimestamp(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDelayTimestamp()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDisputeParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDisputeParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGigCreationParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGigCreationParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOrderCreationParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOrderCreationParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRetributionParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRetributionParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSellerEntryParams()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSellerEntryParams(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSellerOrderFees()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSellerOrderFees(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "hasProtocolRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isGigOwner", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isStillBuyer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isStillSeller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "kill", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateBuyerEntryParams", values: [DataTypes.EntryParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateDelayTimestamp", values: [DataTypes.DelayTimestampStruct]): string;
    encodeFunctionData(functionFragment: "updateDisputeParams", values: [DataTypes.DisputeParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateGigCreationParams", values: [DataTypes.CreationParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateOrderCreationParams", values: [DataTypes.FeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateRetributionParams", values: [DataTypes.RetributionParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateSellerEntryParams", values: [DataTypes.EntryParamsStruct]): string;
    encodeFunctionData(functionFragment: "updateSellerOrderFees", values: [DataTypes.FeeParamsStruct]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBuyerEntryParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBuyerEntryParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelayTimestamp(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelayTimestamp()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigCreationParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigCreationParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderCreationParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderCreationParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRetributionParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRetributionParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellerEntryParams()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellerEntryParams(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellerOrderFees()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSellerOrderFees(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProtocolRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBuyerEntryParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelayTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDisputeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGigCreationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOrderCreationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRetributionParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSellerEntryParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSellerOrderFees", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProtocolConfigurator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProtocolConfiguratorInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        "getBuyerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.EntryParamsStructOutput]>;
        "getBuyerEntryParams()"(overrides?: CallOverrides): Promise<[DataTypes.EntryParamsStructOutput]>;
        "getDelayTimestamp(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.DelayTimestampStructOutput]>;
        "getDelayTimestamp()"(overrides?: CallOverrides): Promise<[DataTypes.DelayTimestampStructOutput]>;
        "getDisputeParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.DisputeParamsStructOutput]>;
        "getDisputeParams()"(overrides?: CallOverrides): Promise<[DataTypes.DisputeParamsStructOutput]>;
        "getGigCreationParams()"(overrides?: CallOverrides): Promise<[DataTypes.CreationParamsStructOutput]>;
        "getGigCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.CreationParamsStructOutput]>;
        "getOrderCreationParams()"(overrides?: CallOverrides): Promise<[DataTypes.FeeParamsStructOutput]>;
        "getOrderCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.FeeParamsStructOutput]>;
        "getRetributionParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.RetributionParamsStructOutput]>;
        "getRetributionParams()"(overrides?: CallOverrides): Promise<[DataTypes.RetributionParamsStructOutput]>;
        "getSellerEntryParams()"(overrides?: CallOverrides): Promise<[DataTypes.EntryParamsStructOutput]>;
        "getSellerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.EntryParamsStructOutput]>;
        "getSellerOrderFees()"(overrides?: CallOverrides): Promise<[DataTypes.FeeParamsStructOutput]>;
        "getSellerOrderFees(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.FeeParamsStructOutput]>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBuyerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDelayTimestamp(newParams: DataTypes.DelayTimestampStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDisputeParams(newParams: DataTypes.DisputeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGigCreationParams(newParams: DataTypes.CreationParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOrderCreationParams(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRetributionParams(newParams: DataTypes.RetributionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSellerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSellerOrderFees(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
    approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    "getBuyerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
    "getBuyerEntryParams()"(overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
    "getDelayTimestamp(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
    "getDelayTimestamp()"(overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
    "getDisputeParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.DisputeParamsStructOutput>;
    "getDisputeParams()"(overrides?: CallOverrides): Promise<DataTypes.DisputeParamsStructOutput>;
    "getGigCreationParams()"(overrides?: CallOverrides): Promise<DataTypes.CreationParamsStructOutput>;
    "getGigCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.CreationParamsStructOutput>;
    "getOrderCreationParams()"(overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
    "getOrderCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
    "getRetributionParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.RetributionParamsStructOutput>;
    "getRetributionParams()"(overrides?: CallOverrides): Promise<DataTypes.RetributionParamsStructOutput>;
    "getSellerEntryParams()"(overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
    "getSellerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
    "getSellerOrderFees()"(overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
    "getSellerOrderFees(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
    hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    kill(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBuyerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDelayTimestamp(newParams: DataTypes.DelayTimestampStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDisputeParams(newParams: DataTypes.DisputeParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGigCreationParams(newParams: DataTypes.CreationParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOrderCreationParams(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRetributionParams(newParams: DataTypes.RetributionParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSellerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSellerOrderFees(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "getBuyerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
        "getBuyerEntryParams()"(overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
        "getDelayTimestamp(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
        "getDelayTimestamp()"(overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
        "getDisputeParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.DisputeParamsStructOutput>;
        "getDisputeParams()"(overrides?: CallOverrides): Promise<DataTypes.DisputeParamsStructOutput>;
        "getGigCreationParams()"(overrides?: CallOverrides): Promise<DataTypes.CreationParamsStructOutput>;
        "getGigCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.CreationParamsStructOutput>;
        "getOrderCreationParams()"(overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
        "getOrderCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
        "getRetributionParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.RetributionParamsStructOutput>;
        "getRetributionParams()"(overrides?: CallOverrides): Promise<DataTypes.RetributionParamsStructOutput>;
        "getSellerEntryParams()"(overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
        "getSellerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EntryParamsStructOutput>;
        "getSellerOrderFees()"(overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
        "getSellerOrderFees(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.FeeParamsStructOutput>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        kill(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateBuyerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateDelayTimestamp(newParams: DataTypes.DelayTimestampStruct, overrides?: CallOverrides): Promise<void>;
        updateDisputeParams(newParams: DataTypes.DisputeParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateGigCreationParams(newParams: DataTypes.CreationParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateOrderCreationParams(newParams: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateRetributionParams(newParams: DataTypes.RetributionParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateSellerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: CallOverrides): Promise<void>;
        updateSellerOrderFees(newParams: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "getBuyerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getBuyerEntryParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getDelayTimestamp(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getDelayTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getDisputeParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getDisputeParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getGigCreationParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getGigCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getOrderCreationParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getOrderCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getRetributionParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getRetributionParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getSellerEntryParams()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getSellerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "getSellerOrderFees()"(overrides?: CallOverrides): Promise<BigNumber>;
        "getSellerOrderFees(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBuyerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDelayTimestamp(newParams: DataTypes.DelayTimestampStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDisputeParams(newParams: DataTypes.DisputeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGigCreationParams(newParams: DataTypes.CreationParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOrderCreationParams(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRetributionParams(newParams: DataTypes.RetributionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSellerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSellerOrderFees(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getBuyerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getBuyerEntryParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDelayTimestamp(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDelayTimestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDisputeParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDisputeParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getGigCreationParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getGigCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getOrderCreationParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getOrderCreationParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getRetributionParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getRetributionParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getSellerEntryParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getSellerEntryParams(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getSellerOrderFees()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getSellerOrderFees(uint256)"(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBuyerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDelayTimestamp(newParams: DataTypes.DelayTimestampStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDisputeParams(newParams: DataTypes.DisputeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGigCreationParams(newParams: DataTypes.CreationParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOrderCreationParams(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRetributionParams(newParams: DataTypes.RetributionParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSellerEntryParams(newParams: DataTypes.EntryParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSellerOrderFees(newParams: DataTypes.FeeParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}