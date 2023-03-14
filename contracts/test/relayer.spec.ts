import { expect } from 'chai'
import { ethers } from 'hardhat'
import { relay } from '../autotasks/relay'
import { signMetaTxRequest } from '../utilities/meta-tx'
import makeSuite from './fixtures/makeSuite'

describe('autotasks/relayer', () => {
    it('should claim native tokens via meta-tx', async () => {
        const {
            MinimalForwarder,
            users,
            Faucet,
            deployer: relayer,
        } = await makeSuite()
        let rdm = users[5]
        const { request, signature } = await signMetaTxRequest({
            signer: rdm.signer,
            forwarderAddress: MinimalForwarder.address,
            input: {
                from: rdm.address,
                to: Faucet.address,
                data: Faucet.interface.encodeFunctionData('claimNative'),
            },
        })

        const whitelist = [Faucet.address]
        const before = {
            signer: await ethers.provider.getBalance(rdm.address),
            relayer: await ethers.provider.getBalance(
                await relayer.getAddress()
            ),
            faucet: await ethers.provider.getBalance(Faucet.address),
        }
        await relay({
            forwarder: MinimalForwarder,
            request,
            signature,
            whitelist,
        })
        const after = {
            signer: await ethers.provider.getBalance(rdm.address),
            relayer: await ethers.provider.getBalance(
                await relayer.getAddress()
            ),
            faucet: await ethers.provider.getBalance(Faucet.address),
        }
        expect(after.signer).to.be.greaterThan(before.signer)
        expect(after.faucet).to.be.lessThan(before.faucet)
        expect(after.relayer).to.be.lessThan(before.relayer)
    })

    it('refuses to send to non-whitelisted address', async function () {
        const { MinimalForwarder, users, Faucet } = await makeSuite()
        let rdm = users[5]

        const { request, signature } = await signMetaTxRequest({
            signer: rdm.signer,
            forwarderAddress: MinimalForwarder.address,
            input: {
                from: rdm.address,
                to: Faucet.address,
                data: Faucet.interface.encodeFunctionData('claimNative'),
            },
        })

        const whitelist: string[] = []
        await expect(
            relay({
                forwarder: MinimalForwarder,
                request,
                signature,
                whitelist,
            })
        ).to.be.rejectedWith(/rejected/i)
    })

    it('refuses to send incorrect signature', async function () {
        const { MinimalForwarder, users, Faucet } = await makeSuite()
        let rdm = users[5]

        const { request, signature } = await signMetaTxRequest({
            signer: rdm.signer,
            forwarderAddress: MinimalForwarder.address,
            input: {
                from: rdm.address,
                to: Faucet.address,
                data: Faucet.interface.encodeFunctionData('claimNative'),
                nonce: 5,
            },
        })

        const whitelist = [Faucet.address]
        await expect(
            relay({
                forwarder: MinimalForwarder,
                request,
                signature,
                whitelist,
            })
        ).to.be.rejectedWith(/invalid/i)
    })
})
