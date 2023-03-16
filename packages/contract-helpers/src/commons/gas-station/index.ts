import { DEFAULT_GAS_SURPLUS, POLYGON_GAS_SURPLUS } from "../utils";
import { BigNumber, providers } from "ethers";
import { TxType, ChainId } from "../types";

export const estimateGas = async (args: {
  tx: TxType;
  provider: providers.Provider;
  gasSurplus?: number;
}): Promise<BigNumber> => {
  const { tx, provider, gasSurplus } = args;
  const estimatedGas = await provider.estimateGas(tx);
  return estimatedGas.add(
    estimatedGas.mul(gasSurplus ?? DEFAULT_GAS_SURPLUS).div(100)
  );
};

export const estimateGasByNetwork = async (args: {
  tx: TxType;
  provider: providers.Provider;
  gasSurplus?: number;
}): Promise<BigNumber> => {
  const { tx, provider, gasSurplus } = args;
  const estimatedGas = await provider.estimateGas(tx);
  const providerNework: providers.Network = await provider.getNetwork();

  if (providerNework.chainId === ChainId.mumbai) {
    return estimatedGas.add(estimatedGas.mul(POLYGON_GAS_SURPLUS).div(100));
  }

  return estimatedGas.add(
    estimatedGas.mul(gasSurplus ?? DEFAULT_GAS_SURPLUS).div(100)
  );
};
