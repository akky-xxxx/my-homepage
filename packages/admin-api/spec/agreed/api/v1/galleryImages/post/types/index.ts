// import node_modules
import { POST, APIDef, ResponseDef, Success201, Error500 } from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import {
  PostGalleryImagesRequestBody,
  PostGalleryImagesResponse,
} from "@@/shared/types/api/v1/galleryImages"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { GalleryImagesTitle, GalleryImagesEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  POST,
  GalleryImagesEndpoint,
  EmptyObject,
  EmptyObject,
  Convert2agreed<PostGalleryImagesRequestBody>,
  EmptyObject,
  | ResponseDef<Success201, Convert2agreed<PostGalleryImagesResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  GalleryImagesTitle<"追加">
