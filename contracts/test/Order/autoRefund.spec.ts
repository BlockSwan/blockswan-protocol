import { OutputTypes as OrderOutputs } from '../../types/protocol/order/Order';
import { OutputTypes as GigOutputs } from '../../types/protocol/gig/Gig';

import { waitForTx } from '../../utilities/tx';
import { expect } from 'chai';
import { BUYER_ENTRY_PARAMS, DEFAULT_BALANCE, DELAYS_TIMESTAMP, GIG_CREATION_PARAMS, GIG_TEST0, GIG_TEST1, ORDER_CREATION_PARAMS, ORDER_TEST0, SELLER_ENTRY_PARAMS, USER_TEST0, USER_TEST1, XP_VALUES } from '../../helpers/constants';
import { getBalances, passSelfRefundDelay, setupBuyer, setupSeller, setupUser } from '../../helpers/test_helpers';
import { Balance, GigInput, OrderState, ProtocolErrors, SignerWithAddress, TestEnv, UserInput } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { gig } from '../../types/protocol';
import { calcFees, calcOrderPrice } from '../../utilities/helpers';




describe('Order: autoRefund', () => {
	let testEnv = {} as TestEnv;
	let { User, XP, ProtocolConfigurator, mUSDC, dat, ACLManager, Gig, Order } = testEnv;
	let buyer: SignerWithAddress;
	let seller: SignerWithAddress;
	let random: SignerWithAddress;
	let buyerBalanceBefore: Balance;
	let sellerBalanceBefore: Balance;
	let orderBalanceBefore: Balance;
	let timestamp: number;
	let orderData: OrderOutputs.OrderOutputStruct;
	let gigData: GigOutputs.GigOutputStructOutput;




	beforeEach(async () => {
		testEnv = await makeSuite();
		User = testEnv.User;
		Gig = testEnv.Gig;
		mUSDC = testEnv.mUSDC;
		Order = testEnv.Order;
		dat = testEnv.dat;
		XP = testEnv.XP;
		ACLManager = testEnv.ACLManager;
		ProtocolConfigurator = testEnv.ProtocolConfigurator;
		buyer = testEnv.users[0];
		buyerBalanceBefore = DEFAULT_BALANCE
		seller = testEnv.users[1];
		sellerBalanceBefore = DEFAULT_BALANCE
		random = testEnv.users[2];
		sellerBalanceBefore = DEFAULT_BALANCE

		async function setup(user: SignerWithAddress, userArgs: UserInput, gigArgs: GigInput, userBalance: Balance, role: "buyer" | "seller") {
			await setupUser(user, userArgs)
			if (role === "seller") {
				await setupSeller(user, userBalance);
				await Gig.connect(user.signer).createGig(...gigArgs)
			}
			else await setupBuyer(user, userBalance);
		}
		
		await setup(seller, USER_TEST0, GIG_TEST0, sellerBalanceBefore, "seller");
		await setup(buyer, USER_TEST1, GIG_TEST1, buyerBalanceBefore, "buyer");
		await setup(random, USER_TEST1, GIG_TEST1, DEFAULT_BALANCE, "seller");

		timestamp = await time.latest();
	
		waitForTx(
			await Order.connect(buyer.signer).createOrder(ORDER_TEST0)
		)
		buyerBalanceBefore = await getBalances(buyer);
		orderBalanceBefore = await getBalances(Order)
		gigData = await Gig.getGigById(0);
		orderData = await Order.getOrderById(0);
	})

	describe("can auto-refund", () => {

		beforeEach(async () => {
			await time.increase(Number(DELAYS_TIMESTAMP.selfRefund) * 2);
			waitForTx(
				await Order.connect(buyer.signer).autoRefund(orderData.orderId, orderData.buyerId)
			);
		
		})

		it("should have the correct state", async () => {
			orderData = await Order.getOrderById(0);
			expect(orderData.state).to.be.equal(OrderState.DONE)
		})
		it("Order contract should refund buyer", async () => {
			let orderBalanceAfter = await getBalances(Order);
			let buyerBalanceAfter = await getBalances(buyer);
			expect(orderBalanceAfter.USDC).to.be.equal(orderBalanceBefore.USDC- calcOrderPrice(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS))
			expect(buyerBalanceAfter.USDC).to.be.equal(buyerBalanceBefore.USDC + calcOrderPrice(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS))

		})
	})

	describe("Can't auto-refund", () => {
		it("should revert if caller not buyer", async () => {
				await passSelfRefundDelay();
			expect(
				Order.connect(seller.signer).autoRefund(orderData.orderId, orderData.buyerId)
			).to.be.revertedWith(ProtocolErrors.CALLER_NOT_BUYER_ID)
		})
		it("should revert if buyerId not order buyer", async () => {
				await passSelfRefundDelay()
			expect(
				Order.connect(buyer.signer).autoRefund(orderData.orderId, orderData.buyerId)
			).to.be.revertedWith(ProtocolErrors.NOT_ORDER_BUYER)
		})
		it("should revert if state is not UNCOMFIRMED", async () => {
				await passSelfRefundDelay()
			waitForTx( 
				await Order.connect(seller.signer).confirmOrder(orderData.orderId,orderData.sellerId)
			)
			expect(
				Order.connect(buyer.signer).autoRefund(orderData.orderId, orderData.buyerId)
			).to.be.revertedWith(ProtocolErrors.INVALID_ORDER_STATE)
		})

		it("should revert if selfRefund delay is not over", async () => {
			await time.increase(Number(DELAYS_TIMESTAMP.selfRefund)-1);
			expect(
				Order.connect(buyer.signer).autoRefund(orderData.orderId, orderData.buyerId)
			).to.be.revertedWith(ProtocolErrors.SELF_REFUND_DELAY_NOT_OVER)
		})
	})


});