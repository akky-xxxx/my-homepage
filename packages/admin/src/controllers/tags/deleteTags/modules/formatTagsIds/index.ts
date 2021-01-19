// import node_modules
import { Request } from "express"

// main
type FormatQuery = (query: Request["query"]) => string[] | undefined
export const formatTagsIds: FormatQuery = (query) => {
  const { tagIds } = query
  if (typeof tagIds === "string") return [tagIds]

  if (!Array.isArray(tagIds)) return undefined

  const isAllString = (tagIds as unknown[]).every(
    (tagId) => typeof tagId === "string",
  )
  return isAllString ? (tagIds as string[]) : undefined
}
