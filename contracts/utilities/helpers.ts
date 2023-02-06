import { PERCENTAGE_FACTOR } from '../helpers/constants'
import { FeeParams, ValidInput } from '../helpers/types'

function calcFees(
    orderPrice: ValidInput,
    flatFee: ValidInput,
    percentFee: ValidInput
): number {
    return (
        Number(flatFee) +
        (Number(orderPrice) * Number(percentFee)) / Number(PERCENTAGE_FACTOR)
    )
}

function calcOrderPrice(
    orderPrice: ValidInput,
    params: FeeParams
): number {
    let toProceed = calcFees(
        orderPrice,
        params.flat,
        params.percent
    )
    return Number(orderPrice) + toProceed
}

export { calcFees, calcOrderPrice }
