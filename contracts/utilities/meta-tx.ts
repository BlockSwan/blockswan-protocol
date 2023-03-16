import { Signer } from 'ethers'
import { ethers } from 'hardhat'
import { getMinimalForwarder } from '../helpers/contract_getters'

type Input = {
    from: string
    to: string
    data: string
    value?: number
    gas?: number
    nonce?: number
}
const EIP712Domain = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
]

const ForwardRequest = [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'gas', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'data', type: 'bytes' },
]

function getMetaTxTypeData({
    chainId,
    verifyingContract,
}: {
    chainId: number
    verifyingContract: string
}) {
    return {
        types: {
            EIP712Domain,
            ForwardRequest,
        },
        domain: {
            name: 'MinimalForwarder',
            version: '0.0.1',
            chainId,
            verifyingContract,
        },
        primaryType: 'ForwardRequest',
    }
}

async function signTypedData({
    signer,
    from,
    data,
}: {
    signer: Signer
    from: string
    data: any
}): Promise<string> {
    const { provider } = ethers
    const address = await signer.getAddress()
    //   const isHardhat = (await provider.getNetwork()).chainId === 31337
    const [method, argData] = ['eth_signTypedData_v4', JSON.stringify(data)]
    console.log('address', address)
    return await provider.send(method, [from, argData])
}

async function buildRequest({
    input,
    forwarderAddress,
}: {
    input: Input
    forwarderAddress?: string
}) {
    let forwarder = await getMinimalForwarder(forwarderAddress)
    const nonce = await forwarder
        .getNonce(input.from)
        .then((nonce) => nonce.toString())
    return { value: 0, gas: 1e6, nonce, ...input }
}

async function buildTypedData({
    request,
    forwarderAddress,
}: {
    request: any
    forwarderAddress?: string
}) {
    let forwarder = await getMinimalForwarder(forwarderAddress)
    const chainId = await forwarder.provider.getNetwork().then((n) => n.chainId)
    const typeData = getMetaTxTypeData({
        chainId,
        verifyingContract: forwarder.address,
    })
    return { ...typeData, message: request }
}

async function signMetaTxRequest({
    signer,
    forwarderAddress,
    input,
}: {
    signer: Signer
    input: Input
    forwarderAddress?: string
}) {
    const request = await buildRequest({
        input,
        forwarderAddress,
    })
    console.log('request', request)
    const toSign = await buildTypedData({ request, forwarderAddress })
    console.log('toSign', toSign)
    const signature = await signTypedData({
        signer,
        from: input.from,
        data: toSign,
    })
    console.log('signature', signature)
    return { signature, request }
}

export { signMetaTxRequest }
