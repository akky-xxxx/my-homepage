// import
import { Entity } from "@google-cloud/datastore"
import { pick } from "remeda"
import { format } from "date-fns"

// import others
import { GetGalleryImage } from "@@/shared/types/api/v1/galleryImages"
import { DateFns } from "@@/shared/const/DateFns"
import { extractName } from "@@/shared/utils/keyUtils/extractName"

// main
const {
  FORMAT: { DATETIME },
} = DateFns

type DataStore2response = (entity: Entity) => GetGalleryImage
export const dataStore2response: DataStore2response = (entity) => {
  const {
    prefecture,
    tags,
    photographAt: _photographAt,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
  } = entity
  const prefectureId =
    prefecture === null ? null : extractName(prefecture) || null
  const tagIds = tags.map(extractName)
  const photographAt =
    _photographAt === null ? null : format(_photographAt, DATETIME)
  const createdAt = format(_createdAt, DATETIME)
  const updatedAt = format(_updatedAt, DATETIME)

  return {
    ...pick(entity, ["imageId", "isRelease"]),
    prefectureId,
    tagIds,
    photographAt,
    createdAt,
    updatedAt,
  }
}
