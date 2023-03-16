import {
  EvmAddress,
  MetaTxInput,
  BaseService,
  Faucet__factory,
  ChainId,
} from "../commons";
import { providers } from "ethers";
import { ForwarderService } from ".";

describe("ForwarderService", () => {
  let provider: providers.Provider;
  let forwarderAddress: EvmAddress;
  beforeEach(() => {
    // set up the Web3Provider and forwarder address before each test
    provider = new providers.JsonRpcProvider();
    forwarderAddress = "0x1234567890123456789012345678901234567890";
  });

  describe("Initialization", () => {
    it("Expects to initialize without error", () => {
      const instance = new ForwarderService({
        provider,
        forwarderAddress,
      });
      expect(instance instanceof ForwarderService).toEqual(true);
    });
    it("Expects to initialize without address", () => {
      const instance = new ForwarderService({
        provider,
      });
      expect(instance instanceof ForwarderService).toEqual(true);
    });
  });

  describe("signMetaTxRequest", () => {
    it("Expects to sign a meta transaction request", async () => {
      const instance = new ForwarderService({
        provider,
      });
      const Faucet = new BaseService({
        provider,
        contractFactory: Faucet__factory,
      });
      const FaucetInstance = Faucet.getContractInstance(forwarderAddress);

      let input: MetaTxInput = {
        from: "0x1234567890123456789012345678901234567890",
        to: "0x1234567890123456789012345678901234567890",
        data: FaucetInstance.interface.encodeFunctionData("claimNative"),
      };
      const { signature, request } = await instance.signMetaTxRequest(input);
      expect(signature).toBeDefined();
    });
  });
});
