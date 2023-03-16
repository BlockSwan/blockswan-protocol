import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace DataTypes {
    type FeeParamsStruct = {
        flat: PromiseOrValue<BigNumberish>;
        percent: PromiseOrValue<BigNumberish>;
    };
    type FeeParamsStructOutput = [BigNumber, BigNumber] & {
        flat: BigNumber;
        percent: BigNumber;
    };
}
export interface InvoiceLogicInterface extends utils.Interface {
    functions: {
        "calcBuyerFee(uint256,(uint256,uint256))": FunctionFragment;
        "calcSellerFee(uint256,(uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcBuyerFee" | "calcSellerFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcBuyerFee", values: [PromiseOrValue<BigNumberish>, DataTypes.FeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "calcSellerFee", values: [PromiseOrValue<BigNumberish>, DataTypes.FeeParamsStruct]): string;
    decodeFunctionResult(functionFragment: "calcBuyerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcSellerFee", data: BytesLike): Result;
    events: {};
}
export interface InvoiceLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InvoiceLogicInterface;
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
        calcBuyerFee(price: PromiseOrValue<BigNumberish>, buyerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        calcSellerFee(price: PromiseOrValue<BigNumberish>, sellerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    calcBuyerFee(price: PromiseOrValue<BigNumberish>, buyerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    calcSellerFee(price: PromiseOrValue<BigNumberish>, sellerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        calcBuyerFee(price: PromiseOrValue<BigNumberish>, buyerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        calcSellerFee(price: PromiseOrValue<BigNumberish>, sellerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calcBuyerFee(price: PromiseOrValue<BigNumberish>, buyerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        calcSellerFee(price: PromiseOrValue<BigNumberish>, sellerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcBuyerFee(price: PromiseOrValue<BigNumberish>, buyerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcSellerFee(price: PromiseOrValue<BigNumberish>, sellerFees: DataTypes.FeeParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
