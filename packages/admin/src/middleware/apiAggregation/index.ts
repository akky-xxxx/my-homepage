// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "@@/controllers/tags/updateTags"
import { getTags } from "@@/controllers/tags/getTags"
import { addTags } from "@@/controllers/tags/addTags"
import { deleteTags } from "@@/controllers/tags/deleteTags"

// main
const apiAggregation = Router()

apiAggregation.post("/tags", addTags)
apiAggregation.get("/tags", getTags)
apiAggregation.put("/tags", updateTags)
apiAggregation.delete("/tags", deleteTags)

export { apiAggregation }
