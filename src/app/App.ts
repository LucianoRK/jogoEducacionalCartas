import express from 'express';
import routes from '../route/user.route'

export class App {

    server

    constructor() {
        this.server = express()
        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(express.json())
    }

    routes(){
       this.server.use(routes);
    }
}