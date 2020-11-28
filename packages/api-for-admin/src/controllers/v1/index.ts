// import node_modules
import { Router } from "express"

// import controllers
import { sampleController } from "@@/controllers/v1/sampleController"
import { getTagsController } from "@@/controllers/v1/getTagsController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { SAMPLE, TAGS },
} = Endpoints
const v1Router = Router()

v1Router.get(SAMPLE, sampleController)
v1Router.get(TAGS, getTagsController)

export { v1Router }
