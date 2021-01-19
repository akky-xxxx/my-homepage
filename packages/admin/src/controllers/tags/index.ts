// import node_modules
import { Router } from "express"

// import controllers
import { updateTags } from "./updateTags"
import { getTags } from "./getTags"
import { addTags } from "./addTags"
import { deleteTags } from "./deleteTags"

// main
const tagsRouter = Router()

tagsRouter.post("/", addTags)
tagsRouter.get("/", getTags)
tagsRouter.put("/", updateTags)
tagsRouter.delete("/", deleteTags)

export { tagsRouter }
