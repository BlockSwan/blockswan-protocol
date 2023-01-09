import { expect } from 'chai';
import { MAX_UINT_AMOUNT, ZERO_ADDRESS } from '../../helpers/constants';
import { SignerWithAddress, TestEnv } from '../../helpers/types';
import { waitForTx } from '../../utilities/tx';
import makeSuite from '../fixtures/makeSuite';





describe('DAT: pay', () => {
	let testEnv = {} as TestEnv;
	let buyer: SignerWithAddress;
	let investor: SignerWithAddress;
	const payAmount: number = 42000000;

	beforeEach(async () => {
		testEnv = await makeSuite();
		buyer = testEnv.users[2];
		investor = testEnv.users[3];
		waitForTx(await testEnv.mUSDC.connect(investor.signer).mint(payAmount * 10));
		waitForTx(await testEnv.mUSDC.connect(buyer.signer).mint(payAmount * 10));
		waitForTx(await testEnv.mUSDC.connect(buyer.signer).approve(testEnv.dat.address, MAX_UINT_AMOUNT));
		waitForTx(await testEnv.mUSDC.connect(investor.signer).approve(testEnv.dat.address, MAX_UINT_AMOUNT));
		waitForTx(await testEnv.dat.connect(buyer.signer).buy(buyer.address, payAmount * 2, 1))
	})

	describe("on pay", () => {
		let investorBalanceBefore: number;

		beforeEach(async () => {
			investorBalanceBefore = (await testEnv.dat.balanceOf(investor.address)).toNumber()

			waitForTx(await testEnv.dat.connect(investor.signer).pay(ZERO_ADDRESS, payAmount))

		});
		it("The investor balance did not change", async () => {
			const balance = await testEnv.dat.balanceOf(investor.address);
			expect(balance.toNumber()).to.be.equal(investorBalanceBefore);
		});
	});

	it("can make a tiny payment", async () => {
		waitForTx(await testEnv.dat.connect(investor.signer).pay(investor.address, 1))
	});

});