import { waitForTx } from './../../utilities/tx';
import { expect } from 'chai';
import { BUYER_ENTRY_PARAMS, BUYER_ROLE, DEFAULT_BALANCE, USER_BIGINVITER_TEST, USER_TEST0, USER_TEST1, USER_TEST2, XP_VALUES } from '../../helpers/constants';
import { getBalances, setupBuyer, setupUser } from '../../helpers/test_helpers';
import { Balance, ProtocolErrors, SignerWithAddress, TestEnv, UserInput, } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";






describe('User: becomeBuyer', () => {
	let testEnv = {} as TestEnv;
	let { User, XP, ProtocolConfigurator, mUSDC, dat, ACLManager } = testEnv;
	let user0: SignerWithAddress;
	let user1: SignerWithAddress;
	let user2: SignerWithAddress;
	let user0BalanceBefore: Balance;
	let user1BalanceBefore: Balance;
	let user2BalanceBefore: Balance;
	let timestamp: number;


	beforeEach(async () => {


		testEnv = await makeSuite();
		User = testEnv.User;
		mUSDC = testEnv.mUSDC;
		dat = testEnv.dat;
		XP = testEnv.XP;
		ACLManager = testEnv.ACLManager;
		ProtocolConfigurator = testEnv.ProtocolConfigurator;


		user0 = testEnv.users[0];
		user0BalanceBefore = DEFAULT_BALANCE
		user1 = testEnv.users[1];
		user1BalanceBefore = DEFAULT_BALANCE
		user2 = testEnv.users[2];
		user2BalanceBefore = DEFAULT_BALANCE


	})

	describe("can become buyer", () => {

		async function setup(user: SignerWithAddress, createArgs: UserInput, balanceBefore: Balance) {
			await setupUser(user, createArgs);
			await setupBuyer(user, balanceBefore);
		}

		beforeEach(async () => {
			await setup(user0, USER_TEST0, user0BalanceBefore).then(async () => {
				timestamp = await time.latest();
			});
			await setup(user1, USER_TEST1, user1BalanceBefore);
			await setup(user2, USER_TEST2, user2BalanceBefore);
		})
		it("user0 should have buyer role", async () => {
			let isBuyer = await ACLManager.hasRole(BUYER_ROLE, user0.address);
			expect(isBuyer).to.be.equal(true, "User is not correctly set to BUYER_ROLE")
		})
		it("user0 should have more buyer time", async () => {

			let userData = await User.getUserByAddress(user0.address);
			expect(userData[2]).to.be.equal(timestamp + BUYER_ENTRY_PARAMS.timeAdded, "Invalid buyer time added");
		})
		it("user0 should have more buyer invitations", async () => {
			let userData = await User.getUserByAddress(user0.address);
			expect(userData[3]).to.be.equal(BUYER_ENTRY_PARAMS.invitationEarned, "Invalid invitation earned added");
		})
		it("user0 should have more xp", async () => {
			let userXP = await XP.balanceOf(user0.address);
			expect(userXP.toNumber()).to.be.equal(XP_VALUES[0].amount);
		})

		describe("Entry fees", () => {
			let user0balanceAfter: Balance;
			let user1balanceAfter: Balance;
			let user2balanceAfter: Balance;
			beforeEach(async () => {
				user0balanceAfter = await getBalances(user0);
				user1balanceAfter = await getBalances(user1);
				user2balanceAfter = await getBalances(user2);
			})
			it("users should have paid entry fees", async () => {

				expect(user0balanceAfter.USDC).to.be.equal(user0BalanceBefore.USDC - BUYER_ENTRY_PARAMS.currencyValue)
				expect(user1balanceAfter.USDC).to.be.equal(user1BalanceBefore.USDC - BUYER_ENTRY_PARAMS.currencyValue)
				expect(user2balanceAfter.USDC).to.be.equal(user2BalanceBefore.USDC - BUYER_ENTRY_PARAMS.currencyValue)
			})
			it("inviters should have received BSWAN share", async () => {
				expect(user0balanceAfter.BSWAN).to.be.greaterThan(user0BalanceBefore.BSWAN)
				expect(user1balanceAfter.BSWAN).to.be.greaterThan(user1BalanceBefore.BSWAN)
				expect(user2balanceAfter.BSWAN).to.be.equal(user2BalanceBefore.BSWAN)
			})
			it("inviters should have received BSWAN share", async () => {
				expect(user0balanceAfter.BSWAN).to.be.greaterThan(user0BalanceBefore.BSWAN)
				expect(user1balanceAfter.BSWAN).to.be.greaterThan(user1BalanceBefore.BSWAN)
				expect(user2balanceAfter.BSWAN).to.be.equal(user2BalanceBefore.BSWAN)
			})

		})

		describe("Failed to become buyer", () => {
			it("should revert if already buyer", async () => {
				await expect(
					User.connect(user0.signer).becomeBuyer()
				).to.be.revertedWith(ProtocolErrors.RESTRICTED_TO_BUYER);
			});
		})
	})


});