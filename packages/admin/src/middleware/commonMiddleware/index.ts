// import node_modules
import { json, urlencoded, Router } from "express"
import helmet from "helmet"
import cookieParser from "cookie-parser"

// import others
import { HelmetOptions } from "@@/middleware/commonMiddleware/const/Config"

// main
const commonMiddleware = Router()

commonMiddleware.use(helmet(HelmetOptions))
commonMiddleware.use(json())
commonMiddleware.use(urlencoded({ extended: false }))
commonMiddleware.use(cookieParser())

export { commonMiddleware }
