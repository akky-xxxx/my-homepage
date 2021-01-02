// import node_modules
import { Router } from "express"

// import controllers
import { getController } from "./getController"

// main
const prefecturesControllers = Router()

const ROOT_ENDPOINT = "/"
prefecturesControllers.get(ROOT_ENDPOINT, getController)

export { prefecturesControllers }
