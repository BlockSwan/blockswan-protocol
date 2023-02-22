import {
    GIG_TEST0,
    ORDER_TEST0,
    USER_TEST0,
    USER_TEST1,
} from '../../helpers/constants'
import {
    setupJudge,
    setupJudges,
    setupOneUser,
} from '../../helpers/test_helpers'
import { waitForTx } from '../../utilities/tx'
import makeSuite from './makeSuite'

const makeDispute = async ({
    caller = 'buyer',
    dispute = true,
}: {
    caller?: 'buyer' | 'seller'
    dispute?: boolean
}) => {
    const testEnv = await makeSuite()
    const { Order, Gig, users, Dispute, judges } = testEnv

    let buyer = users[3]
    let seller = users[4]
    await setupOneUser({
        user: seller,
        role: 'seller',
        userArgs: USER_TEST0,
    })

    await setupOneUser({
        user: buyer,
        role: 'buyer',
        userArgs: USER_TEST1,
    })

    await setupJudges({ judges: judges })

    waitForTx(await Gig.connect(seller.signer).createGig(...GIG_TEST0))
    waitForTx(await Order.connect(buyer.signer).createOrder(ORDER_TEST0))
    let orderData = await Order.getOrderById(0)
    waitForTx(
        await Order.connect(seller.signer).confirmOrder(
            orderData.orderId,
            orderData.sellerId
        )
    )
    if (dispute === true) {
        waitForTx(
            await Order.connect(
                caller === 'buyer' ? buyer.signer : seller.signer
            ).dispute(orderData.orderId, orderData.sellerId, orderData.buyerId)
        )
    }
    orderData = await Order.getOrderById(orderData.orderId)
    let disputeData = await Dispute.getDisputeById(orderData.disputeId)
    return { testEnv, buyer, seller, orderData, disputeData }
}

export default makeDispute
