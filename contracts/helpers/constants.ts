import { version } from '../package.json'
import { utils } from 'ethers'
import { BigNumber } from 'ethers'
import { parseUnits } from 'ethers/lib/utils'
import {
    Balance,
    CreationParams,
    DelayTimestamp,
    EntryParams,
    GigInput,
    OrderInput,
    FeeParams,
    PackageInput,
    RetributionParams,
    UserInput,
    DisputeParams,
} from './types'

// ----------------
// UTILS
// ----------------

const TEST_SNAPSHOT_ID = '0x1'

const ZERO_BYTES_32 =
    '0x0000000000000000000000000000000000000000000000000000000000000000'
const PERCENTAGE_FACTOR = '10000'
const HALF_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(2).toString()
const ONE_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(100).toString()
const TEN_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(10).toString()
const ONE_THIRD_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(3).toString()
const TWO_THIRD_PERCENTAGE = BigNumber.from(ONE_THIRD_PERCENTAGE)
    .mul(2)
    .toString()
const THREE_PERCENTAGE = BigNumber.from(ONE_PERCENTAGE).mul(3).toString()

const ONE_ETH = parseUnits('1', 18)
const ONE_USD = parseUnits('1', 6)
const ONE_THOUSAND_USDC = parseUnits('1000', 6)
const ONE_HUNDRED_USDC = parseUnits('100', 6)
const ONE_HUNDRED = parseUnits('100', 6)
const TWO_HUNDRED = parseUnits('200', 6)
const THREE_HUNDRED = parseUnits('300', 6)
const ONE_BSWAN = 1000000

const MAX_UINT_AMOUNT =
    '115792089237316195423570985008687907853269984665640564039457584007913129639935'

const MAX_BEFORE_SQUARE = '170141183460469231731687303715884105727'
const MAX_SUPPLY = '10000000000000000000000000000000000000000'

const ONE_YEAR = '86400'
const ONE_DAY = '172800'
const TWO_DAYS = '259200'
const THREE_DAYS = '259200'
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
const ONE_ADDRESS = '0x0000000000000000000000000000000000000001'

const PRETTYJSON = {
    noColor: true,
}

// ----------------
// MATH
// ----------------

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

const MOCK_USD_PRICE_IN_WEI = '5848466240000000'
const USD_ADDRESS = '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96'

// ----------------
// DAT PARAMS
// ----------------

const MIN_INVESTMENT = '1000000' // 1 USDC (6decimals)
const BUY_SLOPE_NUM = '1'
const BUY_SLOPE_DEN = '100000000'
const RESERVE_BASIS_POINTS = '1000' // 10%
const COMMITMENT_BASIS_POINTS = '1000' // 10%

// REGISTRY ADDRESSES
const GIG = utils.formatBytes32String('GIG')
const USER = utils.formatBytes32String('USER')
const ORDER = utils.formatBytes32String('ORDER')
const DISPUTE = utils.formatBytes32String('DISPUTE')
const JURY = utils.formatBytes32String('JURY')
const ACL_ADMIN = utils.formatBytes32String('ACL_ADMIN')
const ACL_MANAGER = utils.formatBytes32String('ACL_MANAGER')
const PROTOCOL_CONFIGURATOR = utils.formatBytes32String('PROTOCOL_CONFIGURATOR')
const DAT = utils.formatBytes32String('DAT')
const XP = utils.formatBytes32String('XP')

// ROLES
const BUYER_ROLE = utils.formatBytes32String('BUYER')
const BUYER_ADMIN_ROLE = utils.formatBytes32String('BUYER_ADMIN')
const SELLER_ROLE = utils.formatBytes32String('SELLER')
const SELLER_ADMIN_ROLE = utils.formatBytes32String('SELLER_ADMIN')
const PROTOCOL_ADMIN_ROLE = utils.formatBytes32String('PROTOCOL_ADMIN')
const XP_GIVER_ROLE = utils.formatBytes32String('XP_GIVER')

// XPKeys
const BECOME_BUYER = utils.formatBytes32String('BECOME_BUYER')
const BECOME_SELLER = utils.formatBytes32String('BECOME_SELLER')
const CREATE_GIG = utils.formatBytes32String('CREATE_GIG')
const CREATE_ORDER = utils.formatBytes32String('CREATE_ORDER')
const PAY_ORDER = utils.formatBytes32String('PAY_ORDER')

const XP_VALUES = [
    {
        key: BECOME_BUYER,
        amount: 100,
    },
    {
        key: BECOME_SELLER,
        amount: 100,
    },
    {
        key: CREATE_GIG,
        amount: 50,
    },
    {
        key: CREATE_ORDER,
        amount: 20,
    },
    {
        key: PAY_ORDER,
        amount: 250,
    },
]

// PROTOCOL_CONFIG
const BUYER_ENTRY_PARAMS: EntryParams = {
    currencyValue: 3 * 10 ** 6,
    timeAdded: Number(ONE_YEAR) / 12,
    xpEarned: 100,
    invitationEarned: 1,
}

const SELLER_ENTRY_PARAMS: EntryParams = {
    currencyValue: 4 * 10 ** 6,
    timeAdded: Number(ONE_YEAR) / 12,
    xpEarned: 100,
    invitationEarned: 1,
}

const GIG_CREATION_PARAMS: CreationParams = {
    currencyValue: ONE_USD,
    xpEarned: 100,
}

const RETRIBUTION_PARAMS = new RetributionParams({
    affiliate: THREE_PERCENTAGE,
    lvl0AffiliateShare: TWO_THIRD_PERCENTAGE,
})

const ORDER_CREATION_PARAMS: FeeParams = {
    flat: ONE_USD,
    percent: ONE_PERCENTAGE,
}

const SELLER_ORDER_FEES_PARAMS: FeeParams = {
    flat: ONE_USD,
    percent: ONE_PERCENTAGE,
}

const DELAYS_TIMESTAMP: DelayTimestamp = {
    selfRefund: TWO_DAYS,
    evidence: TWO_DAYS,
    commit: TWO_DAYS,
    vote: TWO_DAYS,
    appeal: TWO_DAYS,
}

const DISPUTE_PARAMS: DisputeParams = {
    minStake: ONE_HUNDRED_USDC,
    alpha: TEN_PERCENTAGE,
    feePerJuror: ONE_USD,
    maxVotes: 10,
}

// INPUTS:
const USER_TEST0: UserInput = ['hello', 0]
const USER_TEST1: UserInput = ['hello', 0]
const USER_TEST2: UserInput = ['hello', 1]
const USER_BIGINVITER_TEST: UserInput = ['hello', 20000]

const EMPTY_PACKAGE: PackageInput = {
    price: BigNumber.from(0),
    timeDelivery: BigNumber.from(0),
}

const PACKAGE_TEST0: PackageInput = {
    price: ONE_HUNDRED,
    timeDelivery: BigNumber.from(ONE_DAY),
}
const PACKAGE_TEST1: PackageInput = {
    price: TWO_HUNDRED,
    timeDelivery: BigNumber.from(TWO_DAYS),
}
const PACKAGE_TEST2: PackageInput = {
    price: THREE_HUNDRED,
    timeDelivery: BigNumber.from(THREE_DAYS),
}
const GIG_TEST0: GigInput = [
    'user0',
    [PACKAGE_TEST0, EMPTY_PACKAGE, EMPTY_PACKAGE],
]
const GIG_TEST1: GigInput = [
    'user1',
    [PACKAGE_TEST0, PACKAGE_TEST1, EMPTY_PACKAGE],
]
const GIG_TEST2: GigInput = [
    'user2',
    [PACKAGE_TEST0, PACKAGE_TEST1, PACKAGE_TEST2],
]

const ORDER_TEST0: OrderInput = {
    sellerId: 0,
    buyerId: 1,
    gigId: 0,
    packageId: 0,
    brief: 'brief0',
}
const ORDER_TEST1: OrderInput = {
    sellerId: 0,
    buyerId: 1,
    gigId: 1,
    packageId: 1,
    brief: 'brief1',
}
const ORDER_TEST2: OrderInput = {
    sellerId: 0,
    buyerId: 1,
    gigId: 2,
    packageId: 2,
    brief: 'brief2',
}

const DEFAULT_BALANCE: Balance = {
    USDC: 0,
    BSWAN: 0,
}

// ----------------
// DEPLOYMENTS
// ----------------

const CORE_VERSION = version

export {
    MOCK_USD_PRICE_IN_WEI,
    USD_ADDRESS,
    MIN_INVESTMENT,
    BUY_SLOPE_NUM,
    RESERVE_BASIS_POINTS,
    CORE_VERSION,
    TEST_SNAPSHOT_ID,
    ZERO_BYTES_32,
    PERCENTAGE_FACTOR,
    HALF_PERCENTAGE,
    TWO_THIRD_PERCENTAGE,
    THREE_PERCENTAGE,
    ONE_PERCENTAGE,
    ONE_ETH,
    ONE_USD,
    ONE_THOUSAND_USDC,
    MAX_UINT_AMOUNT,
    ONE_YEAR,
    ZERO_ADDRESS,
    ONE_ADDRESS,
    BUY_SLOPE_DEN,
    COMMITMENT_BASIS_POINTS,
    ONE_BSWAN,
    PRETTYJSON,
    MAX_BEFORE_SQUARE,
    MAX_SUPPLY,
    GIG,
    DAT,
    ORDER,
    XP,
    ACL_ADMIN,
    PROTOCOL_CONFIGURATOR,
    USER,
    ACL_MANAGER,
    BUYER_ROLE,
    SELLER_ROLE,
    XP_GIVER_ROLE,
    BUYER_ADMIN_ROLE,
    SELLER_ADMIN_ROLE,
    PROTOCOL_ADMIN_ROLE,
    BUYER_ENTRY_PARAMS,
    USER_TEST0,
    USER_TEST1,
    USER_TEST2,
    USER_BIGINVITER_TEST,
    RETRIBUTION_PARAMS,
    SELLER_ENTRY_PARAMS,
    XP_VALUES,
    BECOME_BUYER,
    BECOME_SELLER,
    CREATE_GIG,
    ONE_HUNDRED,
    THREE_DAYS,
    ONE_DAY,
    TWO_DAYS,
    PACKAGE_TEST0,
    PACKAGE_TEST1,
    PACKAGE_TEST2,
    GIG_TEST0,
    GIG_TEST1,
    GIG_TEST2,
    THREE_HUNDRED,
    TWO_HUNDRED,
    DEFAULT_BALANCE,
    GIG_CREATION_PARAMS,
    ORDER_TEST0,
    ORDER_TEST1,
    ORDER_TEST2,
    SELLER_ORDER_FEES_PARAMS,
    DELAYS_TIMESTAMP,
    ORDER_CREATION_PARAMS,
    DISPUTE,
    JURY,
    DISPUTE_PARAMS,
    EMPTY_PACKAGE,
    TEN_PERCENTAGE,
    ONE_HUNDRED_USDC,
}
