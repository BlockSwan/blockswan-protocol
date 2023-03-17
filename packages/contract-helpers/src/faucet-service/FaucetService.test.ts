import { BigNumber, providers, utils } from "ethers";
import {
  EvmTxType,
  TxType,
  DEFAULT_NULL_VALUE_ON_TX,
  valueToWei,
} from "../commons";
import { FaucetService } from "./index";

jest.mock("../commons/gas-station", () => {
  return {
    __esModule: true,
    estimateGasByNetwork: jest
      .fn()
      .mockImplementation(async () => Promise.resolve(BigNumber.from(1))),
    estimateGas: jest.fn(async () => Promise.resolve(BigNumber.from(1))),
  };
});

describe("FaucetService", () => {
  const provider = new providers.JsonRpcProvider();
  jest
    .spyOn(provider, "getGasPrice")
    .mockImplementation(async () => Promise.resolve(BigNumber.from(1)));
  const faucetAddress = "0x0000000000000000000000000000000000000001";

  describe("Initialisation", () => {
    it("Expects to initialize with all parameters", () => {
      const instance = new FaucetService({ provider, faucetAddress });
      expect(instance instanceof FaucetService).toEqual(true);
    });
    it("Expects to initilize without address", () => {
      const instance = new FaucetService({ provider });
      expect(instance instanceof FaucetService).toEqual(true);
    });
  });
  describe("claimERC20", () => {
    const userAddress = "0x0000000000000000000000000000000000000002";
    const tokenAddress = "0x0000000000000000000000000000000000000003";
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("Expects the tx object if all params", async () => {
      const instance = new FaucetService({ provider, faucetAddress });
      const faucetTxObj = instance.claimERC20({ userAddress, tokenAddress });
      expect(faucetTxObj.length).toEqual(1);
      expect(faucetTxObj[0].txType).toEqual(EvmTxType.FAUCET_MINT);

      const txObj: TxType = await faucetTxObj[0].tx();
      const { to, value, gasLimit, from } = txObj;
      expect(to).toEqual(faucetAddress);
      expect(from).toEqual(userAddress);
      expect(gasLimit).toEqual(BigNumber.from(1));
      console.log("value", value);
      console.log("DEFAULT_NULL_VALUE_ON_TX", DEFAULT_NULL_VALUE_ON_TX);
      expect(value).toEqual(DEFAULT_NULL_VALUE_ON_TX);

      const decoded = utils.defaultAbiCoder.decode(
        ["address"],
        utils.hexDataSlice(txObj.data ?? "", 4)
      );
      expect(decoded[0]).toEqual(tokenAddress);

      const gasPrice = await faucetTxObj[0].gas();
      expect(gasPrice).not.toBeNull();
      expect(gasPrice?.gasLimit).toEqual("1");
      expect(gasPrice?.gasPrice).toEqual("1");
    });
  });
});
