import { Router, Request, Response } from 'express'
import { IPFS } from 'ipfs-core-types'
import { getAllCategories } from '../controllers/category.controller'

const categoryRoute = (node: IPFS) => {
    const router = Router()

    router.get('/categories', (req: Request, res: Response) =>
        getAllCategories(req, res, node)
    )

    return router
}

export { categoryRoute }
