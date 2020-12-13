// import node_modules
import { Router } from "express"

// import controllers
import { tagsControllers } from "@@/controllers/v1/tagsControllers"
import { authUserControllers } from "@@/controllers/v1/authUserController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { TAGS, AUTH_USER },
} = Endpoints
const v1Router = Router()

// tags request handlers
v1Router.use(TAGS, tagsControllers)
v1Router.use(AUTH_USER, authUserControllers)

export { v1Router }
