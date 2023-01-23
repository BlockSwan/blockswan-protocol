import { PERCENTAGE_FACTOR } from '../helpers/constants';
import { OrderPriceParams, ValidInput } from '../helpers/types';

function calcFees(orderPrice: ValidInput, flatFee: ValidInput, percentFee: ValidInput): number {
	return Number(flatFee) + (Number(orderPrice) * Number(percentFee) / Number(PERCENTAGE_FACTOR))
}

function calcOrderPrice(orderPrice: ValidInput, params: OrderPriceParams): number {
	let toTrial = calcFees(orderPrice, params.trialFlat, params.trialPercent);
	let toProceed = calcFees(orderPrice, params.proceedFlat, params.proceedPercent);
	return Number(orderPrice) + toTrial + toProceed;
}


export {
	calcFees,
	calcOrderPrice
}