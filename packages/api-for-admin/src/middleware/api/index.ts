// import node_modules
import { Router } from "express"

// import controllers
import { v1Router } from "@@/controllers/v1"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const { V1 } = Endpoints
const apiRouter = Router()

apiRouter.use(V1.ROOT, v1Router)

export { apiRouter }
