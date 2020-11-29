// import node_modules
import { Router, json, urlencoded } from "express"
import helmet from "helmet"
import compression from "compression"

// main
const commonMiddleware = Router()

commonMiddleware.use(helmet())
commonMiddleware.use(compression())
commonMiddleware.use(json())
commonMiddleware.use(urlencoded({ extended: false }))

export { commonMiddleware }
