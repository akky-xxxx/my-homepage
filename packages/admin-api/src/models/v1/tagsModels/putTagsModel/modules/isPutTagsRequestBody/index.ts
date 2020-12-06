// import node_modules
import { Request } from "express"

// import others
import { PutTagsRequestBody } from "@@/shared/types/api/v1/tags"

// main
export const isPutTagsRequestBody = (
  body: Request["body"],
): body is PutTagsRequestBody => {
  if (!body.tags) return false

  const { tags } = body

  if (!Array.isArray(tags)) return false

  return tags.every((tag) => {
    const { tagId, tagName, isRelease } = tag
    const isIncorrect =
      typeof tagId !== "string" ||
      !["string", "undefined"].includes(typeof tagName) ||
      !["boolean", "undefined"].includes(typeof isRelease)
    return !isIncorrect
  })
}
