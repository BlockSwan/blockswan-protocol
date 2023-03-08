import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import { DisputeState, ProtocolErrors } from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import { getBalances, setupUser } from '../../helpers/test_helpers'
import { getRandomSigner } from '../../utilities/signers'
import { USER_TEST0 } from '../../helpers/constants'

describe('Dispute: claimAppealFeeRewards', () => {
    describe('it should fail if', () => {
        it('only one round', async () => {
            const { testEnv, disputeData, buyer } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                votes: [2],
                round: 1,
                caller: 'buyer',
                appealed: 'buyer',
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.connect(buyer.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    0
                )
            ).to.be.revertedWith(ProtocolErrors.ROUND_ID_INVALID)
        })

        it('id is not procecutor', async () => {
            const { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                votes: [8],
                round: 2,
                caller: 'buyer',
                appealed: 'seller',
                nextRound: true,
            })
            const { Dispute } = testEnv
            let rdmSigner = await getRandomSigner()
            await setupUser(rdmSigner, USER_TEST0)
            await expect(
                Dispute.connect(rdmSigner.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    1
                )
            ).to.be.revertedWith(ProtocolErrors.DS_EVIDENCE_SENDER_NOT_PARTY)
        })
        it('decision is not favorizing the caller id (procecutor or defendant)', async () => {
            const { testEnv, disputeData, buyer } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                votes: [8],
                round: 3,
                caller: 'buyer',
                appealed: 'buyer',
                nextRound: true,
            })

            const { Dispute } = testEnv
            await expect(
                Dispute.connect(buyer.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    2
                )
            ).to.be.revertedWith(ProtocolErrors.CLAIM_NOT_ALLOWED)
        })
        it('fee has already been claimed', async () => {
            const { testEnv, disputeData, seller } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                votes: [8],
                round: 3,
                caller: 'buyer',
                appealed: 'seller',
                nextRound: true,
            })
            const { Dispute } = testEnv
            waitForTx(
                await Dispute.connect(seller.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    1
                )
            )
            await expect(
                Dispute.connect(seller.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    1
                )
            ).to.be.revertedWith(ProtocolErrors.ROUND_NOT_APPEALED)
        })
    })
    describe('success: cases:', () => {
        it('should reset the appeal fee rewards of the previous round to 0', async () => {
            let { testEnv, disputeData, seller, getDisputeData } =
                await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.EXECUTION,
                    votes: [8],
                    round: 3,
                    caller: 'buyer',
                    appealed: 'seller',
                    nextRound: true,
                })
            const { Dispute } = testEnv
            await Dispute.connect(seller.signer).claimAppealFeeRewards(
                disputeData.disputeId,
                1
            )
            disputeData = await getDisputeData()
            let { appealFeeRewards } = disputeData.rounds[0]
            expect(appealFeeRewards).to.be.equal(
                0,
                'invalid appeal fee rewards at round 1'
            )
            waitForTx(
                await Dispute.connect(seller.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    2
                )
            )

            disputeData = await getDisputeData()
            appealFeeRewards = disputeData.rounds[0].appealFeeRewards
            expect(appealFeeRewards).to.be.equal(
                0,
                'invalid appeal fee rewards at round 1'
            )
        })
        it("should transfer the appeal fee from the dispute contract to the caller's account", async () => {
            const { testEnv, disputeData, seller } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                votes: [8],
                round: 3,
                caller: 'buyer',
                appealed: 'seller',
                nextRound: true,
            })
            const { Dispute } = testEnv
            const sellerBalanceBefore = await getBalances(seller)
            const disputeBalanceBefore = await getBalances(Dispute)
            let appealFeeRewards = Number(
                disputeData.rounds[0].appealFeeRewards
            )
            waitForTx(
                await Dispute.connect(seller.signer).claimAppealFeeRewards(
                    disputeData.disputeId,
                    1
                )
            )
            const sellerBalanceAfter = await getBalances(seller)
            const disputeBalanceAfter = await getBalances(Dispute)
            expect(sellerBalanceAfter.BSWAN).to.be.equal(
                sellerBalanceBefore.BSWAN + appealFeeRewards,
                'invalid seller balance'
            )
            expect(disputeBalanceAfter.BSWAN).to.be.equal(
                disputeBalanceBefore.BSWAN - appealFeeRewards,
                'invalid dispute balance'
            )
        })
    })
})
