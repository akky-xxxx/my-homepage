// import node_modules
import { Router } from "express"

// import controllers
import { postController } from "@@/controllers/v1/galleryImages/postController"
import { getController } from "./getController"

// main
const galleryImagesControllers = Router()

const ROOT_ENDPOINT = "/"
galleryImagesControllers.post(ROOT_ENDPOINT, postController)
galleryImagesControllers.get(ROOT_ENDPOINT, getController)

export { galleryImagesControllers }
