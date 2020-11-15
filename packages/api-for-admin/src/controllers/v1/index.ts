// import node_modules
import { Router } from "express"

// import
import { sampleController } from "@controllers/v1/sampleController"

// import
import { Endpoints } from "@shared/const/Endpoints"

// main
const {
  V1: { SAMPLE },
} = Endpoints
const v1Router = Router()

v1Router.get(SAMPLE, sampleController)

export { v1Router }
