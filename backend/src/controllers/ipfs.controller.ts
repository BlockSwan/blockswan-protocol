import { IPFS } from 'ipfs-core'
import { Request, Response } from 'express'
import type { CID } from 'multiformats/cid'
import { readIpfsFile } from '../utils/ipfs'

const getIpfsData = async (req: Request, res: Response, node: IPFS) => {
    try {
        const ipfsHash: any = req.body.ipfsHash || req.params.ipfsHash
        if (!ipfsHash) return res.status(400).json({ name: 'Missing ipfsHash' })

        const cid: CID = ipfsHash
        if (!cid) return res.status(400).json({ name: 'Missing CID' })
        const content: any = await readIpfsFile(node, cid)
        if (!content) return res.status(400).json({ name: 'No such content' })
        return res.status(200).json({ message: content })
    } catch (err) {
        console.error(err)
    }
}

const getIpfsImage = async (req: Request, res: Response, node: IPFS) => {
    try {
        const imageHash = req.params.hash
        const imageData = await node.cat(imageHash)
        res.set('Content-Type', 'image/png')
        res.send(imageData)
    } catch (error) {
        res.status(500).send({ message: 'Failed to get ipfs image' })
    }
}

export { getIpfsData, getIpfsImage }
