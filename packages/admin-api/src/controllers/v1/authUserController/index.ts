// import node_modules
import { Router } from "express"

// import request handlers
import { get } from "./get"

// main
const authUserControllers = Router()
const ROOT_ENDPOINT = "/"
authUserControllers.get(ROOT_ENDPOINT, get)

export { authUserControllers }
