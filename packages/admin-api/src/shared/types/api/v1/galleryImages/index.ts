// import node_modules
import { StringDatetime } from "shared-items"

// import others
import { ResponseData } from "@@/shared/types/api"
import { GalleryImage } from "@@/shared/types/gcp/dataStore"

// main
// create (post)
type PostGalleryImagesRequestBodyInfo = {
  prefecture: string
  tags: string[]
  photographAt: StringDatetime
}

export type PostGalleryImagesRequestBody = {
  images: Blob[]
  info?: Partial<PostGalleryImagesRequestBodyInfo>[]
}

export type PostGalleryImagesResponse = ResponseData<{
  result: "success"
}>

// read (get)
export type GetGalleryImage = Pick<
  GalleryImage,
  "imageId" | "isRelease"
> & {
  prefectureId: string | null
  tagIds: string[]
  photographAt: StringDatetime | null
  createdAt: StringDatetime
  updatedAt: StringDatetime
}

export type GetGalleryImagesResponse = ResponseData<{
  images: GetGalleryImage[]
}>
