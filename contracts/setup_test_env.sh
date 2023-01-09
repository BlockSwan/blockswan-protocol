#!/bin/bash
# @dev
# This bash script setups the needed artifacts to use
# the deployments scripts for testing
# or coverage purposes.
#
echo "[BASH] Setting up testnet enviroment"

if [ ! "$COVERAGE" = true ]; then
    # remove hardhat and artifacts cache
      npm run clean

     # compile @blockswan contracts
      npm run compile
else
     echo "[BASH] Skipping compilation to keep coverage artifacts"
fi

# Export MARKETPLACE_NAME variable to use Blockswan marketplace as testnet deployment setup
export MARKETPLACE_NAME="Test0"

echo "[BASH] Testnet enviroment ready"