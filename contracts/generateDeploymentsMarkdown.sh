#!/bin/bash

# Read in the JSON from a file
json=$(cat abi/abi.json)

# Extract the name and address for each contract
for contract in $(echo "$json"); do
  address=$(echo "$json" | sed -n "/$contract: {/,/}/p" | grep -oP '(?<="address": ")[^"]+')
  echo "$contract $address"
done