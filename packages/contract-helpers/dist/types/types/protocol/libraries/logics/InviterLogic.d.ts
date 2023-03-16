import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace InputTypes {
    type CalcInvitersRewardsInputStruct = {
        currencyValue: PromiseOrValue<BigNumberish>;
        affiliateShare: PromiseOrValue<BigNumberish>;
        lvl0AffiliateShare: PromiseOrValue<BigNumberish>;
    };
    type CalcInvitersRewardsInputStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        currencyValue: BigNumber;
        affiliateShare: BigNumber;
        lvl0AffiliateShare: BigNumber;
    };
}
export declare namespace OutputTypes {
    type CalcInvitersRewardsOutputStruct = {
        inviter0Rewards: PromiseOrValue<BigNumberish>;
        inviter1Rewards: PromiseOrValue<BigNumberish>;
        remainingRewards: PromiseOrValue<BigNumberish>;
    };
    type CalcInvitersRewardsOutputStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        inviter0Rewards: BigNumber;
        inviter1Rewards: BigNumber;
        remainingRewards: BigNumber;
    };
}
export interface InviterLogicInterface extends utils.Interface {
    functions: {
        "calcInviterRewards(uint256,uint256)": FunctionFragment;
        "calcInvitersRewards((uint256,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcInviterRewards" | "calcInvitersRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcInviterRewards", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calcInvitersRewards", values: [InputTypes.CalcInvitersRewardsInputStruct]): string;
    decodeFunctionResult(functionFragment: "calcInviterRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcInvitersRewards", data: BytesLike): Result;
    events: {};
}
export interface InviterLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InviterLogicInterface;
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
        calcInviterRewards(currencyValue: PromiseOrValue<BigNumberish>, affiliateShare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        calcInvitersRewards(params: InputTypes.CalcInvitersRewardsInputStruct, overrides?: CallOverrides): Promise<[OutputTypes.CalcInvitersRewardsOutputStructOutput]>;
    };
    calcInviterRewards(currencyValue: PromiseOrValue<BigNumberish>, affiliateShare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    calcInvitersRewards(params: InputTypes.CalcInvitersRewardsInputStruct, overrides?: CallOverrides): Promise<OutputTypes.CalcInvitersRewardsOutputStructOutput>;
    callStatic: {
        calcInviterRewards(currencyValue: PromiseOrValue<BigNumberish>, affiliateShare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calcInvitersRewards(params: InputTypes.CalcInvitersRewardsInputStruct, overrides?: CallOverrides): Promise<OutputTypes.CalcInvitersRewardsOutputStructOutput>;
    };
    filters: {};
    estimateGas: {
        calcInviterRewards(currencyValue: PromiseOrValue<BigNumberish>, affiliateShare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        calcInvitersRewards(params: InputTypes.CalcInvitersRewardsInputStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcInviterRewards(currencyValue: PromiseOrValue<BigNumberish>, affiliateShare: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcInvitersRewards(params: InputTypes.CalcInvitersRewardsInputStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
