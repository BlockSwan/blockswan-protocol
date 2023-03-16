import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDispute, IDisputeInterface } from "../../interfaces/IDispute";
export declare class IDispute__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "disputeId";
            readonly type: "uint256";
        }];
        readonly name: "NewDispute";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orderId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "procecutorId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "defendantId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "userId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "role";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }];
            readonly internalType: "struct DataTypes.Evidence";
            readonly name: "evidence";
            readonly type: "tuple";
        }];
        readonly name: "createDispute";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "disputeId";
            readonly type: "uint256";
        }];
        readonly name: "getDisputeById";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "gigId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "createdAt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "successSell";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "failedSell";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "orderIds";
                readonly type: "uint256[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "price";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "timeDelivery";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct DataTypes.Package[3]";
                readonly name: "packages";
                readonly type: "tuple[3]";
            }];
            readonly internalType: "struct OutputTypes.GigOutput";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDisputeList";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "createdAt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "disputeId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "orderId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "ruling";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "ruledAt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "timestamps";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "enum DataTypes.DisputeState";
                readonly name: "state";
                readonly type: "uint8";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "roundId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "procecutorId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "defendantId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "appealFeeRewards";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "tokensAtStakePerJuror";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalFeesForJurors";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxVotes";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "penalties";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "winningChoice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalRepartitions";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalVoted";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "totalCommited";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256[11]";
                    readonly name: "counts";
                    readonly type: "uint256[11]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "evidenceSubmitters";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "appealedBy";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "commit";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "choice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "weight";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "string";
                        readonly name: "justification";
                        readonly type: "string";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "hasVoted";
                        readonly type: "bool";
                    }];
                    readonly internalType: "struct DataTypes.Vote[]";
                    readonly name: "votes";
                    readonly type: "tuple[]";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "userId";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "role";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "string";
                        readonly name: "metadata";
                        readonly type: "string";
                    }];
                    readonly internalType: "struct DataTypes.Evidence[]";
                    readonly name: "evidences";
                    readonly type: "tuple[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "drawnJurors";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "judgesClaimed";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "closed";
                    readonly type: "bool";
                }];
                readonly internalType: "struct OutputTypes.RoundOutput[]";
                readonly name: "rounds";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct OutputTypes.DisputeOutput[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDisputesCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IDisputeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDispute;
}
