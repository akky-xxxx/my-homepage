// import node_modules
import { StringDatetime } from "shared-items"

// import others
import { ResponseData } from "@@/shared/types/api"

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
