import { expect } from 'chai'
import { MAX_UINT_AMOUNT, ZERO_ADDRESS } from '../../helpers/constants'
import { SignerWithAddress, TestEnv } from '../../helpers/types'
import { waitForTx } from '../../utilities/tx'
import makeSuite from '../fixtures/makeSuite'

describe('DAT: sellSmallValue', () => {
    let testEnv = {} as TestEnv

    beforeEach(async () => {
        testEnv = await makeSuite()
        waitForTx(await testEnv.mUSDC.mint(10000))
        waitForTx(await testEnv.mUSDC.transfer(testEnv.dat.address, 10000))
    })

    it('has correct reserve', async () => {
        const actual = await testEnv.dat.buybackReserve()
        expect(actual.toNumber()).to.be.equal(10000)
    })

    it('has correct totalSupply', async () => {
        const actual = await testEnv.dat.totalSupply()
        expect(actual.toNumber()).to.be.equal(0)
    })

    it('has correct burnedSupply', async () => {
        const actual = await testEnv.dat.burnedSupply()
        expect(actual.toNumber()).to.be.equal(0)
    })

    it.skip('estimateSellValue is correct', async () => {
        const actual = await testEnv.dat.estimateSellValue('1')
        expect(actual.toNumber()).to.be.equal(0)
    })
})
