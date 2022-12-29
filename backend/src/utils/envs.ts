import dotenv from 'dotenv'
dotenv.config()

const HOST = String(process.env.HOST) || 'http://localhost'
const PORT = parseInt(process.env.PORT || '4500')
const MONGODB_URI = String(process.env.MONGODB_URI)
const LOG_IPFS = Boolean(process.env.LOG_IPFS);

export { HOST, PORT, MONGODB_URI, LOG_IPFS }
