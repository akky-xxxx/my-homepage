// import node_modules
import { Router } from "express"

// import controllers
import { postTagsController } from "@@/controllers/v1/postTagsController"
import { getTagsController } from "@@/controllers/v1/getTagsController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { TAGS },
} = Endpoints
const v1Router = Router()

// tags request handlers
v1Router.post(TAGS, postTagsController)
v1Router.get(TAGS, getTagsController)

export { v1Router }
