// import node_modules
import { Router } from "express"

// import controllers
import { galleryImagesControllers } from "@@/controllers/v1/galleryImages"
import { prefecturesControllers } from "@@/controllers/v1/prefectures"
import { tagsControllers } from "@@/controllers/v1/tags"
import { authUserControllers } from "@@/controllers/v1/authUser"

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
