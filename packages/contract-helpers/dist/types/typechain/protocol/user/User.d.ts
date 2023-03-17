import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export interface UserInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "ADDRESS_PROVIDER()": FunctionFragment;
        "MAX_UINT()": FunctionFragment;
        "approve(address)": FunctionFragment;
        "becomeBuyer()": FunctionFragment;
        "becomeSeller()": FunctionFragment;
        "createBuyerOrder(uint256,uint256)": FunctionFragment;
        "createGig(address,uint256)": FunctionFragment;
        "createUser(string,uint256)": FunctionFragment;
        "fetchContract(bytes32)": FunctionFragment;
        "getAddressById(uint256)": FunctionFragment;
        "getIdByAddress(address)": FunctionFragment;
        "getInvitersById(uint256)": FunctionFragment;
        "getInvitersByUserAddress(address)": FunctionFragment;
        "getUserByAddress(address)": FunctionFragment;
        "getUserById(uint256)": FunctionFragment;
        "getUserList()": FunctionFragment;
        "getUsersCount()": FunctionFragment;
        "hasProtocolRole(bytes32,address)": FunctionFragment;
        "isGigOwner(uint256,uint256,address)": FunctionFragment;
        "isGigOwner(uint256,uint256)": FunctionFragment;
        "isStillBuyer(address)": FunctionFragment;
        "isStillSeller(address)": FunctionFragment;
        "kill()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "ADDRESS_PROVIDER" | "MAX_UINT" | "approve" | "becomeBuyer" | "becomeSeller" | "createBuyerOrder" | "createGig" | "createUser" | "fetchContract" | "getAddressById" | "getIdByAddress" | "getInvitersById" | "getInvitersByUserAddress" | "getUserByAddress" | "getUserById" | "getUserList" | "getUsersCount" | "hasProtocolRole" | "isGigOwner(uint256,uint256,address)" | "isGigOwner(uint256,uint256)" | "isStillBuyer" | "isStillSeller" | "kill" | "owner" | "renounceOwnership" | "setProvider" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESS_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "becomeBuyer", values?: undefined): string;
    encodeFunctionData(functionFragment: "becomeSeller", values?: undefined): string;
    encodeFunctionData(functionFragment: "createBuyerOrder", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createGig", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createUser", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fetchContract", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAddressById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getIdByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getInvitersById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getInvitersByUserAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getUserList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUsersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasProtocolRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isGigOwner(uint256,uint256,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isGigOwner(uint256,uint256)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isStillBuyer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isStillSeller", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "kill", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESS_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "becomeBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "becomeSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createBuyerOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createUser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIdByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInvitersByUserAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUsersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasProtocolRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGigOwner(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillBuyer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStillSeller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "UserAdded(uint256,address,tuple)": EventFragment;
        "UserEdited(uint256,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserEdited"): EventFragment;
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
export interface User extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserInterface;
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
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        becomeBuyer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        becomeSeller(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput]>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput]>;
        getUserList(overrides?: CallOverrides): Promise<[OutputTypes.UserOutputStructOutput[]]>;
        getUsersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        "isGigOwner(uint256,uint256,address)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        "isGigOwner(uint256,uint256)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
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
    approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    becomeBuyer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    becomeSeller(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
    getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
    getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
    getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
    getUserList(overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput[]>;
    getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
    hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    "isGigOwner(uint256,uint256,address)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    "isGigOwner(uint256,uint256)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    kill(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
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
        approve(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        becomeBuyer(overrides?: CallOverrides): Promise<void>;
        becomeSeller(overrides?: CallOverrides): Promise<void>;
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string]>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string]>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput>;
        getUserList(overrides?: CallOverrides): Promise<OutputTypes.UserOutputStructOutput[]>;
        getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "isGigOwner(uint256,uint256,address)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "isGigOwner(uint256,uint256)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        kill(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setProvider(_providerAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "UserAdded(uint256,address,tuple)"(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserAddedEventFilter;
        UserAdded(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserAddedEventFilter;
        "UserEdited(uint256,address,tuple)"(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserEditedEventFilter;
        UserEdited(userId?: PromiseOrValue<BigNumberish> | null, userAddress?: PromiseOrValue<string> | null, userData?: null): UserEditedEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        becomeBuyer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        becomeSeller(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserList(overrides?: CallOverrides): Promise<BigNumber>;
        getUsersCount(overrides?: CallOverrides): Promise<BigNumber>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "isGigOwner(uint256,uint256,address)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "isGigOwner(uint256,uint256)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
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
        approve(erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        becomeBuyer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        becomeSeller(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createBuyerOrder(buyerId: PromiseOrValue<BigNumberish>, newOrderId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createGig(caller: PromiseOrValue<string>, newGigId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createUser(metadata: PromiseOrValue<string>, inviterId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fetchContract(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIdByAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInvitersByUserAddress(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserByAddress(pubKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserById(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUsersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasProtocolRole(_role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGigOwner(uint256,uint256,address)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, UserContract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isGigOwner(uint256,uint256)"(userId: PromiseOrValue<BigNumberish>, gigId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillBuyer(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStillSeller(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kill(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
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