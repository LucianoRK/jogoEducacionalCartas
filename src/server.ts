import express from 'express';
import routes from './web/route/userRoute'

class server {

    server

    constructor() {
        this.server = express()
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes);
    }

    start() {
        this.server.listen(process.env.SERVER_PORT);
        console.log(`Servidor iniciado na porta:${process.env.SERVER_PORT}`)
    }
}

export default new server();