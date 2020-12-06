// import node_modules
import { Request } from "express"

// import others
import { DeleteTagsQuery } from "@@/shared/types/api/v1/tags"

// main
export const isDeleteTagsQuery = (
  query: Request["query"],
): query is DeleteTagsQuery => {
  const { tagIds } = query
  if (!tagIds) return false
  if (!Array.isArray(tagIds)) return false
  return (tagIds as unknown[]).every((tagId) => typeof tagId === "string")
}
