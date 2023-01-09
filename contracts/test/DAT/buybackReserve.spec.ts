import { expect } from 'chai';
import { MAX_UINT_AMOUNT, MIN_INVESTMENT } from '../../helpers/constants';
import { SignerWithAddress, TestEnv } from '../../helpers/types';
import { waitForTx } from '../../utilities/tx';
import makeSuite from '../fixtures/makeSuite';
import { render } from "prettyjson";




describe('DAT: buybackReserve', () => {
	let testEnv = {} as TestEnv;


	beforeEach(async () => {
		testEnv = await makeSuite();
	});

	it("buybackReserve should be 0 by default", async () => {
		const reserve = (await testEnv.dat.buybackReserve()).toNumber()
		expect(reserve).to.be.equal(0);
	});

	describe("once excessive reserve", () => {
		beforeEach(async () => {
			waitForTx(
				await testEnv.mUSDC.mintTo(testEnv.dat.address, "390282366920938463463374607431768211455")
			)

		});

		it("buybackReserve should report as <= sqrt(MAX_UINT)", async () => {
			const reserve = await testEnv.dat.buybackReserve()
			expect(reserve.toString()).to.be.equal("340282366920938463463374607431768211455");
		});
	});

});