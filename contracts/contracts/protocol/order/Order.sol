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
import {IDispute} from "../../interfaces/IDispute.sol";
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
            package.price,
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
        address buyerAddress = _msgSender();
        
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        require(
            isCallerUser(buyerAddress, buyerId, UserContract),
            Errors.CALLER_NOT_BUYER_ID
        );
        (
            DataTypes.Invoice memory invoice, uint256 sellerId, uint256 toSeller
        ) = OrderLogic.executePayOrder(orderId, buyerId, _orders);
        address sellerAddress= UserContract.getAddressById(sellerId);
        DataTypes.RetributionParams
            memory retributionParams = getProtocolRetributionParams();
        // process payment for buyer proceed fees
        _processOrderPayment(
            invoice.buyerFees,
            buyerAddress,
            retributionParams,
            UserContract
        );
         _processOrderPayment(
            invoice.sellerFees,
            sellerAddress,
            retributionParams,
            UserContract
        );
        _transfer(toSeller, sellerAddress, invoice.currency);
    }

    function refundOrder(uint256 orderId, uint256 sellerId, uint256 buyerId) external{
        address seller = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        address buyer = UserContract.getAddressById(buyerId);
       require(
            isCallerUser(seller, sellerId, UserContract),
            Errors.CALLER_NOT_SELLER_ID
        );
        (uint256 orderPrice, IERC20 currency) = OrderLogic.executeRefundOrder(orderId, sellerId, buyerId,_orders);
         _transfer(orderPrice, buyer, currency);
    }

    function dispute(uint256 orderId, uint256 sellerId, uint256 buyerId ) external {
        address caller = _msgSender();
        IUser UserContract = IUser(fetchContract(RegistryKeys.USER));
        IDispute DisputeContract = IDispute(fetchContract(RegistryKeys.DISPUTE));

        require(
            isCallerUser(caller, sellerId, UserContract) ||
                isCallerUser(caller, buyerId, UserContract),
            Errors.NOT_ORDER_ACTOR
        ); 
        uint256 newDisputeId =  DisputeContract.createDispute(orderId);
        OrderLogic.executeDispute(orderId, buyerId, sellerId, newDisputeId, _orders);
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
        
        IBSWAN dat = IBSWAN(fetchContract(RegistryKeys.DAT));
        _pay(InputTypes.ProcessPaymentInput({
            caller: address(this),
            inviter0: inviter0,
            inviter1: inviter1,
         inviter0Rewards: rewards.inviter0Rewards,
         inviter1Rewards: rewards.inviter1Rewards,
         remainingRewards: rewards.remainingRewards
        }), dat);
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
        uint256 price,
        InputTypes.OrderRelationInput memory relations,
        InputTypes.CreateOrderInput memory input
    ) internal {
        IProtocolConfigurator ProtocolConfigurator = IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            );
        DataTypes.FeeParams memory buyerFeeParams  = ProtocolConfigurator.getOrderCreationParams();
        DataTypes.FeeParams memory sellerFeeParams  = ProtocolConfigurator.getSellerOrderFees();

        IERC20 currency =  IERC20(
                    IBSWAN(fetchContract(RegistryKeys.DAT)).currency()
                );
        (, uint256 paidByBuyer) = OrderLogic.executeCreateOrder(
            _orderIds,
            _orders,
            InputTypes.ExecuteCreateOrderInput({
                price: price,
                metadata: metadata,
                brief: input.brief,
                fees: InputTypes.OrderFeesInput({
                    buyerFees: buyerFeeParams,
                    sellerFees: sellerFeeParams
                }),
                relations: relations,
                currency: currency
            })
        );
        // send fund to contract
        _sendFundToContract(paidByBuyer, caller, currency);
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
