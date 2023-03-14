import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import 'hardhat-abi-exporter'

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
    DEPLOYER_PRIVATE_KEY,
} from './hardhat_config_helpers'

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.9',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
                details: {
                    yul: true,
                },
            },
            viaIR: false,
        },
    },
    mocha: {
        timeout: 100000,
    },
    abiExporter: {
        path: './abi',
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [],
        spacing: 2,
        format: 'json',
    },
    typechain: {
        outDir: 'types',
        target: 'ethers-v5',
    },
    contractSizer: {
        alphaSort: true,
        runOnCompile: false,
        disambiguatePaths: false,
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
            blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
            gasPrice: DEFAULT_GAS_PRICE,
            initialBaseFeePerGas: 7,
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
            allowUnlimitedContractSize: true,
            // throwOnTransactionFailures: true,
            throwOnCallFailures: true,
            blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
            gasPrice: DEFAULT_GAS_PRICE,
            initialBaseFeePerGas: 7,
            gas: 'auto', // DEFAULT_BLOCK_GAS_LIMIT,
        },
        mumbai: {
            url: 'https://rpc-mumbai.maticvigil.com',
            accounts: [DEPLOYER_PRIVATE_KEY],
            allowUnlimitedContractSize: true,
            saveDeployments: true,
            gas: 'auto',
            blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
            gasPrice: Number(DEFAULT_GAS_PRICE),
            verify: {
                etherscan: {
                    apiKey: POLYGONSCAN_API_KEY,
                },
            },
        },
    },
    namedAccounts: {
        ...DEFAULT_NAMED_ACCOUNTS,
    },
}

export default config
