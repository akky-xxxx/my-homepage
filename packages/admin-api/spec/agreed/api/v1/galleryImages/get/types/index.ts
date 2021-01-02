// import node_modules
import { GET, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import { GetGalleryImagesResponse } from "@@/shared/types/api/v1/galleryImages"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { GalleryImagesTitle, GalleryImagesEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  GET,
  GalleryImagesEndpoint,
  EmptyObject,
  EmptyObject,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<GetGalleryImagesResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  GalleryImagesTitle<"取得">
