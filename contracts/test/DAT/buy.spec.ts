import { expect } from 'chai';
import { MAX_UINT_AMOUNT, MIN_INVESTMENT } from '../../helpers/constants';
import { SignerWithAddress, TestEnv } from '../../helpers/types';
import { waitForTx } from '../../utilities/tx';
import makeSuite from '../fixtures/makeSuite';
import { render } from "prettyjson";


describe('DAT: buy', () => {
	let testEnv = {} as TestEnv;
	let user: SignerWithAddress;
	const amount = 50 * 10 ** 6;

	beforeEach(async () => {
		testEnv = await makeSuite();
		user = testEnv.users[4];
	})

	it("balanceOf should be 0 by default", async () => {
		const balance = await (await testEnv.dat.balanceOf(user.address)).toNumber()
		expect(balance).to.be.equal(0);
	});

	describe("can buy tokens", () => {



		beforeEach(async () => {
			waitForTx(await testEnv.mUSDC.connect(user.signer).mint(amount));
			waitForTx(await testEnv.mUSDC.connect(user.signer).increaseAllowance(testEnv.dat.address, amount));
			waitForTx(await testEnv.dat.connect(user.signer).buy(user.address, MIN_INVESTMENT, "1"))
		});

		it("balanceOf should have increased", async () => {

			let balance = await (await testEnv.dat.balanceOf(user.address)).toNumber()
			expect(balance).to.be.greaterThan(0);
		});


	});

});