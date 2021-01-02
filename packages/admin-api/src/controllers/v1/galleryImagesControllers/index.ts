// import node_modules
import { Router } from "express"

// import controllers
import { postGalleryImagesController } from "@@/controllers/v1/galleryImagesControllers/postGalleryImagesController"

// main
const galleryImagesControllers = Router()

const ROOT_ENDPOINT = "/"
galleryImagesControllers.post(ROOT_ENDPOINT, postGalleryImagesController)

export { galleryImagesControllers }
