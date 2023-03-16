import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface RoundDataLogicInterface extends utils.Interface {
    functions: {
        "getMaxRange(uint256)": FunctionFragment;
        "getMinRange(uint256)": FunctionFragment;
        "getRanges(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMaxRange" | "getMinRange" | "getRanges"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMaxRange", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMinRange", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRanges", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getMaxRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRanges", data: BytesLike): Result;
    events: {};
}
export interface RoundDataLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RoundDataLogicInterface;
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
        getMaxRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRanges(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    };
    getMaxRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMinRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getRanges(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    callStatic: {
        getMaxRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRanges(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    };
    filters: {};
    estimateGas: {
        getMaxRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRanges(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getMaxRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinRange(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRanges(winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
