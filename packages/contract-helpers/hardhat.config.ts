import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  paths: {
    tests: "./src/**/**/*.test.ts",
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: "100000000000000000000000000000",
      },
    },
  },
};

export default config;
