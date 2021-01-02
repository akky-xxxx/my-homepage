// import node_modules
import { Router } from "express"

// import request handlers
import { getController } from "./getController"

// main
const authUserControllers = Router()
const ROOT_ENDPOINT = "/"
authUserControllers.get(ROOT_ENDPOINT, getController)

export { authUserControllers }
