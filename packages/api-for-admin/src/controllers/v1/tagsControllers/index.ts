// import node_modules
import { Router } from "express"

// import controllers
import { postTagsController } from "@@/controllers/v1/tagsControllers/postTagsController"
import { getTagsController } from "@@/controllers/v1/tagsControllers/getTagsController"
import { putTagsController } from "@@/controllers/v1/tagsControllers/putTagsController"

// main
const tagsControllers = Router()

const ROOT_ENDPOINT = "/"
tagsControllers.post(ROOT_ENDPOINT, postTagsController)
tagsControllers.get(ROOT_ENDPOINT, getTagsController)
tagsControllers.put(ROOT_ENDPOINT, putTagsController)

export { tagsControllers }
