// import node_modules
import { Router } from "express"

// import controllers
import { getTagsController } from "@@/controllers/v1/getTagsController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { TAGS },
} = Endpoints
const v1Router = Router()

v1Router.get(TAGS, getTagsController)

export { v1Router }
