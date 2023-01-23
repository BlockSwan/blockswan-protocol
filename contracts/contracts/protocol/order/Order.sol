// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {GPv2SafeERC20} from "../../imports/gnosis/contracts/GPv2SafeERC20.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {IERC20} from "../../imports/openzeppelin/contracts/IERC20.sol";
import {OrderLogic} from "../libraries/logics/OrderLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";
import {Errors} from "../libraries/helpers/Errors.sol";

import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";
import {XPKeys} from "../libraries/helpers/XPKeys.sol";
import {OrderStorage} from "./OrderStorage.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";
import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";
import {IGig} from "../../interfaces/IGig.sol";

/**
 * @title	Order contract
 * @author	Blockswan
 * @notice  Order data within an Blockswan protocol's marketplace
 * - Users can:
 *   # create new orders
 *   # manage their orders
 * @dev To be covered by a proxy contract, owned by the addressProvider of the specific marketplace
 * @dev All admin functions are callable by the protocolConfigurator contract defined also in the
 *   addressProvider
 **/

contract Order is OrderStorage, ProviderContract {
    using EnumerableSet for EnumerableSet.UintSet;
    using OrderLogic for DataTypes.Order;
    using GPv2SafeERC20 for IERC20;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {}

    function getOrderCount() public view virtual returns (uint256) {
        uint256 count = _orderIds.length();
        return count;
    }

    function getOrderById(
        uint256 orderId
    ) public view virtual returns (OutputTypes.OrderOutput memory) {
        DataTypes.Order storage order = OrderLogic.getOrderById(
            orderId,
            _orders
        );
        return order.format(orderId);
    }

    function getOrderList()
        external
        view
        virtual
        returns (OutputTypes.OrderOutput[] memory)
    {
        uint256 len = getOrderCount();
        OutputTypes.OrderOutput[]
            memory orderList = new OutputTypes.OrderOutput[](len);
        for (uint256 i = 0; i < len; i++) {
            orderList[i] = getOrderById(i);
        }
        return orderList;
    }

    function createOrder(
        InputTypes.CreateOrderInput memory input
    ) external onlyStillBuyer {
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isGigOwner(input.sellerId, input.gigId, UserContract),
            Errors.NOT_GIG_OWNER
        );
        require(
            isStillSeller(UserContract.getAddressById(input.sellerId)),
            Errors.ONLY_SELLER
        );
        address caller = _msgSender();
        uint256 newId = getOrderCount();
        // add the relation to the seller gig and get the packages/metadata
        (, string memory metadata, DataTypes.Package memory package) = IGig(
            fetchContract(RegistryKeys.GIG)
        ).createOrder(newId, input.gigId, input.packageId);
        // add the relation to the buyer orders
        UserContract.createBuyerOrder(input.buyerId, newId);

        // save the order
        _createOrder(
            caller,
            metadata,
            package,
            InputTypes.OrderRelationInput({
                newId: newId,
                buyerId: input.buyerId,
                sellerId: input.sellerId,
                gigId: input.gigId
            }),
            input
        );
        // give xp
        _giveXP(XPKeys.CREATE_ORDER, caller);
    }

    function confirmOrder(uint256 orderId, uint256 sellerId) external {
        address caller = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isCallerUser(caller, sellerId, UserContract),
            Errors.CALLER_NOT_SELLER_ID
        );
        OrderLogic.executeConfirmOrder(orderId, sellerId, _orders);
    }

    function autoRefund(uint256 orderId, uint256 buyerId) external {
        address caller = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isCallerUser(caller, buyerId, UserContract),
            Errors.CALLER_NOT_BUYER_ID
        );
        DataTypes.DelayTimestamp memory delays = getProtocolDelayTimestamp();
        (uint256 paidByBuyer, IERC20 currency) = OrderLogic.executeAutoRefund(
            orderId,
            buyerId,
            delays.selfRefund,
            _orders
        );
        _transfer(paidByBuyer, caller, currency);
    }

    function payOrder(uint256 orderId, uint256 buyerId) external {
        address buyer = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isCallerUser(buyer, buyerId, UserContract),
            Errors.CALLER_NOT_BUYER_ID
        );
        (
            uint256 orderPrice,
            uint256 trialRefund,
            uint256 proceedFees,
            uint256 sellerId,
            uint256 sellerFeesVersion,
            IERC20 currency
        ) = OrderLogic.executePayOrder(orderId, buyerId, _orders);
        _transfer(trialRefund, buyer, currency);
        // get the retribution params
        DataTypes.RetributionParams
            memory retributionParams = getProtocolRetributionParams();
        // process payment for buyer proceed fees
        _processOrderPayment(
            proceedFees,
            buyer,
            retributionParams,
            UserContract
        );
        (, uint256 toProceed, ) = OrderLogic.calcOrderPrice(
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getSellerOrderFees(sellerFeesVersion),
            orderPrice
        );
        address sellerAccount = UserContract.getAddressById(sellerId);
        _transfer(orderPrice - toProceed, sellerAccount, currency);
        _processOrderPayment(
            toProceed,
            sellerAccount,
            retributionParams,
            UserContract
        );
    }

    function _processOrderPayment(
        uint256 currencyValue,
        address account,
        DataTypes.RetributionParams memory retributionParams,
        IUser UserContract
    ) internal {
        (address inviter0, address inviter1) = getInvitersByAddress(
            account,
            UserContract
        );
        OutputTypes.CalcInvitersRewardsOutput memory rewards = InviterLogic
            .calcInvitersRewards(
                InputTypes.CalcInvitersRewardsInput({
                    currencyValue: currencyValue,
                    affiliateShare: retributionParams.affiliate,
                    lvl0AffiliateShare: retributionParams.lvl0AffiliateShare
                })
            );
        _processPayment(
            InputTypes.ProcessPaymentInput({
                caller: address(this),
                inviter0: inviter0,
                inviter1: inviter1,
                inviter0Rewards: rewards.inviter0Rewards,
                inviter1Rewards: rewards.inviter1Rewards,
                remainingRewards: rewards.remainingRewards
            })
        );
        _giveXP(XPKeys.PAY_ORDER, account);
    }

    function getInvitersByAddress(
        address account,
        IUser UserContract
    ) public view returns (address, address) {
        return UserContract.getInvitersByUserAddress(account);
    }

    function getInvitersById(
        uint256 userId
    ) public view returns (address, address) {
        return IUser(fetchContract(RegistryKeys.USER)).getInvitersById(userId);
    }

    function _createOrder(
        address caller,
        string memory metadata,
        DataTypes.Package memory package,
        InputTypes.OrderRelationInput memory relations,
        InputTypes.CreateOrderInput memory input
    ) internal {
        // get the order creation params
        (
            DataTypes.OrderPriceParams memory orderParams,
            uint256 sellerFeesVersion
        ) = IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getOrderCreationParams();

        (uint256 toTrial, uint256 toProceed, uint256 total) = OrderLogic
            .calcOrderPrice(orderParams, package.price);

        IERC20 currency = IERC20(
            IBSWAN(fetchContract(RegistryKeys.DAT)).currency()
        );

        OrderLogic.executeCreateOrder(
            _orderIds,
            _orders,
            InputTypes.ExecuteCreateOrderInput({
                metadata: metadata,
                brief: input.brief,
                fees: InputTypes.OrderFeesInput({
                    sellerFeesVersion: sellerFeesVersion,
                    toTrial: toTrial,
                    toProceed: toProceed
                }),
                relations: relations,
                package: package,
                currency: currency
            })
        );
        // send fund to contract
        _sendFundToContract(total, caller, currency);
    }

    function _sendFundToContract(
        uint256 amount,
        address caller,
        IERC20 currency
    ) internal {
        currency.safeTransferFrom(caller, address(this), amount);
    }

    function _transfer(uint256 amount, address _to, IERC20 currency) internal {
        currency.safeTransfer(_to, amount);
    }

    function isCallerUser(
        address caller,
        uint256 userId,
        IUser UserContract
    ) public view returns (bool) {
        return UserContract.getIdByAddress(caller) == userId;
    }
}