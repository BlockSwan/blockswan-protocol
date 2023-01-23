import { OutputTypes as OrderOutputs } from '../../types/protocol/order/Order';
import { OutputTypes as GigOutputs } from '../../types/protocol/gig/Gig';

import { waitForTx } from '../../utilities/tx';
import { expect } from 'chai';
import { BUYER_ENTRY_PARAMS, DEFAULT_BALANCE, GIG_CREATION_PARAMS, GIG_TEST0, GIG_TEST1, ORDER_CREATION_PARAMS, ORDER_TEST0, SELLER_ENTRY_PARAMS, USER_TEST0, USER_TEST1, XP_VALUES } from '../../helpers/constants';
import { getBalances, setupBuyer, setupSeller, setupUser } from '../../helpers/test_helpers';
import { Balance, GigInput, OrderState, ProtocolErrors, SignerWithAddress, TestEnv, UserInput } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { gig } from '../../types/protocol';
import { calcFees, calcOrderPrice } from '../../utilities/helpers';





describe('Order: createOrder', () => {
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
	})

	describe("can create an order ", () => {

		beforeEach(async () => {

			async function setup(user: SignerWithAddress, userArgs: UserInput, gigArgs: GigInput, userBalance: Balance, role: "buyer" | "seller") {
				await setupUser(user, userArgs)
				if (role === "seller") {
					await setupSeller(user, userBalance);
					await Gig.connect(user.signer).createGig(...gigArgs)
				}
				else await setupBuyer(user, userBalance);
			}
			orderBalanceBefore = await getBalances(Order)
			await setup(seller, USER_TEST0, GIG_TEST0, sellerBalanceBefore, "seller");
			await setup(buyer, USER_TEST1, GIG_TEST1, buyerBalanceBefore, "buyer");
			await setup(random, USER_TEST1, GIG_TEST1, DEFAULT_BALANCE, "seller");

			timestamp = await time.latest();
			buyerBalanceBefore = await getBalances(buyer);
			waitForTx(
				await Order.connect(buyer.signer).createOrder(ORDER_TEST0)
			)
			gigData = await Gig.getGigById(0);
			orderData = await Order.getOrderById(0);
		})

		it("should have the correct metadata", async () => {
			expect(orderData.metadata).to.be.equal(gigData.metadata)
		})

		it("should have the correct brief", async () => {
			expect(orderData.brief).to.be.equal(ORDER_TEST0.brief)

		})

		it("should have the correct state", async () => {
			expect(orderData.state).to.be.equal(OrderState.UNCONFIRMED);
		})

		it("should have the correct created timestamp", async () => {
			expect(orderData.createdAt).to.be.closeTo(timestamp, 20, "Invalid timestamp");
		})
		it("should have the correct buyerId", async () => {
			expect(orderData.buyerId).to.be.equal(ORDER_TEST0.buyerId);
		})

		it("should have the correct sellerId", async () => {
			expect(orderData.sellerId).to.be.equal(ORDER_TEST0.sellerId);
		})

		it("should have the correct gigId", async () => {
			expect(orderData.gigId).to.be.equal(ORDER_TEST0.gigId);
		})

		it("should have the correct package", async () => {
			expect(orderData.package).to.deep.equal(gigData.packages[Number(ORDER_TEST0.packageId)]);
		})

		it("should have the correct currency", async () => {
			expect(orderData.currency).to.be.equal((await dat.currency()));
		})

		it("should have the correct seller order fees versions", async () => {
			expect(orderData.sellerFeesVersion).to.be.equal(0);
		})

		it("should have the correct trial fees", async () => {
			expect(orderData.toTrial).to.be.equal(calcFees(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS.trialFlat, ORDER_CREATION_PARAMS.trialPercent));
		})

		it("should have the correct proceed fees", async () => {
			expect(orderData.toProceed).to.be.equal(calcFees(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS.proceedFlat, ORDER_CREATION_PARAMS.proceedPercent));
		})

		describe('Relations', () => {
			it("orderId should be present at the gig level", async () => {
				expect(gigData.orderIds).to.deep.include(orderData.orderId);
			})
			it("orderId should be present at the user level", async () => {
				let userData = await User.getUserById(1);
				expect(userData.buyerOrderIds).to.deep.include(orderData.orderId);
			})
		})

		describe("Balances:", () => {
			let buyerBalanceAfter: Balance;
			let sellerBalanceAfter: Balance;
			let orderBalanceAfter: Balance;
			beforeEach(async () => {
				buyerBalanceAfter = await getBalances(buyer);
				sellerBalanceAfter = await getBalances(seller);
				orderBalanceAfter = await getBalances(Order);
			})
			it("buyer should have paid UDSC", async () => {
				expect(buyerBalanceAfter.USDC).to.be.equal(buyerBalanceBefore.USDC - calcOrderPrice(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS));
			})
			it("Order contact should have received the total price", async () => {
				expect(orderBalanceAfter.USDC).to.be.equal(orderBalanceBefore.USDC + calcOrderPrice(gigData.packages[Number(ORDER_TEST0.packageId)].price, ORDER_CREATION_PARAMS));
			})
		})

		describe("Can't create an order", () => {
			it("should revert if buyer's time has elapsed", async () => {
				await time.increase(BUYER_ENTRY_PARAMS.timeAdded);
				expect(
					Order.connect(buyer.signer).createOrder(ORDER_TEST0)
				).to.be.revertedWith(ProtocolErrors.ONLY_BUYER)
			})
			it("should revert if gigId not owned by the seller", async () => {
				expect(
					Order.connect(buyer.signer).createOrder({
						sellerId: 0,
						buyerId: 1,
						gigId: 2,
						packageId: 1,
						brief: "brief0"
					})

				).to.be.revertedWith(ProtocolErrors.NOT_GIG_OWNER)
			})

			it("should revert if seller's time has elapsed", async () => {
				await time.increase(SELLER_ENTRY_PARAMS.timeAdded);
				expect(
					Order.connect(buyer.signer).createOrder(ORDER_TEST0)
				).to.be.revertedWith(ProtocolErrors.ONLY_SELLER)
			})
		})

	})


});