```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

# Blockswan Protocol smart-contracts

This repository contains the smart contracts source code and marketplaces configuration for a Blockswan Protocol.

<p align="center">
  <img src="assets/images/protocolAnimation.gif" width="100%" height="auto" alt="logo">
</p>

## Table of Contents

- [Toolchain](#toolchain)
- [Getting started](#getting-started)
- [Repository structure](#repository-structure)
- [Scripts](#scripts)
- [Contracts Addresses](#contracts)
- [Connect with the community](#connect_with_the_community)

## Toolchain:

* Solidity 0.8 
* Hardhat
* Ethers
* Typescript
* Node 18
* NPM

This protocol leverages contracts from Openzeppelin, Aave and Kleros repositories.

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Getting started

### Install dependencies

```shell
npm install  
```

### Environment variables

Copy the `.env.example` file into a `.env` and fill the corresponding variable:

```
MARKETPLACE_NAME=Test0
GAS_REPORTER_ENABLED=true
WITH_RAMPAGE=false
LOG_ACTIONS=false
COINMARKETCAP_API_KEY=
POLYGONSCAN_API_KEY=
DEPLOYER_PRIVATE_KEY=
```

## Repository structure

Each directory at the root of this repository contains code for each individual part that enables this integration:

* `abi/`: Contains the smart contracts binary application interfaces defining their methods.
* `contracts/`: Smart contracts running Blockswan Periphery and Protocol.
* `deploy/`: Scripts to deploy Blockswan Periphery and Protocol contracts.
* `deployments/`: Latest deployments by network name.
* `helpers/`: Constants and functions facilitating the deployment and testing process.
* `test/`: Test suite for the Blockswan Periphery and Protocol contracts.
* `types/`: Typechain-generated types for blockchain calls.
* `utilities/`: Methods for testings and deployments process. 

## Scripts

* `npm run size`: to get the size (KiB) of each contracts
* `npm run compile`: to compile Blockswan Protocol and Periphery contracts 
* `npm run test`: to run the full test suite
* `npm run test [file/path/*.spec.ts]`: to run a specific test or an entire folder
* `npm run deploy`: to deploy to hardhat chain
* `npm run deploy:testnet`: to deploy to Polygon Mumbai
* `npm run coverage`: to run the test suite with coverage report
* `npm run prettier`: to apply prettier to the project
* `npm run export:abi`: to export the protocol ABI.
    Notice: that abi is automatically exported via hardhat-deploy
* `npm run clean`: to clean hardhat caches and types
* `npm run clean:abi`: to clean the ./abi repository
* `npm run clean:deployments`: to clean the deployments folder
   Notice: this will loose the information of previous deployments
* `npm run verify`: to verify the deployed smart-contracts.


## Contracts

Blockswan Periphery and Protocol contracts are deployed on the Polygon Mumbai chain at the following address:

The following addresses may be out-of-date or out-of usage. To interact with Blockswan contracts, we recommand using directly the [client interface](https://testnet.blockswan.app)

Just paste the address in the following [Blockchain Scan](https://mumbai.polygonscan.com) to track contracts.

### Periphery 

|           | Periphery contracts                           |
| --------- | --------------------------------------------- |
| DAT       | 0x59f613FbD69B21B9F5cBe51916e031aeF1b747bB    |
| Mock USDC | 0x3A357e08C1218b95e65c13F38d9bd2D76A28c196    |

### Protocol

#### Configurators

Smart-contracts responsible of the configuration of the blockswan protocol. (eg: containing params fees and access permissions between others)

|                       | Configurators contracts                    |
| --------------------- | ------------------------------------------ |
| ACLManager            | 0x028F171aCDd61692147eB6bb6265908179d93754 |
| AddressProvider       | 0xc4b6Cd0bc2BBF47077d321d3c878c31b01e17aD5 |
| ProtocolConfigurator  | 0x2522C919CaFf64eF49712Ffcf327fCc9cAe7e692 |
| ProviderRegistry      | 0x9BB1034E13874d985ADAb6ACa4B6E98960eb68C2 |

#### Implementations

Smart-contracts containing the core data storage and calling the libraries via calldata to manipulate data.

|           | Implementations contracts                  |
| --------- | ------------------------------------------ |
| Dispute   | 0x1d67608184F6Aa7781CeA119454f1131DB65a5a9 |
| Gig       | 0x06A5c9f5E4908a16B2D2Eb1a511388934f3E462e |
| Order     | 0xD316c8279C75c4359c930eC98fB5FFD4D1aE719D |
| User      | 0xA653832AC359a46a9be77cf73Bb555FAc9058bf9 |
| XP        | 0xF6fb18412a4a00BA8f522EB9942e6b1bD5B3A00C |
| Jury      | 0x4429aBB56f7166FF9B16C9fe290400f8F277f830 |

#### Libraries

Blockswan business logics libraries called by the implementations.

|                           | Logics Libraries                              |
| ------------------------- | --------------------------------------------- |
| DisputeDataLogic          | 0x19eF137F58a21bda3aa9a259cCf37cd6A0859CA6    |
| DisputeLogic              | 0x5bfD2cB87429f3187072A243fB76B6C97A00E495    |
| GigDataLogic              | 0xccba1628A294c60B814B9Ff5F18dEEE2f6850eb4    |
| GigLogic                  | 0x7E7F545B89D9cc9CD49FF0a830CA251acdEBC887    |
| JuryDataLogic             | 0xFCe408569B048522B547B782d83f6b594709572E    |
| JuryLogic                 | 0x24c03e89796af2d6c021d475cAe56916dF15852C    |
| OrderDataLogic            | 0x1F6749f7E332b641396991528C54625360e1D78a    |
| OrderLogic                | 0x1D3CA752288a88a4523674f568EDF4dB9c97F053    |
| RoundDataLogic            | 0x7481003653ea47b7889C8eAb8d7c2A0577aFbd12    |
| RoundLogic                | 0x6418479cc723c4121c86E0ECC459a73547C932e1    |
| UserDataLogic             | 0xca0aBc1309FfA587adBE7D248B006AeEe81f2D8a    |
| UserLogic                 | 0x8D53dAbEeDa4a2907B89a07c87D2719956dc5770    |
| VoteDataLogic             | 0x2c4051B2309C5C39b2e85FE123834Dd52eFCf545    |
| VoteLogic                 | 0xD3203312c4A766BB00C63e357233b4780C2d815D    |
| InviterLogic              | 0x85F0Fe200F946f76fc92AD911b4D21c196D8b71B    |
| InvoiceLogic              | 0x923E3688a583db59f5C692DDfDFFB555A502a105    |
| ParamsLogic               | 0x16436d2A7f5Ab6336F00388F148A476cf3Cf31c8    |
| SortitionSumTreeFactory   | 0x98a5eA2D890197043Ab890082ABDf3402c50E0d9    |

## Connect with the community

You can join at the [Discord](https://discord.com/invite/JtUtDDP9yh) channel or at the [Twitter](https://twitter.com/BlockSwanHQ) for asking questions about the protocol or talk about BlockSwan with other peers.