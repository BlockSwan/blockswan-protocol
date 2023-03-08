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
    stakedBSWAN?: number
    freezedBSWAN?: number
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

interface DisputeFees {
    USDC: number
    BSWAN: number
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
    INVALID_ADDRESS_PROVIDER_ID = '1',
    ADDRESS_PROVIDER_ALREADY_ADDED = '2',
    ADDRESS_PROVIDER_NOT_REGISTERED = '3',

    // ADDRESSSES PROVIDER
    CONTRACT_NAME_ALREADY_USED = '4',
    ZERO_ADDRESS_IS_INVALID = '5',
    INDEX_OUT_OF_RANGE = '6',

    // USER
    ADDRESS_ALREADY_USED = '7',
    INVALID_USER_ID = '8',
    RESTRICTED_TO_BUYER = '9',
    INVALID_INVITER_ID = '10',
    FAILED_BECOMING_BUYER = '11',
    RESTRICTED_TO_SELLER = '12',
    FAILED_BECOMING_SELLER = '13',

    //XP
    NO_MATCHING_XP_KEY = '14',

    // GIG
    GIG_ID_ALREADY_EXISING = '15',

    // modifiers
    ONLY_SELLER = '16',
    ONLY_BUYER = '17',

    // Order
    NOT_GIG_OWNER = '18',
    CALLER_NOT_SELLER_ID = '19',
    CALLER_NOT_BUYER_ID = '20',
    NOT_ORDER_SELLER = '21',
    NOT_ORDER_BUYER = '22',
    INVALID_ORDER_STATE = '23',
    SELF_REFUND_DELAY_NOT_OVER = '24',
    NOT_ORDER_ACTOR = '25',
    DISPUTE_NOT_CREATED = '26',

    // Jury
    JURY_STAKE_NOT_ENOUGH = '27',
    FAILED_TO_STAKE_JURY = '28',
    FAILED_TO_WITHDRAW_JURY = '29',

    // Round
    ROUND_EVIDENCE_ALREADY_SUBMITTED = '30',
    EVIDENCE_NOT_SUBMITTED = '31',

    // Dispute
    DS_EVIDENCE_PERIOD_OVER = '32',

    // DS_VOTING_PERIOD_OVER = "33", // The voting period is over
    // DS_VOTING_PERIOD_NOT_OVER = "34", // The voting period is not over
    // DS_VOTING_PERIOD_NOT_STARTED = "35", // The voting period has not started yet
    // REgirstry
    ONLY_PROVIDER_ALLOWED = '36',
    DS_EVIDENCE_SENDER_NOT_PARTY = '37',
    CALLER_NOT_USER = '38',

    DS_EVIDENCE_ROLE_NOT_VALID = '39',
    RD_ROUND_DOES_NOT_EXIST = '40',
    DS_IN_EXECUTION_PERIOD = '46',
    VOTE_REVEAL_INCORRECT = '47',
    ROUND_VOTE_ALREADY_COMMITED = '48',
    ROUND_VOTE_NOT_COMMITED = '49',
    ROUND_VOTE_ALREADY_REVEALED = '50',
    RD_ACCOUNT_NOT_DRAWN_JUROR = '51',
    DS_COMMIT_STATE_REQUIRED = '52',
    DS_TIME_NOT_PASSED = '53',
    DS_INVALID_STATE = '54',
    VOTE_INVALID_CHOICE = '55',
    DS_NO_COMMITMENTS_MADE_FOR_ROUND = '56',
    DS_NO_VOTES_MADE_FOR_ROUND = '57',
    RD_VOTE_NOT_FOUND = '58', //  The vote was not found
    ROUND_NOT_CLOSED = '59', //  The round is not closed
    VOTE_INCORRECT = '60', //  The vote is incorrect
    ROUND_NOT_APPEALED = '61', //  The round is not appealed
    ROUND_ID_INVALID = '62', //  The round id is invalid
    CLAIM_NOT_ALLOWED = '63', //  The claim is not allowed
    ROUND_IS_APPEALED = '64', //  The round is appealed
    DS_DISPUTE_ALREADY_RULED = '65', //  The dispute is already ruled
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
    DisputeFees,
}
