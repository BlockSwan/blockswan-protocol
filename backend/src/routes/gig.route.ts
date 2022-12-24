import { Router } from 'express'
import { IPFS } from 'ipfs-core'
import { Request, Response } from 'express'
import { saveGig } from '../controllers/gig.controller'

const gigRoute = (node: IPFS) => {
    const router = Router()
    router.post('/new', (req: Request, res: Response) =>
        saveGig(req, res, node)
    )

    return router
}

export { gigRoute }
