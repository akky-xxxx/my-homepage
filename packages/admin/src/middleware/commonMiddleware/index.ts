// import node_modules
import { json, urlencoded, Router } from "express"
import helmet from "helmet"
import compression from "compression"

// import others
import { HelmetOptions } from "@@/middleware/commonMiddleware/const/Config"

// main
const commonMiddleware = Router()

commonMiddleware.use(helmet(HelmetOptions))
commonMiddleware.use(compression)
commonMiddleware.use(json())
commonMiddleware.use(urlencoded({ extended: false }))

export { commonMiddleware }
