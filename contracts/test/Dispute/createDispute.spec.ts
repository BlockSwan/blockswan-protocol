import { DisputeState, ProtocolErrors } from './../../helpers/types'

import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'
import { calcDisputeDelaysFromBlock } from '../../helpers/init_helpers'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { DISPUTE_PARAMS, EVIDENCE_TEST0 } from '../../helpers/constants'
import { getDelaysTimestamp } from '../../helpers/contract_getters'

describe('Dispute: createDispute', () => {
    describe('it should revert if', () => {
        it('not called by a Order Registry contract', async () => {
            const { Dispute, users } = (await makeDispute({})).testEnv
            await expect(
                Dispute.createDispute(0, 1, 2, users[0].address, EVIDENCE_TEST0)
            ).to.be.revertedWith(ProtocolErrors.ONLY_PROVIDER_ALLOWED)
        })
    })
    it('should add a new disputeId to the disputeIds set ', async () => {
        const { testEnv, disputeData } = await makeDispute({})
        const { Dispute } = testEnv
        const disputeCount = await Dispute.getDisputeCount()
        const disputeList = await Dispute.getDisputeList()
        expect(disputeCount.toNumber()).to.be.eq(1)
        expect(disputeList.length).to.be.eq(1)
        expect(disputeList).to.deep.include(disputeData)
    })
    describe('buyer raises a dispute', () => {
        it('should have the correct delays', async () => {
            const { disputeData } = await makeDispute({})
            let delay = await getDelaysTimestamp()
            expect(disputeData.timestamps[0]).to.be.equal(
                Number(delay.evidence) + Number(disputeData.createdAt)
            )
            expect(disputeData.timestamps.length).to.be.equal(1)
        })
        it('should have the correct createdAt timestamp', async () => {
            let timestamp = await time.latest()
            const { disputeData } = await makeDispute({})
            expect(disputeData.createdAt.toNumber()).to.be.closeTo(
                timestamp,
                100000,
                'Invalid timestamp'
            )
        })
        it('should have the correct state', async () => {
            const { disputeData } = await makeDispute({})
            expect(disputeData.state).to.be.equal(DisputeState.EVIDENCE)
        })
    })
    describe('adding first round', async () => {
        it('should have the correct round number', async () => {
            const { disputeData } = await makeDispute({})
            expect(disputeData.rounds.length).to.be.equal(1)
        })
        it('should have the correct maxVote', async () => {
            const { disputeData } = await makeDispute({})
            expect(disputeData.rounds[0].maxVotes).to.be.equal(
                DISPUTE_PARAMS.maxVotes
            )
        })
        it('should have the correct total fees for jurors', async () => {
            const {
                orderData,
                buyer,
                getDisputeFees,
                signDispute,
                getDisputeData,
            } = await makeDispute({
                dispute: false,
            })
            const { orderId, sellerId, buyerId } = orderData
            const disputeFees = await getDisputeFees()
            await signDispute({
                user: buyer,
                orderId,
                sellerId,
                buyerId,
            })
            let disputeData = await getDisputeData()
            const { totalFeesForJurors } = disputeData.rounds[0]
            expect(totalFeesForJurors).to.be.equal(disputeFees.BSWAN)
        })

        it('should have the appropriate amount of jurors', async () => {
            const { disputeData } = await makeDispute({})
            const { drawnJurors } = disputeData.rounds[0]
            expect(drawnJurors.length).to.be.equal(
                Number(DISPUTE_PARAMS.maxVotes)
            )
        })
        it('procecutor id should be the buyer id', async () => {
            const { disputeData, orderData } = await makeDispute({
                caller: 'buyer',
            })
            const { rounds } = disputeData
            const { procecutorId } = rounds[0]
            expect(procecutorId).to.be.equal(orderData.buyerId)
        })
        it('defendant id should be the seller id ', async () => {
            const { disputeData, orderData } = await makeDispute({
                caller: 'buyer',
            })
            const { rounds } = disputeData
            const { defendantId } = rounds[0]
            expect(orderData.sellerId).to.be.equal(defendantId)
        })
        it("should have paid the dispute's fees to the dispute contract", async () => {
            const { testEnv, disputeData } = await makeDispute({})
            const { totalFeesForJurors } = disputeData.rounds[0]
            const { dat, Dispute } = testEnv
            let DisputeBalance = (
                await dat.balanceOf(Dispute.address)
            ).toNumber()
            expect(DisputeBalance).to.be.equal(totalFeesForJurors)
        })
    })
})
