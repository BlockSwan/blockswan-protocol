import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface BSWANInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnedSupply()": FunctionFragment;
        "buy(address,uint256,uint256)": FunctionFragment;
        "buySlopeDen()": FunctionFragment;
        "buySlopeNum()": FunctionFragment;
        "buybackReserve()": FunctionFragment;
        "currency()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "estimateBuyValue(uint256)": FunctionFragment;
        "estimatePayValue(uint256)": FunctionFragment;
        "estimateSellValue(uint256)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "investmentReserveBasisPoints()": FunctionFragment;
        "minInvestment()": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "pay(address,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "revenueCommitmentBasisPoints()": FunctionFragment;
        "sell(address,uint256,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateConfig(address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "burn" | "burnedSupply" | "buy" | "buySlopeDen" | "buySlopeNum" | "buybackReserve" | "currency" | "decimals" | "decreaseAllowance" | "estimateBuyValue" | "estimatePayValue" | "estimateSellValue" | "increaseAllowance" | "investmentReserveBasisPoints" | "minInvestment" | "name" | "owner" | "paused" | "pay" | "renounceOwnership" | "revenueCommitmentBasisPoints" | "sell" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "updateConfig"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "burnedSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "buy", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "buySlopeDen", values?: undefined): string;
    encodeFunctionData(functionFragment: "buySlopeNum", values?: undefined): string;
    encodeFunctionData(functionFragment: "buybackReserve", values?: undefined): string;
    encodeFunctionData(functionFragment: "currency", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimateBuyValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimatePayValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimateSellValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "investmentReserveBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "minInvestment", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pay", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revenueCommitmentBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "sell", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateConfig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnedSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buySlopeDen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buySlopeNum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buybackReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currency", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateBuyValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimatePayValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSellValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "investmentReserveBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minInvestment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revenueCommitmentBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateConfig", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Burn(address,uint256)": EventFragment;
        "Buy(address,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Pay(address,address,uint256,uint256)": EventFragment;
        "Sell(address,address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "UpdateConfig(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sell"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateConfig"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BurnEventObject {
    _from: string;
    _bswanAmount: BigNumber;
}
export type BurnEvent = TypedEvent<[string, BigNumber], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface BuyEventObject {
    _from: string;
    _to: string;
    _currencyAmount: BigNumber;
    _bswanAmount: BigNumber;
}
export type BuyEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BuyEventObject>;
export type BuyEventFilter = TypedEventFilter<BuyEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PayEventObject {
    _from: string;
    _to: string;
    _currencyAmount: BigNumber;
    _bswanAmount: BigNumber;
}
export type PayEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], PayEventObject>;
export type PayEventFilter = TypedEventFilter<PayEvent>;
export interface SellEventObject {
    _from: string;
    _to: string;
    _currencyAmount: BigNumber;
    _bswanAmount: BigNumber;
}
export type SellEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SellEventObject>;
export type SellEventFilter = TypedEventFilter<SellEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpdateConfigEventObject {
    _owner: string;
    _revenueCommitmentBasisPoints: BigNumber;
    _minInvestment: BigNumber;
}
export type UpdateConfigEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UpdateConfigEventObject>;
export type UpdateConfigEventFilter = TypedEventFilter<UpdateConfigEvent>;
export interface BSWAN extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BSWANInterface;
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
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        buy(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, _minTokensBought: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        buySlopeDen(overrides?: CallOverrides): Promise<[BigNumber]>;
        buySlopeNum(overrides?: CallOverrides): Promise<[BigNumber]>;
        buybackReserve(overrides?: CallOverrides): Promise<[BigNumber]>;
        currency(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        estimateBuyValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimatePayValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateSellValue(_quantityToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        investmentReserveBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        minInvestment(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pay(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revenueCommitmentBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
        sell(_to: PromiseOrValue<string>, _quantityToSell: PromiseOrValue<BigNumberish>, _minCurrencyReturned: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateConfig(_newOwner: PromiseOrValue<string>, _revenueCommitmentBasisPoints: PromiseOrValue<BigNumberish>, _minInvestment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    buy(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, _minTokensBought: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    buySlopeDen(overrides?: CallOverrides): Promise<BigNumber>;
    buySlopeNum(overrides?: CallOverrides): Promise<BigNumber>;
    buybackReserve(overrides?: CallOverrides): Promise<BigNumber>;
    currency(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    estimateBuyValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimatePayValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateSellValue(_quantityToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    investmentReserveBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    minInvestment(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pay(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revenueCommitmentBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    sell(_to: PromiseOrValue<string>, _quantityToSell: PromiseOrValue<BigNumberish>, _minCurrencyReturned: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateConfig(_newOwner: PromiseOrValue<string>, _revenueCommitmentBasisPoints: PromiseOrValue<BigNumberish>, _minInvestment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        burnedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        buy(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, _minTokensBought: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        buySlopeDen(overrides?: CallOverrides): Promise<BigNumber>;
        buySlopeNum(overrides?: CallOverrides): Promise<BigNumber>;
        buybackReserve(overrides?: CallOverrides): Promise<BigNumber>;
        currency(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        estimateBuyValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimatePayValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSellValue(_quantityToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        investmentReserveBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        minInvestment(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pay(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        revenueCommitmentBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        sell(_to: PromiseOrValue<string>, _quantityToSell: PromiseOrValue<BigNumberish>, _minCurrencyReturned: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateConfig(_newOwner: PromiseOrValue<string>, _revenueCommitmentBasisPoints: PromiseOrValue<BigNumberish>, _minInvestment: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Burn(address,uint256)"(_from?: PromiseOrValue<string> | null, _bswanAmount?: null): BurnEventFilter;
        Burn(_from?: PromiseOrValue<string> | null, _bswanAmount?: null): BurnEventFilter;
        "Buy(address,address,uint256,uint256)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): BuyEventFilter;
        Buy(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): BuyEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Pay(address,address,uint256,uint256)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): PayEventFilter;
        Pay(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): PayEventFilter;
        "Sell(address,address,uint256,uint256)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): SellEventFilter;
        Sell(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _currencyAmount?: null, _bswanAmount?: null): SellEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "UpdateConfig(address,uint256,uint256)"(_owner?: PromiseOrValue<string> | null, _revenueCommitmentBasisPoints?: null, _minInvestment?: null): UpdateConfigEventFilter;
        UpdateConfig(_owner?: PromiseOrValue<string> | null, _revenueCommitmentBasisPoints?: null, _minInvestment?: null): UpdateConfigEventFilter;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        buy(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, _minTokensBought: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        buySlopeDen(overrides?: CallOverrides): Promise<BigNumber>;
        buySlopeNum(overrides?: CallOverrides): Promise<BigNumber>;
        buybackReserve(overrides?: CallOverrides): Promise<BigNumber>;
        currency(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        estimateBuyValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimatePayValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSellValue(_quantityToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        investmentReserveBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        minInvestment(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pay(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revenueCommitmentBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        sell(_to: PromiseOrValue<string>, _quantityToSell: PromiseOrValue<BigNumberish>, _minCurrencyReturned: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateConfig(_newOwner: PromiseOrValue<string>, _revenueCommitmentBasisPoints: PromiseOrValue<BigNumberish>, _minInvestment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buy(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, _minTokensBought: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        buySlopeDen(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buySlopeNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buybackReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currency(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        estimateBuyValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimatePayValue(_currencyValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSellValue(_quantityToSell: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        investmentReserveBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minInvestment(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pay(_to: PromiseOrValue<string>, _currencyValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revenueCommitmentBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sell(_to: PromiseOrValue<string>, _quantityToSell: PromiseOrValue<BigNumberish>, _minCurrencyReturned: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateConfig(_newOwner: PromiseOrValue<string>, _revenueCommitmentBasisPoints: PromiseOrValue<BigNumberish>, _minInvestment: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
