// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "@@/controllers/updateTags"

// main
const apiAggregation = Router()

apiAggregation.put("/tags", updateTags)

export { apiAggregation }
