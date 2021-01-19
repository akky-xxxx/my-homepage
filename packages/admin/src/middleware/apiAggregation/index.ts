// import node_modules
import { Router } from "express"

// import controllers
import { tagsRouter } from "@@/controllers/tags"
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  API_AGGREGATION: { TAGS },
} = Endpoints
const apiAggregation = Router()

apiAggregation.use(TAGS, tagsRouter)

export { apiAggregation }
