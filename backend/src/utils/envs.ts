import dotenv from 'dotenv'
dotenv.config()

const IP = String(process.env.IP) || 'localhost'
const HOST = `${String(process.env.HOST)}${IP}` || 'http://localhost'
const PORT = parseInt(process.env.PORT || '4500')
const MONGODB_URI = String(process.env.MONGODB_URI)
const LOG_IPFS = Boolean(process.env.LOG_IPFS)

export { HOST, PORT, MONGODB_URI, LOG_IPFS, IP }
