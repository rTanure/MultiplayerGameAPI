import { Router } from "express";

// Controller
import { firstController } from "./controllers/firstController";

const router: Router = Router()

// Routers
router.get('/', firstController.home)

export {router}