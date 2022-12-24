import { Router } from 'express'
import { getStatus } from '../controllers/status.controller'

const statusRoute = () => {
    const router = Router()
    router.get('/status', getStatus)
    return router
}

export { statusRoute }
