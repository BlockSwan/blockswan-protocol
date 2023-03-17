```
______ _            _    _____
| ___ \ |          | |  /  ___|
| |_/ / | ___   ___| | _\ `--.__      ____ _ _ __
| ___ \ |/ _ \ / __| |/ /`--. \ \ /\ / / _` | '_ \
| |_/ / | (_) | (__|   </\__/ /\ V  V / (_| | | | |
\____/|_|\___/ \___|_|\_\____/  \_/\_/ \__,_|_| |_|
```

# Blockswan contract-helpers

This package provides a collection of utility functions to interact with EVM-based blockswan smart contracts. It is built using TypeScript and works with the Hardhat development environment and jest for testing.

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

The packages within the blockswan-protocol repository are also managed at the root of the folder via Lerna.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
    - [contract-helpers/src](#contract-helperssrc)
        - [commons](#commons)
            - [base-service](#base-service)
            - [gas-station](#gas-station)
            - [typechain](#typechain)
            - [utils](#utils)
            - [validators](#validators)
        - [faucet-service](#faucet-service)
        - [forwarder-service](#forwarder-service)
        - [index.ts](#indexts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run the following command in your project directory:

```shell
npm install @blockswan/contract-helpers
```

## Usage

To use the package, first import the necessary functions from the @mvp/contract-helpers module. For example:


```typescript
import { ForwarderService, FaucetService } from '@blockswan/contract-helpers';
```

More infomation coming soon. 

## Development

To build the package, run the following command:

```shell
npm run build
```

To run the tests, run the following command:

```shell
npm run test
```

## contract-helpers/src

This directory contains the source code for the contract-helpers package. It includes various subdirectories that organize different parts of the package's functionality.

### commons

The `commons` directory contains common utilities and shared code that is used across the package. It includes subdirectories for `base-service`, `gas-station`, `typechain`, `utils`, and `validators`.

#### base-service

`base-service` contains a base class for implementing services.

#### gas-station

`gas-station` contains code for estimating gas costs.

#### typechain

`typechain` contains TypeScript bindings for the package's contracts.

#### utils

`utils` contains various utility functions.

#### validators

`validators` contains input validation code for the package's functions. It includes subdirectories for methods, params, and validations.

### faucet-service

The `faucet-service` directory contains the source code for a service that dispenses testnet tokens.

### forwarder-service

The `forwarder-service` directory contains the source code for a service that forwards transactions.

### index.ts

The top-level `index.ts` file is the entry point for the package's functionality, and it exports various modules and functions for use by other packages.




## Contributing

Contributions to this package are welcome. To contribute, please fork this repository, make your changes, and submit a pull request.

## License

This package is licensed under the MIT License. See the LICENSE file for more information.