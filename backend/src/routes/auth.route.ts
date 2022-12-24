import { Request, Router, Response } from 'express'
import { IPFS } from 'ipfs-core-types'
import { verify } from '../controllers/auth.controller'

const authRoute = (node: IPFS) => {
    const router = Router()

    router.post('/auth', (req: Request, res: Response) =>
        verify(req, res, node)
    )

    return router
}

export { authRoute }
