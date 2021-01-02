// import node_modules
import { Router } from "express"

// import controllers
import { get } from "./get"

// main
const prefecturesControllers = Router()

const ROOT_ENDPOINT = "/"
prefecturesControllers.get(ROOT_ENDPOINT, get)

export { prefecturesControllers }
