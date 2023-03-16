import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGig, IGigInterface } from "../../interfaces/IGig";
export declare class IGig__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
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
            readonly indexed: false;
            readonly internalType: "struct DataTypes.Package[3]";
            readonly name: "packages";
            readonly type: "tuple[3]";
        }];
        readonly name: "GigAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
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
            readonly indexed: false;
            readonly internalType: "struct DataTypes.Package[3]";
            readonly name: "packages";
            readonly type: "tuple[3]";
        }];
        readonly name: "GigEdited";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
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
        readonly name: "createGig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newOrderId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "packageId";
            readonly type: "uint256";
        }];
        readonly name: "createOrder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
            readonly internalType: "struct DataTypes.Package";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }];
        readonly name: "getGigById";
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
        readonly name: "getGigList";
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
            readonly internalType: "struct OutputTypes.GigOutput[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGigsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }];
        readonly name: "getInvitersById";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getInvitersByUserAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IGigInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGig;
}
