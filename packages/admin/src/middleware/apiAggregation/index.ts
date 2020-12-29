// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "@@/controllers/updateTags"
import { addTags } from "@@/controllers/addTags"

// main
const apiAggregation = Router()

apiAggregation.post("/tags", addTags)
apiAggregation.put("/tags", updateTags)

export { apiAggregation }
