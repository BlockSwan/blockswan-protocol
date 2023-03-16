import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface RoundLogicInterface extends utils.Interface {
    functions: {
        "calcEarnedFromDisputeFees(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcEarnedFromDisputeFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcEarnedFromDisputeFees", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "calcEarnedFromDisputeFees", data: BytesLike): Result;
    events: {};
}
export interface RoundLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RoundLogicInterface;
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
        calcEarnedFromDisputeFees(jurorWeight: PromiseOrValue<BigNumberish>, weightOfCorrectVotes: PromiseOrValue<BigNumberish>, disputePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    calcEarnedFromDisputeFees(jurorWeight: PromiseOrValue<BigNumberish>, weightOfCorrectVotes: PromiseOrValue<BigNumberish>, disputePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        calcEarnedFromDisputeFees(jurorWeight: PromiseOrValue<BigNumberish>, weightOfCorrectVotes: PromiseOrValue<BigNumberish>, disputePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calcEarnedFromDisputeFees(jurorWeight: PromiseOrValue<BigNumberish>, weightOfCorrectVotes: PromiseOrValue<BigNumberish>, disputePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcEarnedFromDisputeFees(jurorWeight: PromiseOrValue<BigNumberish>, weightOfCorrectVotes: PromiseOrValue<BigNumberish>, disputePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
