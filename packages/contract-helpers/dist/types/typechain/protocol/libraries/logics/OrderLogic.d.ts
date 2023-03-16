import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface OrderLogicInterface extends utils.Interface {
    functions: {
        "calcRulingValues(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcRulingValues"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcRulingValues", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "calcRulingValues", data: BytesLike): Result;
    events: {};
}
export interface OrderLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OrderLogicInterface;
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
        calcRulingValues(winningChoice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            toProcecutor: BigNumber;
            toDefendant: BigNumber;
        }>;
    };
    calcRulingValues(winningChoice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        toProcecutor: BigNumber;
        toDefendant: BigNumber;
    }>;
    callStatic: {
        calcRulingValues(winningChoice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            toProcecutor: BigNumber;
            toDefendant: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        calcRulingValues(winningChoice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcRulingValues(winningChoice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
