import { expect } from 'chai';
import { DEFAULT_BALANCE, SELLER_ENTRY_PARAMS, SELLER_ROLE, USER_TEST0, USER_TEST1, USER_TEST2 } from '../../helpers/constants';
import { getBalances, setupSeller, setupUser } from '../../helpers/test_helpers';
import { Balance, ProtocolErrors, SignerWithAddress, TestEnv, UserInput } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";




describe('User: becomeSeller', () => {
	let testEnv = {} as TestEnv;
	let { User, ProtocolConfigurator, mUSDC, dat, ACLManager } = testEnv;
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


		beforeEach(async () => {

			async function setup(user: SignerWithAddress, createArgs: UserInput, userBalance: Balance) {
				await setupUser(user, createArgs);
				await setupSeller(user, userBalance);
			}
			await setup(user0, USER_TEST0, user0BalanceBefore).then(async () => {
				timestamp = await time.latest();
			});
			await setup(user1, USER_TEST1, user1BalanceBefore);
			await setup(user2, USER_TEST2, user2BalanceBefore);
		})
		it("user0 should have seller role", async () => {
			let isSeller = await ACLManager.hasRole(SELLER_ROLE, user0.address);
			expect(isSeller).to.be.equal(true, "User is not correctly set to SELLER_ROLE")
		})
		it("user0 should have more seller time", async () => {
			let userData = await User.getUserByAddress(user0.address);
			expect(userData[4]).to.be.equal(timestamp + SELLER_ENTRY_PARAMS.timeAdded, "Invalid seller time added");
		})
		it("user0 should have more seller invitations", async () => {
			let userData = await User.getUserByAddress(user0.address);
			expect(userData[5]).to.be.equal(SELLER_ENTRY_PARAMS.invitationEarned, "Invalid invitation earned added");
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

				expect(user0balanceAfter.USDC).to.be.equal(user0BalanceBefore.USDC - SELLER_ENTRY_PARAMS.currencyValue)
				expect(user1balanceAfter.USDC).to.be.equal(user1BalanceBefore.USDC - SELLER_ENTRY_PARAMS.currencyValue)
				expect(user2balanceAfter.USDC).to.be.equal(user2BalanceBefore.USDC - SELLER_ENTRY_PARAMS.currencyValue)
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

		describe("Failed to become seller", () => {
			it("should revert if already seller", async () => {
				await expect(
					User.connect(user0.signer).becomeSeller()
				).to.be.revertedWith(ProtocolErrors.RESTRICTED_TO_SELLER);
			});
		})
	})


});