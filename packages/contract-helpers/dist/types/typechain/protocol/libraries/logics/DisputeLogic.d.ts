import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface DisputeLogicInterface extends utils.Interface {
    functions: {
        "calcDisputeDelaysFromBlock(uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcDisputeDelaysFromBlock"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcDisputeDelaysFromBlock", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "calcDisputeDelaysFromBlock", data: BytesLike): Result;
    events: {};
}
export interface DisputeLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DisputeLogicInterface;
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
        calcDisputeDelaysFromBlock(evidenceUntil: PromiseOrValue<BigNumberish>, commitUntil: PromiseOrValue<BigNumberish>, voteUntil: PromiseOrValue<BigNumberish>, appealUntil: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            delays: BigNumber[];
        }>;
    };
    calcDisputeDelaysFromBlock(evidenceUntil: PromiseOrValue<BigNumberish>, commitUntil: PromiseOrValue<BigNumberish>, voteUntil: PromiseOrValue<BigNumberish>, appealUntil: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        calcDisputeDelaysFromBlock(evidenceUntil: PromiseOrValue<BigNumberish>, commitUntil: PromiseOrValue<BigNumberish>, voteUntil: PromiseOrValue<BigNumberish>, appealUntil: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        calcDisputeDelaysFromBlock(evidenceUntil: PromiseOrValue<BigNumberish>, commitUntil: PromiseOrValue<BigNumberish>, voteUntil: PromiseOrValue<BigNumberish>, appealUntil: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcDisputeDelaysFromBlock(evidenceUntil: PromiseOrValue<BigNumberish>, commitUntil: PromiseOrValue<BigNumberish>, voteUntil: PromiseOrValue<BigNumberish>, appealUntil: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
