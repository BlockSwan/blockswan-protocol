import { waitForTx } from './../utilities/tx'
import { BSWAN, Jury, MUSDC, User } from '../types'
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
import { Balance, SignerWithAddress, UserInput } from './types'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { DELAYS_TIMESTAMP, MAX_UINT_AMOUNT, ONE_HUNDRED } from './constants'

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
    createArgs,
    dat,
    Jury,
}: {
    user: SignerWithAddress
    createArgs: UserInput
    dat: BSWAN
    Jury: Jury
}) {
    if (user) await setupUser(user, createArgs)
    waitForTx(await dat.connect(user.signer).buy(user.address, ONE_HUNDRED, 1))
    waitForTx(
        await dat.connect(user.signer).approve(Jury.address, MAX_UINT_AMOUNT)
    )
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
}
