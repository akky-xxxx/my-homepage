// import node_modules
import { RequestHandler } from "express"

// import others
import { Tag } from "@@/shared/types/api/v1/tags"

// main
export const getTagsController: RequestHandler = (_req, res) => {
  const tag: Tag = {
    tagId: "1",
    tagName: "tag1",
    isRelease: true,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  }
  res.status(200).send({ data: { tags: [tag] } })
}
