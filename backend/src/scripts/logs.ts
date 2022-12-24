import { Request } from 'express'
import fs from 'fs'

const logServerStatus = (
    cpuUsagePercent: number,
    memoryUsagePercent: number
) => {
    const date = new Date().toTimeString()
    // Log the resource usage data to a file
    const logMessage = `Date: ${date}, CPU: ${cpuUsagePercent}%, Memory: ${memoryUsagePercent}%`
    fs.appendFileSync('logs/resource_usage.log', logMessage + '\n')
}

const logRequest = (request: Request) => {
    const date = new Date().toTimeString()
    const { ip, method, path } = request
    // Log the resource usage data to a file
    const logMessage = `Date: ${date}, Ip: ${ip}, Method: ${method}, Path: ${path}`
    fs.appendFileSync('logs/request_usage.log', logMessage + '\n')
    console.log(logMessage)
}

function logASCIIArt() {
    console.log(`
______ _            _                            
| ___ \\ |          | |                           
| |_/ / | ___   ___| | _______      ____ _ _ __  
| ___ \\ |/ _ \\ / __| |/ / __\\ \\ /\\ / / _\` | '_ \\
| |_/ / | (_) | (__|   <\\__ \\\\ V  V / (_| | | | |
\\____/|_|\\___/ \\___|_|\\_\\___/ \\_/\\_/ \\__,_|_| |_|
`)
}

export { logServerStatus, logRequest, logASCIIArt }
