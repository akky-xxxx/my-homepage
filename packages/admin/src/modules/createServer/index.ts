// import node_modules
import express, { Express } from "express"
import Server from "next/dist/next-server/server/next-server"

// import middleware
import { commonMiddleware } from "@@/middleware/commonMiddleware"
import { nextRoutes } from "@@/middleware/nextRoutes"

// main
const expressServer = express()

type CreateServer = (nextServer: Server) => Express
export const createServer: CreateServer = (nextServer) => {
  const nextHandler = nextRoutes.getRequestHandler(nextServer)
  expressServer.use(commonMiddleware)

  expressServer.use(nextHandler)

  return expressServer
}
