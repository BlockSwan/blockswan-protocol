import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import {
    DisputeState,
    ProtocolErrors,
    SignerWithAddress,
} from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import { OutputTypes } from '../../types/interfaces/IDispute'
import { encodeChoice } from '../../utilities/helpers'

describe('Dispute: revealVote', () => {
    describe('Reverting cases:', () => {
        describe('Dispute Logic:', () => {
            it('dispute state not VOTE (TBD: REVEAL)', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.APPEAL,
                    })
                const { Dispute } = testEnv
                const { signer } = drawnJurorsSigners[0]
                await expect(
                    Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        5,
                        'password',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
            })
        })
        describe('Round Logic:', () => {
            it('account not drawnJuror', async () => {
                const { testEnv, disputeData, buyer } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.VOTE,
                })
                const { Dispute } = testEnv
                const { signer } = buyer
                await expect(
                    Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        5,
                        'password',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.RD_ACCOUNT_NOT_DRAWN_JUROR)
            })
            it("account didn't commit", async () => {
                const {
                    testEnv,
                    disputeData,
                    drawnJurorsSigners,
                    passCommitPhase,
                } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.COMMIT,
                })
                const { Dispute } = testEnv
                waitForTx(
                    await Dispute.connect(
                        drawnJurorsSigners[0].signer
                    ).commitVote(disputeData.disputeId, 5, 'password')
                )
                await passCommitPhase()

                let rdmJudgeSigner =
                    drawnJurorsSigners.find(
                        (signer) =>
                            signer.address !== drawnJurorsSigners[0].address
                    ) || drawnJurorsSigners[4]
                await expect(
                    Dispute.connect(rdmJudgeSigner?.signer).revealVote(
                        disputeData.disputeId,
                        5,
                        'password',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.ROUND_VOTE_NOT_COMMITED)
            })
            it('account already revealed', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.VOTE,
                    })
                const { Dispute } = testEnv
                const { signer } = drawnJurorsSigners[0]
                waitForTx(
                    await Dispute.connect(signer).revealVote(
                        0,
                        5,
                        'password',
                        'justification'
                    )
                )
                await expect(
                    Dispute.connect(signer).revealVote(
                        0,
                        6,
                        'password',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.ROUND_VOTE_ALREADY_REVEALED)
            })
        })
        describe('Vote Logic:', async () => {
            it('incorrect choice', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.VOTE,
                    })
                const { Dispute } = testEnv
                const { signer } = drawnJurorsSigners[0]
                await expect(
                    Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        6,
                        'password',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.VOTE_REVEAL_INCORRECT)
            })
            it('incorrect salt', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.VOTE,
                    })
                const { Dispute } = testEnv
                const { signer } = drawnJurorsSigners[0]
                await expect(
                    Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        5,
                        'random salt',
                        'justification'
                    )
                ).to.be.revertedWith(ProtocolErrors.VOTE_REVEAL_INCORRECT)
            })
        })
    })
    describe('Revealing a vote:', () => {
        describe('setting the vote reveal:', () => {
            let data: OutputTypes.DisputeOutputStructOutput
            let weight: number
            beforeEach(async () => {
                let {
                    testEnv,
                    disputeData,
                    drawnJurorsSigners,
                    getDisputeData,
                    getWeight,
                } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.VOTE,
                })
                const { Dispute } = testEnv
                const { signer, address } = drawnJurorsSigners[0]
                waitForTx(
                    await Dispute.connect(signer).revealVote(
                        disputeData.disputeId,
                        5,
                        'password',
                        'justification'
                    )
                )
                data = await getDisputeData()
                const { drawnJurors } = disputeData.rounds[0]
                weight = getWeight({
                    account: address,
                    drawnJurors,
                })
            })
            it('should set the choice', async () => {
                const { choice } = data.rounds[0].votes[0]
                expect(Number(choice)).to.equal(5)
            })
            it('should set the justfication', async () => {
                const { justification } = data.rounds[0].votes[0]
                expect(justification).to.equal('justification')
            })
            it('should set hasVoted to true', async () => {
                const { hasVoted } = data.rounds[0].votes[0]
                expect(hasVoted).to.equal(true)
            })
            it('should increment total voted by the weight', async () => {
                const { totalVoted } = data.rounds[0]
                expect(Number(totalVoted)).to.equal(weight)
            })
            it('should increment the count for the corresponding vote', async () => {
                const { counts } = data.rounds[0]
                expect(Number(counts[5])).to.equal(weight)
            })
        })
    })
})
