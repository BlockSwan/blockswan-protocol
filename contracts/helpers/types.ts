import { ethers } from 'hardhat'
import { Signer, BigNumber, utils } from 'ethers'
import {
    BSWAN,
    Gig,
    XP,
    Order,
    ERC20,
    MUSDC,
    User,
    AddressProvider,
    ProviderRegistry,
    ACLManager,
    ProtocolConfigurator,
    Dispute,
    Jury,
} from '../types'

type ValidInput = string | number | BigNumber

enum OrderState {
    UNCONFIRMED,
    CONFIRMED,
    DISPUTED,
    DONE,
    // UPDATING
}

enum DisputeState {
    EVIDENCE,
    COMMIT,
    VOTE,
    APPEAL,
    EXECUTION,
}

type Balance = {
    USDC: number
    BSWAN: number
}

type EvmAddress = string

type SignerWithAddress = {
    signer: Signer
    address: EvmAddress
}

type TrustDeployOptions = {
    name: string
    symbol: string
    currency: EvmAddress
    buySlopeNum: string
    buySlopeDen: string | BigNumber
    investmentReserveBasisPoints: string
    revenueCommitmentBasisPoints: string
    minInvestment: string
}
type EntryParams = {
    currencyValue: number
    timeAdded: number
    xpEarned: number
    invitationEarned: number
}

type CreationParams = {
    currencyValue: ValidInput
    xpEarned: number
}

type FeeParams = {
    flat: ValidInput
    percent: ValidInput
}

type DelayTimestamp = {
    selfRefund: ValidInput
    evidence: ValidInput
    commit: ValidInput
    vote: ValidInput
    appeal: ValidInput
}

type DisputeParams = {
    minStake: ValidInput
    alpha: ValidInput
    feePerJuror: ValidInput
    maxVotes: ValidInput
}

type StructRetributionParams = {
    affiliate: ValidInput
    lvl0AffiliateShare: ValidInput
}

class RetributionParams {
    affiliate: ValidInput
    lvl0AffiliateShare: ValidInput
    constructor({ affiliate, lvl0AffiliateShare }: StructRetributionParams) {
        this.affiliate = affiliate
        this.lvl0AffiliateShare = lvl0AffiliateShare
    }
}

type DeploymentEnv = {
    // admins & users
    deployer: SignerWithAddress
    protocolAdmin: SignerWithAddress
    // contracts
    dat: BSWAN
    USDC: ERC20
}

export type TestEnv = {
    // admins & users
    deployer: Signer
    protocolAdmin: Signer
    registryOwner: Signer
    aclAdmin: Signer
    users: SignerWithAddress[]
    judges: SignerWithAddress[]

    // contracts
    dat: BSWAN
    mUSDC: MUSDC
    User: User
    Gig: Gig
    Order: Order
    Dispute: Dispute
    Jury: Jury
    AddressProvider: AddressProvider
    ACLManager: ACLManager
    Registry: ProviderRegistry
    ProtocolConfigurator: ProtocolConfigurator
    XP: XP
}

type TrustData = {
    owner?: EvmAddress
    address?: EvmAddress
    currency?: EvmAddress
    decimals: number
    totalSupply: number
    minInvestment: number
    revenueCommitmentBasisPoints: number
    investmentReserveBasisPoints: number
    buySlopNum: number
    buySlopDen: number
}

enum ProtocolErrors {
    // REGISTRY
    INVALID_ADDRESS_PROVIDER_ID = '1', // The addresses provider is not valid
    ADDRESS_PROVIDER_ALREADY_ADDED = '2', // This addresses provider already exists
    ADDRESS_PROVIDER_NOT_REGISTERED = '3', // 'This addresses provider is not registered'

    // ADDRESSSES PROVIDER
    CONTRACT_NAME_ALREADY_USED = '4', // 'Requires that given _name does not already have non-zero registered contract address'
    ZERO_ADDRESS_IS_INVALID = '5', // the address provided is 0x00
    INDEX_OUT_OF_RANGE = '6', // the index provided is out of range

    // USER
    ADDRESS_ALREADY_USED = '7', // 'The address provided has already been unsed to initialise an account'
    INVALID_USER_ID = '8', // 'The userId is incorrect'
    RESTRICTED_TO_BUYER = '9', // this function can't  be called by buyers
    INVALID_INVITER_ID = '10', // The inviter ID provided is incorrect
    FAILED_BECOMING_BUYER = '11', // The execution to becomeBuyer failed
    RESTRICTED_TO_SELLER = '12', // this function can't  be called by sellers
    FAILED_BECOMING_SELLER = '13', // The execution to becomeSeller failed
    ONLY_SELLER = '16', // Only account with the seller role can call the functions
    ONLY_BUYER = '17', // Only buyers can call those functions.
    NOT_GIG_OWNER = '18', // The id provided does not match with the gig owner id
    CALLER_NOT_SELLER_ID = '19', // The seller id provided is not matching with the account address calling the function
    CALLER_NOT_BUYER_ID = '20', // The buyer id provided is not matching with the account address calling the function
    NOT_ORDER_SELLER = '21', // The id provided is not the order seller
    NOT_ORDER_BUYER = '22', // The id provided is not the order buyer
    INVALID_ORDER_STATE = '23', // The function can't be called under the current order state
    SELF_REFUND_DELAY_NOT_OVER = '24', // The self refund delay is not over
    NOT_ORDER_ACTOR = '25', // The account address calling the function is not matching with the buyerId nor sellerId.
    DISPUTE_NOT_CREATED = '26', // The dispute has not been created yet
    // Jury
    JURY_STAKE_NOT_ENOUGH = '27', // The jury stake is not enough
    FAILED_TO_STAKE_JURY = '28', // The jury stake failed
    FAILED_TO_WITHDRAW_JURY = '29', // The jury withdraw failed
    ONLY_PROVIDER_ALLOWED = '36', // Only the provider can call this function
}

type UserInput = [string, number]
type PackageInput = { price: BigNumber; timeDelivery: BigNumber }

type GigInput = [string, [PackageInput, PackageInput, PackageInput]]
type OrderInput = {
    sellerId: ValidInput
    buyerId: ValidInput
    gigId: ValidInput
    packageId: ValidInput
    brief: string
}

export {
    ValidInput,
    Balance,
    TrustData,
    EntryParams,
    EvmAddress,
    SignerWithAddress,
    DeploymentEnv,
    TrustDeployOptions,
    ProtocolErrors,
    UserInput,
    RetributionParams,
    PackageInput,
    GigInput,
    CreationParams,
    OrderInput,
    FeeParams,
    DelayTimestamp,
    OrderState,
    DisputeParams,
    DisputeState,
}
