import { OutputTypes as OrderOutputs } from '../../types/protocol/order/Order';
import { OutputTypes as GigOutputs } from '../../types/protocol/gig/Gig';

import { waitForTx } from '../../utilities/tx';
import { expect } from 'chai';
import { BUYER_ENTRY_PARAMS, DEFAULT_BALANCE, DELAYS_TIMESTAMP, GIG_CREATION_PARAMS, GIG_TEST0, GIG_TEST1, ORDER_CREATION_PARAMS, ORDER_TEST0, SELLER_ENTRY_PARAMS, SELLER_ORDER_FEES_PARAMS, USER_TEST0, USER_TEST1, XP_VALUES } from '../../helpers/constants';
import { getBalances, passSelfRefundDelay, setupBuyer, setupSeller, setupUser } from '../../helpers/test_helpers';
import { Balance, GigInput, OrderState, ProtocolErrors, SignerWithAddress, TestEnv, UserInput } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { gig } from '../../types/protocol';
import { calcFees, calcOrderPrice } from '../../utilities/helpers';




describe('Order: Pay order', () => {
	let testEnv = {} as TestEnv;
	let { User, XP, ProtocolConfigurator, mUSDC, dat, ACLManager, Gig, Order, aclAdmin } = testEnv;
	let buyer: SignerWithAddress;
	let seller: SignerWithAddress;
	let random: SignerWithAddress;
	let buyerBalanceBefore: Balance;
	let sellerBalanceBefore: Balance;
	let orderBalanceBefore: Balance;
	let timestamp: number;
	let orderData: OrderOutputs.OrderOutputStruct;
	let gigData: GigOutputs.GigOutputStructOutput;
	let adminBalanceBefore: Balance;




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
		aclAdmin = testEnv.aclAdmin;

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
		gigData = await Gig.getGigById(0);
		orderData = await Order.getOrderById(0);
		waitForTx(
			await Order.connect(seller.signer).confirmOrder(orderData.orderId, orderData.sellerId)
		)
		buyerBalanceBefore = await getBalances(buyer);
		sellerBalanceBefore = await getBalances(seller);
		orderBalanceBefore = await getBalances(Order);
		adminBalanceBefore = await getBalances({
				signer: aclAdmin,
				address: await aclAdmin.getAddress()
		});

	})

	describe("can pay order", () => {
		let buyerBalanceAfter: Balance;
		let sellerBalanceAfter: Balance;
		let orderBalanceAfter:Balance;
		let adminBalanceAfter:Balance
		beforeEach(async () => {
			
			waitForTx(
				await Order.connect(buyer.signer).payOrder(orderData.orderId, orderData.buyerId)
			)
			buyerBalanceAfter = await getBalances(buyer)
			sellerBalanceAfter = await getBalances(seller)
			orderBalanceAfter = await getBalances(Order)
			adminBalanceAfter =  await getBalances({
				signer: aclAdmin,
				address: await aclAdmin.getAddress()
			});
		})


		it("should have refunded trial fees to buyer", async () => {
			expect(buyerBalanceAfter.USDC).to.be.equal(buyerBalanceBefore.USDC + calcFees(Number(orderData.package.price), ORDER_CREATION_PARAMS.trialFlat, ORDER_CREATION_PARAMS.trialPercent))
		})

		it("should have process proceed fees ", async () => {
			expect(adminBalanceAfter.BSWAN).to.be.greaterThan(adminBalanceBefore.BSWAN);
			expect(adminBalanceAfter.USDC).to.be.greaterThan(adminBalanceBefore.USDC);
		})
		it("seller should be paid", async () => {
			expect(sellerBalanceAfter.USDC).to.be.equal(sellerBalanceBefore.USDC + Number(orderData.package.price) - calcFees(Number(orderData.package.price), SELLER_ORDER_FEES_PARAMS.proceedFlat, SELLER_ORDER_FEES_PARAMS.proceedPercent) )
		})
		
	})

	


});