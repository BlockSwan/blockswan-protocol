require('dotenv').config()

const GAS_REPORTER_ENABLED = process.env.GAS_REPORTER_ENABLED === 'true'
const COINMARKETCAP_API_KEY = String(process.env.COINMARKETCAP_API_KEY)
const POLYGONSCAN_API_KEY = String(process.env.POLYGONSCAN_API_KEY)
const DEPLOYER_PRIVATE_KEY = String(process.env.DEPLOYER_PRIVATE_KEY)

const HARDHAT_CHAINID = 31337
const COVERAGE_CHAINID = 31337 //1337

const DEFAULT_NAMED_ACCOUNTS = {
    /*
     * PROTOCOL
     */
    deployer: 0,
    registryOwner: 0,
    aclAdmin: 0,
    protocolAdmin: 0,
}

const DEFAULT_BLOCK_GAS_LIMIT = 12450000 * 8
const DEFAULT_GAS_PRICE = 8000000000

const GAS_PRICE_API = {
    eth: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    bnb: 'https://api.bscscan.com/api?module=proxy&action=eth_gasPrice',
    matic: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    avax: 'https://api.snowtrace.io/api?module=proxy&action=eth_gasPrice',
}

export {
    HARDHAT_CHAINID,
    COVERAGE_CHAINID,
    DEFAULT_NAMED_ACCOUNTS,
    DEFAULT_BLOCK_GAS_LIMIT,
    DEFAULT_GAS_PRICE,
    GAS_PRICE_API,
    GAS_REPORTER_ENABLED,
    COINMARKETCAP_API_KEY,
    POLYGONSCAN_API_KEY,
    DEPLOYER_PRIVATE_KEY,
}
