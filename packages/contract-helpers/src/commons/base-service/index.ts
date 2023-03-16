import { Provider } from "@ethersproject/providers";
import {
  BigNumber,
  Contract,
  PopulatedTransaction,
  providers,
  Signer,
} from "ethers";
import { estimateGasByNetwork } from "../gas-station";
import {
  EvmAddress,
  EvmTransactionTypeExtended,
  EvmTxType,
  GasResponse,
  ProtocolAction,
  TransactionGenerationMethod,
  TxType,
} from "../types";
import { DEFAULT_NULL_VALUE_ON_TX, gasLimitRecommendations } from "../utils";

export interface ContractsFactory {
  connect: (address: string, signerOrProvider: Signer | Provider) => Contract;
}

export class BaseService<T extends Contract> {
  readonly contractInstances: Record<string, T>;
  readonly contractFactory: ContractsFactory;
  readonly provider: providers.Provider;

  constructor(args: {
    provider: providers.Provider;
    contractFactory: ContractsFactory;
  }) {
    const { provider, contractFactory } = args;
    this.provider = provider;
    this.contractFactory = contractFactory;
    this.contractInstances = {};
  }

  public getContractInstance = (address: EvmAddress): T => {
    if (!this.contractInstances[address]) {
      this.contractInstances[address] = this.contractFactory.connect(
        address,
        this.provider
      ) as T;
    }

    return this.contractInstances[address];
  };

  readonly generateTxCallback =
    ({
      rawTxMethod,
      from,
      value,
      gasSurplus,
      action,
    }: TransactionGenerationMethod): (() => Promise<TxType>) =>
    async () => {
      const txRaw: PopulatedTransaction = await rawTxMethod();

      const tx: TxType = {
        ...txRaw,
        from,
        value: value ?? DEFAULT_NULL_VALUE_ON_TX,
      };

      tx.gasLimit = await estimateGasByNetwork({
        tx,
        provider: this.provider,
        gasSurplus,
      });

      if (
        action &&
        gasLimitRecommendations[action] &&
        tx.gasLimit.lte(BigNumber.from(gasLimitRecommendations[action].limit))
      ) {
        tx.gasLimit = BigNumber.from(
          gasLimitRecommendations[action].recommended
        );
      }

      return tx;
    };

  readonly generateTxPriceEstimation =
    (
      txs: EvmTransactionTypeExtended[],
      txCallback: () => Promise<TxType>,
      action: string = ProtocolAction.DEFAULT
    ): GasResponse =>
    async (force = false) => {
      const gasPrice = await this.provider.getGasPrice();
      const hasPendingApprovals = txs.find(
        (tx) => tx.txType === EvmTxType.ERC20_APPROVAL
      );
      if (!hasPendingApprovals || force) {
        const { gasLimit, gasPrice: gasPriceProv }: TxType = await txCallback();
        if (!gasLimit) {
          // If we don't receive the correct gas we throw an error
          throw new Error("Transaction calculation error");
        }

        return {
          gasLimit: gasLimit.toString(),
          gasPrice: gasPriceProv
            ? gasPriceProv.toString()
            : gasPrice.toString(),
        };
      }

      return {
        gasLimit: gasLimitRecommendations[action].recommended,
        gasPrice: gasPrice.toString(),
      };
    };
}
