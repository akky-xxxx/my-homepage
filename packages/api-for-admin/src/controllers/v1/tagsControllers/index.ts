// import node_modules
import { Router } from "express"

// import controllers
import { postTagsController } from "@@/controllers/v1/tagsControllers/postTagsController"
import { getTagsController } from "@@/controllers/v1/tagsControllers/getTagsController"

const tagsControllers = Router()

const ROOT_ENDPOINT = "/"
tagsControllers.post(ROOT_ENDPOINT, postTagsController)
tagsControllers.get(ROOT_ENDPOINT, getTagsController)

export { tagsControllers }
