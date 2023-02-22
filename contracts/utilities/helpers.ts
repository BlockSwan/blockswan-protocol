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

function calcOrderPrice(orderPrice: ValidInput, params: FeeParams): number {
    let toProceed = calcFees(orderPrice, params.flat, params.percent)
    return Number(orderPrice) + toProceed
}

function calcTotalFeesForJurors({
    numberOfJurors,
    jurorsFee,
    roundNumber,
}: {
    numberOfJurors: number
    jurorsFee: number
    roundNumber: number
}) {
    return numberOfJurors * jurorsFee * roundNumber
}

const calcDisputeDelaysArrays = async ({
    blockNumber,
    evidenceDelay,
    commitDelay,
    voteDelay,
    appealDelay,
}: {
    blockNumber: number

    evidenceDelay: number
    commitDelay: number
    voteDelay: number
    appealDelay: number
}): Promise<number[]> => {
    const evidenceUntil = blockNumber + evidenceDelay
    const commitUntil = evidenceUntil + commitDelay
    const voteUntil = commitUntil + voteDelay
    const appealUntil = voteUntil + appealDelay
    return [evidenceUntil, commitUntil, voteUntil, appealUntil]
}

export {
    calcFees,
    calcOrderPrice,
    calcTotalFeesForJurors,
    calcDisputeDelaysArrays,
}
