import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace DataTypes {
    type JurorStruct = {
        stakedTokens: PromiseOrValue<BigNumberish>;
        freezedTokens: PromiseOrValue<BigNumberish>;
    };
    type JurorStructOutput = [BigNumber, BigNumber] & {
        stakedTokens: BigNumber;
        freezedTokens: BigNumber;
    };
}
export interface JuryInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ADDRESS_PROVIDER()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "approve(address)": FunctionFragment;
        "depositStake(uint256)": FunctionFragment;
        "drawJurors(uint256)": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "freezeTokens(address[])": FunctionFragment;
        "hasProtocolRole(bytes32,address)": FunctionFragment;
        "isGigOwner(uint256,uint256,address)": FunctionFragment;
        "isStillBuyer(address)": FunctionFragment;
        "isStillSeller(address)": FunctionFragment;
        "kill()": FunctionFragment;
        "owner()": FunctionFragment;
        "readJuror(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewardJuror(uint256,address)": FunctionFragment;
        "setProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unfreezeTokens(uint256,address)": FunctionFragment;
        "withdrawStake(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ADDRESS_PROVIDER" | "MAX_UINT" | "approve" | "depositStake" | "drawJurors" | "fetchContract" | "freezeTokens" | "hasProtocolRole" | "isGigOwner" | "isStillBuyer" | "isStillSeller" | "kill" | "owner" | "readJuror" | "renounceOwnership" | "rewardJuror" | "setProvider" | "transferOwnership" | "unfreezeTokens" | "withdrawStake"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "drawJurors", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fetchContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "freezeTokens", values: [PromiseOrValue<string>[]]): string;
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
    encodeFunctionData(functionFragment: "readJuror", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardJuror", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unfreezeTokens", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "drawJurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProtocolRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfreezeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
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
export interface Jury extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: JuryInterface;
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
        depositStake(toStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            jurors: string[];
        }>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        readJuror(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.JurorStructOutput]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawStake(toWithdraw: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
    approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositStake(toStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    kill(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    readJuror(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.JurorStructOutput>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawStake(toWithdraw: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositStake(toStake: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        kill(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        readJuror(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.JurorStructOutput>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawStake(toWithdraw: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
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
        depositStake(toStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        readJuror(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawStake(toWithdraw: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
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
        depositStake(toStake: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readJuror(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStake(toWithdraw: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
