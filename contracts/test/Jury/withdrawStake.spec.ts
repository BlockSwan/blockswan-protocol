import { expect } from 'chai'
import {
    DEFAULT_BALANCE,
    DISPUTE_PARAMS,
    MAX_UINT_AMOUNT,
    MIN_INVESTMENT,
    ONE_HUNDRED_USDC,
    ONE_THOUSAND_USDC,
    USER_TEST0,
} from '../../helpers/constants'
import { getBalances, setupJudge, setupUser } from '../../helpers/test_helpers'
import {
    TestEnv,
    SignerWithAddress,
    Balance,
    UserInput,
} from '../../helpers/types'
import { waitForTx } from '../../utilities/tx'
import makeSuite from '../fixtures/makeSuite'

const { minStake } = DISPUTE_PARAMS

describe('Jury: withdrawStake', () => {
    let testEnv: TestEnv
    let judge0: SignerWithAddress
    let judge0BalanceBefore: Balance
    let price: number

    beforeEach(async () => {
        testEnv = await makeSuite()
        const { dat, Jury } = testEnv
        judge0 = testEnv.users[1]

        price = (await dat.estimateBuyValue(ONE_HUNDRED_USDC)).toNumber()
        await setupJudge({
            user: judge0,
            createArgs: USER_TEST0,
            dat: dat,
            Jury: Jury,
        })
        judge0BalanceBefore = await getBalances(judge0)
        waitForTx(await Jury.connect(judge0.signer).depositStake(minStake))
        waitForTx(await Jury.connect(judge0.signer).withdrawStake(minStake))
    })

    describe('can withdraw', () => {
        it('should have decreased jury contract balance', async () => {
            const { Jury } = testEnv
            const judgeContractBalanceAfter = await getBalances({
                signer: Jury.signer,
                address: Jury.address,
            })
            expect(judgeContractBalanceAfter.BSWAN).to.be.equal(0)
        })

        it('should have decreased juror staked token', async () => {
            const { Jury } = testEnv
            let jurorData = await Jury.readJuror(judge0.address)
            expect(jurorData[0].toNumber()).to.be.equal(0)
        })
        it('should have increased user balance', async () => {
            const judge0BalanceAfter = await getBalances(judge0)
            expect(judge0BalanceAfter.BSWAN).to.be.equal(
                judge0BalanceBefore.BSWAN
            )
        })
    })
})
