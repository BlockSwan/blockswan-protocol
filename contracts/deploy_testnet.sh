#!/bin/bash
# @dev
# This bash script deploys the contracts to testnet

echo "[BASH] Deployment to testnet initiated"

sh ./setup_test_env.sh

# echo "[BASH] clearing deployments and abi"

# npm run clean:deployments
# npm run clean:abi

echo "[BASH] Deploying contracts to testnet and exporting abi to ./abi/abi.json"

npx hardhat deploy --network mumbai --export ./abi/abi.json

