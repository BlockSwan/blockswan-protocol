// src/sockets/orderSocket.ts

import { Server, Socket } from 'socket.io'
import { SOCKET_EVENTS } from '../constants/sockets'
const { CONNEXION, DISCONNECTION, AUTHENTICATION } = SOCKET_EVENTS
//import { AuthService } from '../services/authService'

export class AuthSocket {
    private readonly io: Server
    // private readonly authService: AuthService

    constructor(io: Server) {
        this.io = io
        //this.orderService = new OrderService()
    }

    initialize() {
        this.io.on(CONNEXION, (socket: Socket) => {
            socket.on(AUTHENTICATION, async (data) => {
                const createdOrder = 0 //await this.orderService.createOrder(data)
                this.io.emit('orderCreated', createdOrder)
            })
        })
    }
}
