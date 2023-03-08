import { expect } from 'chai'
import { BUYER_ROLE, PERCENTAGE_FACTOR } from '../../helpers/constants'
import { getBalances } from '../../helpers/test_helpers'
import { DisputeState, ProtocolErrors } from '../../helpers/types'
import { waitForTx } from '../../utilities/tx'
import makeDispute from '../fixtures/makeDispute'
import { getDisputeParams } from '../../helpers/contract_getters'
import { calcTokensToFreeze } from '../../utilities/helpers'

describe('Jury: freezeTokens', () => {
    describe('access resctriced', () => {
        it('should only be called by DISPUTE contract', async () => {
            const { testEnv } = await makeDispute({})
            const { Jury, users } = testEnv
            expect(
                Jury.freezeTokens([users[0].address, users[1].address])
            ).to.be.revertedWith(ProtocolErrors.ONLY_PROVIDER_ALLOWED)
        })
        it('should freeze alpha * minStake token per judge at round 1', async () => {
            const {
                buyer,
                orderData,
                getDisputeData,
                getAllJurorsBalance,
                signDispute,
                getWeight,
            } = await makeDispute({
                dispute: false,
            })
            const { orderId, sellerId, buyerId } = orderData
            let allJurorsBalanceBefore = await getAllJurorsBalance()
            await signDispute({
                user: buyer,
                orderId,
                sellerId,
                buyerId,
            })
            const { drawnJurors } = (await getDisputeData()).rounds[0]
            let allJurorsBalanceAfter = await getAllJurorsBalance()

            for (let i = 0; i < allJurorsBalanceBefore.length; i++) {
                const { address, balance } = allJurorsBalanceAfter[i]
                const { stakedBSWAN, freezedBSWAN } = balance
                const pastStakedBSWAN =
                    allJurorsBalanceBefore[i].balance.stakedBSWAN || 0
                const pastFreezeBSWAN =
                    allJurorsBalanceBefore[i].balance.freezedBSWAN || 0
                const weight = getWeight({
                    account: address,
                    drawnJurors,
                })
                if (
                    drawnJurors.includes(address) &&
                    stakedBSWAN &&
                    freezedBSWAN
                ) {
                    expect(pastStakedBSWAN - stakedBSWAN).to.be.equal(
                        calcTokensToFreeze({ weight })
                    )
                    expect(freezedBSWAN - pastFreezeBSWAN).to.be.equal(
                        calcTokensToFreeze({ weight })
                    )
                }
            }
        })
    })
})
