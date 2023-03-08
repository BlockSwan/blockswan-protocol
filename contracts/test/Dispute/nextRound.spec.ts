import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import {
    Balance,
    DisputeFees,
    DisputeState,
    ProtocolErrors,
} from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import {
    calcAmountOfWinningChoice,
    calcAppealFees,
    calcEarnedFromDisputeFees,
    calcTokensToFreeze,
} from '../../utilities/helpers'
import { getBalances } from '../../helpers/test_helpers'
import { EVIDENCE_TEST0, EVIDENCE_TEST1 } from '../../helpers/constants'
import { OutputTypes } from '../../types/interfaces/IDispute'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { getDelaysTimestamp } from '../../helpers/contract_getters'

describe('Dispute: nextRound', () => {
    describe('it should fail if', () => {
        it('state is not execution', async () => {
            let { testEnv, disputeData, buyer } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EVIDENCE,
                round: 1,
                nextRound: false,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.connect(buyer.signer).nextRound(
                    disputeData.disputeId,
                    EVIDENCE_TEST0
                )
            ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
        })
        it('round is not appealed', async () => {
            let { testEnv, disputeData, buyer } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                round: 1,
                appealed: false,
                nextRound: false,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.connect(buyer.signer).nextRound(
                    disputeData.disputeId,
                    EVIDENCE_TEST0
                )
            ).to.be.revertedWith(ProtocolErrors.ROUND_NOT_APPEALED)
        })
    })
    describe('success: cases:', () => {
        let data: OutputTypes.DisputeOutputStruct
        let fees: DisputeFees
        describe('going next round', () => {
            beforeEach(async () => {
                let {
                    disputeData,
                    getDisputeData,
                    buyer,
                    testEnv,
                    getDisputeFees,
                } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.EXECUTION,
                    round: 1,
                    votes: [5],
                    appealed: 'buyer',
                    nextRound: false,
                })
                const { Dispute } = testEnv
                fees = await getDisputeFees(2)

                waitForTx(
                    await Dispute.connect(buyer.signer).nextRound(
                        disputeData.disputeId,
                        EVIDENCE_TEST1
                    )
                )
                data = await getDisputeData()
            })
            it('should have two rounds', () => {
                expect(data.rounds.length).to.equal(2)
            })
            it('should have the correct maxVotes', () => {
                const { rounds } = data
                expect(rounds[1].maxVotes).to.equal(
                    Number(rounds[0].maxVotes) * 2
                )
                expect(Number(rounds[1].maxVotes)).to.equal(20)
            })
            it('should have the correct totalFeesForJurors', () => {
                const { rounds } = data
                expect(Number(rounds[1].totalFeesForJurors)).to.equal(
                    fees.BSWAN
                )
            })
            it('should have the correct tokens at stake per juror', () => {
                const { rounds } = data
                const res = calcTokensToFreeze({})
                expect(Number(rounds[1].tokensAtStakePerJuror)).to.equal(res)
            })
            it('should have the correct defendant id', () => {
                const { rounds } = data
                expect(rounds[1].defendantId).to.equal(rounds[0].defendantId)
            })
            it('should have the corret procecutor id', () => {
                const { rounds } = data
                expect(rounds[1].procecutorId).to.equal(rounds[0].procecutorId)
            })
            it('should have the correct amount of drawn juror', () => {
                const { rounds } = data
                expect(rounds[1].drawnJurors.length).to.equal(
                    Number(rounds[0].drawnJurors.length) * 2
                )
            })
            it('should have state set to evidence', () => {
                expect(data.state).to.equal(DisputeState.EVIDENCE)
            })
        })
        it('should have the correct timestamps', async () => {
            let { getDisputeData, disputeData, testEnv, buyer } =
                await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.EXECUTION,
                    round: 1,
                    appealed: 'buyer',
                    nextRound: false,
                    votes: [5],
                })

            let delays = await getDelaysTimestamp()
            const { Dispute } = testEnv
            let timestamp = await time.latest()
            waitForTx(
                await Dispute.connect(buyer.signer).nextRound(
                    disputeData.disputeId,
                    EVIDENCE_TEST1
                )
            )
            disputeData = await getDisputeData()
            const { timestamps } = disputeData
            expect(timestamps.length).to.equal(1)
            expect(timestamps[0].toNumber()).to.be.closeTo(
                Number(delays.evidence) + timestamp,
                10
            )
        })
    })
})
