import { Router } from 'express'
import { IPFS } from 'ipfs-core'
import { Request, Response } from 'express'
import {
	deleteGig,
	getGigPerHash,
	getGigsPerSubCategory,
	pauseGig,
	saveGig,
} from '../controllers/gig.controller'

const gigRoute = (node: IPFS) => {
	const router = Router()
	router.post('/new', (req: Request, res: Response) =>
		saveGig(req, res, node)
	)
	router.post('/pause', (req: Request, res: Response) =>
		pauseGig(req, res, node)
	)
	router.post('/delete', (req: Request, res: Response) =>
		deleteGig(req, res, node)
	)
	router.post('/subcategory', (req: Request, res: Response) =>
		getGigsPerSubCategory(req, res, node)
	)

	router.post('/hash', (req: Request, res: Response) =>
		getGigPerHash(req, res, node)
	)

	return router
}

export { gigRoute }
