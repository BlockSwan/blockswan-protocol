import { time } from '@nomicfoundation/hardhat-network-helpers'
import {
    BUYER_ROLE,
    DELAYS_TIMESTAMP,
    DISPUTE_PARAMS,
    EVIDENCE_TEST0,
    GIG_TEST0,
    ORDER_TEST0,
    SELLER_ROLE,
    USER_TEST0,
    USER_TEST1,
} from '../../helpers/constants'
import {
    getBalances,
    setupJudges,
    setupOneUser,
} from '../../helpers/test_helpers'
import {
    DisputeState,
    SignerWithAddress,
    ValidInput,
    DisputeFees,
} from '../../helpers/types'
import { DataTypes, OutputTypes } from '../../types/interfaces/IDispute'
import { calcTotalFeesForJurors } from '../../utilities/helpers'
import { waitForTx } from '../../utilities/tx'
import makeSuite from './makeSuite'

const makeDispute = async ({
    caller = 'buyer',
    dispute = true,
    round = 1,
    secondEvidence = false,
    phase = DisputeState.EVIDENCE,
    votes = [5],
    appealed = false,
    nextRound = false,
}: {
    caller?: 'buyer' | 'seller'
    dispute?: boolean
    round?: number
    secondEvidence?: boolean
    phase?: DisputeState | 'ruled'
    votes?: number[]
    appealed?: 'buyer' | 'seller' | false
    nextRound?: boolean
}) => {
    const testEnv = await makeSuite()
    const { Order, Gig, users, Dispute, judges, dat } = testEnv
    let curr = 1
    let buyer = users[3]
    let seller = users[4]
    let drawnJurorsSigners: SignerWithAddress[] = []
    let disputeData: any

    async function getDisputeFees(roundNumber: number = round) {
        const inUSDC = calcTotalFeesForJurors({
            roundNumber: roundNumber,
            numberOfJurors: Number(DISPUTE_PARAMS.maxVotes),
            jurorsFee: Number(DISPUTE_PARAMS.feePerJuror),
        })
        let disputeFees: DisputeFees = {
            USDC: inUSDC,
            BSWAN: (await dat.estimateBuyValue(inUSDC)).toNumber(),
        }
        return disputeFees
    }

    async function signDispute({
        user,
        orderId,
        sellerId,
        buyerId,
        evidence = {
            userId: caller === 'buyer' ? orderData.buyerId : orderData.sellerId,
            role: BUYER_ROLE,
            metadata: 'my evidence',
        },
    }: {
        user: SignerWithAddress
        orderId: ValidInput
        sellerId: ValidInput
        buyerId: ValidInput
        evidence?: any
    }) {
        waitForTx(
            await Order.connect(user.signer).dispute(
                orderId,
                sellerId,
                buyerId,
                evidence
            )
        )
    }

    async function appealDispute({
        user = 'buyer' === caller ? seller : buyer,
        disputeId = 0,
    }: {
        user?: SignerWithAddress
        disputeId?: ValidInput
    }) {
        waitForTx(await Dispute.connect(user.signer).appeal(disputeId))
    }

    async function passPhase({
        user,
        disputeId,
    }: {
        user?: SignerWithAddress
        disputeId?: ValidInput
    }) {
        if (!user) {
            user = buyer
        }
        if (!disputeId) {
            disputeId = 0
        }
        waitForTx(await Dispute.connect(user.signer).passPhase(disputeId))
    }
    async function getDisputeData(disputeId?: ValidInput) {
        if (!disputeId) {
            disputeId = 0
        }
        let disputeData = await Dispute.getDisputeById(disputeId)
        return disputeData
    }

    async function getOrderData(orderId?: ValidInput) {
        if (!orderId) {
            orderId = 0
        }
        let orderData = await Order.getOrderById(orderId)
        return orderData
    }

    async function getAllJurorsBalance() {
        return await Promise.all(
            judges.map(async (judge) => ({
                address: judge.address,
                balance: await getBalances(judge),
            }))
        )
    }

    function getWeight({
        account,
        drawnJurors,
    }: {
        account: string
        drawnJurors: string[]
    }) {
        let count = 0
        for (let i = 0; i < drawnJurors.length; i++) {
            if (drawnJurors[i] === account) {
                count++
            }
        }
        return count
    }

    async function sendEvidence({
        user = caller === 'buyer' ? seller : buyer,
        disputeId = 0,
        address = caller === 'buyer' ? seller.address : buyer.address,
        evidence = {
            userId: caller === 'buyer' ? orderData.sellerId : orderData.buyerId,
            role: caller === 'buyer' ? SELLER_ROLE : BUYER_ROLE,
            metadata: 'my evidence',
        },
    }: {
        user?: SignerWithAddress
        disputeId?: number
        address?: string
        evidence?: DataTypes.EvidenceStruct
    }) {
        waitForTx(
            await Dispute.connect(user.signer).sendEvidence(
                disputeId,
                address,
                evidence
            )
        )
    }

    async function passEvidencePhase() {
        await time.increase(Number(DELAYS_TIMESTAMP.evidence) + 1)
        await passPhase({})
    }

    async function passCommitPhase() {
        await time.increase(Number(DELAYS_TIMESTAMP.commit) + 1)
        await passPhase({})
    }

    async function passRevealPhase() {
        await time.increase(Number(DELAYS_TIMESTAMP.vote) + 1)
        await passPhase({})
    }

    async function passAppealPhase() {
        await time.increase(Number(DELAYS_TIMESTAMP.appeal) + 1)
        await passPhase({})
    }

    async function allJudgesCommitRandom({
        votes = [5],
        roundNumber = 1,
    }: {
        votes?: number[]
        roundNumber?: number
    }) {
        let drawnJurors = await getDrawnJurorsSigners({
            roundNumber: roundNumber,
        })
        let commited: string[] = []

        for (let i = 0; i < drawnJurors.length; i++) {
            const { signer, address } = drawnJurors[i]
            if (!commited.includes(address)) {
                let disputeData = await getDisputeData()
                waitForTx(
                    await Dispute.connect(signer).commitVote(
                        disputeData.disputeId,
                        votes[i] || votes[votes.length - 1],
                        'password'
                    )
                )
                commited.push(address)
            }
        }
    }

    async function allJudgesRevealRandom({
        votes = [5],
        roundNumber = 1,
    }: {
        votes?: number[]
        roundNumber?: number
    }) {
        let drawnJurors = await getDrawnJurorsSigners({
            roundNumber: roundNumber,
        })
        let revealed: string[] = []
        for (let i = 0; i < drawnJurors.length; i++) {
            const { signer, address } = drawnJurors[i]
            if (!revealed.includes(address)) {
                let disputeData = await getDisputeData()
                waitForTx(
                    await Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        votes[i] || votes[votes.length - 1],
                        'password',
                        'justice   '
                    )
                )
                revealed.push(address)
            }
        }
    }

    async function getDrawnJurorsSigners({
        disputeId = 0,
        roundNumber = 1,
    }: {
        disputeId?: ValidInput
        roundNumber?: number
    }): Promise<SignerWithAddress[]> {
        const { drawnJurors } = (await getDisputeData(disputeId)).rounds[
            roundNumber - 1
        ]
        let drawnJurorsSigners = drawnJurors
            .map((address) =>
                judges.find((judge) => judge.address === address.toString())
            )
            .sort((a, b) => {
                const w1 = getWeight({ account: a?.address || '', drawnJurors })
                const w2 = getWeight({ account: b?.address || '', drawnJurors })
                return w1 > w2 ? -1 : 1
            })

        return drawnJurorsSigners as SignerWithAddress[]
    }

    await setupOneUser({
        user: seller,
        role: 'seller',
        userArgs: USER_TEST0,
    })

    await setupOneUser({
        user: buyer,
        role: 'buyer',
        userArgs: USER_TEST1,
    })

    await setupJudges({ judges: judges })

    waitForTx(await Gig.connect(seller.signer).createGig(...GIG_TEST0))
    waitForTx(await Order.connect(buyer.signer).createOrder(ORDER_TEST0))
    let orderData = await Order.getOrderById(0)
    waitForTx(
        await Order.connect(seller.signer).confirmOrder(
            orderData.orderId,
            orderData.sellerId
        )
    )
    orderData = await getOrderData(orderData.orderId)
    disputeData = await getDisputeData(orderData.disputeId)
    if (dispute === true) {
        await signDispute({
            user: caller === 'buyer' ? buyer : seller,
            orderId: orderData.orderId,
            sellerId: orderData.sellerId,
            buyerId: orderData.buyerId,
        })
        drawnJurorsSigners = await getDrawnJurorsSigners({})

        async function makeRound({
            roundNumber = curr,
        }: {
            roundNumber?: number
        }) {
            await passEvidencePhase()
            await allJudgesCommitRandom({
                votes: votes,
                roundNumber: roundNumber,
            })
            await passCommitPhase()
            await allJudgesRevealRandom({
                votes: votes,
                roundNumber: roundNumber,
            })
            await passRevealPhase()
            if (appealed != false) {
                await appealDispute({
                    user: appealed == 'buyer' ? buyer : seller,
                })
            }
            await passAppealPhase()
            if (appealed && nextRound) {
                waitForTx(
                    await Dispute.connect(
                        appealed == 'buyer' ? buyer.signer : seller.signer
                    ).nextRound(disputeData.disputeId, {
                        userId:
                            appealed == 'buyer'
                                ? orderData.buyerId
                                : orderData.sellerId,
                        role: appealed == 'buyer' ? BUYER_ROLE : SELLER_ROLE,
                        metadata: 'my justificaion',
                    })
                )
            }
        }
        if (round > 1) {
            while (curr < round) {
                await sendEvidence({
                    user:
                        appealed === false || curr == 1
                            ? caller === 'buyer'
                                ? seller
                                : buyer
                            : appealed === 'buyer'
                            ? seller
                            : buyer,
                    disputeId: orderData.disputeId.toNumber(),
                    address:
                        appealed === false || curr == 1
                            ? caller === 'buyer'
                                ? seller.address
                                : buyer.address
                            : appealed === 'buyer'
                            ? seller.address
                            : buyer.address,
                    evidence: {
                        userId:
                            appealed === false || curr == 1
                                ? caller === 'buyer'
                                    ? orderData.sellerId
                                    : orderData.buyerId
                                : appealed === 'buyer'
                                ? orderData.sellerId
                                : orderData.buyerId,
                        role:
                            appealed === false || curr == 1
                                ? caller === 'buyer'
                                    ? SELLER_ROLE
                                    : BUYER_ROLE
                                : appealed === 'buyer'
                                ? SELLER_ROLE
                                : BUYER_ROLE,
                        metadata: 'my evidence',
                    },
                })
                await makeRound({})
                curr++
            }
        }

        if (secondEvidence) {
            await sendEvidence({
                user:
                    appealed === false || curr == 1
                        ? caller === 'buyer'
                            ? seller
                            : buyer
                        : appealed === 'buyer'
                        ? seller
                        : buyer,
                disputeId: orderData.disputeId.toNumber(),
                address:
                    appealed === false
                        ? caller === 'buyer'
                            ? seller.address
                            : buyer.address
                        : appealed === 'buyer'
                        ? seller.address
                        : buyer.address,
                evidence: {
                    userId:
                        appealed === false
                            ? caller === 'buyer'
                                ? orderData.sellerId
                                : orderData.buyerId
                            : appealed === 'buyer'
                            ? orderData.sellerId
                            : orderData.buyerId,
                    role:
                        appealed === false
                            ? caller === 'buyer'
                                ? SELLER_ROLE
                                : BUYER_ROLE
                            : appealed === 'buyer'
                            ? SELLER_ROLE
                            : BUYER_ROLE,
                    metadata: 'my evidence',
                },
            })
            switch (phase) {
                case DisputeState.COMMIT:
                    await passEvidencePhase()
                    break
                case DisputeState.VOTE:
                    await passEvidencePhase()
                    await allJudgesCommitRandom({
                        votes: votes,
                        roundNumber: curr,
                    })
                    await passCommitPhase()
                    break
                case DisputeState.APPEAL:
                    await passEvidencePhase()
                    await allJudgesCommitRandom({
                        votes: votes,
                        roundNumber: curr,
                    })
                    await passCommitPhase()
                    await allJudgesRevealRandom({
                        votes: votes,
                        roundNumber: curr,
                    })
                    await passRevealPhase()
                    break
                case DisputeState.EXECUTION:
                    await makeRound({})
                    break

                default:
                    break
            }
        }
        orderData = await getOrderData(orderData.orderId)
        disputeData = await getDisputeData(orderData.disputeId)
    }

    return {
        testEnv,
        buyer,
        seller,
        orderData,
        disputeData,
        drawnJurorsSigners,
        getDisputeFees,
        signDispute,
        getOrderData,
        getDisputeData,
        getAllJurorsBalance,
        getWeight,
        sendEvidence,
        passPhase,
        allJudgesCommitRandom,
        passRevealPhase,
        passCommitPhase,
        passEvidencePhase,
        getDrawnJurorsSigners,
        allJudgesRevealRandom,
    }
}

export default makeDispute
