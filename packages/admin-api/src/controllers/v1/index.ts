// import node_modules
import { Router } from "express"

// import controllers
import { galleryImagesControllers } from "@@/controllers/v1/galleryImagesControllers"
import { prefecturesControllers } from "@@/controllers/v1/prefecturesControllers"
import { tagsControllers } from "@@/controllers/v1/tagsControllers"
import { authUserControllers } from "@@/controllers/v1/authUserController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  V1: { TAGS, GALLERY_IMAGES, PREFECTURES, AUTH_USER },
} = Endpoints
const v1Router = Router()

// tags request handlers
v1Router.use(GALLERY_IMAGES, galleryImagesControllers)
v1Router.use(PREFECTURES, prefecturesControllers)
v1Router.use(TAGS, tagsControllers)
v1Router.use(AUTH_USER, authUserControllers)

export { v1Router }
