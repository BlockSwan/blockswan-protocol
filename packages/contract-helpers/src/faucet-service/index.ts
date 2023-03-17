import { providers } from "ethers";
import {
  FaucetValidator,
  BaseService,
  EvmTxType,
  EvmTransactionTypeExtended,
  EvmAddress,
  TxType,
  isEvmAddress,
  Faucet,
  Faucet__factory,
  FaucetConfigType,
  DEFAULT_NULL_VALUE_ON_TX,
} from "../commons";

export interface FaucetInterface {
  claimERC20: (args: {
    userAddress: EvmAddress;
    tokenAddress: EvmAddress;
  }) => EvmTransactionTypeExtended[];
}

export class FaucetService
  extends BaseService<Faucet>
  implements FaucetInterface
{
  readonly faucetAddress: string;
  readonly faucetConfig: FaucetConfigType | undefined;

  constructor(args: { provider: providers.Provider; faucetAddress?: string }) {
    const { provider, faucetAddress } = args;
    super({
      provider,
      contractFactory: Faucet__factory,
    });
    this.faucetAddress = faucetAddress ?? "";
  }

  @FaucetValidator
  // @ts-ignore
  public claimERC20(
    // @ts-ignore
    @isEvmAddress("tokenAddress")
    @isEvmAddress("userAddress")
    args: {
      userAddress: EvmAddress;
      tokenAddress: EvmAddress;
    }
  ) {
    const { tokenAddress, userAddress } = args;
    const faucetContract = this.getContractInstance(this.faucetAddress);
    const txCallback: () => Promise<TxType> = this.generateTxCallback({
      rawTxMethod: async () =>
        faucetContract.populateTransaction.claimERC20(tokenAddress),
      from: userAddress,
      value: DEFAULT_NULL_VALUE_ON_TX,
    });
    return [
      {
        tx: txCallback,
        txType: EvmTxType.FAUCET_MINT,
        gas: this.generateTxPriceEstimation([], txCallback),
      },
    ];
  }
}
