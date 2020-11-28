// import node_modules
import { Router } from "express"

// import controllers
import { sampleController } from "@@/controllers/v1/sampleController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"
import { Tag } from "@@/shared/types/api/v1/tags"

// main
const {
  V1: { SAMPLE },
} = Endpoints
const v1Router = Router()

v1Router.get(SAMPLE, sampleController)
v1Router.get("/tags", (_req, res) => {
  const tag: Tag = {
    tagId: "1",
    tagName: "tag1",
    isRelease: true,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  }
  res.status(200).send({ data: { tags: [tag] } })
})

export { v1Router }
