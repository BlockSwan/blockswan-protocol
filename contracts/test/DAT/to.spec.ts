import { expect } from 'chai'
import { MAX_UINT_AMOUNT } from '../../helpers/constants'
import { SignerWithAddress, TestEnv } from '../../helpers/types'
import { waitForTx } from '../../utilities/tx'
import makeSuite from '../fixtures/makeSuite'

describe('DAT: _to', () => {
    let testEnv = {} as TestEnv

    beforeEach(async () => {
        testEnv = await makeSuite()
    })

    describe('buy', () => {
        const amount = 42 * 10 ** 6
        let bswanHolderBalanceBefore: number
        let currencyHolderBalanceBefore: number
        let tokensIssued: number
        let gasPaid: number
        let bswanHolder: SignerWithAddress
        let currencyHolder: SignerWithAddress

        beforeEach(async () => {
            bswanHolder = testEnv.users[3]
            currencyHolder = testEnv.users[2]
            bswanHolderBalanceBefore = (
                await testEnv.dat.balanceOf(bswanHolder.address)
            ).toNumber()
            tokensIssued = (
                await testEnv.dat.estimateBuyValue(amount)
            ).toNumber()

            waitForTx(
                await testEnv.mUSDC
                    .connect(currencyHolder.signer)
                    .increaseAllowance(testEnv.dat.address, MAX_UINT_AMOUNT)
            )
            waitForTx(
                await testEnv.mUSDC.connect(currencyHolder.signer).mint(amount)
            )
            currencyHolderBalanceBefore = (
                await testEnv.mUSDC.balanceOf(currencyHolder.address)
            ).toNumber()

            const tx = await testEnv.dat
                .connect(currencyHolder.signer)
                .buy(bswanHolder.address, amount, 1)

            const receipt = tx.wait()
            gasPaid = (await receipt).effectiveGasPrice.toNumber()
        })

        it('sanity check, tokensIssued > 0', async () => {
            expect(tokensIssued).not.to.be.equal(0)
        })

        it("currencyHolder's balance went down", async () => {
            const balance = await (
                await testEnv.mUSDC.balanceOf(currencyHolder.address)
            ).toNumber()
            expect(balance).to.be.equal(currencyHolderBalanceBefore - amount)
        })

        it("bswanHolder's balance went up", async () => {
            const balance = await (
                await testEnv.dat.balanceOf(bswanHolder.address)
            ).toNumber()
            expect(balance).to.be.equal(bswanHolderBalanceBefore + tokensIssued)
        })
        describe('sell', () => {
            const amount = 1000
            let bswanHolderBalanceBefore: number
            let currencyHolderBalanceBefore: number
            let currencyReturned: number

            beforeEach(async () => {
                bswanHolderBalanceBefore = await (
                    await testEnv.dat.balanceOf(bswanHolder.address)
                ).toNumber()
                currencyHolderBalanceBefore = await (
                    await testEnv.mUSDC.balanceOf(currencyHolder.address)
                ).toNumber()
                currencyReturned = await (
                    await testEnv.dat.estimateSellValue(amount)
                ).toNumber()

                waitForTx(
                    await testEnv.dat
                        .connect(bswanHolder.signer)
                        .increaseAllowance(testEnv.dat.address, MAX_UINT_AMOUNT)
                )

                const tx = await testEnv.dat
                    .connect(bswanHolder.signer)
                    .sell(currencyHolder.address, amount, 1)

                const receipt = tx.wait()
                gasPaid = (await receipt).effectiveGasPrice.toNumber()
            })
            it('sanity check, currencyReturned > 0', async () => {
                expect(currencyReturned).not.to.be.equal(0)
            })

            it("currencyHolder's balance went up", async () => {
                const balance = await (
                    await testEnv.mUSDC.balanceOf(currencyHolder.address)
                ).toNumber()
                expect(balance).to.be.equal(
                    currencyHolderBalanceBefore + currencyReturned
                )
            })

            it("bswanHolder's balance went down", async () => {
                const balance = await (
                    await testEnv.dat.balanceOf(bswanHolder.address)
                ).toNumber()
                expect(balance).to.be.equal(bswanHolderBalanceBefore - amount)
            })
        })
    })
})
