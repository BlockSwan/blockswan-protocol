import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace DataTypes {
    type EvidenceStruct = {
        userId: PromiseOrValue<BigNumberish>;
        role: PromiseOrValue<BytesLike>;
        metadata: PromiseOrValue<string>;
    };
    type EvidenceStructOutput = [BigNumber, string, string] & {
        userId: BigNumber;
        role: string;
        metadata: string;
    };
    type PackageStruct = {
        price: PromiseOrValue<BigNumberish>;
        timeDelivery: PromiseOrValue<BigNumberish>;
    };
    type PackageStructOutput = [BigNumber, BigNumber] & {
        price: BigNumber;
        timeDelivery: BigNumber;
    };
    type VoteStruct = {
        account: PromiseOrValue<string>;
        commit: PromiseOrValue<BytesLike>;
        choice: PromiseOrValue<BigNumberish>;
        weight: PromiseOrValue<BigNumberish>;
        justification: PromiseOrValue<string>;
        hasVoted: PromiseOrValue<boolean>;
    };
    type VoteStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        boolean
    ] & {
        account: string;
        commit: string;
        choice: BigNumber;
        weight: BigNumber;
        justification: string;
        hasVoted: boolean;
    };
}
export declare namespace OutputTypes {
    type GigOutputStruct = {
        gigId: PromiseOrValue<BigNumberish>;
        metadata: PromiseOrValue<string>;
        createdAt: PromiseOrValue<BigNumberish>;
        successSell: PromiseOrValue<BigNumberish>;
        failedSell: PromiseOrValue<BigNumberish>;
        reviewIds: PromiseOrValue<BigNumberish>[];
        orderIds: PromiseOrValue<BigNumberish>[];
        packages: [
            DataTypes.PackageStruct,
            DataTypes.PackageStruct,
            DataTypes.PackageStruct
        ];
    };
    type GigOutputStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        [
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput
        ]
    ] & {
        gigId: BigNumber;
        metadata: string;
        createdAt: BigNumber;
        successSell: BigNumber;
        failedSell: BigNumber;
        reviewIds: BigNumber[];
        orderIds: BigNumber[];
        packages: [
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput,
            DataTypes.PackageStructOutput
        ];
    };
    type RoundOutputStruct = {
        roundId: PromiseOrValue<BigNumberish>;
        procecutorId: PromiseOrValue<BigNumberish>;
        defendantId: PromiseOrValue<BigNumberish>;
        appealFeeRewards: PromiseOrValue<BigNumberish>;
        tokensAtStakePerJuror: PromiseOrValue<BigNumberish>;
        totalFeesForJurors: PromiseOrValue<BigNumberish>;
        maxVotes: PromiseOrValue<BigNumberish>;
        penalties: PromiseOrValue<BigNumberish>;
        winningChoice: PromiseOrValue<BigNumberish>;
        totalRepartitions: PromiseOrValue<BigNumberish>;
        totalVoted: PromiseOrValue<BigNumberish>;
        totalCommited: PromiseOrValue<BigNumberish>;
        counts: PromiseOrValue<BigNumberish>[];
        evidenceSubmitters: PromiseOrValue<BigNumberish>[];
        appealedBy: PromiseOrValue<BigNumberish>;
        votes: DataTypes.VoteStruct[];
        evidences: DataTypes.EvidenceStruct[];
        drawnJurors: PromiseOrValue<string>[];
        judgesClaimed: PromiseOrValue<string>[];
        closed: PromiseOrValue<boolean>;
    };
    type RoundOutputStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        BigNumber[],
        BigNumber,
        DataTypes.VoteStructOutput[],
        DataTypes.EvidenceStructOutput[],
        string[],
        string[],
        boolean
    ] & {
        roundId: BigNumber;
        procecutorId: BigNumber;
        defendantId: BigNumber;
        appealFeeRewards: BigNumber;
        tokensAtStakePerJuror: BigNumber;
        totalFeesForJurors: BigNumber;
        maxVotes: BigNumber;
        penalties: BigNumber;
        winningChoice: BigNumber;
        totalRepartitions: BigNumber;
        totalVoted: BigNumber;
        totalCommited: BigNumber;
        counts: BigNumber[];
        evidenceSubmitters: BigNumber[];
        appealedBy: BigNumber;
        votes: DataTypes.VoteStructOutput[];
        evidences: DataTypes.EvidenceStructOutput[];
        drawnJurors: string[];
        judgesClaimed: string[];
        closed: boolean;
    };
    type DisputeOutputStruct = {
        createdAt: PromiseOrValue<BigNumberish>;
        disputeId: PromiseOrValue<BigNumberish>;
        orderId: PromiseOrValue<BigNumberish>;
        ruling: PromiseOrValue<BigNumberish>;
        ruledAt: PromiseOrValue<BigNumberish>;
        timestamps: PromiseOrValue<BigNumberish>[];
        state: PromiseOrValue<BigNumberish>;
        rounds: OutputTypes.RoundOutputStruct[];
    };
    type DisputeOutputStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber[],
        number,
        OutputTypes.RoundOutputStructOutput[]
    ] & {
        createdAt: BigNumber;
        disputeId: BigNumber;
        orderId: BigNumber;
        ruling: BigNumber;
        ruledAt: BigNumber;
        timestamps: BigNumber[];
        state: number;
        rounds: OutputTypes.RoundOutputStructOutput[];
    };
}
export interface IDisputeInterface extends utils.Interface {
    functions: {
        "createDispute(uint256,uint256,uint256,address,(uint256,bytes32,string))": FunctionFragment;
        "getDisputeById(uint256)": FunctionFragment;
        "getDisputeList()": FunctionFragment;
        "getDisputesCount()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createDispute" | "getDisputeById" | "getDisputeList" | "getDisputesCount"): FunctionFragment;
    encodeFunctionData(functionFragment: "createDispute", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        DataTypes.EvidenceStruct
    ]): string;
    encodeFunctionData(functionFragment: "getDisputeById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDisputeList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDisputesCount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputesCount", data: BytesLike): Result;
    events: {
        "NewDispute(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewDispute"): EventFragment;
}
export interface NewDisputeEventObject {
    orderId: BigNumber;
    disputeId: BigNumber;
}
export type NewDisputeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewDisputeEventObject>;
export type NewDisputeEventFilter = TypedEventFilter<NewDisputeEvent>;
export interface IDispute extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDisputeInterface;
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
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.GigOutputStructOutput]>;
        getDisputeList(overrides?: CallOverrides): Promise<[OutputTypes.DisputeOutputStructOutput[]]>;
        getDisputesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
    getDisputeList(overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput[]>;
    getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.GigOutputStructOutput>;
        getDisputeList(overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput[]>;
        getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewDispute(uint256,uint256)"(orderId?: PromiseOrValue<BigNumberish> | null, disputeId?: PromiseOrValue<BigNumberish> | null): NewDisputeEventFilter;
        NewDispute(orderId?: PromiseOrValue<BigNumberish> | null, disputeId?: PromiseOrValue<BigNumberish> | null): NewDisputeEventFilter;
    };
    estimateGas: {
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeList(overrides?: CallOverrides): Promise<BigNumber>;
        getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisputeList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisputesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
