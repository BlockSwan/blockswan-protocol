import { DisputeLogicLibraryAddresses } from './../../types/factories/protocol/libraries/logics/DisputeLogic__factory'
import { DisputeState, ProtocolErrors } from '../../helpers/types'

import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { getDelaysTimestamp } from '../../helpers/contract_getters'
import { waitForTx } from '../../utilities/tx'

describe('Dispute: passPhase', () => {
    describe('EVIDENCE phase to COMMIT phase', () => {
        it('should fail if evidence delay is not elapsed', async () => {
            let { testEnv, disputeData } = await makeDispute({
                secondEvidence: false,
            })
            const { Dispute } = testEnv
            await time.increase(
                Number((await getDelaysTimestamp()).evidence) - 100
            )
            await expect(
                Dispute.passPhase(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_TIME_NOT_PASSED)
        })
        describe('when procecutor and defendant have commited their votes', () => {
            it('should have the correct COMMIT delay', async () => {
                let { testEnv, disputeData, getDisputeData } =
                    await makeDispute({
                        secondEvidence: true,
                    })
                const { Dispute } = testEnv
                let delay = await getDelaysTimestamp()
                await time.increase(delay.evidence)
                let current = await time.latest()
                waitForTx(await Dispute.passPhase(disputeData.disputeId))
                disputeData = await getDisputeData()
                expect(disputeData.timestamps[1]).to.be.closeTo(
                    current + Number(delay.commit),
                    10
                )
            })
            it('should set the state to COMMIT', async () => {
                let { testEnv, disputeData, getDisputeData } =
                    await makeDispute({
                        secondEvidence: true,
                    })
                const { Dispute } = testEnv
                let delay = await getDelaysTimestamp()
                await time.increase(delay.evidence)
                waitForTx(await Dispute.passPhase(disputeData.disputeId))
                disputeData = await getDisputeData()
                expect(disputeData.state).to.be.equal(DisputeState.COMMIT)
            })
        })

        describe("when defendant hasn't commited his vote", () => {
            it('should set the state to APPEAL', async () => {
                let { testEnv, disputeData, getDisputeData } =
                    await makeDispute({
                        secondEvidence: false,
                    })
                const { Dispute } = testEnv
                let delay = await getDelaysTimestamp()
                await time.increase(delay.evidence)
                waitForTx(await Dispute.passPhase(disputeData.disputeId))
                disputeData = await getDisputeData()
                expect(disputeData.state).to.be.equal(DisputeState.APPEAL)
            })

            // APPEAL timestamps should be correct

            it('should set the round winning choice to 100%', async () => {
                let { testEnv, disputeData, getDisputeData } =
                    await makeDispute({
                        secondEvidence: false,
                    })
                const { Dispute } = testEnv
                let delay = await getDelaysTimestamp()
                await time.increase(delay.evidence)
                waitForTx(await Dispute.passPhase(disputeData.disputeId))
                disputeData = await getDisputeData()
                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(1e4)
            })
        })
    })
    describe('COMMIT phase to REVEAL (VOTE) phase', () => {
        it('should fail if no commit yet', async () => {
            let { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.COMMIT,
            })
            const { Dispute } = testEnv
            await time.increase(Number((await getDelaysTimestamp()).commit))
            await expect(
                Dispute.passPhase(disputeData.disputeId)
            ).to.be.revertedWith(
                ProtocolErrors.DS_NO_COMMITMENTS_MADE_FOR_ROUND
            )
        })
        it('should fail if commit delay is not elapsed', async () => {
            let { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.COMMIT,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.passPhase(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_TIME_NOT_PASSED)
        })
        it('should have the correct tiemstamp delay for end of commit', async () => {
            let {
                testEnv,
                disputeData,
                allJudgesCommitRandom,
                getDisputeData,
            } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.COMMIT,
            })
            await allJudgesCommitRandom({})
            await time.increase(Number((await getDelaysTimestamp()).commit))
            const { Dispute } = testEnv
            let delay = await getDelaysTimestamp()
            let current = await time.latest()
            waitForTx(await Dispute.passPhase(disputeData.disputeId))
            disputeData = await getDisputeData()
            const { timestamps } = disputeData
            expect(timestamps[2]).to.be.closeTo(
                current + Number(delay.vote),
                10
            )
        })
        it('should have the state set to REVEAL (VOTE)', async () => {
            let {
                testEnv,
                disputeData,
                allJudgesCommitRandom,
                getDisputeData,
            } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.COMMIT,
            })
            await allJudgesCommitRandom({})
            await time.increase(Number((await getDelaysTimestamp()).commit))
            const { Dispute } = testEnv
            waitForTx(await Dispute.passPhase(disputeData.disputeId))
            disputeData = await getDisputeData()
            const { state } = disputeData
            expect(state).to.be.equal(DisputeState.VOTE)
        })
    })
    describe('REVEAL (VOTE) phase to APPEAL phase', () => {
        it('should fail if no reveal yet', async () => {
            let { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.VOTE,
            })
            const { Dispute } = testEnv
            await time.increase(Number((await getDelaysTimestamp()).vote))
            await expect(
                Dispute.passPhase(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_NO_VOTES_MADE_FOR_ROUND)
        })
        it('should fail if vote delay is not elapsed', async () => {
            let { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.VOTE,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.passPhase(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_TIME_NOT_PASSED)
        })
        it('should have the correct tiemstamp delay for end of reveal', async () => {
            let {
                testEnv,
                disputeData,
                allJudgesRevealRandom,
                getDisputeData,
            } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.VOTE,
            })
            const { Dispute } = testEnv
            await allJudgesRevealRandom({})
            await time.increase(Number((await getDelaysTimestamp()).vote))
            let delay = await getDelaysTimestamp()
            let current = await time.latest()
            waitForTx(await Dispute.passPhase(disputeData.disputeId))
            disputeData = await getDisputeData()
            const { timestamps } = disputeData
            expect(timestamps[3]).to.be.closeTo(
                current + Number(delay.appeal),
                100
            )
        })
        it('should have the state set to APPEAL', async () => {
            let { disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.APPEAL,
            })
            const { state } = disputeData
            expect(state).to.be.equal(DisputeState.APPEAL)
        })
        describe('setting the winning choice', () => {
            it('0% to procecutor', async () => {
                let { disputeData } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                    votes: [0, 0, 0, 0, 0, 2, 0, 5, 5, 0],
                })

                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(0)
            })
            it('20% to procecutor', async () => {
                let { disputeData } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                    votes: [0, 0, 1, 2, 2, 2, 0, 4, 7, 2],
                })
                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(2)
            })
            it('50% to procecutor', async () => {
                let { disputeData } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                })
                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(5)
            })
            it('80% to procecutor', async () => {
                let { disputeData } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                    votes: [0, 0, 1, 8, 8, 8, 0, 4, 7, 8],
                })
                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(8)
            })
            it('100% to procecutor', async () => {
                let { disputeData } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                    votes: [0, 0, 1, 10, 10, 10, 0, 4, 7, 10],
                })
                const { winningChoice } = disputeData.rounds[0]
                expect(winningChoice.toNumber()).to.be.equal(10)
            })
            it('if draw the higher wins', async () => {
                let winningChoice = 0
                while (winningChoice != 10) {
                    let { disputeData } = await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.APPEAL,
                        votes: [0, 0, 0, 0, 0, 10, 10, 10, 10, 10],
                    })
                    winningChoice =
                        disputeData.rounds[0].winningChoice.toNumber()
                }

                expect(winningChoice).to.be.equal(10)
            })
        })
    })
    describe('APPEAL phase to EXECUTE phase', () => {
        describe('reverting cases:', () => {})
        it('should set the dispute state to execution', async () => {
            let { disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                appealed: 'buyer',
            })
            const { state } = disputeData
            expect(state).to.be.equal(DisputeState.EXECUTION)
        })

        it('should close the latest round', async () => {
            let { disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
            })
            const { closed } = disputeData.rounds[0]
            expect(closed).to.be.equal(true)
        })
    })
})
