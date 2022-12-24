import { Express, Request, Response, NextFunction } from 'express'
import { logRequest } from '../scripts/logs'

const loadMonitor = (app: Express) =>
    app.use((req: Request, res: Response, next: NextFunction) => {
        logRequest(req)
        next()
    })

export { loadMonitor }
