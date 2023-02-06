import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'
import 'hardhat-deploy'
import 'hardhat-contract-sizer'

const { accounts } = require('./test_wallets.js')
import {
    DEFAULT_NAMED_ACCOUNTS,
    COVERAGE_CHAINID,
    HARDHAT_CHAINID,
    DEFAULT_BLOCK_GAS_LIMIT,
    DEFAULT_GAS_PRICE,
    GAS_REPORTER_ENABLED,
    COINMARKETCAP_API_KEY,
    GAS_PRICE_API,
    POLYGONSCAN_API_KEY,
} from './hardhat_config_helpers'

const config: HardhatUserConfig = {
    typechain: {
        outDir: 'types',
        target: 'ethers-v5',
    },
    contractSizer: {
        alphaSort: true,
        runOnCompile: false,
        disambiguatePaths: false,
    },
    solidity: {
        version: '0.8.0',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    gasReporter: {
        enabled: GAS_REPORTER_ENABLED,
        noColors: false,
        currency: 'USD',
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: 'MATIC',
        gasPriceApi: GAS_PRICE_API.matic,
        showTimeSpent: false,
    },
    etherscan: {
        apiKey: POLYGONSCAN_API_KEY,
    },
    networks: {
        hardhat: {
            chainId: HARDHAT_CHAINID,
            allowUnlimitedContractSize: true,
            saveDeployments: true,
            throwOnCallFailures: true,
            gasPrice: DEFAULT_GAS_PRICE,
            gas: DEFAULT_BLOCK_GAS_LIMIT,
            accounts: accounts.map(
                ({
                    secretKey,
                    balance,
                }: {
                    secretKey: string
                    balance: string
                }) => ({
                    privateKey: secretKey,
                    balance,
                })
            ),
        },
        localhost: {
            allowUnlimitedContractSize: true,
            saveDeployments: true,
        },
        coverage: {
            url: 'http://localhost:8555',
            chainId: COVERAGE_CHAINID,
            throwOnTransactionFailures: true,
            throwOnCallFailures: true,
        },
    },
    namedAccounts: {
        ...DEFAULT_NAMED_ACCOUNTS,
    },
}

export default config
