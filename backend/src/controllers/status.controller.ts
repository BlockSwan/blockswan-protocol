import { Request, Response } from 'express'
import os from 'os'
import fs from 'fs'
import { logServerStatus } from '../scripts/logs'

const getStatus = async (req: Request, res: Response) => {
    const cpuUsage = process.cpuUsage()
    const memoryUsage = process.memoryUsage()
    const cpuUsagePercent = (cpuUsage.user + cpuUsage.system) / os.cpus().length
    const memoryUsagePercent = (memoryUsage.rss / os.totalmem()) * 100
    logServerStatus(cpuUsagePercent, memoryUsagePercent)
    res.status(200).json({
        cpuUsage: cpuUsagePercent,
        memoryUsage: memoryUsagePercent,
    })
}

export { getStatus }
