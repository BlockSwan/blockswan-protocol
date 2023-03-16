import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace DataTypes {
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
export interface VoteLogicInterface extends utils.Interface {
    functions: {
        "commit(address,uint256,uint256,string)": FunctionFragment;
        "isBetweenRange((address,bytes32,uint256,uint256,string,bool),uint256,uint256)": FunctionFragment;
        "isVoteCorrect((address,bytes32,uint256,uint256,string,bool),uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "commit" | "isBetweenRange" | "isVoteCorrect"): FunctionFragment;
    encodeFunctionData(functionFragment: "commit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isBetweenRange", values: [
        DataTypes.VoteStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isVoteCorrect", values: [DataTypes.VoteStruct, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBetweenRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVoteCorrect", data: BytesLike): Result;
    events: {};
}
export interface VoteLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VoteLogicInterface;
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
        commit(account: PromiseOrValue<string>, choice: PromiseOrValue<BigNumberish>, weight: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            DataTypes.VoteStructOutput
        ] & {
            newVote: DataTypes.VoteStructOutput;
        }>;
        isBetweenRange(vote: DataTypes.VoteStruct, minRange: PromiseOrValue<BigNumberish>, maxRange: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isVoteCorrect(vote: DataTypes.VoteStruct, winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    commit(account: PromiseOrValue<string>, choice: PromiseOrValue<BigNumberish>, weight: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.VoteStructOutput>;
    isBetweenRange(vote: DataTypes.VoteStruct, minRange: PromiseOrValue<BigNumberish>, maxRange: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isVoteCorrect(vote: DataTypes.VoteStruct, winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        commit(account: PromiseOrValue<string>, choice: PromiseOrValue<BigNumberish>, weight: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.VoteStructOutput>;
        isBetweenRange(vote: DataTypes.VoteStruct, minRange: PromiseOrValue<BigNumberish>, maxRange: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isVoteCorrect(vote: DataTypes.VoteStruct, winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        commit(account: PromiseOrValue<string>, choice: PromiseOrValue<BigNumberish>, weight: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isBetweenRange(vote: DataTypes.VoteStruct, minRange: PromiseOrValue<BigNumberish>, maxRange: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isVoteCorrect(vote: DataTypes.VoteStruct, winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        commit(account: PromiseOrValue<string>, choice: PromiseOrValue<BigNumberish>, weight: PromiseOrValue<BigNumberish>, salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBetweenRange(vote: DataTypes.VoteStruct, minRange: PromiseOrValue<BigNumberish>, maxRange: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isVoteCorrect(vote: DataTypes.VoteStruct, winningChoice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
