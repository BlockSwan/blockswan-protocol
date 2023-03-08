import { utils } from 'ethers'
import { DISPUTE_PARAMS, PERCENTAGE_FACTOR } from '../helpers/constants'
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

function calcTokensToFreeze({
    minStake = Number(DISPUTE_PARAMS.minStake),
    alpha = Number(DISPUTE_PARAMS.alpha),
    percentageFactor = Number(PERCENTAGE_FACTOR),
    weight = 1,
}: {
    minStake?: number
    alpha?: number
    percentageFactor?: number
    weight?: number
}): number {
    let toFreeze = ((minStake * alpha) / percentageFactor) * weight
    return toFreeze
}

function encodeChoice({
    account,
    choice,
    salt,
}: {
    account: string
    choice: number
    salt: string
}) {
    return utils.keccak256(
        utils.solidityPack(
            ['address', 'uint256', 'string'],
            [account, choice, salt]
        )
    )
}

function calcAppealFees({
    maxVotes = DISPUTE_PARAMS.maxVotes,
    feePerJuror = DISPUTE_PARAMS.feePerJuror,
    percentageFactor = PERCENTAGE_FACTOR,
    ratio = 0.1e4,
}: {
    maxVotes?: ValidInput
    feePerJuror?: ValidInput
    percentageFactor?: ValidInput
    ratio?: ValidInput
}): number {
    const appealFee = Number(feePerJuror) * Number(maxVotes) * 2
    const percentage = Number(ratio) / Number(percentageFactor)
    const result = appealFee * percentage
    return result
}

function calcWinningChoice({
    counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}: {
    counts: number[]
}): number {
    let winningChoice = 0
    let winningCount = 0
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > winningCount) {
            winningChoice = i
            winningCount = counts[i]
        }
    }
    return winningChoice
}

function calcAmountOfWinningChoice({
    counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    winningChoice = 0,
}: {
    counts: ValidInput[]
    winningChoice: ValidInput
}): number {
    return Number(counts[Number(winningChoice)])
}

function calcEarnedFromDisputeFees({
    jurorWeight,
    weightOfCorrectVotes,
    disputePrice,
}: {
    jurorWeight: ValidInput
    weightOfCorrectVotes: ValidInput
    disputePrice: ValidInput
}) {
    let res =
        (Number(disputePrice) * Number(jurorWeight)) /
        Number(weightOfCorrectVotes)
    return res
}

export {
    calcFees,
    calcOrderPrice,
    calcTotalFeesForJurors,
    calcDisputeDelaysArrays,
    calcTokensToFreeze,
    encodeChoice,
    calcAppealFees,
    calcAmountOfWinningChoice,
    calcWinningChoice,
    calcEarnedFromDisputeFees,
}
