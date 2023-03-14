```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

<p align="center">
  <img src="assets/images/protocolAnimation.gif" width="100%" height="auto" alt="logo">
</p>

# Blockswan Protocol smart-contracts

This repository contains the smart contracts source code and marketplaces configuration for a Blockswan Protocol.

## Table of Contents

- [Toolchain](#toolchain)
- [Getting started](#getting-started)
- [Repository structure](#repository-structure)
- [Scripts](#scripts)
- [Contracts Addresses](#contracts)
- [Connect with the community](#connect-with-the-community)

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

| Contract          | Address                                   |
| :---------------- | :---------------------------------------- |
| DAT               | [0x4EB9D755f5dE169ddd498f3FeB5Ac13E07eDf218](https://mumbai.polygonscan.com/address/0x4EB9D755f5dE169ddd498f3FeB5Ac13E07eDf218)                |
| mUSDC             | [0xb859F0f1CFe43d7af315ff53e015BE7aC97B3D01](https://mumbai.polygonscan.com/address/0xb859F0f1CFe43d7af315ff53e015BE7aC97B3D01)              |
| Faucet            | [0x4f1652158e847BA0F3801Cc704e98b3F1e5ecc67](https://mumbai.polygonscan.com/address/0x4f1652158e847BA0F3801Cc704e98b3F1e5ecc67)             |
| MinimalForwarder  | [0xdDe9a6932963385338eaa42628fe01A9A6742420](https://mumbai.polygonscan.com/address/0xdDe9a6932963385338eaa42628fe01A9A6742420)   |

### Protocol

#### Configurators

Smart-contracts responsible of the configuration of the blockswan protocol. (eg: containing params fees and access permissions between others)

| Contract              | Address                                                       |
| :-------------------- | :------------------------------------------------------------ |
| ACLManager            | [0xf90352fae98bC00c8a5952C2121727d20D2fCDC2](https://mumbai.polygonscan.com/address/0xf90352fae98bC00c8a5952C2121727d20D2fCDC2)                |
| ProtocolConfigurator  | [0xE41ca72Dd7FA789523fb9BF761CCc27858Ab110B](https://mumbai.polygonscan.com/address/0xE41ca72Dd7FA789523fb9BF761CCc27858Ab110B)      |
| AddressProvider       | [0xE80a26720a707C08fc5ED6184ef02B89C4DdEc19](https://mumbai.polygonscan.com/address/0xE80a26720a707C08fc5ED6184ef02B89C4DdEc19)           |
| ProviderRegistry      | [0x92AaC6Af6E51d2e69e289e3BFD22a7cF4e453acD](https://mumbai.polygonscan.com/address/0x92AaC6Af6E51d2e69e289e3BFD22a7cF4e453acD)          |
    
#### Implementations

Smart-contracts containing the core data storage and calling the libraries via calldata to manipulate data.

| Contract  | Address                                       |
| :-------- | :-------------------------------------------- |
| Dispute   | [0xAe4B26bd6e3A6FE74C280a13C6B841f2774E13D0](https://mumbai.polygonscan.com/address/0xAe4B26bd6e3A6FE74C280a13C6B841f2774E13D0) |
| Gig       | [0xC31500CB1aC9727Bf1cf194Abe750B80F0fC3a73](https://mumbai.polygonscan.com/address/0xC31500CB1aC9727Bf1cf194Abe750B80F0fC3a73)     |
| Jury      | [0x1835303271F2c27DAD9a072277abb8ac939Cf253](https://mumbai.polygonscan.com/address/0x1835303271F2c27DAD9a072277abb8ac939Cf253)    |
| Order     | [0xe4F20FcC80875cBdd2ec1609761174A879733A2E](https://mumbai.polygonscan.com/address/0xe4F20FcC80875cBdd2ec1609761174A879733A2E)   |
| User      | [0x95F12Eb04F1b0ff371B981Daa4ABF4286FE90F06](https://mumbai.polygonscan.com/address/0x95F12Eb04F1b0ff371B981Daa4ABF4286FE90F06)    |
| XP        | [0x105707a169ED398759294AAf0C885d4078b3fDa8](https://mumbai.polygonscan.com/address/0x105707a169ED398759294AAf0C885d4078b3fDa8)      |

#### Libraries

Blockswan business logics libraries called by the implementations.

| Contract                  | Address                                                   |
| :------------------------ | :-------------------------------------------------------- |
| DisputeDataLogic          | [0x6A7c5564889CA0270EAc6FaC8Ae0e2dd0c8a6d70](https://mumbai.polygonscan.com/address/0x6A7c5564889CA0270EAc6FaC8Ae0e2dd0c8a6d70)          |
| DisputeLogic              | [0x8B7C8410331C9671F885311993341F9fae11C9ea](https://mumbai.polygonscan.com/address/0x8B7C8410331C9671F885311993341F9fae11C9ea)              |
| GigDataLogic              | [0x1f0B1254081B280B1dff1e8328FD46A1da3b1E21](https://mumbai.polygonscan.com/address/0x1f0B1254081B280B1dff1e8328FD46A1da3b1E21)              |
| GigLogic                  | [0x09A160dAD547AfEE3F34E1Ef381A6FDa82d5CaAD](https://mumbai.polygonscan.com/address/0x09A160dAD547AfEE3F34E1Ef381A6FDa82d5CaAD)                  |
| JuryDataLogic             | [0xc9E5De38EDA54EBEC1A47325B63A6669dC70a5Ce](https://mumbai.polygonscan.com/address/0xc9E5De38EDA54EBEC1A47325B63A6669dC70a5Ce)             |
| JuryLogic                 | [0x90D47f46ebC998318dC4Dfe3845f6cd29e964c98](https://mumbai.polygonscan.com/address/0x90D47f46ebC998318dC4Dfe3845f6cd29e964c98)                 |
| OrderDataLogic            | [0xF3EBb1DFDCEdCA20405D019DD89ac9f49dA88dC7](https://mumbai.polygonscan.com/address/0xF3EBb1DFDCEdCA20405D019DD89ac9f49dA88dC7)            |
| OrderLogic                | [0x522Ff9FD9a90eD3c18e5DFb750b5FA10760414Af](https://mumbai.polygonscan.com/address/0x522Ff9FD9a90eD3c18e5DFb750b5FA10760414Af)                |
| RoundDataLogic            | [0x5aEe4cd78536d7062AaAA8ceC280162abf4B79F4](https://mumbai.polygonscan.com/address/0x5aEe4cd78536d7062AaAA8ceC280162abf4B79F4)            |
| RoundLogic                | [0xf4179131036CB2a497a80710DF574ecc6D341499](https://mumbai.polygonscan.com/address/0xf4179131036CB2a497a80710DF574ecc6D341499)                |
| UserDataLogic             | [0xE45cf8e13499AfbB3a977DeE1FaEA16e1b56Ad67](https://mumbai.polygonscan.com/address/0xE45cf8e13499AfbB3a977DeE1FaEA16e1b56Ad67)             |
| UserLogic                 | [0xEB2F885B779F4718E7E041a03e0b25148BFc96A9](https://mumbai.polygonscan.com/address/0xEB2F885B779F4718E7E041a03e0b25148BFc96A9)                 |
| VoteDataLogic             | [0x5a0a7937554483cb1B934e6A279a035240f3196f](https://mumbai.polygonscan.com/address/0x5a0a7937554483cb1B934e6A279a035240f3196f)             |
| VoteLogic                 | [0x6aCb93c19af3c035b27e9e357F27999843624C74](https://mumbai.polygonscan.com/address/0x6aCb93c19af3c035b27e9e357F27999843624C74)                 |
| InviterLogic              | [0x21Ee093B0f6547F86398a92aCc59681897E4E84c](https://mumbai.polygonscan.com/address/0x21Ee093B0f6547F86398a92aCc59681897E4E84c)              |
| InvoiceLogic              | [0x767Cc0Af352Fa4C363e15ac13060CC157F7FB313](https://mumbai.polygonscan.com/address/0x767Cc0Af352Fa4C363e15ac13060CC157F7FB313)              |
| ParamsLogic               | [0xA9216eDb7A35437D0B8CbF1a2Cd9840821EDf7c3](https://mumbai.polygonscan.com/address/0xA9216eDb7A35437D0B8CbF1a2Cd9840821EDf7c3)               |
| SortitionSumTreeFactory   | [0x62D1fa835756F14a9A689A4eaccc1808ec90b1EC](https://mumbai.polygonscan.com/address/0x62D1fa835756F14a9A689A4eaccc1808ec90b1EC)   |

## Connect with the community

You can join at the [Discord](https://discord.com/invite/JtUtDDP9yh) channel or at the [Twitter](https://twitter.com/BlockSwanHQ) for asking questions about the protocol or talk about BlockSwan with other peers.