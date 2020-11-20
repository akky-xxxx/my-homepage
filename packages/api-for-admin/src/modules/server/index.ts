// import node_modules
import express from "express"
import helmet from "helmet"
import compression from "compression"

// import middleware
import { apiRouter } from "@@/middleware/api"
import { errorHandler } from "@@/middleware/errorHandler"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const { API } = Endpoints
const server = express()

server.use(helmet())
server.use(compression())

server.use(API, apiRouter)

server.use(errorHandler)

export { server }
