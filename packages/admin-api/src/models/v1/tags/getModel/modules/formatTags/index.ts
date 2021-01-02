// import node_modules
import { omit } from "remeda"
import { formatDatetime } from "shared-items/dist/server"

// import
import { Tag as DataStoreTag } from "@@/shared/types/gcp/dataStore"
import { Tag as ResponseTag } from "@@/shared/types/api/v1/tags"

// main
type FormatTags = (entity: DataStoreTag) => ResponseTag
export const formatTags: FormatTags = (entity) => {
  const { createdAt: _createdAt, updatedAt: _updatedAt, settingImages } = entity
  const settingCount = settingImages.length
  const createdAt = formatDatetime(_createdAt.toString())
  const updatedAt = formatDatetime(_updatedAt.toString())

  return {
    ...omit(entity, ["settingImages"]),
    settingCount,
    createdAt,
    updatedAt,
  }
}
