import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import { Balance, DisputeState, ProtocolErrors } from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import { getBalances } from '../../helpers/test_helpers'
import { OutputTypes } from '../../types/interfaces/IDispute'
import { time } from '@nomicfoundation/hardhat-network-helpers'

describe('Dispute: claimRuling ', () => {
    describe('it should fail if', () => {
        it('state is not EXECUTION', async () => {
            const { disputeData, testEnv } = await makeDispute({
                phase: DisputeState.EVIDENCE,
                appealed: false,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.claimRuling(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_INVALID_STATE)
        })

        it('round has been appealed', async () => {
            const { disputeData, testEnv } = await makeDispute({
                phase: DisputeState.EXECUTION,
                appealed: 'buyer',
                caller: 'buyer',
                secondEvidence: true,
                round: 1,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.claimRuling(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.ROUND_IS_APPEALED)
        })
        it('ruling already claimed', async () => {
            const { disputeData, testEnv } = await makeDispute({
                phase: DisputeState.EXECUTION,
                secondEvidence: true,
            })
            const { Dispute } = testEnv
            waitForTx(await Dispute.claimRuling(disputeData.disputeId))
            await expect(
                Dispute.claimRuling(disputeData.disputeId)
            ).to.be.revertedWith(ProtocolErrors.DS_DISPUTE_ALREADY_RULED)
        })
    })
    describe('success: cases:', () => {
        describe('setting values:', () => {
            let data: OutputTypes.DisputeOutputStruct
            let ruledAt: number

            beforeEach(async () => {
                const { disputeData, testEnv, getDisputeData } =
                    await makeDispute({
                        phase: DisputeState.EXECUTION,
                        secondEvidence: true,
                        votes: [5],
                    })
                const { Dispute } = testEnv
                ruledAt = await time.latest()
                waitForTx(await Dispute.claimRuling(disputeData.disputeId))
                data = await getDisputeData()
            })
            it('should set the dispute ruling', async () => {
                const { ruling } = data
                expect(ruling).to.be.equal(5)
            })
            it('should set the dispute ruledAt timestamp', async () => {
                const { ruledAt } = data
                expect(ruledAt).to.be.closeTo(ruledAt, 10)
            })
        })

        describe('transfers order value according to the winningChoice', () => {
            const runTest = async ({
                caller = 'buyer',
                votes = [5],
            }: {
                caller?: 'buyer' | 'seller'
                votes?: number[]
            }) => {
                const { buyer, seller, ...suite } = await makeDispute({
                    caller: caller,
                    phase: DisputeState.EXECUTION,
                    secondEvidence: true,
                    votes: votes,
                    appealed: false,
                })

                let buyerBalanceBefore: Balance = await getBalances(buyer)
                let sellerBalanceBefore: Balance = await getBalances(seller)
                let orderBalanceBefore: Balance = await getBalances(
                    suite.testEnv.Order
                )
                waitForTx(
                    await suite.testEnv.Dispute.claimRuling(
                        suite.disputeData.disputeId
                    )
                )
                let buyerBalanceAfter: Balance = await getBalances(buyer)
                let sellerBalanceAfter: Balance = await getBalances(seller)
                let orderBalanceAfter: Balance = await getBalances(
                    suite.testEnv.Order
                )

                return {
                    suite,
                    buyerBalanceBefore,
                    sellerBalanceBefore,
                    orderBalanceBefore,
                    buyerBalanceAfter,
                    sellerBalanceAfter,
                    orderBalanceAfter,
                }
            }

            it('Order contract balance should have decreased', async () => {
                const { orderBalanceAfter } = await runTest({})
                expect(orderBalanceAfter.USDC).to.be.equal(0)
            })

            it('winnningChoice = 0', async () => {
                const {
                    buyerBalanceAfter,
                    buyerBalanceBefore,
                    sellerBalanceAfter,
                    sellerBalanceBefore,
                    suite,
                } = await runTest({
                    caller: 'buyer',
                    votes: [0],
                })
                const { price, sellerFees } = suite.orderData.invoice
                expect(buyerBalanceAfter.USDC).to.be.equal(
                    buyerBalanceBefore.USDC,
                    'incorrect buyer balance'
                )
                expect(sellerBalanceAfter.USDC).to.be.equal(
                    sellerBalanceBefore.USDC +
                        price.toNumber() -
                        sellerFees.toNumber(),
                    'incorrect seller balance'
                )
            })
            it('winningChoice = 5', async () => {
                const {
                    buyerBalanceAfter,
                    buyerBalanceBefore,
                    sellerBalanceAfter,
                    sellerBalanceBefore,
                    suite,
                } = await runTest({
                    caller: 'buyer',
                    votes: [5],
                })
                const { price, sellerFees } = suite.orderData.invoice
                const toSeller = (price.toNumber() - sellerFees.toNumber()) / 2
                const toBuyer = toSeller
                expect(buyerBalanceAfter.USDC).to.be.equal(
                    buyerBalanceBefore.USDC + toBuyer,
                    'incorrect buyer balance'
                )
                expect(sellerBalanceAfter.USDC).to.be.equal(
                    sellerBalanceBefore.USDC + toSeller,
                    'incorrect seller balance'
                )
            })
            it('winningChoice = 10', async () => {
                const {
                    buyerBalanceAfter,
                    buyerBalanceBefore,
                    sellerBalanceAfter,
                    sellerBalanceBefore,
                    suite,
                } = await runTest({
                    caller: 'buyer',
                    votes: [10],
                })
                const { price, sellerFees } = suite.orderData.invoice
                expect(buyerBalanceAfter.USDC).to.be.equal(
                    buyerBalanceBefore.USDC +
                        price.toNumber() -
                        sellerFees.toNumber(),
                    'incorrect buyer balance'
                )
                expect(sellerBalanceAfter.USDC).to.be.equal(
                    sellerBalanceBefore.USDC,
                    'incorrect seller balance'
                )
            })
        })
    })
})
