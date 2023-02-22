import { DisputeState, ProtocolErrors } from './../../helpers/types'

import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'
import { calcDisputeDelaysFromBlock } from '../../helpers/init_helpers'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { DISPUTE_PARAMS } from '../../helpers/constants'
import { calcTotalFeesForJurors } from '../../utilities/helpers'

describe('Dispute: createDispute', () => {
    xdescribe('it should revert if', () => {
        it(' called by a Order Registry contract', async () => {
            const { Dispute } = (await makeDispute({})).testEnv
            await expect(Dispute.createDispute(0, 1, 2)).to.be.revertedWith(
                ProtocolErrors.ONLY_PROVIDER_ALLOWED
            )
        })
    })
    xit('should add a new disputeId to the disputeIds set ', async () => {
        const { testEnv, disputeData } = await makeDispute({})
        const { Dispute } = testEnv
        const disputeCount = await Dispute.getDisputeCount()
        const disputeList = await Dispute.getDisputeList()
        expect(disputeCount.toNumber()).to.be.eq(1)
        expect(disputeList.length).to.be.eq(1)
        expect(disputeList).to.deep.include(disputeData)
    })
    xdescribe('buyer raises a dispute', () => {
        it('procecutor id should be the buyer id', async () => {
            const { disputeData, orderData } = await makeDispute({
                caller: 'buyer',
            })
            expect(disputeData.procecutorId).to.be.equal(orderData.buyerId)
        })
        it('defendant id should be the seller id ', async () => {
            const { disputeData, orderData } = await makeDispute({
                caller: 'buyer',
            })
            expect(orderData.sellerId).to.be.equal(disputeData.defendantId)
        })
        it('should have the correct delays', async () => {
            const { disputeData } = await makeDispute({
                caller: 'buyer',
            })
            let delays: number[] = await calcDisputeDelaysFromBlock(
                disputeData.createdAt.toNumber()
            )
            expect(disputeData.timestamps).to.be.deep.equal(delays)
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
        xit('should have the correct round number', async () => {
            const { disputeData } = await makeDispute({})
            expect(disputeData.rounds.length).to.be.equal(1)
        })
        xit('should have the correct maxVote', async () => {
            const { disputeData } = await makeDispute({})
            expect(disputeData.rounds[0].maxVotes).to.be.equal(
                DISPUTE_PARAMS.maxVotes
            )
        })
        xit('should have the correct total fees for jurors', async () => {
            const { disputeData } = await makeDispute({})
            let fees: number = await calcTotalFeesForJurors({
                roundNumber: 1,
                numberOfJurors: Number(DISPUTE_PARAMS.maxVotes),
                jurorsFee: Number(DISPUTE_PARAMS.feePerJuror),
            })
            expect(disputeData.rounds[0].totalFeesForJurors).to.be.equal(fees)
        })
        it('should have the appropriate amount of jurors', async () => {
            const { disputeData } = await makeDispute({})
            console.log(disputeData.rounds[0].drawnJurors)
            const { drawnJurors } = disputeData.rounds[0]
            console.log(JSON.stringify(drawnJurors, null, 2))
            expect(drawnJurors.length).to.be.equal(
                Number(DISPUTE_PARAMS.maxVotes)
            )
        })
    })
})
