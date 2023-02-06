import { expect } from 'chai'
import { MAX_UINT_AMOUNT, ONE_USD } from '../../helpers/constants'
import { SignerWithAddress, TestEnv } from '../../helpers/types'
import { waitForTx } from '../../utilities/tx'
import makeSuite from '../fixtures/makeSuite'

describe('DAT: currencyTransfer', () => {
    let testEnv = {} as TestEnv
    let user: SignerWithAddress
    let initialTokenBalance: number

    beforeEach(async () => {
        testEnv = await makeSuite()
        user = testEnv.users[0]
        initialTokenBalance = 42000000
        waitForTx(
            await testEnv.mUSDC.connect(user.signer).mint(initialTokenBalance)
        )
        waitForTx(
            await testEnv.mUSDC
                .connect(user.signer)
                .approve(testEnv.dat.address, MAX_UINT_AMOUNT)
        )
    })

    it('User has no BSWAN', async () => {
        const balance = (await testEnv.dat.balanceOf(user.address)).toNumber()
        expect(balance).to.be.equal(0)
    })

    it('DAT has no currency yet', async () => {
        const balance = (
            await testEnv.mUSDC.balanceOf(testEnv.dat.address)
        ).toNumber()
        expect(balance).to.be.equal(0)
    })

    it('buybackReserve is currently 0', async () => {
        const balance = (await testEnv.dat.buybackReserve()).toNumber()
        expect(balance).to.be.equal(0)
    })

    describe('can transfer currency into the contract', () => {
        const currencyToSend = ONE_USD.toNumber()

        beforeEach(async () => {
            waitForTx(
                await testEnv.mUSDC
                    .connect(user.signer)
                    .transfer(testEnv.dat.address, currencyToSend)
            )
        })

        it('User has no BSWAN', async () => {
            const balance = (
                await testEnv.dat.balanceOf(user.address)
            ).toNumber()
            expect(balance).to.be.equal(0)
        })

        it('User spent currency', async () => {
            const balance = (
                await testEnv.mUSDC.balanceOf(user.address)
            ).toNumber()
            expect(balance).to.be.equal(initialTokenBalance - currencyToSend)
        })

        it('DAT has currency', async () => {
            const balance = (
                await testEnv.mUSDC.balanceOf(testEnv.dat.address)
            ).toNumber()
            expect(balance).to.be.equal(currencyToSend)
        })

        it('Currencies are reflected in the buybackReserve', async () => {
            const balance = (await testEnv.dat.buybackReserve()).toNumber()
            expect(balance).to.be.equal(currencyToSend)
        })
    })
})
