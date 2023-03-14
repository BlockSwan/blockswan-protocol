import { expect } from 'chai'
import { ethers } from 'hardhat'
import { FAUCET_AMOUNTS, FAUCET_DELAYS } from '../../helpers/constants'
import { getFaucetSettings } from '../../helpers/contract_getters'
import { Faucet } from '../../types'
import { signMetaTxRequest } from '../../utilities/meta-tx'
import { getRandomSigner } from '../../utilities/signers'
import { waitForTx } from '../../utilities/tx'
import makeSuite from '../fixtures/makeSuite'

describe('Faucet:', () => {
    describe('claimNative', () => {
        it('should allow users to claim native tokens natively', async () => {
            const { Faucet } = await makeSuite()
            let rdmSigner = await getRandomSigner(true)
            const { signer } = rdmSigner
            let rdmSignerBalanceBefore = await signer.getBalance()
            waitForTx(await Faucet.connect(signer).claimNative())
            let rdmSignerBalanceAfter = await signer.getBalance()
            expect(rdmSignerBalanceAfter).to.be.gt(rdmSignerBalanceBefore)
        })
        it('it should allow to claim native tokens via meta-tx', async () => {
            const {
                Faucet,
                deployer: relayer,
                MinimalForwarder,
                users,
            } = await makeSuite()

            let signer = users[4]
            const { address } = signer
            const before = {
                signer: await ethers.provider.getBalance(signer.address),
                relayer: await ethers.provider.getBalance(
                    await relayer.getAddress()
                ),
                faucet: await ethers.provider.getBalance(Faucet.address),
            }

            const { request, signature } = await signMetaTxRequest({
                signer: signer.signer,
                forwarderAddress: MinimalForwarder.address,
                input: {
                    from: address,
                    to: Faucet.address,
                    data: Faucet.interface.encodeFunctionData('claimNative'),
                },
            })
            waitForTx(
                await MinimalForwarder.connect(relayer).execute(
                    request,
                    signature
                )
            )
            const after = {
                signer: await ethers.provider.getBalance(signer.address),
                relayer: await ethers.provider.getBalance(
                    await relayer.getAddress()
                ),
                faucet: await ethers.provider.getBalance(Faucet.address),
            }

            expect(after.signer).to.be.greaterThan(
                before.signer,
                "signer's balance did not increased"
            )
            expect(after.faucet).to.be.lessThan(
                before.faucet,
                'faucet balance did not decreased'
            )
            expect(after.relayer).to.be.lessThan(
                before.relayer,
                'relayer balance did not decreased'
            )
        })

        it('should not allow users to claim native tokens too soon', async () => {
            const { Faucet } = await makeSuite()
            let rdmSigner = await getRandomSigner()
            const { signer } = rdmSigner
            waitForTx(await Faucet.connect(signer).claimNative())
            await expect(
                Faucet.connect(signer).claimNative()
            ).to.be.revertedWith('Faucet: claim too soon')
        })

        it('should emit a ClaimNative', async () => {
            const { Faucet } = await makeSuite()
            let rdmSigner = await getRandomSigner()
            const { signer, address } = rdmSigner
            await expect(Faucet.connect(signer).claimNative())
                .to.emit(Faucet, 'ClaimNative')
                .withArgs(address, FAUCET_AMOUNTS.native)
        })
    })

    describe('claimERC20', () => {
        it('should allow users to claim ERC20 tokens', async () => {
            const { Faucet, mUSDC } = await makeSuite()
            let rdmSigner = await getRandomSigner()
            const { signer, address } = rdmSigner
            let balanceBefore = await mUSDC.balanceOf(address)
            waitForTx(await Faucet.connect(signer).claimERC20(mUSDC.address))
            let balanceAfter = await mUSDC.balanceOf(address)
            expect(balanceAfter).to.be.gt(balanceBefore)
        })

        it('it should allow to claimERC20 tokens via meta-tx', async () => {
            const {
                Faucet,
                deployer: relayer,
                MinimalForwarder,
                users,
                mUSDC,
            } = await makeSuite()

            let signer = users[4]
            const { address } = signer
            const before = {
                signerNative: await ethers.provider.getBalance(signer.address),
                signer: await mUSDC.balanceOf(signer.address),
                relayer: await ethers.provider.getBalance(
                    await relayer.getAddress()
                ),
                faucet: await mUSDC.balanceOf(Faucet.address),
            }

            const { request, signature } = await signMetaTxRequest({
                signer: signer.signer,

                forwarderAddress: MinimalForwarder.address,
                input: {
                    from: address,
                    to: Faucet.address,
                    data: Faucet.interface.encodeFunctionData('claimERC20', [
                        mUSDC.address,
                    ]),
                },
            })
            waitForTx(
                await MinimalForwarder.connect(relayer).execute(
                    request,
                    signature
                )
            )
            const after = {
                signerNative: await ethers.provider.getBalance(signer.address),
                signer: await mUSDC.balanceOf(signer.address),
                relayer: await ethers.provider.getBalance(
                    await relayer.getAddress()
                ),
                faucet: await mUSDC.balanceOf(Faucet.address),
            }
            expect(before.signerNative).to.be.equal(
                after.signerNative,
                'Signer should not have lost native tokens'
            )

            expect(after.signer).to.be.greaterThan(
                before.signer,
                "signer's balance did not increased"
            )
            expect(after.faucet).to.be.lessThan(
                before.faucet,
                'faucet balance did not decreased'
            )
            expect(after.relayer).to.be.lessThan(
                before.relayer,
                'relayer balance did not decreased'
            )
        })

        it('should not allow users to claim ERC20 tokens too soon', async () => {
            const { Faucet, mUSDC } = await makeSuite()
            let rdmSigner = await getRandomSigner()
            const { signer } = rdmSigner
            waitForTx(await Faucet.connect(signer).claimERC20(mUSDC.address))
            await expect(
                Faucet.connect(signer).claimERC20(mUSDC.address)
            ).to.be.revertedWith('Faucet: claim too soon')
        })

        it('should emit a ClaimERC20', async () => {
            const { Faucet, mUSDC } = await makeSuite()
            let rdmSigner = await getRandomSigner()
            const { signer, address } = rdmSigner
            await expect(Faucet.connect(signer).claimERC20(mUSDC.address))
                .to.emit(Faucet, 'ClaimERC20')
                .withArgs(mUSDC.address, address, FAUCET_AMOUNTS.erc20)
        })
    })

    describe('withdrawAllNative', () => {
        it('should allow the owner to withdraw all native tokens', async () => {
            const { Faucet, deployer } = await makeSuite()
            let ownerBalanceBefore = await deployer.getBalance()
            waitForTx(await Faucet.connect(deployer).withdrawAllNative())
            let ownerBalanceAfter = await deployer.getBalance()
            expect(ownerBalanceAfter).to.be.gt(ownerBalanceBefore)
        })
    })

    describe('withdrawAllERC20', () => {
        it('should allow the owner to withdraw all ERC20 tokens', async () => {
            const { Faucet, deployer, mUSDC } = await makeSuite()
            let address = await deployer.getAddress()
            let ownerBalanceBefore = await mUSDC.balanceOf(address)
            waitForTx(
                await Faucet.connect(deployer).withdrawAllERC20(mUSDC.address)
            )
            let ownerBalanceAfter = await mUSDC.balanceOf(address)
            expect(ownerBalanceAfter).to.be.gt(ownerBalanceBefore)
        })
    })

    describe('getSettings', () => {
        it('should return the correct mintDelays and mintAmounts', async () => {
            const { Faucet } = await makeSuite()
            let settings = await getFaucetSettings(Faucet.address)
            const { native: nativeAmount, erc20: erc20Amount } =
                settings.amounts
            const { native: nativeDelay, erc20: erc20Delay } = settings.delays
            expect(Number(nativeAmount)).to.be.eq(Number(FAUCET_AMOUNTS.native))
            expect(Number(erc20Amount)).to.be.eq(Number(FAUCET_AMOUNTS.erc20))
            expect(Number(nativeDelay)).to.be.eq(Number(FAUCET_DELAYS.native))
            expect(Number(erc20Delay)).to.be.eq(Number(FAUCET_DELAYS.erc20))
        })
    })

    describe('setMintDelay', () => {
        it('should allow the owner to set the mint delays', async () => {
            const { Faucet, deployer } = await makeSuite()
            const newDelays: Faucet.TokensStruct = {
                native: 100,
                erc20: 200,
            }
            waitForTx(await Faucet.connect(deployer).setMintDelays(newDelays))
            let settings = await getFaucetSettings(Faucet.address)
            const { native: nativeDelay, erc20: erc20Delay } = settings.delays
            expect(Number(nativeDelay)).to.be.eq(Number(newDelays.native))
            expect(Number(erc20Delay)).to.be.eq(Number(newDelays.erc20))
        })
    })

    describe('setMintAmounts', () => {
        it('should allow the owner to set the mint amounts', async () => {
            const { Faucet, deployer } = await makeSuite()
            const newAmounts: Faucet.TokensStruct = {
                native: 100,
                erc20: 200,
            }
            waitForTx(await Faucet.connect(deployer).setMintAmounts(newAmounts))
            let settings = await getFaucetSettings(Faucet.address)
            const { native: nativeAmount, erc20: erc20Amount } =
                settings.amounts
            expect(Number(nativeAmount)).to.be.eq(Number(newAmounts.native))
            expect(Number(erc20Amount)).to.be.eq(Number(newAmounts.erc20))
        })
    })
})
