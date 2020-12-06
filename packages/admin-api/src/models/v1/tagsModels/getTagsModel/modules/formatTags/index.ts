// import node_modules
import { formatDatetime } from "shared-items/dist/server"

// import
import { Tag } from "@@/shared/types/api/v1/tags"

// main
type FormatTags = (entity: Tag) => Tag
export const formatTags: FormatTags = (entity) => ({
  ...entity,
  createdAt: formatDatetime(entity.createdAt),
  updatedAt: formatDatetime(entity.updatedAt),
})
