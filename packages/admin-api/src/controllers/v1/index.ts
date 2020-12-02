// import node_modules
import { Router } from "express"

// import controllers
import { tagsControllers } from "@@/controllers/v1/tagsControllers"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { TAGS },
} = Endpoints
const v1Router = Router()

// tags request handlers
v1Router.use(TAGS, tagsControllers)

export { v1Router }
