import { ProtocolErrors } from './../../helpers/types'

import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import { OrderState } from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'

describe('Order: dispute', () => {
    describe('can dispute', () => {
        it('if called by seller', async () => {
            const { orderData } = await makeDispute({ caller: 'seller' })
            expect(orderData.state).to.be.equal(OrderState.DISPUTED)
        })
        it('if called by buyer', async () => {
            const { orderData } = await makeDispute({ caller: 'buyer' })
            expect(orderData.state).to.be.equal(OrderState.DISPUTED)
        })

        it('should have the correct disputeId and state', async () => {
            const { orderData } = await makeDispute({ caller: 'buyer' })
            expect(orderData.disputeId.toNumber()).to.be.equal(0)
            expect(orderData.state).to.be.equal(OrderState.DISPUTED)
        })
    })

    describe("Can't dispute", () => {
        it('should revert if caller address is not associated to buyerId or sellerId provided', async () => {
            const { orderData, testEnv } = await makeDispute({
                dispute: false,
            })
            const { Order } = testEnv
            expect(
                Order.connect(testEnv.users[4].signer).dispute(
                    orderData.orderId,
                    orderData.sellerId,
                    orderData.buyerId
                )
            ).to.be.revertedWith(ProtocolErrors.NOT_ORDER_ACTOR)
        })
        it('should revert if buyerId provided is not order buyerId', async () => {
            const { orderData, testEnv, seller } = await makeDispute({
                dispute: false,
            })
            const { Order } = testEnv
            expect(
                Order.connect(seller.signer).dispute(
                    orderData.orderId,
                    orderData.sellerId,
                    1
                )
            ).to.be.revertedWith(ProtocolErrors.CALLER_NOT_BUYER_ID)
        })
        it('should revert if sellerId provided is not order sellerId', async () => {
            const { orderData, testEnv, buyer } = await makeDispute({
                dispute: false,
            })
            const { Order } = testEnv
            expect(
                Order.connect(buyer.signer).dispute(
                    orderData.orderId,
                    1,
                    orderData.buyerId
                )
            ).to.be.revertedWith(ProtocolErrors.CALLER_NOT_SELLER_ID)
        })
        it('should revert if order state is not CONFIRMED', async () => {
            const { orderData, testEnv, buyer, seller } = await makeDispute({
                dispute: false,
            })
            const { Order } = testEnv
            waitForTx(
                await Order.connect(buyer.signer).payOrder(
                    orderData.orderId,
                    orderData.buyerId
                )
            )
            expect(
                Order.connect(seller.signer).dispute(
                    orderData.orderId,
                    orderData.sellerId,
                    orderData.buyerId
                )
            ).to.be.revertedWith(ProtocolErrors.INVALID_ORDER_STATE)
        })
    })
})
