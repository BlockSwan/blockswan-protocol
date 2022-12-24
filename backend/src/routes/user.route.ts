import { Request, Response, Router } from 'express'

import { IPFS } from 'ipfs-core-types'
import {
	getUser,
	updateCertifications,
	updateCountry,
	updateDescription,
	updateEducations,
	updateLanguages,
	updateSkills,
} from '../controllers/user.controller'

const userRoute = (node: IPFS) => {
	const router = Router()

	router.get('/user/:evmAddress', (req: Request, res: Response) =>
		getUser(req, res, node)
	)
	router.post('/user/edit/country', updateCountry)
	router.post('/user/edit/description', updateDescription)
	router.post('/user/edit/languages', updateLanguages)
	router.post('/user/edit/skills', updateSkills)
	router.post('/user/edit/educations', updateEducations)
	router.post('/user/edit/certifications', updateCertifications)
	return router
}

export { userRoute }
