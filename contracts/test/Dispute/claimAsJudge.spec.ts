import { waitForTx } from './../../utilities/tx'
import { expect } from 'chai'
import { Balance, DisputeState, ProtocolErrors } from '../../helpers/types'
import makeDispute from '../fixtures/makeDispute'
import {
    calcAmountOfWinningChoice,
    calcEarnedFromDisputeFees,
} from '../../utilities/helpers'
import { getBalances } from '../../helpers/test_helpers'

async function test({
    judgeId = 0,
    votes = [5, 5, 5, 5, 2, 5, 1, 0, 0, 0],
}: {
    judgeId?: number
    votes?: number[]
}) {
    let userBalanceBefore: Balance
    let userBalanceAfter: Balance
    let JuryBalanceBefore: Balance
    let JuryBalanceAfter: Balance
    let DisputeBalanceBefore: Balance
    let DisputeBalanceAfter: Balance
    let amountEarnedFromDisputeFees: number
    let amountFromJurorsTokensAtStake: number
    let tokensAtStakePerJuror: number
    let { testEnv, disputeData, drawnJurorsSigners, getWeight } =
        await makeDispute({
            secondEvidence: true,
            phase: DisputeState.EXECUTION,
            votes: votes,
        })
    const { Dispute, Jury } = testEnv
    const { signer, address } = drawnJurorsSigners[judgeId]
    const {
        drawnJurors,
        counts,
        winningChoice,
        totalFeesForJurors,
        penalties,
    } = disputeData.rounds[0]
    const weight = getWeight({
        account: address,
        drawnJurors: drawnJurors,
    })
    amountEarnedFromDisputeFees = calcEarnedFromDisputeFees({
        jurorWeight: weight,
        weightOfCorrectVotes: calcAmountOfWinningChoice({
            counts: counts,
            winningChoice: winningChoice,
        }),
        disputePrice: totalFeesForJurors,
    })
    amountFromJurorsTokensAtStake = calcEarnedFromDisputeFees({
        jurorWeight: weight,
        weightOfCorrectVotes: calcAmountOfWinningChoice({
            counts: counts,
            winningChoice: winningChoice,
        }),
        disputePrice: penalties,
    })
    tokensAtStakePerJuror =
        disputeData.rounds[0].tokensAtStakePerJuror.toNumber()
    userBalanceBefore = await getBalances(drawnJurorsSigners[judgeId])
    JuryBalanceBefore = await getBalances(Jury)
    DisputeBalanceBefore = await getBalances(Dispute)
    waitForTx(
        await Dispute.connect(signer).claimAsJudge(disputeData.disputeId, 0)
    )
    JuryBalanceAfter = await getBalances(Jury)
    DisputeBalanceAfter = await getBalances(Dispute)
    userBalanceAfter = await getBalances(drawnJurorsSigners[judgeId])
    return {
        userBalanceBefore,
        userBalanceAfter,
        JuryBalanceBefore,
        JuryBalanceAfter,
        DisputeBalanceBefore,
        DisputeBalanceAfter,
        amountEarnedFromDisputeFees,
        amountFromJurorsTokensAtStake,
        tokensAtStakePerJuror,
    }
}

describe('Dispute: claimAsJudge', () => {
    describe('it should fail if', () => {
        it('caller not judge', async () => {
            const { testEnv, disputeData } = await makeDispute({
                secondEvidence: true,
                phase: DisputeState.EXECUTION,
            })
            const { Dispute } = testEnv
            await expect(
                Dispute.claimAsJudge(disputeData.disputeId, 0)
            ).to.be.revertedWith(ProtocolErrors.RD_ACCOUNT_NOT_DRAWN_JUROR)
        })
        it('round not closed', async () => {
            const { testEnv, disputeData, drawnJurorsSigners } =
                await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.APPEAL,
                })
            const { Dispute } = testEnv
            const { signer } = drawnJurorsSigners[0]
            await expect(
                Dispute.connect(signer).claimAsJudge(disputeData.disputeId, 0)
            ).to.be.revertedWith(ProtocolErrors.ROUND_NOT_CLOSED)
        })
        it("juror's vote is incorrect", async () => {
            const { testEnv, disputeData, drawnJurorsSigners } =
                await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.EXECUTION,
                    votes: [5, 5, 5, 5, 2, 5, 1, 0, 0, 0],
                })
            const { Dispute } = testEnv
            const { signer } = drawnJurorsSigners[drawnJurorsSigners.length - 1]
            await expect(
                Dispute.connect(signer).claimAsJudge(disputeData.disputeId, 0)
            ).to.be.revertedWith(ProtocolErrors.VOTE_INCORRECT)
        })
    })
    describe('success: cases:', () => {
        it('should add the judge address to the judges claimed set', async () => {
            let { testEnv, disputeData, drawnJurorsSigners, getDisputeData } =
                await makeDispute({
                    secondEvidence: true,
                    phase: DisputeState.EXECUTION,
                    votes: [5, 5, 5, 5, 2, 5, 1, 0, 0, 0],
                })
            const { Dispute } = testEnv
            const { signer, address } = drawnJurorsSigners[0]
            waitForTx(
                await Dispute.connect(signer).claimAsJudge(
                    disputeData.disputeId,
                    0
                )
            )
            disputeData = await getDisputeData()
            const { judgesClaimed } = disputeData.rounds[0]
            expect(judgesClaimed).to.include(address)
            expect(judgesClaimed.length).to.be.equal(1)
        })
        describe('vote is correct', () => {
            it('should unfreeze the staked tokens in the jury contract', async () => {
                const {
                    userBalanceAfter,
                    tokensAtStakePerJuror,
                    amountFromJurorsTokensAtStake,
                    amountEarnedFromDisputeFees,
                    userBalanceBefore,
                } = await test({})
                expect(userBalanceAfter.stakedBSWAN).to.be.closeTo(
                    Number(userBalanceBefore.stakedBSWAN) +
                        tokensAtStakePerJuror +
                        amountFromJurorsTokensAtStake +
                        amountEarnedFromDisputeFees,
                    1,
                    'incorrect user stake balance for winningChoice vote'
                )

                expect(userBalanceAfter.freezedBSWAN).to.be.equal(
                    Number(userBalanceBefore.freezedBSWAN) -
                        tokensAtStakePerJuror,
                    'incorrect user freeze balance for winningChoice vote'
                )
            })
            it('should transfer the dispute fee share to the Jury contract', async () => {
                const {
                    JuryBalanceAfter,
                    JuryBalanceBefore,
                    DisputeBalanceBefore,
                    amountEarnedFromDisputeFees,
                    DisputeBalanceAfter,
                } = await test({})
                expect(JuryBalanceAfter.BSWAN).to.be.closeTo(
                    JuryBalanceBefore.BSWAN + amountEarnedFromDisputeFees,
                    10
                )
                expect(DisputeBalanceAfter.BSWAN).to.be.closeTo(
                    DisputeBalanceBefore.BSWAN - amountEarnedFromDisputeFees,
                    10
                )
            })
        })
        describe('vote is not correct but range', () => {
            it('should unfreeze the staked tokens in the jury contract', async () => {
                const {
                    userBalanceAfter,
                    userBalanceBefore,
                    tokensAtStakePerJuror,
                } = await test({
                    votes: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                })
                expect(userBalanceAfter.stakedBSWAN).to.be.equal(
                    Number(userBalanceBefore.stakedBSWAN) +
                        tokensAtStakePerJuror,
                    'incorrect user stake balance if in range vote'
                )

                expect(userBalanceAfter.freezedBSWAN).to.be.equal(
                    Number(userBalanceBefore.freezedBSWAN) -
                        tokensAtStakePerJuror,
                    'incorrect user freeze balance for in range vote'
                )
            })
        })
    })
})
