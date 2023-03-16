import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace Faucet {
    type TokensStruct = {
        native: PromiseOrValue<BigNumberish>;
        erc20: PromiseOrValue<BigNumberish>;
    };
    type TokensStructOutput = [BigNumber, BigNumber] & {
        native: BigNumber;
        erc20: BigNumber;
    };
}
export interface FaucetInterface extends utils.Interface {
    functions: {
        "claimERC20(address)": FunctionFragment;
        "claimNative()": FunctionFragment;
        "fundNative()": FunctionFragment;
        "getSettings()": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "lastERC20Claim(address,address)": FunctionFragment;
        "lastNativeClaim(address)": FunctionFragment;
        "mintAmounts()": FunctionFragment;
        "mintDelays()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setMintAmounts((uint256,uint256))": FunctionFragment;
        "setMintDelays((uint256,uint256))": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawAllERC20(address)": FunctionFragment;
        "withdrawAllNative()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimERC20" | "claimNative" | "fundNative" | "getSettings" | "isTrustedForwarder" | "lastERC20Claim" | "lastNativeClaim" | "mintAmounts" | "mintDelays" | "owner" | "renounceOwnership" | "setMintAmounts" | "setMintDelays" | "transferOwnership" | "withdrawAllERC20" | "withdrawAllNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimERC20", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastERC20Claim", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastNativeClaim", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintAmounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintDelays", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMintAmounts", values: [Faucet.TokensStruct]): string;
    encodeFunctionData(functionFragment: "setMintDelays", values: [Faucet.TokensStruct]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawAllERC20", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawAllNative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claimERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastERC20Claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastNativeClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintDelays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMintAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMintDelays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllNative", data: BytesLike): Result;
    events: {
        "ClaimERC20(address,address,uint256)": EventFragment;
        "ClaimNative(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimERC20"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimNative"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface ClaimERC20EventObject {
    token: string;
    user: string;
    amount: BigNumber;
}
export type ClaimERC20Event = TypedEvent<[
    string,
    string,
    BigNumber
], ClaimERC20EventObject>;
export type ClaimERC20EventFilter = TypedEventFilter<ClaimERC20Event>;
export interface ClaimNativeEventObject {
    user: string;
    amount: BigNumber;
}
export type ClaimNativeEvent = TypedEvent<[
    string,
    BigNumber
], ClaimNativeEventObject>;
export type ClaimNativeEventFilter = TypedEventFilter<ClaimNativeEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Faucet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FaucetInterface;
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
        claimERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getSettings(overrides?: CallOverrides): Promise<[Faucet.TokensStructOutput, Faucet.TokensStructOutput]>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastERC20Claim(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastNativeClaim(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mintAmounts(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            native: BigNumber;
            erc20: BigNumber;
        }>;
        mintDelays(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            native: BigNumber;
            erc20: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMintAmounts(_mintAmounts: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMintDelays(_mintDelays: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAllERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAllNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claimERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimNative(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundNative(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getSettings(overrides?: CallOverrides): Promise<[Faucet.TokensStructOutput, Faucet.TokensStructOutput]>;
    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastERC20Claim(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    lastNativeClaim(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    mintAmounts(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        native: BigNumber;
        erc20: BigNumber;
    }>;
    mintDelays(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        native: BigNumber;
        erc20: BigNumber;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMintAmounts(_mintAmounts: Faucet.TokensStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMintDelays(_mintDelays: Faucet.TokensStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAllERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAllNative(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimERC20(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        claimNative(overrides?: CallOverrides): Promise<void>;
        fundNative(overrides?: CallOverrides): Promise<void>;
        getSettings(overrides?: CallOverrides): Promise<[Faucet.TokensStructOutput, Faucet.TokensStructOutput]>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastERC20Claim(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastNativeClaim(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintAmounts(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            native: BigNumber;
            erc20: BigNumber;
        }>;
        mintDelays(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            native: BigNumber;
            erc20: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setMintAmounts(_mintAmounts: Faucet.TokensStruct, overrides?: CallOverrides): Promise<void>;
        setMintDelays(_mintDelays: Faucet.TokensStruct, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawAllERC20(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawAllNative(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimERC20(address,address,uint256)"(token?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, amount?: null): ClaimERC20EventFilter;
        ClaimERC20(token?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, amount?: null): ClaimERC20EventFilter;
        "ClaimNative(address,uint256)"(user?: PromiseOrValue<string> | null, amount?: null): ClaimNativeEventFilter;
        ClaimNative(user?: PromiseOrValue<string> | null, amount?: null): ClaimNativeEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        claimERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getSettings(overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastERC20Claim(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastNativeClaim(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintAmounts(overrides?: CallOverrides): Promise<BigNumber>;
        mintDelays(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMintAmounts(_mintAmounts: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMintDelays(_mintDelays: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAllERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAllNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getSettings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastERC20Claim(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastNativeClaim(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintAmounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintDelays(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMintAmounts(_mintAmounts: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMintDelays(_mintDelays: Faucet.TokensStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllERC20(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllNative(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
