```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

# Blockswan protocol

The Blockswan Protocol is a decentralized and non-custodial digital services marketplace, still in development. It is composed of a dockerized application to run a Blockswan node, which consists of a NodeJS, Express backend running the API and an IPFS node connected to the Blockswan cluster, replicating data to a MongoDB instance, as well as a React client interface.


## Repository structure

* `backend/`: Contains the NodeJS, Express backend that runs the API and the IPFS node that is connected to the Blockswan cluster. This replicates data to a MongoDB instance and sync blockchain events.
* `contracts/`: Contains the smart contracts used by the Blockswan Protocol.
* `frontend/`: Contains the React client interface for the Blockswan Protocol.
* `packages/`: Contains the multiple packages managed by Lerna.

## Usage

To use the Blockswan Protocol, follow the instructions below:

1.	Clone the Blockswan Protocol repository.
2.	Navigate to the `frontend/` folder and create a `.env` file from the `.env.example` file.

```shell
cd frontend
cp .env.example .env
vim .env
```

Set up the frontend environment variables by modifying the `.env` file as follows:

```shell
REACT_APP_BACKEND_IP=127.0.0.1
REACT_APP_BACKEND_PORT=4000
REACT_APP_BACKEND_HOST=http://
```

3.	Navigate to the backend folder and create a `.env` file from the `.env.example` file:

```shell
cd ../backend
cp .env.example .env
vim .env
```
Set the backend environment variables as follows:

```shell
IP=127.0.0.1
HOST=http://
PORT=4000
LOG_IPFS=false
MONGODB_URI=your-backup-mongodb-uri
```

4.	Navigate back to the root directory and start the docker containers:

```shell
npm run blockswan
```

Open [http://localhost:3000](http://localhost:3000) to view the react interface in your browser.
Open [http://localhost:4000/api](http://localhost:4000/api) to get an API answer

## [Official links](https://resources.blockswan.app/)

## Connect with the community

You can join us in the [Discord]() or at the [Twitter](). Feel free to ask any questions about the protocol, talk about Blockswan, or exchange about the weather.
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
