import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export interface GigInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ADDRESS_PROVIDER()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "approve(address)": FunctionFragment;
        "createGig(string,tuple[3])": FunctionFragment;
        "createOrder(uint256,uint256,uint256)": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "getGigById(uint256)": FunctionFragment;
        "getGigList()": FunctionFragment;
        "getGigsCount()": FunctionFragment;
        "getInvitersAddresses(address)": FunctionFragment;
        "hasProtocolRole(bytes32,address)": FunctionFragment;
        "isGigOwner(uint256,uint256,address)": FunctionFragment;
        "isStillBuyer(address)": FunctionFragment;
        "isStillSeller(address)": FunctionFragment;
        "kill()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ADDRESS_PROVIDER" | "MAX_UINT" | "approve" | "createGig" | "createOrder" | "fetchContract" | "getGigById" | "getGigList" | "getGigsCount" | "getInvitersAddresses" | "hasProtocolRole" | "isGigOwner" | "isStillBuyer" | "isStillSeller" | "kill" | "owner" | "renounceOwnership" | "setProvider" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "fetchContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getGigById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getGigList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGigsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInvitersAddresses", values: [PromiseOrValue<string>]): string;
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
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGigsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProtocolRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
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
export interface Gig extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GigInterface;
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
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.GigOutputStructOutput]>;
        getGigList(overrides?: CallOverrides): Promise<[OutputTypes.GigOutputStructOutput[]]>;
        getGigsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInvitersAddresses(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
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
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
    approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
    getGigList(overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput[]>;
    getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getInvitersAddresses(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
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
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        createGig(metadata: PromiseOrValue<string>, packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ], overrides?: CallOverrides): Promise<void>;
        createOrder(newOrderId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, packageId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, string, DataTypes.PackageStructOutput]>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
        getGigList(overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput[]>;
        getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersAddresses(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        kill(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
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
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getGigList(overrides?: CallOverrides): Promise<BigNumber>;
        getGigsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersAddresses(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
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
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
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
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGigById(gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGigList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGigsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersAddresses(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
    };
}
