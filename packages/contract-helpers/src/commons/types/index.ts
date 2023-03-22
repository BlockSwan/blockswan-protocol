import { BigNumber, BytesLike, PopulatedTransaction } from "ethers";

export type EvmAddress = string;
export type ENS = string; // something.eth

export enum OrderState {
  UNCONFIRMED = 0,
  CONFIRMED = 1,
  DISPUTED = 2,
  DONE = 3,
}

export enum DisputeState {
  EVIDENCE = 0,
  COMMIT = 1,
  VOTE = 2,
  APPEAL = 3,
  EXECUTION = 4,
}

export const ChainIdToNetwork: Record<number, string> = {
  80001: "mumbai",
};

export enum ChainId {
  mumbai = 80001,
}

export enum EvmTxType {
  VERIFY_REQUEST = "VERIFY_REQUEST",
  EXECUTE_REQUEST = "EXECUTE_REQUEST",
  ERC20_APPROVAL = "ERC20_APPROVAL",
  DAT_ACTION = "DAT_ACTION",
  FAUCET_MINT = "FAUCET_MINT",
  ORDER_ACTION = "ORDER_ACTION",
  DISPUTE_ACTION = "DISPUTE_ACTION",
  JURY_ACTION = "JURY_ACTION",
  GIG_ACTION = "GIG_ACTION",
  USER_ACTION = "USER_ACTION",
}

export enum ProtocolAction {
  DEFAULT = "DEFAULT",
  BECOME_BUYER = "BECOME_BUYER",
  BECOME_SELLER = "BECOME_SELLER",
  BECOME_JURY = "BECOME_JURY",
  CREATE_GIG = "CREATE_GIG",
  CREATE_ORDER = "CREATE_ORDER",
  PAY_ORDER = "PAY_ORDER",
  VOTE = "VOTE",
  RAISE_DISPUTE = "RAISE_DISPUTE",
  COMMIT = "COMMIT",
  REVEAL = "REVEAL",
  APPEAL = "APPEAL",
  EXECUTE = "EXECUTE",
  CLAIM = "CLAIM",
  WITHDRAW = "WITHDRAW",
  DEPOSIT = "DEPOSIT",
  MINT = "MINT",
  RELAY_TX = "RELAY_TX",
}

export enum DisputeVote {
  ZERO_PERCENT_TO_PROCECUTOR = 0,
  TEN_PERCENT_TO_PROCECUTOR = 1e3,
  TWENTY_PERCENT_TO_PROCECUTOR = 2e3,
  THIRTY_PERCENT_TO_PROCECUTOR = 3e3,
  FORTY_PERCENT_TO_PROCECUTOR = 4e3,
  FIFTY_PERCENT_TO_PROCECUTOR = 5e3,
  SIXTY_PERCENT_TO_PROCECUTOR = 6e3,
  SEVENTY_PERCENT_TO_PROCECUTOR = 7e3,
  EIGHTY_PERCENT_TO_PROCECUTOR = 8e3,
  NINETY_PERCENT_TO_PROCECUTOR = 9e3,
  ONE_HUNDRED_PERCENT_TO_PROCECUTOR = 1e4,
}

export enum JurorStake {
  staked = "BSWAN",
  freezed = "fBSWAN",
}

export type GasRecommendationType = Record<
  string,
  {
    limit: string;
    recommended: string;
  }
>;

export type GeneratedTx = {
  tx: TxType;
  gas: {
    price: string;
    limit: string;
  };
};

export type TxType = {
  value?: string;
  from?: string;
  to?: string;
  nonce?: number;
  gasLimit?: BigNumber;
  gasPrice?: BigNumber;
  data?: string;
  chainId?: number;
};

export type PeripheryAddressModel = {
  DAT: EvmAddress;
  mUSDC: EvmAddress;
  Faucet: EvmAddress;
  MinimalForwarder: EvmAddress;
};

export type ConfiguratorsAddressModel = {
  ACLManager: EvmAddress;
  ProtocolConfigurator: EvmAddress;
  AddressProvider: EvmAddress;
  ProviderRegistry: EvmAddress;
};

export type ImplementationsAddressModel = {
  Dispute: EvmAddress;
  Gig: EvmAddress;
  Jury: EvmAddress;
  Order: EvmAddress;
  User: EvmAddress;
  XP: EvmAddress;
};

export type LibrariesAddressModel = {
  DisputeDataLogic: EvmAddress;
  DisputeLogic: EvmAddress;
  GigDataLogic: EvmAddress;
  GigLogic: EvmAddress;
  JuryDataLogic: EvmAddress;
  JuryLogic: EvmAddress;
  OrderDataLogic: EvmAddress;
  OrderLogic: EvmAddress;
  RoundDataLogic: EvmAddress;
  RoundLogic: EvmAddress;
  UserDataLogic: EvmAddress;
  UserLogic: EvmAddress;
  VoteDataLogic: EvmAddress;
  VoteLogic: EvmAddress;
  InviterLogic: EvmAddress;
  InvoiceLogic: EvmAddress;
  ParamsLogic: EvmAddress;
  SortitionSumTreeFactory: EvmAddress;
};

export type ProtocolAddressModel = {
  configurators: ConfiguratorsAddressModel;
  implementations: ImplementationsAddressModel;
  libraries: LibrariesAddressModel;
};

export type AddressModel = {
  periphery: PeripheryAddressModel;
  protocol: ProtocolAddressModel;
};

export type ContractAddresses = Record<string, EvmAddress>;

export type EvmTransactionTypeExtended = {
  txType: EvmTxType;
  tx: () => Promise<TxType>;
  gas: GasResponse;
};

export type TransactionGenerationMethod = {
  rawTxMethod: () => Promise<PopulatedTransaction>;
  from: EvmAddress;
  value?: string;
  gasSurplus?: number;
  action?: ProtocolAction;
};

export type TransactionGasGenerationMethod = {
  txCallback: () => Promise<TxType>;
  action?: ProtocolAction;
};

export type GasType = {
  gasLimit: string | undefined;
  gasPrice: string;
};
export type GasResponse = (force?: boolean) => Promise<GasType | null>;

// export type DefaultProviderKeys = {
//   etherscan?: string;
//   infura?: string;
//   alchemy?: string;
// };

export type MetaTxInput = {
  from: string;
  to: string;
  data: string;
  nonce?: number | string;
  value?: number;
  gas?: number;
};

export type MetaTxRequest = {
  from: string;
  to: string;
  value: number;
  gas: number;
  nonce: number | string;
  data: string;
};

export type MetaTxTypeData = {
  domain: { [key: string]: any };
  types: { [key: string]: any[] };
  primaryType: string;
};

export type FaucetTokensType = {
  native: BigNumber;
  erc20: BigNumber;
};
export type FaucetConfigType = {
  mintDelays: FaucetTokensType;
  mintAmounts: FaucetTokensType;
};

export type ABI = {
  [key: string]: any;
};
