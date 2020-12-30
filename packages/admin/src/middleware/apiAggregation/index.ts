// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "@@/controllers/updateTags"
import { addTags } from "@@/controllers/addTags"
import { deleteTags } from "@@/controllers/deleteTags"

// main
const apiAggregation = Router()

apiAggregation.post("/tags", addTags)
apiAggregation.put("/tags", updateTags)
apiAggregation.delete("/tags", deleteTags)

export { apiAggregation }
