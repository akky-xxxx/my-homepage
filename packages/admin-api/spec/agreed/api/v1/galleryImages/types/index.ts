// import
import { ApiTitle, CrudActionName } from "../../../../types"

// main
export type GalleryImagesTitle<T extends CrudActionName> = ApiTitle<
  "画像一覧",
  T
>
export type GalleryImagesEndpoint = ["api", "v1", "gallery-images"]
