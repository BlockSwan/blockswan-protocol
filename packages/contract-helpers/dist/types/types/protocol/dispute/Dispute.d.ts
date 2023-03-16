import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
    type DelayTimestampStruct = {
        selfRefund: PromiseOrValue<BigNumberish>;
        evidence: PromiseOrValue<BigNumberish>;
        commit: PromiseOrValue<BigNumberish>;
        vote: PromiseOrValue<BigNumberish>;
        appeal: PromiseOrValue<BigNumberish>;
    };
    type DelayTimestampStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        selfRefund: BigNumber;
        evidence: BigNumber;
        commit: BigNumber;
        vote: BigNumber;
        appeal: BigNumber;
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
export interface DisputeInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ADDRESS_PROVIDER()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "appeal(uint256)": FunctionFragment;
        "approve(address)": FunctionFragment;
        "claimAppealFeeRewards(uint256,uint256)": FunctionFragment;
        "claimAsJudge(uint256,uint256)": FunctionFragment;
        "claimRuling(uint256)": FunctionFragment;
        "commitVote(uint256,uint256,string)": FunctionFragment;
        "createDispute(uint256,uint256,uint256,address,(uint256,bytes32,string))": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "getDelayTimestamp(address)": FunctionFragment;
        "getDisputeById(uint256)": FunctionFragment;
        "getDisputeCount()": FunctionFragment;
        "getDisputeList()": FunctionFragment;
        "getOrderPrice(uint256)": FunctionFragment;
        "hasProtocolRole(bytes32,address)": FunctionFragment;
        "isCallerUser(address,uint256,address)": FunctionFragment;
        "isGigOwner(uint256,uint256,address)": FunctionFragment;
        "isStillBuyer(address)": FunctionFragment;
        "isStillSeller(address)": FunctionFragment;
        "kill()": FunctionFragment;
        "nextRound(uint256,(uint256,bytes32,string))": FunctionFragment;
        "owner()": FunctionFragment;
        "passPhase(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "revealVote(uint256,uint256,string,string)": FunctionFragment;
        "sendEvidence(uint256,address,(uint256,bytes32,string))": FunctionFragment;
        "setProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ADDRESS_PROVIDER" | "MAX_UINT" | "appeal" | "approve" | "claimAppealFeeRewards" | "claimAsJudge" | "claimRuling" | "commitVote" | "createDispute" | "fetchContract" | "getDelayTimestamp" | "getDisputeById" | "getDisputeCount" | "getDisputeList" | "getOrderPrice" | "hasProtocolRole" | "isCallerUser" | "isGigOwner" | "isStillBuyer" | "isStillSeller" | "kill" | "nextRound" | "owner" | "passPhase" | "renounceOwnership" | "revealVote" | "sendEvidence" | "setProvider" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "appeal", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimAppealFeeRewards", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimAsJudge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimRuling", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "commitVote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "createDispute", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        DataTypes.EvidenceStruct
    ]): string;
    encodeFunctionData(functionFragment: "fetchContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getDelayTimestamp", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDisputeById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDisputeCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDisputeList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOrderPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "hasProtocolRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isCallerUser", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isGigOwner", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isStillBuyer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isStillSeller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "kill", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextRound", values: [PromiseOrValue<BigNumberish>, DataTypes.EvidenceStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "passPhase", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revealVote", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "sendEvidence", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        DataTypes.EvidenceStruct
    ]): string;
    encodeFunctionData(functionFragment: "setProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAppealFeeRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAsJudge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRuling", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDispute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelayTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisputeList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProtocolRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCallerUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "passPhase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revealVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendEvidence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Dispute extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DisputeInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;
        appeal(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimAppealFeeRewards(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimAsJudge(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRuling(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        commitVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getDelayTimestamp(protocolConfigurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            DataTypes.DelayTimestampStructOutput
        ] & {
            delayTimestamp: DataTypes.DelayTimestampStructOutput;
        }>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.DisputeOutputStructOutput]>;
        getDisputeCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDisputeList(overrides?: CallOverrides): Promise<[OutputTypes.DisputeOutputStructOutput[]]>;
        getOrderPrice(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            price: BigNumber;
        }>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isCallerUser(caller: PromiseOrValue<string>, userId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isAddressMatchingId: boolean;
        }>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nextRound(disputeId: PromiseOrValue<BigNumberish>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        passPhase(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revealVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, justification: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendEvidence(disputeId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
    appeal(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimAppealFeeRewards(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimAsJudge(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRuling(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    commitVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getDelayTimestamp(protocolConfigurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
    getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput>;
    getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;
    getDisputeList(overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput[]>;
    getOrderPrice(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isCallerUser(caller: PromiseOrValue<string>, userId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    kill(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nextRound(disputeId: PromiseOrValue<BigNumberish>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    passPhase(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revealVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, justification: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendEvidence(disputeId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        appeal(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        approve(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        claimAppealFeeRewards(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimAsJudge(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimRuling(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        commitVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: CallOverrides): Promise<BigNumber>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getDelayTimestamp(protocolConfigurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.DelayTimestampStructOutput>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput>;
        getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeList(overrides?: CallOverrides): Promise<OutputTypes.DisputeOutputStructOutput[]>;
        getOrderPrice(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isCallerUser(caller: PromiseOrValue<string>, userId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        kill(overrides?: CallOverrides): Promise<void>;
        nextRound(disputeId: PromiseOrValue<BigNumberish>, evidence: DataTypes.EvidenceStruct, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        passPhase(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        revealVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, justification: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sendEvidence(disputeId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: CallOverrides): Promise<void>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        appeal(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimAppealFeeRewards(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimAsJudge(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRuling(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        commitVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getDelayTimestamp(protocolConfigurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDisputeList(overrides?: CallOverrides): Promise<BigNumber>;
        getOrderPrice(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isCallerUser(caller: PromiseOrValue<string>, userId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nextRound(disputeId: PromiseOrValue<BigNumberish>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        passPhase(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revealVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, justification: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendEvidence(disputeId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        appeal(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimAppealFeeRewards(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimAsJudge(disputeId: PromiseOrValue<BigNumberish>, roundId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRuling(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        commitVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createDispute(orderId: PromiseOrValue<BigNumberish>, procecutorId: PromiseOrValue<BigNumberish>, defendantId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelayTimestamp(protocolConfigurator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisputeById(disputeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisputeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisputeList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderPrice(orderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCallerUser(caller: PromiseOrValue<string>, userId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nextRound(disputeId: PromiseOrValue<BigNumberish>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        passPhase(disputeId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revealVote(disputeId: PromiseOrValue<BigNumberish>, choice: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, justification: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendEvidence(disputeId: PromiseOrValue<BigNumberish>, caller: PromiseOrValue<string>, evidence: DataTypes.EvidenceStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
