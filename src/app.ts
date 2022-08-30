import express from "express";
const cors = require('cors')

import { router } from "./router";



export class App{
    public server: express.Application
    constructor(){
        this.server  = express()
        this.middleware()
        this.router()
    }

    private middleware() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    public router() {
        this.server.use(router)
    }
}