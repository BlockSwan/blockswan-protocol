import { DisputeState, ProtocolErrors } from '../../helpers/types'
import { utils } from 'ethers'
import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import {
    BUYER_ROLE,
    EVIDENCE_TEST0,
    EVIDENCE_TEST1,
    SELLER_ROLE,
    USER_TEST1,
} from '../../helpers/constants'
import { getRandomSigner } from '../../utilities/signers'
import { setupUser } from '../../helpers/test_helpers'
import { getDelaysTimestamp } from '../../helpers/contract_getters'

describe('Dispute: submitEvidence', () => {
    describe('first evidence submission', () => {
        it('should have one evidence', async () => {
            const { disputeData } = await makeDispute({})
            const { evidences } = disputeData.rounds[0]
            expect(evidences.length).to.be.equal(1)
        })
        it('should have the correct role', async () => {
            const { disputeData } = await makeDispute({})
            const { evidences } = disputeData.rounds[0]
            expect(evidences[0].role).to.be.equal(BUYER_ROLE)
        })
        it('should have the correct userId (= procecutorId)', async () => {
            const { disputeData, orderData } = await makeDispute({})
            const { rounds } = disputeData
            const { evidences } = rounds[0]
            expect(evidences[0].userId).to.be.equal(orderData.buyerId)
            expect(evidences[0].userId).to.be.equal(rounds[0].procecutorId)
        })
        it('should have added the id to the evidenceSubmitters set', async () => {
            const { disputeData, orderData } = await makeDispute({})
            const { evidenceSubmitters } = disputeData.rounds[0]
            expect(evidenceSubmitters).to.be.deep.equal([orderData.buyerId])
        })
    })
    describe("second evidence submission (defendant's)", () => {
        it('should have two evidence', async () => {
            let { disputeData, sendEvidence, getDisputeData } =
                await makeDispute({})
            await sendEvidence({})
            disputeData = await getDisputeData()
            const { evidences } = disputeData.rounds[0]
            expect(evidences.length).to.be.equal(2)
        })
        it('should have the correct role', async () => {
            let { disputeData, sendEvidence, getDisputeData } =
                await makeDispute({})
            await sendEvidence({})
            disputeData = await getDisputeData()
            const { evidences } = disputeData.rounds[0]
            expect(evidences[1].role).to.be.equal(SELLER_ROLE)
        })
        it('should have the correct userId (= defendantId)', async () => {
            let { disputeData, orderData, sendEvidence, getDisputeData } =
                await makeDispute({})
            await sendEvidence({})
            disputeData = await getDisputeData()
            const { rounds } = disputeData
            const { evidences } = rounds[0]
            expect(evidences[1].userId).to.be.equal(orderData.sellerId)
            expect(evidences[1].userId).to.be.equal(rounds[0].defendantId)
        })
        it('should have added the id to the evidenceSubmitters set', async () => {
            let { disputeData, orderData, sendEvidence, getDisputeData } =
                await makeDispute({})
            await sendEvidence({})
            disputeData = await getDisputeData()
            const { evidenceSubmitters } = disputeData.rounds[0]
            expect(evidenceSubmitters).to.be.deep.equal([
                orderData.buyerId,
                orderData.sellerId,
            ])
        })
    })
    describe('it should fail if', () => {
        async function setupRandomSigner() {
            let randomSigner = await getRandomSigner()
            await setupUser(randomSigner, USER_TEST1)
            return randomSigner
        }
        it('userId provided is not the id of the caller', async () => {
            const { testEnv, disputeData } = await makeDispute({})
            const { Dispute } = testEnv
            let randomSigner = await setupRandomSigner()
            await expect(
                Dispute.connect(randomSigner.signer).sendEvidence(
                    disputeData.disputeId,
                    randomSigner.address,
                    EVIDENCE_TEST0
                )
            ).to.be.revertedWith(ProtocolErrors.CALLER_NOT_USER)
        })
        it('userId is not the procecutorId nor the defendantId', async () => {
            const { testEnv, disputeData } = await makeDispute({})
            const { Dispute, User } = testEnv
            let randomSigner = await setupRandomSigner()
            const rdmSignerId = await User.getIdByAddress(randomSigner.address)
            await expect(
                Dispute.connect(randomSigner.signer).sendEvidence(
                    disputeData.disputeId,
                    randomSigner.address,
                    {
                        userId: rdmSignerId,
                        role: BUYER_ROLE,
                        metadata: 'my evidence',
                    }
                )
            ).to.be.revertedWith(ProtocolErrors.DS_EVIDENCE_SENDER_NOT_PARTY)
        })
        it('it is not the evidence period', async () => {
            const { testEnv, disputeData, buyer } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.VOTE,
            })
            const { Dispute } = testEnv
            const { disputeId } = disputeData
            await expect(
                Dispute.connect(buyer.signer).sendEvidence(
                    disputeId,
                    buyer.address,
                    EVIDENCE_TEST1
                )
            ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
        })
        it('evidence has already been submitted', async () => {
            const { testEnv, disputeData, seller } = await makeDispute({
                caller: 'seller',
            })
            const { Dispute } = testEnv
            const { rounds, disputeId } = disputeData
            const { procecutorId } = rounds[0]
            await expect(
                Dispute.connect(seller.signer).sendEvidence(
                    disputeId,
                    seller.address,
                    {
                        userId: procecutorId,
                        role: BUYER_ROLE,
                        metadata: 'my evidence',
                    }
                )
            ).to.be.revertedWith(
                ProtocolErrors.ROUND_EVIDENCE_ALREADY_SUBMITTED
            )
        })
        it('evidence role is neither BUYER_ROLE nor SELLER_ROLE', async () => {
            const { testEnv, disputeData, seller } = await makeDispute({})
            const { Dispute } = testEnv
            const { rounds, disputeId } = disputeData
            const { defendantId } = rounds[0]
            await expect(
                Dispute.connect(seller.signer).sendEvidence(
                    disputeId,
                    seller.address,
                    {
                        userId: defendantId,
                        role: utils.formatBytes32String('RANDOM_ROLE'),
                        metadata: 'my evidence',
                    }
                )
            ).to.be.revertedWith(ProtocolErrors.DS_EVIDENCE_ROLE_NOT_VALID)
        })
        it('2nd evidence role is the same as first evidence role', async () => {
            const { testEnv, disputeData, seller } = await makeDispute({})
            const { Dispute } = testEnv
            const { rounds, disputeId } = disputeData
            const { defendantId } = rounds[0]
            await expect(
                Dispute.connect(seller.signer).sendEvidence(
                    disputeId,
                    seller.address,
                    {
                        userId: defendantId,
                        role: BUYER_ROLE,
                        metadata: 'my evidence',
                    }
                )
            ).to.be.revertedWith(ProtocolErrors.DS_EVIDENCE_ROLE_NOT_VALID)
        })
    })
})
