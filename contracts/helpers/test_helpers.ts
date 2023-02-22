import { waitForTx } from './../utilities/tx'
import { BSWAN, Jury, MUSDC, User, Gig } from '../types'
import {
    getDAT,
    getDispute,
    getGig,
    getJury,
    getMockUSDC,
    getOrder,
    getUser,
} from './contract_getters'
import {
    maxApproveDAT,
    maxApproveDispute,
    maxApproveGig,
    maxApproveJury,
    maxApproveOrder,
    maxApproveUser,
    mintUSDC,
} from './init_helpers'
import {
    Balance,
    GigInput,
    OrderInput,
    SignerWithAddress,
    UserInput,
    ValidInput,
} from './types'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import {
    DEFAULT_BALANCE,
    DELAYS_TIMESTAMP,
    DISPUTE_PARAMS,
    MAX_UINT_AMOUNT,
    ONE_HUNDRED,
    ONE_THOUSAND_USDC,
    USER_TEST0,
    USER_TEST1,
} from './constants'

const mintAndApproveDAT = async (
    mUSDCaddress: string | undefined,
    DATAddress: string | undefined,
    caller: SignerWithAddress
) => {
    await mintUSDC(mUSDCaddress, caller)
    await maxApproveDAT(mUSDCaddress, DATAddress, caller)
}

async function getBalances(user: SignerWithAddress): Promise<Balance> {
    let mUSDC = await getMockUSDC()
    let dat = await getDAT()
    return {
        USDC: (await mUSDC.balanceOf(user.address)).toNumber(),
        BSWAN: (await dat.balanceOf(user.address)).toNumber(),
    }
}

async function setupUser(user: SignerWithAddress, createArgs: UserInput) {
    let mUSDC = await getMockUSDC()
    let dat = await getDAT()
    let User = await getUser()
    let Gig = await getGig()
    let Order = await getOrder()
    let Dispute = await getDispute()
    let Jury = await getJury()
    await mintAndApproveDAT(mUSDC.address, dat.address, user)
    await maxApproveUser(mUSDC.address, User.address, user)
    await maxApproveGig(mUSDC.address, Gig.address, user)
    await maxApproveOrder(mUSDC.address, Order.address, user)
    await maxApproveJury(mUSDC.address, Jury.address, user)
    await maxApproveDispute(mUSDC.address, Dispute.address, user)
    waitForTx(await User.connect(user.signer).createUser(...createArgs))
}

async function setupJudge({
    user,
    createArgs = USER_TEST1,
    dat,
    Jury,
    bswanToBuy = ONE_HUNDRED,
}: {
    user: SignerWithAddress
    createArgs?: UserInput
    dat?: BSWAN
    Jury?: Jury
    bswanToBuy?: ValidInput
}) {
    if (!dat) dat = await getDAT()
    if (!Jury) Jury = await getJury()
    if (user) await setupUser(user, createArgs)
    waitForTx(await dat.connect(user.signer).buy(user.address, bswanToBuy, 1))
    waitForTx(
        await dat.connect(user.signer).approve(Jury.address, MAX_UINT_AMOUNT)
    )
}

async function setupJudges({ judges }: { judges: SignerWithAddress[] }) {
    let dat = await getDAT()
    let Jury = await getJury()
    let mUSDC = await getMockUSDC()

    for (let i = 0; i < judges.length; i++) {
        await setupJudge({
            user: judges[i],
            createArgs: i % 2 === 0 ? USER_TEST0 : USER_TEST1,
            dat: dat,
            Jury: Jury,
            bswanToBuy: ONE_HUNDRED.toNumber() * 5,
        })

        let balances = await getBalances(judges[i])
        while (balances.BSWAN < Number(DISPUTE_PARAMS.minStake)) {
            waitForTx(await mintUSDC(mUSDC.address, judges[i]))
            waitForTx(
                await dat
                    .connect(judges[i].signer)
                    .buy(judges[i].address, ONE_THOUSAND_USDC, 1)
            )
            balances = await getBalances(judges[i])
        }
        waitForTx(
            await Jury.connect(judges[i].signer).depositStake(
                DISPUTE_PARAMS.minStake
            )
        )
    }
}

async function setupBuyer(user: SignerWithAddress, userBalance: Balance) {
    let User = await getUser()
    let balances = await getBalances(user)
    userBalance.BSWAN = balances.BSWAN
    userBalance.USDC = balances.USDC

    waitForTx(await User.connect(user.signer).becomeBuyer())
}

async function setupSeller(user: SignerWithAddress, userBalance: Balance) {
    let User = await getUser()
    let balances = await getBalances(user)
    userBalance.BSWAN = balances.BSWAN
    userBalance.USDC = balances.USDC

    waitForTx(await User.connect(user.signer).becomeSeller())
}

async function setupOneUser({
    user,
    userArgs = USER_TEST0,
    userBalance = DEFAULT_BALANCE,
    role = 'buyer',
}: {
    user: SignerWithAddress
    userArgs?: UserInput
    userBalance?: Balance
    role: 'buyer' | 'seller' | 'judge'
}) {
    await setupUser(user, userArgs)
    switch (role) {
        case 'buyer':
            await setupBuyer(user, userBalance)
            break
        case 'seller':
            await setupSeller(user, userBalance)
            break
        case 'judge':
            await setupJudge({ user, createArgs: userArgs })
            break
    }
}

async function makeOrder({
    gigArgs,
    seller,
    buyer,
    orderArgs,
}: {
    gigArgs: GigInput
    seller: SignerWithAddress
    buyer: SignerWithAddress
    orderArgs: OrderInput
}) {
    const Gig = await getGig()
    const Order = await getOrder()
    waitForTx(await Gig.connect(seller.signer).createGig(...gigArgs))
    waitForTx(await Order.connect(buyer.signer).createOrder(orderArgs))
}

async function passSelfRefundDelay() {
    await time.increase(Number(DELAYS_TIMESTAMP.selfRefund) * 2)
}

export {
    mintAndApproveDAT,
    setupUser,
    getBalances,
    setupBuyer,
    setupSeller,
    passSelfRefundDelay,
    setupJudge,
    setupOneUser,
    setupJudges,
}
