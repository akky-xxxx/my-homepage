// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "@@/controllers/updateTags"
import { getTags } from "@@/controllers/getTags"
import { addTags } from "@@/controllers/addTags"
import { deleteTags } from "@@/controllers/deleteTags"

// main
const apiAggregation = Router()

apiAggregation.post("/tags", addTags)
apiAggregation.get("/tags", getTags)
apiAggregation.put("/tags", updateTags)
apiAggregation.delete("/tags", deleteTags)

export { apiAggregation }
