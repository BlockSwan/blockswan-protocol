import { getDAT, getMockUSDC } from '../../../helpers/contract_getters'
import { BSWAN, MUSDC } from '../../../types'
import { Investor } from './Investor'
import { yellow, bold, green } from "kleur";
import { getRandomSigner } from '../../../utilities/signers';
import { render } from "prettyjson";
import { MIN_INVESTMENT, ONE_USD, PRETTYJSON } from '../../../helpers/constants';
import { LOG_JSON, LOG_NEW_INVESTOR } from './settings';
import { line } from '../../../helpers/logs';



type Epoch = {
	id: number;
	totalInvestors: number;
	newInvestorCount: number;
	datInfo: {
		reserve: number,
		bswanSupply: number
		buy1BSWAN?: number
		fullyDilutedValuation?: number
		return?: number

	};
}

function calculateReturn(beginningValue: number, endingValue: number): number {
	return (endingValue - beginningValue) / beginningValue;
}

export class Market {
	mUSDC: MUSDC;
	DAT: BSWAN;
	epochs: Epoch[];
	investors: Investor[]


	constructor(mUSDC: MUSDC, DAT: BSWAN) {
		this.mUSDC = mUSDC;
		this.DAT = DAT;
		this.epochs = [];
		this.investors = [];
	}

	currentEpoch(): number {
		return !this.epochs.length ? 0 : this.epochs.length - 1;
	}

	getEpoch(index?: number): Epoch {
		return this.epochs[index || this.currentEpoch()];
	}

	async addInvestor() {
		let investor: Investor = new Investor(this.investors.length, this.DAT, this.mUSDC);
		await investor.init();
		this.investors.push(investor);
		this.epochs[this.currentEpoch()].newInvestorCount += 1
		console.log(green().bold(`Investor ${ investor.signer?.address } joined!\n`))
		if (LOG_NEW_INVESTOR) {
			investor.print()
		}
	}

	getTotalInvestors(index?: number): number {
		let total: number = 0;
		let max = index ? index : this.currentEpoch();
		for (let i = 0; i < max; i++) {
			total += this.epochs[i].newInvestorCount;
		}
		return total;
	}
	getBSWANprice(currencyValue: number, tokenBought: number) {
		return ((currencyValue / tokenBought) / Math.pow(10, 6))
	}



	async getDATinfo(): Promise<Epoch["datInfo"]> {
		let obj = {
			reserve: (await this.DAT.buybackReserve()).toNumber() / Math.pow(10, 6),
			bswanSupply: (await this.DAT.totalSupply()).toNumber() / Math.pow(10, 6),
			buy1BSWAN: this.getBSWANprice(Number(ONE_USD) * 100, (await this.DAT.estimateBuyValue(Number(ONE_USD) * 100)).toNumber()),

		}
		return {
			...obj,
			fullyDilutedValuation: obj.bswanSupply * obj.buy1BSWAN
		}
	}

	getMarketRisk(index?: number): number {
		let max = index ? index : this.currentEpoch();
		let marketRisk = 0;
		// Calculate the market risk based on the volatility of the market
		for (let i = 0; i < max; i++) {
			marketRisk += Math.abs((this.epochs[i]?.datInfo?.buy1BSWAN || 0) - (this.epochs[i - 1]?.datInfo?.buy1BSWAN || 0));
		}
		marketRisk /= (max + 1);
		return marketRisk;
	}

	getMarketReturn(index?: number): number {

		let max = index ? index : this.currentEpoch() - 1;
		let marketReturn = 0;
		// Calculate the market return 
		for (let i = 0; i < max; i++) {
			marketReturn += calculateReturn(this.epochs[i - 2]?.datInfo?.buy1BSWAN || 0, this.epochs[i - 1]?.datInfo?.buy1BSWAN || 0)
		}
		marketReturn /= (max + 1);
		return marketReturn;
	}

	async runDecisions() {
		for (let i = 0; i < this.investors.length; i++) {
			let riskTolerance = this.investors[i].assessRiskTolerance();
			let marketRisk = this.getMarketRisk();
			let marketReturn = this.getMarketReturn();
			await this.investors[i].buyBSWAN(this.investors[i].income)
		}

	}

	printEpoch(index: number): void {
		let epoch = this.epochs[index];
		if (epoch) {
			console.log(line(40));
			console.log(`EPOCH #${ index }`)
			console.log(line(40));
			console.log(render(epoch, PRETTYJSON))
			console.log(line(40));
		}
	}

	async startEpoch() {
		const id = this.epochs.length | 0
		console.log(yellow().bold(`\nStarting EPOCH #${ id } ----------\n`))
		this.epochs.push({ id: id, newInvestorCount: 0 } as Epoch);
	}

	async closeEpoch() {
		let datInfo = await this.getDATinfo();
		this.getEpoch().totalInvestors = this.getTotalInvestors()
		this.getEpoch().datInfo = datInfo;
		this.getEpoch().datInfo.return = this.getMarketReturn();
		if (LOG_JSON) {
			this.printEpoch(this.currentEpoch())
		}
	}

	printResult(): void {
		let res = this.epochs.map((epoch) => {
			return {
				supply: `${ epoch.datInfo.bswanSupply } BSWAN`,
				price: `${ epoch.datInfo.buy1BSWAN } USDC `,
				reserve: `${ epoch.datInfo.reserve } USDC`,
			}
		})
		console.log(line(60));
		console.log("Results")
		console.table(res);
	}
}