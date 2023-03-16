import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUser, IUserInterface } from "../../interfaces/IUser";
export declare class IUser__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "userAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "newId";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviterId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct InputTypes.CreateUserInput";
            readonly name: "userData";
            readonly type: "tuple";
        }];
        readonly name: "UserAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "userAddress";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviterId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "userId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "offerIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "bidIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "buyerOrderIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "userReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewsIds";
                readonly type: "uint256[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct OutputTypes.UserOutput";
            readonly name: "userData";
            readonly type: "tuple";
        }];
        readonly name: "UserEdited";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "buyerId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "newOrderId";
            readonly type: "uint256";
        }];
        readonly name: "createBuyerOrder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newGigId";
            readonly type: "uint256";
        }];
        readonly name: "createGig";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "inviterId";
            readonly type: "uint256";
        }];
        readonly name: "createUser";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }];
        readonly name: "getAddressById";
        readonly outputs: readonly [{
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
        readonly name: "getIdByAddress";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pubKey";
            readonly type: "address";
        }];
        readonly name: "getUserByAddress";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviterId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "userId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "offerIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "bidIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "buyerOrderIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "userReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewsIds";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct OutputTypes.UserOutput";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "userId";
            readonly type: "uint256";
        }];
        readonly name: "getUserById";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviterId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "userId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "offerIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "bidIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "buyerOrderIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "userReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewsIds";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct OutputTypes.UserOutput";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUserList";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "metadata";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "inviterId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "buyerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerUntil";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sellerInvites";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "userId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "wallet";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "offerIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "bidIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "buyerOrderIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "gigReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "userReviewsIds";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "reviewsIds";
                readonly type: "uint256[]";
            }];
            readonly internalType: "struct OutputTypes.UserOutput[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUsersCount";
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
        }, {
            readonly internalType: "uint256";
            readonly name: "gigId";
            readonly type: "uint256";
        }];
        readonly name: "isGigOwner";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUserInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUser;
}
