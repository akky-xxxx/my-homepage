// import node_modules
import { Router } from "express"

// import controllers
import { postController } from "@@/controllers/v1/tags/postController"
import { getController } from "@@/controllers/v1/tags/getController"
import { putController } from "@@/controllers/v1/tags/putController"
import { deleteController } from "@@/controllers/v1/tags/deleteController"

// main
const tagsControllers = Router()

const ROOT_ENDPOINT = "/"
tagsControllers.post(ROOT_ENDPOINT, postController)
tagsControllers.get(ROOT_ENDPOINT, getController)
tagsControllers.put(ROOT_ENDPOINT, putController)
tagsControllers.delete(ROOT_ENDPOINT, deleteController)

export { tagsControllers }
