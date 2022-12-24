import { Router } from 'express'
import { getAllCategories } from '../controllers/category.controller'

const categoryRoute = () => {
    const router = Router()

    router.get('/categories', getAllCategories)

    return router
}

export { categoryRoute }
