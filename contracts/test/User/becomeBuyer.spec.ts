import { waitForTx } from './../../utilities/tx';
import { expect } from 'chai';
import { BUYER_ENTRY_PARAMS, BUYER_ROLE, USER_BIGINVITER_TEST, USER_TEST } from '../../helpers/constants';
import { maxApproveUser } from '../../helpers/init_helpers';
import { mintAndApproveDAT } from '../../helpers/test_helpers';
import { ProtocolErrors, SignerWithAddress, TestEnv, UserInput } from '../../helpers/types';
import makeSuite from '../fixtures/makeSuite';
import { time } from "@nomicfoundation/hardhat-network-helpers";


type Balance = {
	USDC: number,
	BSWAN: number,
}

const defaultBalance = {
	USDC: 0,
	BSWAN: 0,
}

describe('User: becomeBuyer', () => {
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
		user0BalanceBefore = defaultBalance
		user1 = testEnv.users[1];
		user1BalanceBefore = defaultBalance
		user2 = testEnv.users[2];
		user2BalanceBefore = defaultBalance


	})

	describe("can become buyer", () => {

		async function getBalances(user: SignerWithAddress): Promise<Balance> {
			return {
				USDC: (await mUSDC.balanceOf(user.address)).toNumber(),
				BSWAN: (await dat.balanceOf(user.address)).toNumber()
			};
		}





		beforeEach(async () => {

			async function setup(user: SignerWithAddress, createArgs: UserInput, userBalance: Balance) {
				waitForTx(
					await User.connect(user.signer).createUser(...createArgs)
				)
				await mintAndApproveDAT(mUSDC.address, dat.address, user);
				await maxApproveUser(mUSDC.address, dat.address, User.address, user);
				let balances = await getBalances(user);
				userBalance.BSWAN = balances.BSWAN
				userBalance.USDC = balances.USDC;

				waitForTx(
					await User.connect(user.signer).becomeBuyer()
				)
			}
			await setup(user0, USER_TEST, user0BalanceBefore).then(async () => {
				timestamp = await time.latest();
			});
			await setup(user1, ["user1", 0], user1BalanceBefore);
			await setup(user2, ["user2", 1], user2BalanceBefore);
		})
		it("user0 should have buyer role", async () => {
			let isBuyer = await ACLManager.hasRole(BUYER_ROLE, user0.address);
			expect(isBuyer).to.be.equal(true, "User is not correctly set to BUYER_ROLE")
		})
		it("user0 should have more buyerTime", async () => {

			let userData = await User.getUserByAddress(user0.address);
			expect(userData[2]).to.be.equal(timestamp + BUYER_ENTRY_PARAMS.timeAdded, "Invalid buyer time added");
		})
		it("user0 should have more buyer invitations", async () => {
			let userData = await User.getUserByAddress(user0.address);
			expect(userData[3]).to.be.equal(BUYER_ENTRY_PARAMS.invitationEarned, "Invalid invitation earned added");
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