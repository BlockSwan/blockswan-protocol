import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace InputTypes {
    type CreateUserInputStruct = {
        newId: PromiseOrValue<BigNumberish>;
        metadata: PromiseOrValue<string>;
        inviterId: PromiseOrValue<BigNumberish>;
        wallet: PromiseOrValue<string>;
    };
    type CreateUserInputStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        newId: BigNumber;
        metadata: string;
        inviterId: BigNumber;
        wallet: string;
    };
}
export declare namespace OutputTypes {
    type UserOutputStruct = {
        metadata: PromiseOrValue<string>;
        inviterId: PromiseOrValue<BigNumberish>;
        buyerUntil: PromiseOrValue<BigNumberish>;
        buyerInvites: PromiseOrValue<BigNumberish>;
        sellerUntil: PromiseOrValue<BigNumberish>;
        sellerInvites: PromiseOrValue<BigNumberish>;
        userId: PromiseOrValue<BigNumberish>;
        wallet: PromiseOrValue<string>;
        gigIds: PromiseOrValue<BigNumberish>[];
        offerIds: PromiseOrValue<BigNumberish>[];
        bidIds: PromiseOrValue<BigNumberish>[];
        buyerOrderIds: PromiseOrValue<BigNumberish>[];
        gigReviewsIds: PromiseOrValue<BigNumberish>[];
        userReviewsIds: PromiseOrValue<BigNumberish>[];
        reviewsIds: PromiseOrValue<BigNumberish>[];
    };
    type UserOutputStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[]
    ] & {
        metadata: string;
        inviterId: BigNumber;
        buyerUntil: BigNumber;
        buyerInvites: BigNumber;
        sellerUntil: BigNumber;
        sellerInvites: BigNumber;
        userId: BigNumber;
        wallet: string;
        gigIds: BigNumber[];
        offerIds: BigNumber[];
        bidIds: BigNumber[];
        buyerOrderIds: BigNumber[];
        gigReviewsIds: BigNumber[];
        userReviewsIds: BigNumber[];
        reviewsIds: BigNumber[];
    };
}
export interface IUserInterface extends utils.Interface {
    functions: {
        "createBuyerOrder(uint256,uint256)": FunctionFragment;
        "createGig(address,uint256)": FunctionFragment;
        "createUser(string,uint256)": FunctionFragment;
        "getAddressById(uint256)": FunctionFragment;
        "getIdByAddress(address)": FunctionFragment;
        "getInvitersById(uint256)": FunctionFragment;
        "getInvitersByUserAddress(address)": FunctionFragment;
        "getUserByAddress(address)": FunctionFragment;
        "getUserById(uint256)": FunctionFragment;
        "getUserList()": FunctionFragment;
        "getUsersCount()": FunctionFragment;
        "isGigOwner(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createBuyerOrder" | "createGig" | "createUser" | "getAddressById" | "getIdByAddress" | "getInvitersById" | "getInvitersByUserAddress" | "getUserByAddress" | "getUserById" | "getUserList" | "getUsersCount" | "isGigOwner"): FunctionFragment;
    encodeFunctionData(functionFragment: "createBuyerOrder", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createGig", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createUser", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAddressById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getIdByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getInvitersById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getInvitersByUserAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUserList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUsersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGigOwner", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "createBuyerOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIdByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersByUserAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUsersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
    events: {
        "UserAdded(uint256,address,tuple)": EventFragment;
        "UserEdited(uint256,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserEdited"): EventFragment;
}
export interface UserAddedEventObject {
    userId: BigNumber;
    userAddress: string;
    userData: InputTypes.CreateUserInputStructOutput;
}
export type UserAddedEvent = TypedEvent<[
    BigNumber,
    string,
    InputTypes.CreateUserInputStructOutput
], UserAddedEventObject>;
export type UserAddedEventFilter = TypedEventFilter<UserAddedEvent>;
export interface UserEditedEventObject {
    userId: BigNumber;
    userAddress: string;
    userData: OutputTypes.UserOutputStructOutput;
}
export type UserEditedEvent = TypedEvent<[
    BigNumber,
    string,
    OutputTypes.UserOutputStructOutput
], UserEditedEventObject>;
export type UserEditedEventFilter = TypedEventFilter<UserEditedEvent>;
export interface IUser extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUserInterface;
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
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput]>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput]>;
        getUserList(overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput[]]>;
        getUsersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
    getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
    getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
    getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
    getUserList(overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput[]>;
    getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
    isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
        getUserList(overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput[]>;
        getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "UserAdded(uint256,address,tuple)"(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserAddedEventFilter;
        UserAdded(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserAddedEventFilter;
        "UserEdited(uint256,address,tuple)"(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserEditedEventFilter;
        UserEdited(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserEditedEventFilter;
    };
    estimateGas: {
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserList(overrides?: CallOverrides): Promise<BigNumber>;
        getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUsersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGigOwner(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
