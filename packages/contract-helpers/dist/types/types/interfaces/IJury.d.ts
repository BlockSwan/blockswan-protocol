import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IJuryInterface extends utils.Interface {
    functions: {
        "drawJurors(uint256)": FunctionFragment;
        "freezeTokens(address[])": FunctionFragment;
        "rewardJuror(uint256,address)": FunctionFragment;
        "unfreezeTokens(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "drawJurors" | "freezeTokens" | "rewardJuror" | "unfreezeTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "drawJurors", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "freezeTokens", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "rewardJuror", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unfreezeTokens", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "drawJurors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardJuror", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfreezeTokens", data: BytesLike): Result;
    events: {};
}
export interface IJury extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IJuryInterface;
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
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            jurors: string[];
        }>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        drawJurors(numberOfJurors: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freezeTokens(accounts: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rewardJuror(amount: PromiseOrValue<BigNumberish>, juror: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unfreezeTokens(amount: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
