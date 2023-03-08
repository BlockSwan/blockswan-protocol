import { BigNumber } from 'ethers'
import { waitForTx } from './../../utilities/tx'
import { expect } from 'chai'
import {
    BUYER_ENTRY_PARAMS,
    BUYER_ROLE,
    DEFAULT_BALANCE,
    GIG_CREATION_PARAMS,
    GIG_TEST0,
    GIG_TEST1,
    GIG_TEST2,
    USER_BIGINVITER_TEST,
    USER_TEST0,
    USER_TEST1,
    USER_TEST2,
    XP_VALUES,
} from '../../helpers/constants'
import { maxApproveUser } from '../../helpers/init_helpers'
import {
    getBalances,
    mintAndApproveDAT,
    setupSeller,
    setupUser,
} from '../../helpers/test_helpers'
import {
    Balance,
    GigInput,
    ProtocolErrors,
    SignerWithAddress,
    TestEnv,
    UserInput,
} from '../../helpers/types'
import makeSuite from '../fixtures/makeSuite'
import { time } from '@nomicfoundation/hardhat-network-helpers'

describe('Gig: createGig', () => {
    let testEnv = {} as TestEnv
    let { User, XP, ProtocolConfigurator, mUSDC, dat, ACLManager, Gig } =
        testEnv
    let user0: SignerWithAddress
    let user1: SignerWithAddress
    let user2: SignerWithAddress
    let user0BalanceBefore: Balance
    let user1BalanceBefore: Balance
    let user2BalanceBefore: Balance
    let timestamp: number

    beforeEach(async () => {
        testEnv = await makeSuite()
        User = testEnv.User
        Gig = testEnv.Gig
        mUSDC = testEnv.mUSDC
        dat = testEnv.dat
        XP = testEnv.XP
        ACLManager = testEnv.ACLManager
        ProtocolConfigurator = testEnv.ProtocolConfigurator

        user0 = testEnv.users[0]
        user0BalanceBefore = DEFAULT_BALANCE
        user1 = testEnv.users[1]
        user1BalanceBefore = DEFAULT_BALANCE
        user2 = testEnv.users[2]
        user2BalanceBefore = DEFAULT_BALANCE
    })

    describe('can create a gig', () => {
        beforeEach(async () => {
            async function setup(
                user: SignerWithAddress,
                userArgs: UserInput,
                gigArgs: GigInput,
                userBalance: Balance
            ) {
                await setupUser(user, userArgs)
                await setupSeller(user, userBalance)
                let balances = await getBalances(user)
                userBalance.USDC = balances.USDC
                userBalance.BSWAN = balances.BSWAN
                timestamp = await time.latest()
                await Gig.connect(user.signer).createGig(...gigArgs)
            }
            await setup(user0, USER_TEST0, GIG_TEST0, user0BalanceBefore)
            await setup(user1, USER_TEST1, GIG_TEST1, user1BalanceBefore)
            await setup(user2, USER_TEST2, GIG_TEST2, user2BalanceBefore)
        })

        it('should have the correct metadata', async () => {
            let gigData = await Gig.getGigById(0)
            expect(gigData[1]).to.be.equal(GIG_TEST0[0], 'Invalid gig metadata')
        })

        it('should have the correct packages', async () => {
            let gigData = await Gig.getGigById(0)
            const expected = gigData[7].map((elem: any) => {
                return { price: elem.price, timeDelivery: elem.timeDelivery }
            })
            const actual = GIG_TEST0[1].map((elem: any) => {
                return { price: elem.price, timeDelivery: elem.timeDelivery }
            })
            expect(expected).to.deep.equal(actual)
        })

        it('should have the correct created timestamp', async () => {
            let gigData = await Gig.getGigById(0)
            expect(gigData[2]).to.be.closeTo(
                timestamp,
                100,
                'Invalid timestamp'
            )
        })

        it('user0 should have more xp', async () => {
            let userXP = await XP.balanceOf(user0.address)
            expect(userXP.toNumber()).to.be.equal(
                XP_VALUES[2].amount + XP_VALUES[1].amount
            )
        })

        it('should have added the gig to the user', async () => {
            await Gig.connect(user0.signer).createGig(...GIG_TEST1)
            let userData = await User.getUserById(0)
            expect(userData[8].length).to.be.equal(2, 'Invalid gigIds length')
            expect(userData[8][0].toNumber()).to.be.equal(
                0,
                'gig id is missing at the user level'
            )
            expect(userData[8][1].toNumber()).to.be.equal(
                3,
                'gig id is missing at the user level'
            )
        })

        describe('Creation fees', () => {
            let user0balanceAfter: Balance
            let user1balanceAfter: Balance
            let user2balanceAfter: Balance
            beforeEach(async () => {
                user0balanceAfter = await getBalances(user0)
                user1balanceAfter = await getBalances(user1)
                user2balanceAfter = await getBalances(user2)
            })
            it('users should have paid creation fees', async () => {
                expect(user0balanceAfter.USDC).to.be.equal(
                    user0BalanceBefore.USDC -
                        Number(GIG_CREATION_PARAMS.currencyValue)
                )
                expect(user1balanceAfter.USDC).to.be.equal(
                    user1BalanceBefore.USDC -
                        Number(GIG_CREATION_PARAMS.currencyValue)
                )
            })
            it('inviters should have received BSWAN share', async () => {
                expect(user0balanceAfter.BSWAN).to.be.greaterThan(
                    user0BalanceBefore.BSWAN
                )
                expect(user1balanceAfter.BSWAN).to.be.greaterThan(
                    user1BalanceBefore.BSWAN
                )
            })
            it('inviters should have received BSWAN share', async () => {
                expect(user0balanceAfter.BSWAN).to.be.greaterThan(
                    user0BalanceBefore.BSWAN
                )
                expect(user1balanceAfter.BSWAN).to.be.greaterThan(
                    user1BalanceBefore.BSWAN
                )
            })
        })

        describe('Failed to create gig', () => {
            it('should revert if not seller', async () => {
                await expect(
                    Gig.connect(testEnv.users[5].signer).createGig(...GIG_TEST0)
                ).to.be.revertedWith(ProtocolErrors.ONLY_SELLER)
            })
        })
    })
})
