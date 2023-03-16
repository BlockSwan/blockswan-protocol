import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProtocolConfigurator, IProtocolConfiguratorInterface } from "../../interfaces/IProtocolConfigurator";
export declare class IProtocolConfigurator__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getBuyerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBuyerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getDelayTimestamp";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDelayTimestamp";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getDisputeParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDisputeParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGigCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getGigCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOrderCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getOrderCreationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getRetributionParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRetributionParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSellerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getSellerEntryParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSellerOrderFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "getSellerOrderFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateBuyerEntryParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "selfRefund";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "evidence";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "commit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vote";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appeal";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DelayTimestamp";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateDelayTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "minStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "alpha";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feePerJuror";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxVotes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.DisputeParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateDisputeParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.CreationParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateGigCreationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateOrderCreationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "affiliate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lvl0AffiliateShare";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.RetributionParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateRetributionParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "currencyValue";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "xpEarned";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "invitationEarned";
                readonly type: "uint8";
            }];
            readonly internalType: "struct DataTypes.EntryParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateSellerEntryParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "flat";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "percent";
                readonly type: "uint256";
            }];
            readonly internalType: "struct DataTypes.FeeParams";
            readonly name: "newParams";
            readonly type: "tuple";
        }];
        readonly name: "updateSellerOrderFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IProtocolConfiguratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProtocolConfigurator;
}
