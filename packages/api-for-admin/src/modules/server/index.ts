// import node_modules
import express from "express"

// import middleware
import { commonMiddleware } from "@@/middleware/commonMiddleware"
import { apiRouter } from "@@/middleware/api"
import { errorHandler } from "@@/middleware/errorHandler"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const { API } = Endpoints
const server = express()

server.use(commonMiddleware)

server.use(API, apiRouter)

server.use(errorHandler)

export { server }
