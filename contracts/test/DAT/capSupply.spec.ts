import { expect } from 'chai';
import { MAX_UINT_AMOUNT, MIN_INVESTMENT } from '../../helpers/constants';
import { SignerWithAddress, TestEnv } from '../../helpers/types';
import { waitForTx } from '../../utilities/tx';
import makeSuite from '../fixtures/makeSuite';
import { render } from "prettyjson";




describe('DAT: capSupply', () => {
	let testEnv = {} as TestEnv;
	let buyer: SignerWithAddress;


	before(async () => {
		testEnv = await makeSuite();
		buyer = testEnv.users[4];
		waitForTx(await testEnv.mUSDC.connect(buyer.signer).mint("30000000000000000000000000000000000000000000000000000000"))
		waitForTx(await testEnv.mUSDC.connect(buyer.signer).approve(testEnv.dat.address, MAX_UINT_AMOUNT));
		waitForTx(await testEnv.dat.connect(buyer.signer).buy(buyer.address, "30000000000000000000000000000000000000000000000000000000", 1))

	});

	xit("supply is near cap", async () => {
		const reserve = await testEnv.dat.totalSupply();
		expect(reserve.toString()).to.be.equal("77459666924148337745585307995647992216")
	});

	xit("buying over cap shouldFail", async () => {


		waitForTx(await testEnv.mUSDC.connect(buyer.signer).mint("30000000000000000000000000000000000000000000000000000000"))
		waitForTx(await testEnv.mUSDC.connect(buyer.signer).approve(testEnv.dat.address, MAX_UINT_AMOUNT));

		await expect(
			testEnv.dat.connect(buyer.signer).buy(buyer.address, "30000000000000000000000000000000000000000000000000000000", 1)
		).to.be.revertedWith("EXCESSIVE_SUPPLY")

	});

});