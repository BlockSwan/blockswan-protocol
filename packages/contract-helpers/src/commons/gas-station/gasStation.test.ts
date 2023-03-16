import { DEFAULT_GAS_SURPLUS, POLYGON_GAS_SURPLUS } from "../utils";
import { BigNumber, providers } from "ethers";
import { estimateGas, estimateGasByNetwork } from ".";

const INIT_GAS = 100;
const GAS_SURPLUS = 10;

describe("gasStation", () => {
  const provider: providers.Provider = new providers.JsonRpcProvider();
  const tx = {};
  jest
    .spyOn(provider, "estimateGas")
    .mockImplementation(async () => Promise.resolve(BigNumber.from(INIT_GAS)));
  jest
    .spyOn(provider, "getNetwork")
    .mockImplementation(async () =>
      Promise.resolve({ chainId: 1, name: "mainnet" })
    );
  describe("estimateGas", () => {
    it("Expect to use default surplus", async () => {
      const gas = await estimateGas({
        tx,
        provider,
      });
      expect(gas).toEqual(BigNumber.from(INIT_GAS + DEFAULT_GAS_SURPLUS));
    });
    it("Expect to use specified surplus", async () => {
      const gas = await estimateGas({
        tx,
        provider,
        gasSurplus: GAS_SURPLUS,
      });
      expect(gas).toEqual(BigNumber.from(INIT_GAS + GAS_SURPLUS));
    });
  });
  describe("estimateGasByNetwork", () => {
    it("Expect to use Polygon surplus", async () => {
      jest
        .spyOn(provider, "getNetwork")
        .mockImplementationOnce(async () =>
          Promise.resolve({ chainId: 80001, name: "mumbai" })
        );
      const gas = await estimateGasByNetwork({ tx, provider });
      expect(gas).toEqual(BigNumber.from(INIT_GAS + POLYGON_GAS_SURPLUS));
    });
    it("Expect to use default surplus", async () => {
      const gas = await estimateGasByNetwork({ tx, provider });
      expect(gas).toEqual(BigNumber.from(INIT_GAS + DEFAULT_GAS_SURPLUS));
    });
    it("expect to use specified surplus", async () => {
      const gas = await estimateGasByNetwork({
        tx,
        provider,
        gasSurplus: GAS_SURPLUS,
      });
      expect(gas).toEqual(BigNumber.from(INIT_GAS + GAS_SURPLUS));
    });
  });
});
