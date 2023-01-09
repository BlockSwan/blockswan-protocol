import { expect } from 'chai';
import { COMMITMENT_BASIS_POINTS, ZERO_ADDRESS, MAX_UINT_AMOUNT, PERCENTAGE_FACTOR, } from '../../helpers/constants';
import { TestEnv } from '../../helpers/types';
import { waitForTx } from '../../utilities/tx';
import makeSuite from '../fixtures/makeSuite';




describe('DAT: _to', () => {
	let testEnv = {} as TestEnv;

	beforeEach(async () => {
		testEnv = await makeSuite();
		waitForTx(
			testEnv.mUSDC.mint("10000000000000000")
		)
		waitForTx(
			testEnv.mUSDC.transfer(testEnv.dat.address, 100000000)
		)
		waitForTx(
			testEnv.mUSDC.approve(testEnv.dat.address, MAX_UINT_AMOUNT)
		)
		waitForTx(
			await testEnv.mUSDC.connect(testEnv.users[4].signer).mint("10000000000000000")
		)
		waitForTx(
			await testEnv.mUSDC.connect(testEnv.users[4].signer).approve(testEnv.dat.address, MAX_UINT_AMOUNT)
		)
	})

	it("can update the minInvestment to MAX_UINT", async () => {

		waitForTx(
			await testEnv.dat.connect(testEnv.users[4].signer).buy(testEnv.users[4].address, 100000000, 1)
		)

		waitForTx(
			await testEnv.dat.updateConfig(
				await testEnv.dat.owner(),
				await testEnv.dat.revenueCommitmentBasisPoints(),
				MAX_UINT_AMOUNT,
			)
		)

		// reverts when trying to buy more than 10 or 10000  worth of tokens
		await expect(
			testEnv.dat.connect(testEnv.users[4].signer).buy(testEnv.users[4].address, 10_000000, 1)
		).to.be.revertedWith("PRICE_SLIPPAGE");
		await expect(
			testEnv.dat.connect(testEnv.users[4].signer).buy(testEnv.users[4].address, 10000_000000, 1)
		).to.be.revertedWith("PRICE_SLIPPAGE");
	});

	it("shouldFail when commitment is reduced", async () => {

		waitForTx(await testEnv.dat.updateConfig(
			await testEnv.dat.owner(),
			Number(COMMITMENT_BASIS_POINTS) * 2,
			await testEnv.dat.minInvestment(),
		)
		)
		await expect(
			testEnv.dat.updateConfig(
				await testEnv.dat.owner(),
				Number(COMMITMENT_BASIS_POINTS),
				await testEnv.dat.minInvestment(),
			)
		).to.be.revertedWith("COMMITMENT_MAY_NOT_BE_REDUCED")
	});

	it("shouldFail with INVALID_COMMITMENT", async () => {
		await expect(
			testEnv.dat.updateConfig(
				await testEnv.dat.owner(),
				Number(PERCENTAGE_FACTOR) * 1000,
				await testEnv.dat.minInvestment(),
			)
		).to.be.revertedWith("INVALID_COMMITMENT");
	});
	it("shouldFail with INVALID_MIN_INVESTMENT", async () => {
		await expect(
			testEnv.dat.updateConfig(
				await testEnv.dat.owner(),
				await testEnv.dat.revenueCommitmentBasisPoints(),
				"0",
			)
		).to.be.revertedWith("INVALID_MIN_INVESTMENT");

	});

	it("shouldFail with INVALID_ADDRESS when missing the beneficiary", async () => {
		await expect(
			testEnv.dat.updateConfig(
				ZERO_ADDRESS,
				await testEnv.dat.revenueCommitmentBasisPoints(),
				await testEnv.dat.minInvestment()
			)
		).to.be.revertedWith("INVALID_ADDRESS");
	});
});








