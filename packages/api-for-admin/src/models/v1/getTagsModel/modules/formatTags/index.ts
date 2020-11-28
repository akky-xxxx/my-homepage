// import
import { Tag } from "@@/shared/types/api/v1/tags"
import { formatDatetime } from "@@/shared/utils/formatDatetime"

// main
type FormatTags = (entity: Tag) => Tag
export const formatTags: FormatTags = (entity) => ({
  ...entity,
  createdAt: formatDatetime(entity.createdAt),
  updatedAt: formatDatetime(entity.updatedAt),
})
