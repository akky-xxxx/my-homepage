// import node_modules
import { Router } from "express"

// import controllers
import { tagsRouter } from "@@/controllers/tags"

// main
const apiAggregation = Router()

apiAggregation.use("/tags", tagsRouter)

export { apiAggregation }
