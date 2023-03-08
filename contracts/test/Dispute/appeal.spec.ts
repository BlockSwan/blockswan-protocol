import { Balance, DisputeState, ProtocolErrors } from '../../helpers/types'

import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { getDelaysTimestamp } from '../../helpers/contract_getters'
import { waitForTx } from '../../utilities/tx'
import { getRandomSigner } from '../../utilities/signers'
import { getBalances, setupSeller, setupUser } from '../../helpers/test_helpers'
import { DEFAULT_BALANCE, USER_TEST2 } from '../../helpers/constants'
import { calcAppealFees } from '../../utilities/helpers'

describe('Dispute: appeal', () => {
    describe('Reverting cases:', () => {
        it('state is not APPEAL', async () => {
            const { testEnv, disputeData, buyer } = await makeDispute({
                caller: 'buyer',
                secondEvidence: true,
                phase: DisputeState.COMMIT,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.connect(buyer.signer).appeal(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
        })
        it('not called by procecutor nor defendant', async () => {
            const { testEnv, disputeData } = await makeDispute({
                caller: 'buyer',
                secondEvidence: true,
                phase: DisputeState.APPEAL,
            })
            let randomSigner = await getRandomSigner()
            await setupUser(randomSigner, USER_TEST2)
            const { Dispute } = testEnv
            await expect(
                Dispute.connect(randomSigner.signer).appeal(
                    disputeData.disputeId
                )
            ).to.be.revertedWith(ProtocolErrors.DS_EVIDENCE_SENDER_NOT_PARTY)
        })
    })
    describe('When calling appeal it should:', () => {
        let appealFeePriceInBSWAN: number
        let DisputeContractBalanceBefore: Balance
        let DisputeContractBalanceAfter: Balance
        let appealFeeRewards: number
        beforeEach(async () => {
            let { testEnv, disputeData, buyer, getDisputeData } =
                await makeDispute({
                    caller: 'buyer',
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                })
            const { Dispute, dat } = testEnv
            appealFeePriceInBSWAN = (
                await dat.estimateBuyValue(calcAppealFees({}))
            ).toNumber()
            DisputeContractBalanceBefore = await getBalances(Dispute)
            await waitForTx(
                await Dispute.connect(buyer.signer).appeal(
                    disputeData.disputeId
                )
            )
            DisputeContractBalanceAfter = await getBalances(Dispute)
            disputeData = await getDisputeData(disputeData.disputeId)
            appealFeeRewards = disputeData.rounds[0].appealFeeRewards.toNumber()
        })
        it('pay the appeal feeRewards to the dispute contract', async () => {
            expect(DisputeContractBalanceAfter.BSWAN).to.be.equal(
                DisputeContractBalanceBefore.BSWAN + appealFeePriceInBSWAN
            )
        })
        it('set the appealFeeRewards in the latest round', async () => {
            expect(appealFeeRewards).to.be.equal(appealFeePriceInBSWAN)
        })
        it('set the appealedBy id to the caller', async () => {
            const { disputeData, orderData } = await makeDispute({
                caller: 'buyer',
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
                appealed: 'buyer',
            })
            expect(disputeData.rounds[0].appealedBy.toNumber()).to.be.equal(
                orderData.buyerId
            )
        })
    })
})
