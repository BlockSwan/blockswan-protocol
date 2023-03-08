import { waitForTx } from './../../utilities/tx'
import { expect } from 'chai'
import {
    DisputeState,
    ProtocolErrors,
    SignerWithAddress,
} from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import { OutputTypes } from '../../types/interfaces/IDispute'
import { encodeChoice } from '../../utilities/helpers'

describe('Dispute: commitVote', () => {
    describe('Reverting cases:', () => {
        describe('Dispute Logic:', () => {
            it('dispute state not COMMIT', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.APPEAL,
                    })
                const { Dispute } = testEnv
                await expect(
                    Dispute.connect(drawnJurorsSigners[0].signer).commitVote(
                        disputeData.disputeId,
                        5,
                        'password'
                    )
                ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
            })
        })
        describe('Round Logic:', () => {
            it('caller not a drawnJuror', async () => {
                const { testEnv, disputeData, buyer } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.COMMIT,
                })
                const { Dispute } = testEnv
                await expect(
                    Dispute.connect(buyer.signer).commitVote(
                        disputeData.disputeId,
                        5,
                        'password'
                    )
                ).to.be.revertedWith(ProtocolErrors.RD_ACCOUNT_NOT_DRAWN_JUROR)
            })
            it('caller already commited', async () => {
                const { testEnv, disputeData, drawnJurorsSigners } =
                    await makeDispute({
                        secondEvidence: true,
                        phase: DisputeState.COMMIT,
                    })
                const { Dispute } = testEnv
                const { signer } = drawnJurorsSigners[0]
                waitForTx(
                    await Dispute.connect(signer).commitVote(
                        disputeData.disputeId,
                        5,
                        'password'
                    )
                )
                await expect(
                    Dispute.connect(signer).commitVote(
                        disputeData.disputeId,
                        10,
                        'password'
                    )
                ).to.be.revertedWith(ProtocolErrors.ROUND_VOTE_ALREADY_COMMITED)
            })
        })
    })
    describe('Commiting a vote:', () => {
        describe('setting the commit:', () => {
            let data: OutputTypes.DisputeOutputStructOutput, weight: number
            let jurorsSigners: SignerWithAddress[]
            beforeEach(async () => {
                let {
                    testEnv,
                    disputeData,
                    drawnJurorsSigners,
                    getDisputeData,
                    getWeight,
                } = await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.COMMIT,
                })
                const { Dispute } = testEnv
                const { signer, address } = drawnJurorsSigners[0]
                waitForTx(
                    await Dispute.connect(signer).commitVote(
                        disputeData.disputeId,
                        5,
                        'password'
                    )
                )
                data = await getDisputeData()
                const { drawnJurors } = data.rounds[0]
                weight = getWeight({
                    account: address,
                    drawnJurors,
                })
                jurorsSigners = drawnJurorsSigners
            })
            it('should have the correct account', async () => {
                const { account } = data.rounds[0].votes[0]
                expect(account).to.be.equal(jurorsSigners[0].address)
            })
            it('should have the correct choice', async () => {
                const { choice } = data.rounds[0].votes[0]
                expect(choice).to.be.equal(0)
            })
            it('should have the correct justification', async () => {
                const { justification } = data.rounds[0].votes[0]
                expect(justification).to.be.equal('')
            })
            it('should have the correct commit', async () => {
                const { commit } = data.rounds[0].votes[0]
                expect(commit).to.be.equal(
                    encodeChoice({
                        account: jurorsSigners[0].address,
                        choice: 5,
                        salt: 'password',
                    })
                )
            })
            it('should have the correct weight', async () => {
                const { weight: voteWeight } = data.rounds[0].votes[0]
                expect(voteWeight.toNumber()).to.be.equal(weight)
            })
            it('should have the correct has voted', async () => {
                const { hasVoted } = data.rounds[0].votes[0]
                expect(hasVoted).to.be.equal(false)
            })
            it('should increment total commited votes', async () => {
                const { totalCommited } = data.rounds[0]
                expect(totalCommited.toNumber()).to.be.equal(weight)
            })
        })
    })
})
