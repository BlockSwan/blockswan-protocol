import { LOG_JSON, MAXIMUM_EPOCH, NEW_INVESTOR_PER_EPOCH } from './rampage/settings';
import { yellow, bold, green } from "kleur";
import { Investor } from './rampage/Investor';
import { getRandomSigner } from '../../utilities/signers';
import { render } from "prettyjson";
import { BSWAN } from '../../types';
import { Market } from './rampage/Market';
import makeSuite from './makeSuite';

type RampageEnv = {
	dat: BSWAN
}

const makeRampage = async () => {

	const testEnv = await makeSuite();
	const { mUSDC, dat } = testEnv;

	let market = new Market(mUSDC, dat);

	while (market.currentEpoch() <= MAXIMUM_EPOCH) {
		await market.startEpoch()
		for (let i = 0; i < NEW_INVESTOR_PER_EPOCH; i++) {
			await market.addInvestor();
		}
		await market.runDecisions();
		await market.closeEpoch();
	}
	market.printResult()
}

export default makeRampage;