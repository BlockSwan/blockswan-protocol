import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type InvoiceStruct = {
        price: PromiseOrValue<BigNumberish>;
        buyerFees: PromiseOrValue<BigNumberish>;
        sellerFees: PromiseOrValue<BigNumberish>;
        createdAt: PromiseOrValue<BigNumberish>;
        currency: PromiseOrValue<string>;
    };
    type InvoiceStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        price: BigNumber;
        buyerFees: BigNumber;
        sellerFees: BigNumber;
        createdAt: BigNumber;
        currency: string;
    };
}
export declare namespace OutputTypes {
    type OrderOutputStruct = {
        metadata: PromiseOrValue<string>;
        brief: PromiseOrValue<string>;
        orderId: PromiseOrValue<BigNumberish>;
        buyerId: PromiseOrValue<BigNumberish>;
        sellerId: PromiseOrValue<BigNumberish>;
        gigId: PromiseOrValue<BigNumberish>;
        disputeId: PromiseOrValue<BigNumberish>;
        reviewIds: PromiseOrValue<BigNumberish>[];
        disputed: PromiseOrValue<boolean>;
        invoice: DataTypes.InvoiceStruct;
        state: PromiseOrValue<BigNumberish>;
    };
    type OrderOutputStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        boolean,
        DataTypes.InvoiceStructOutput,
        number
    ] & {
        metadata: string;
        brief: string;
        orderId: BigNumber;
        buyerId: BigNumber;
        sellerId: BigNumber;
        gigId: BigNumber;
        disputeId: BigNumber;
        reviewIds: BigNumber[];
        disputed: boolean;
        invoice: DataTypes.InvoiceStructOutput;
        state: number;
    };
}
export interface IOrderInterface extends utils.Interface {
    functions: {
        "getOrderById(uint256)": FunctionFragment;
        "rule(uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getOrderById" | "rule"): FunctionFragment;
    encodeFunctionData(functionFragment: "getOrderById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "rule", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getOrderById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rule", data: BytesLike): Result;
    events: {};
}
export interface IOrder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOrderInterface;
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
        getOrderById(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.OrderOutputStructOutput]>;
        rule(winningChoice: PromiseOrValue<BigNumberish>, orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getOrderById(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.OrderOutputStructOutput>;
    rule(winningChoice: PromiseOrValue<BigNumberish>, orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getOrderById(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.OrderOutputStructOutput>;
        rule(winningChoice: PromiseOrValue<BigNumberish>, orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getOrderById(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        rule(winningChoice: PromiseOrValue<BigNumberish>, orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getOrderById(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rule(winningChoice: PromiseOrValue<BigNumberish>, orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
