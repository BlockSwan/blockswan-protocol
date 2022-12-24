import { Router } from 'express'
import { getIpfsData, getIpfsImage } from '../controllers/ipfs.controller'
import { IPFS } from 'ipfs-core'
import { Request, Response } from 'express'

const ipfsRoute = (node: IPFS) => {
    const router = Router()
    router.get('/get', (req: Request, res: Response) =>
        getIpfsData(req, res, node)
    )
    router.get('/get/:ipfsHash', (req: Request, res: Response) =>
        getIpfsData(req, res, node)
    )
    router.get('/image/:ipfsHash', (req: Request, res: Response) =>
        getIpfsImage(req, res, node)
    )

    return router
}

export { ipfsRoute }
