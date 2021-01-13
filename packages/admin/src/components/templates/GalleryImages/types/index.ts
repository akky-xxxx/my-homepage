// import
import { GalleryImagesProps as ImagesProps } from "@@/components/organisms/GalleryImages"
import { ConditionAreaProps } from "../components/organisms/ConditionArea/types"

// main
type Image = Omit<
  ImagesProps["images"][number],
  | "handleClickPrimary"
  | "handleClickRemove"
  | "handleSelectPhotographAt"
  | "handleSelectPrefecture"
  | "handleSelectTags"
>
type Condition = Pick<ConditionAreaProps, "prefectures" | "tags">

export type GalleryImagesProps = {
  images: Image[]
  condition: Condition
}
