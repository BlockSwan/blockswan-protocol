import { Server } from 'socket.io'
import { AuthSocket } from './auth.socket'

export function setupSockets(io: Server) {
    const authSocket = new AuthSocket(io)

    authSocket.initialize()
}
