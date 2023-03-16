import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type PackageStruct = {
        price: PromiseOrValue<BigNumberish>;
        timeDelivery: PromiseOrValue<BigNumberish>;
    };
    type PackageStructOutput = [BigNumber, BigNumber] & {
        price: BigNumber;
        timeDelivery: BigNumber;
    };
}
export declare namespace OutputTypes {
    type GigOutputStruct = {
        gigId: PromiseOrValue<BigNumberish>;
        metadata: PromiseOrValue<string>;
        createdAt: PromiseOrValue<BigNumberish>;
        successSell: PromiseOrValue<BigNumberish>;
        failedSell: PromiseOrValue<BigNumberish>;
        reviewIds: PromiseOrValue<BigNumberish>[];
        orderIds: PromiseOrValue<BigNumberish>[];
        packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ];
    };
    type GigOutputStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        [
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput
        ]
    ] & {
        gigId: BigNumber;
        metadata: string;
        createdAt: BigNumber;
        successSell: BigNumber;
        failedSell: BigNumber;
        reviewIds: BigNumber[];
        orderIds: BigNumber[];
        packages: [
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput
        ];
    };
}
export interface IGigInterface extends utils.Interface {
    functions: {
        "createGig(string,tuple[3])": FunctionFragment;
        "createOrder(uint256,uint256,uint256)": FunctionFragment;
        "getGigById(uint256)": FunctionFragment;
        "getGigList()": FunctionFragment;
        "getGigsCount()": FunctionFragment;
        "getInvitersById(uint256)": FunctionFragment;
        "getInvitersByUserAddress(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createGig" | "createOrder" | "getGigById" | "getGigList" | "getGigsCount" | "getInvitersById" | "getInvitersByUserAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "createGig", values: [
        PromiseOrValue<string>,
        [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ]
    ]): string;
    encodeFunctionData(functionFragment: "createOrder", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getGigById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGigList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGigsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInvitersById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getInvitersByUserAddress", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "createGig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersByUserAddress", data: BytesLike): Result;
    events: {
        "GigAdded(uint256,uint256,string,tuple[3])": EventFragment;
        "GigEdited(uint256,uint256,string,tuple[3])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GigAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GigEdited"): EventFragment;
}
export interface GigAddedEventObject {
    gigId: BigNumber;
    userId: BigNumber;
    metadata: string;
    packages: [
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput
    ];
}
export type GigAddedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    [
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput
    ]
], GigAddedEventObject>;
export type GigAddedEventFilter = TypedEventFilter<GigAddedEvent>;
export interface GigEditedEventObject {
    gigId: BigNumber;
    userId: BigNumber;
    metadata: string;
    packages: [
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput
    ];
}
export type GigEditedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    [
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput,
        DataTypes.PackageStructOutput
    ]
], GigEditedEventObject>;
export type GigEditedEventFilter = TypedEventFilter<GigEditedEvent>;
export interface IGig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGigInterface;
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
        createGig(metadata: PromiseOrValue<string>, packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.GigOutputStructOutput]>;
        getGigList(overrides?: CallOverrides): Promise<[OutputTypes.GigOutputStructOutput[]]>;
        getGigsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
    };
    createGig(metadata: PromiseOrValue<string>, packages: [
        DataTypes.PackageStruct,
        DataTypes.PackageStruct,
        DataTypes.PackageStruct
    ], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
    getGigList(overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput[]>;
    getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
    getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
    callStatic: {
        createGig(metadata: PromiseOrValue<string>, packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ], overrides?: CallOverrides): Promise<void>;
        createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string, DataTypes.PackageStructOutput]>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
        getGigList(overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput[]>;
        getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
    };
    filters: {
        "GigAdded(uint256,uint256,string,tuple[3])"(gigId?: PromiseOrValue<BigNumberish> | null, userId?: PromiseOrValue<BigNumberish> | null, metadata?: null, packages?: null): GigAddedEventFilter;
        GigAdded(gigId?: PromiseOrValue<BigNumberish> | null, userId?: PromiseOrValue<BigNumberish> | null, metadata?: null, packages?: null): GigAddedEventFilter;
        "GigEdited(uint256,uint256,string,tuple[3])"(gigId?: PromiseOrValue<BigNumberish> | null, userId?: PromiseOrValue<BigNumberish> | null, metadata?: null, packages?: null): GigEditedEventFilter;
        GigEdited(gigId?: PromiseOrValue<BigNumberish> | null, userId?: PromiseOrValue<BigNumberish> | null, metadata?: null, packages?: null): GigEditedEventFilter;
    };
    estimateGas: {
        createGig(metadata: PromiseOrValue<string>, packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGigList(overrides?: CallOverrides): Promise<BigNumber>;
        getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createGig(metadata: PromiseOrValue<string>, packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGigList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGigsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
