import { BigNumber, constants } from "ethers";
import { BigNumber as BigNumberJs } from "bignumber.js";
import { GasRecommendationType, ProtocolAction } from "../types";

export const DEFAULT_NULL_VALUE_ON_TX = BigNumber.from(0).toHexString();
export const DEFAULT_APPROVE_AMOUNT = constants.MaxUint256.toString();

export const MAX_UINT_AMOUNT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";

export const SUPER_BIG_ALLOWANCE_NUMBER =
  "11579208923731619542357098500868790785326998466564056403945758400791";

export const valueToWei = (args: {
  value: string;
  decimals: number;
}): string => {
  const { value, decimals } = args;
  return new BigNumberJs(value).shiftedBy(decimals).toFixed(0);
};

export const canBeEnsAddress = (ensAddress: string): boolean => {
  return ensAddress.toLocaleLowerCase().endsWith(".eth");
};

export const decimalsToCurrencyUnit = (args: {
  value: string;
  decimals: number;
}): string => {
  const { value, decimals } = args;
  return new BigNumberJs(value).shiftedBy(-1 * decimals).toFixed();
};

export const gasLimitRecommendations: GasRecommendationType = {
  [ProtocolAction.DEFAULT]: {
    limit: "210000",
    recommended: "210000",
  },
  [ProtocolAction.BECOME_BUYER]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.BECOME_SELLER]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.BECOME_JURY]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.CREATE_GIG]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.CREATE_ORDER]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.PAY_ORDER]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.VOTE]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.RAISE_DISPUTE]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.COMMIT]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.REVEAL]: {
    limit: "300000",

    recommended: "300000",
  },
  [ProtocolAction.APPEAL]: {
    limit: "300000",
    recommended: "300000",
  },
  [ProtocolAction.RELAY_TX]: {
    limit: "300000",
    recommended: "300000",
  },
};

export const EIP712Domain = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" },
];

export const ForwardRequest = [
  { name: "from", type: "address" },
  { name: "to", type: "address" },
  { name: "value", type: "uint256" },
  { name: "gas", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "data", type: "bytes" },
];

export const DEFAULT_GAS_SURPLUS = 30; // 30%
// polygon gas estimation is very off for some reason
export const POLYGON_GAS_SURPLUS = 60; // 60%
