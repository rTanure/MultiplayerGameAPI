import { Router } from "express";

// Controller
import { appFunctions } from "./controllers/appFunctions";

const router: Router = Router()

// Routers

router.get('/checkUpdate/:time', appFunctions.checkUpdate)
router.get('/getData', appFunctions.getData)
router.get('/reset1337', appFunctions.reset)

router.post('/appendLine', appFunctions.appendLine)

export {router}