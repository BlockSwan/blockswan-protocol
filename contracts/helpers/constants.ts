import { version } from "../package.json";
import { utils } from "ethers"
import { BigNumber } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { EntryParams, RetributionParams, UserInput } from './types';


// ----------------
// UTILS
// ----------------

const TEST_SNAPSHOT_ID = '0x1';

const ZERO_BYTES_32 = "0x0000000000000000000000000000000000000000000000000000000000000000";
const PERCENTAGE_FACTOR = '10000';
const HALF_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(2).toString();
const ONE_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(100).toString();
const ONE_THIRD_PERCENTAGE = BigNumber.from(PERCENTAGE_FACTOR).div(3).toString();
const TWO_THIRD_PERCENTAGE = BigNumber.from(ONE_THIRD_PERCENTAGE).mul(2).toString();
const THREE_PERCENTAGE = BigNumber.from(ONE_PERCENTAGE).mul(3).toString();

const ONE_ETH = parseUnits('1', 18);
const ONE_USD = parseUnits('1', 6);
const ONE_THOUSAND_USDC = parseUnits('1000', 6);
const ONE_BSWAN = 1000000;

const MAX_UINT_AMOUNT =
	'115792089237316195423570985008687907853269984665640564039457584007913129639935';

const MAX_BEFORE_SQUARE = "170141183460469231731687303715884105727";
const MAX_SUPPLY = "10000000000000000000000000000000000000000";


const ONE_YEAR = '31536000';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const ONE_ADDRESS = '0x0000000000000000000000000000000000000001';

const PRETTYJSON = {
	noColor: true
}


// ----------------
// MATH
// ----------------




// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

const MOCK_USD_PRICE_IN_WEI = '5848466240000000';
const USD_ADDRESS = '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96';

// ----------------
// DAT PARAMS
// ----------------

const MIN_INVESTMENT = "1000000" // 1 USDC (6decimals)
const BUY_SLOPE_NUM = "1";
const BUY_SLOPE_DEN = "100000000";
const RESERVE_BASIS_POINTS = "1000" // 10%
const COMMITMENT_BASIS_POINTS = "1000" // 10%


// REGISTRY ADDRESSES
const GIG = utils.formatBytes32String("GIG")
const USER = utils.formatBytes32String("USER")
const ACL_ADMIN = utils.formatBytes32String("ACL_ADMIN")
const ACL_MANAGER = utils.formatBytes32String("ACL_MANAGER")
const PROTOCOL_CONFIGURATOR = utils.formatBytes32String("PROTOCOL_CONFIGURATOR")
const DAT = utils.formatBytes32String("DAT")


// ROLES
const BUYER_ROLE = utils.formatBytes32String("BUYER")
const BUYER_ADMIN_ROLE = utils.formatBytes32String("BUYER_ADMIN")
const SELLER_ROLE = utils.formatBytes32String("SELLER")
const SELLER_ADMIN_ROLE = utils.formatBytes32String("SELLER_ADMIN")
const PROTOCOL_ADMIN_ROLE = utils.formatBytes32String("PROTOCOL_ADMIN")

// PROTOCOL_CONFIG
const BUYER_ENTRY_PARAMS: EntryParams = {
	currencyValue: 10 * 10 ** 6,
	timeAdded: Number(ONE_YEAR) / 12,
	xpEarned: 100,
	invitationEarned: 1,
}

const RETRIBUTION_PARAMS = new RetributionParams({
	affiliate: THREE_PERCENTAGE,
	lvl0AffiliateShare: TWO_THIRD_PERCENTAGE
})

// INPUTS:
const USER_TEST: UserInput = ["hello", 0]
const USER_BIGINVITER_TEST: UserInput = ["hello", 20000]


// ----------------
// DEPLOYMENTS 
// ----------------

const CORE_VERSION = version;


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
	ACL_ADMIN,
	PROTOCOL_CONFIGURATOR,
	USER,
	ACL_MANAGER,
	BUYER_ROLE,
	SELLER_ROLE,
	BUYER_ADMIN_ROLE,
	SELLER_ADMIN_ROLE,
	PROTOCOL_ADMIN_ROLE,
	BUYER_ENTRY_PARAMS,
	USER_TEST,
	USER_BIGINVITER_TEST,
	RETRIBUTION_PARAMS
}