import { ethers } from 'hardhat';
import { waitForTx } from './../../../utilities/tx';
import { Signer } from 'ethers';
import { SignerWithAddress } from '../../../helpers/types';
import { getRandomSigner } from '../../../utilities/signers';
import { render } from "prettyjson";
import { bold, blue } from "kleur"
import { MAX_UINT_AMOUNT, MIN_INVESTMENT, PRETTYJSON } from '../../../helpers/constants';
import { line } from '../../../helpers/logs';
import { getDAT, getMockUSDC } from '../../../helpers/contract_getters';
import { BSWAN, MUSDC } from '../../../types';


type InvestmentHorizon = "shortTerm" | "mediumTerm" | "longTerm";
type InvestmentStyle = "aggressive" | "conservative";
type RiskAssessmentAbility = "novice" | "intermediate" | "expert"

function random(min: number, max: number, decimals: number = 2): number {
	return Number((Math.random() * (max - min) + min).toFixed(decimals));
}

function getInvestmentHorizon(age: number): Investor["investmentHorizon"] {
	if (age < 30) {
		return 'longTerm';
	} else if (age >= 30 && age < 40) {
		return 'mediumTerm';
	} else {
		return 'shortTerm';
	}
}

function getRiskAssessmentAbility(age: number): Investor["riskAssessmentAbility"] {
	if (age < 30) {
		return random(0, 1) < 0.5 ? 'novice' : 'intermediate';
	} else if (age >= 30 && age < 50) {
		return random(0, 1) < 0.5 ? 'novice' : 'expert';
	} else {
		return random(0, 1) < 0.5 ? 'intermediate' : 'expert';
	}
}

function getHorizonRisk(horizon: InvestmentHorizon): number {
	switch (horizon) {
		case "shortTerm":
			return -0.1;
		case "mediumTerm":
			return 0.05
		case "longTerm":
			return 0.1;
		default:
			return 0;
	}
}
function getStyleRisk(style: InvestmentStyle): number {
	switch (style) {
		case "aggressive":
			return 0.2;
		case "conservative":
			return -0.2;
		default:
			return 0;
	}
}

function getRiskAbility(ability: RiskAssessmentAbility): number {
	switch (ability) {
		case "novice":
			return -0.1;
		case "intermediate":
			return 0.05;
		case "expert":
			return 0.1
		default:
			return 0;
	}
}

function getRiskAge(age: number): number {
	if (age < 30) {
		return 0.1;
	} else if (age >= 30 && age < 40) {
		return 0.05;
	} else if (age >= 40 && age < 50) {
		return - 0.05;
	} else if (age >= 50) {
		return - 0.1;
	} else return (0);
}

function getRiskIncome(income: number): number {
	if (income > 10000_000_000) {
		return + 0.1;
	} else if (income > 5000_000_000 && income <= 10000_000_000) {
		return + 0.05;
	} else if (income <= 5000_000_000) {
		return - 0.1;
	} else return 0;
}


export class Investor {
	id: number;
	age: number;
	income: number;
	riskTolerance: number;
	investmentHorizon: InvestmentHorizon
	investmentStyle: InvestmentStyle
	riskAssessmentAbility: RiskAssessmentAbility
	history: any[];
	signer: SignerWithAddress;
	DAT: BSWAN;
	mUSDC: MUSDC;


	constructor(id: number, dat: BSWAN, mUSDC: MUSDC) {
		this.id = id;
		this.age = random(18, 70, 0);
		this.income = random(100_000_000, 10000_000_000, 0);
		this.history = [];
		this.riskTolerance = random(0, 1);
		this.investmentStyle = random(0, 1) < 0.5 ? "aggressive" : "conservative";
		this.investmentHorizon = getInvestmentHorizon(this.age)
		this.riskAssessmentAbility = getRiskAssessmentAbility(this.age)
		this.signer = {} as SignerWithAddress;
		this.DAT = dat;
		this.mUSDC = mUSDC;
	}

	async init() {
		await this.getSigner();
	}

	async getSigner() {
		let rdmSigner = await getRandomSigner();
		this.signer = rdmSigner;
	}

	print(): void {
		let obj = {
			id: this.id,
			age: this.age,
			income: this.income,
			riskTolerance: this.riskTolerance,
			investmentStyle: this.investmentStyle,
			investmentHorizon: this.investmentHorizon,
			riskAssessmentAbility: this.riskAssessmentAbility,
		}
		console.log(bold(line(40)));
		console.log(this.signer?.address);
		console.log(bold(line(40)));
		console.log(render(obj, PRETTYJSON));
		console.log(bold(line(40)));

	}

	assessRiskTolerance(): number {
		// Assess the investor's base risk tolerance
		let riskTolerance = this.riskTolerance;
		// Adjust risk tolerance based on investment horizon
		riskTolerance += getHorizonRisk(this.investmentHorizon);

		// Adjust risk tolerance based on investment style
		riskTolerance += getStyleRisk(this.investmentStyle);

		// Adjust risk tolerance based on risk assessment ability
		riskTolerance += getRiskAbility(this.riskAssessmentAbility);

		// Adjust risk tolerance based on age
		riskTolerance += getRiskAge(this.age);

		// Adjust risk tolerance based on income
		riskTolerance += getRiskIncome(this.income);
		// Return adjusted risk tolerance
		return riskTolerance;
	}

	async setMaxAllowance() {
		this.signer.signer.connect(ethers.provider);
		waitForTx(
			await this.mUSDC.approve(this.DAT.address, MAX_UINT_AMOUNT)
		)
	}

	async incrUSDCAllowance(currencyValue?: number | string) {
		this.signer.signer.connect(ethers.provider);
		waitForTx(
			await this.mUSDC.approve(this.DAT.address, currencyValue || MAX_UINT_AMOUNT)
		)

	}

	async mintUSDC(currencyValue?: number | string) {
		this.signer.signer.connect(ethers.provider);
		waitForTx(
			await this.mUSDC.mint(currencyValue || MIN_INVESTMENT)
		)
	}

	async getUSDCBalance(): Promise<number> {

		let balance = (await this.mUSDC.balanceOf(this.signer.address)).toNumber();
		return balance;
	}

	async getBSWANBalance(): Promise<number> {
		let balance = (await this.DAT.balanceOf(this.signer.address)).toNumber();
		return balance;
	}

	async getUSDCAllowance(): Promise<number> {
		let allowance = (await this.mUSDC.allowance(this.signer.address, this.DAT.address)).toNumber();
		return allowance;
	}

	async buyBSWAN(currencyValue: number): Promise<void> {
		this.signer.signer.connect(ethers.provider);
		let usdcBalance = await this.getUSDCBalance();
		if (usdcBalance < currencyValue) {
			waitForTx(await this.mintUSDC(currencyValue - usdcBalance))
		}
		usdcBalance = await this.getUSDCBalance();
		let currAllowance = await this.getUSDCAllowance();
		if (currAllowance < currencyValue) {
			waitForTx(await this.incrUSDCAllowance(currencyValue))
		}
		let tokenBought = (await this.DAT.estimateBuyValue(currencyValue)).toNumber()
		waitForTx(await this.DAT.buy(this.signer.address, currencyValue, 1))
		console.log(blue().bold(`${ this.signer.address } exchanged ${ currencyValue / Math.pow(10, 6) } mUSDC for ${ tokenBought / Math.pow(10, 6) } BSWAN\n`))
		console.log(bold(`\t1 BSWAN = ${ (currencyValue / tokenBought) / Math.pow(10, 6) } mUSDC\n`))
	}
}