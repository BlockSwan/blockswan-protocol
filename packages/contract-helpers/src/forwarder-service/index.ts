import {
  MetaTxRequest,
  MetaTxTypeData,
  MetaTxInput,
  EvmAddress,
  BaseService,
  ChainId,
} from "../commons";
import { EIP712Domain, ForwardRequest } from "../commons/utils";
import { providers, Contract } from "ethers";
import { MinimalForwarder__factory } from "../commons/typechain";
import {
  EvmTransactionTypeExtended,
  EvmTxType,
  TxType,
} from "../commons/types";

export interface ForwarderInterface {
  execute: (args: {
    request: MetaTxRequest;
    signature: string;
  }) => EvmTransactionTypeExtended[];
  verify: (args: {
    request: MetaTxRequest;
    signature: string;
  }) => EvmTransactionTypeExtended[];
  signMetaTxRequest: (
    input: MetaTxInput
  ) => Promise<{ signature: string; request: MetaTxRequest }>;
  relay: (args: {
    request: MetaTxRequest;
    signature: string;
    whitelist?: string[];
  }) => Promise<EvmTransactionTypeExtended[]>;
}

export class ForwarderService
  extends BaseService<Contract>
  implements ForwarderInterface
{
  readonly forwarderAddress: string;

  constructor(args: {
    provider: providers.Provider | providers.Web3Provider;
    forwarderAddress?: string;
  }) {
    const { provider, forwarderAddress } = args;
    super({
      provider,
      contractFactory: MinimalForwarder__factory,
    });
    this.forwarderAddress = forwarderAddress ?? "";
  }
  public execute(args: { request: MetaTxRequest; signature: string }) {
    const { request, signature } = args;
    if (!request) throw new Error("Request is required");
    if (!signature) throw new Error("Signature is required");
    const forwarderContract = this.getContractInstance(this.forwarderAddress);
    const gasLimit = (Number(request.gas) + 500000).toString();
    const txCallback: () => Promise<TxType> = this.generateTxCallback({
      rawTxMethod: async () =>
        forwarderContract.populateTransaction.execute(request, signature, {
          gasLimit,
        }),
      from: forwarderContract.address,
    });
    return [
      {
        tx: txCallback,
        txType: EvmTxType.EXECUTE_REQUEST,
        gas: this.generateTxPriceEstimation([], txCallback),
      },
    ];
  }

  public verify(args: { request: MetaTxRequest; signature: string }) {
    const { request, signature } = args;
    if (!request) throw new Error("Request is required");
    if (!signature) throw new Error("Signature is required");
    const forwarderContract = this.getContractInstance(this.forwarderAddress);
    const txCallback: () => Promise<TxType> = this.generateTxCallback({
      rawTxMethod: async () =>
        forwarderContract.populateTransaction.verify(request, signature),
      from: forwarderContract.address,
    });
    return [
      {
        tx: txCallback,
        txType: EvmTxType.VERIFY_REQUEST,
        gas: this.generateTxPriceEstimation([], txCallback),
      },
    ];
  }

  public async signMetaTxRequest(
    input: MetaTxInput
  ): Promise<{ signature: string; request: MetaTxRequest }> {
    console.log("before request");
    const request = await this.buildRequest(input);
    console.log("request", JSON.stringify(request));
    const toSign = await this.buildTypedData(request);
    console.log("toSign", JSON.stringify(toSign));
    const signature = await this.signTypedData({
      from: input.from,
      data: toSign,
    });
    console.log("signature", signature);
    return { signature, request };
  }

  public async relay(args: {
    request: MetaTxRequest;
    signature: string;
    whitelist?: string[];
  }): Promise<EvmTransactionTypeExtended[]> {
    const { request, signature, whitelist } = args;
    const forwarderContract = this.getContractInstance(this.forwarderAddress);
    const accepts = !whitelist || whitelist.includes(request.to);
    if (!accepts) throw new Error(`Rejected request to ${request.to}`);

    let valid: boolean = await forwarderContract.verify(request, signature);
    if (!valid) throw new Error(`Invalid request`);

    return this.execute({
      request,
      signature,
    });
  }

  private getMetaTxTypeData({
    chainId,
    verifyingContract,
  }: {
    chainId: number;
    verifyingContract: EvmAddress;
  }): MetaTxTypeData {
    return {
      domain: {
        name: "Blockswan/MinimalForwarder",
        version: "0.0.1",
        chainId,
        verifyingContract,
      },
      types: {
        EIP712Domain,
        ForwardRequest,
      },
      primaryType: "ForwardRequest",
    };
  }

  private async signTypedData({
    from,
    data,
  }: {
    from: EvmAddress;
    data: MetaTxTypeData & {
      message: MetaTxRequest;
    };
  }) {
    let signature: string = await (this.provider as providers.Web3Provider)
      .send("eth_signTypedData_v4", [from, JSON.stringify(data)])
      .then((res) => {
        signature = res;
        console.log("signature", signature);
        return signature;
      })
      .catch((err) => {
        console.log("err", err);
        throw err;
      });

    return signature;
  }

  private async buildTypedData(request: MetaTxRequest): Promise<
    MetaTxTypeData & {
      message: MetaTxRequest;
    }
  > {
    const forwarderContract = this.getContractInstance(this.forwarderAddress);
    let id: number;
    try {
      id = await forwarderContract.provider
        .getNetwork()
        .then((network) => network.chainId);
    } catch {
      id = ChainId.mumbai;
    }
    const typeData = this.getMetaTxTypeData({
      chainId: id,
      verifyingContract: this.forwarderAddress,
    });
    return { ...typeData, message: request };
  }

  private async buildRequest(input: MetaTxInput): Promise<MetaTxRequest> {
    const forwarderContract = this.getContractInstance(this.forwarderAddress);
    const nonce = await forwarderContract
      .getNonce(input.from)
      .then((nonce: any) => nonce.toString())
      .catch(() => 0);
    const request: MetaTxRequest = { value: 0, gas: 1e6, nonce, ...input };
    return request;
  }
}
