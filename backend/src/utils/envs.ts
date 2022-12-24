import dotenv from 'dotenv'
dotenv.config()

const HOST = String(process.env.HOST) || 'http://localhost'
const PORT = parseInt(process.env.PORT || '4500')
const MONGODB_URI = String(process.env.MONGODB_URI)

export { HOST, PORT, MONGODB_URI }
