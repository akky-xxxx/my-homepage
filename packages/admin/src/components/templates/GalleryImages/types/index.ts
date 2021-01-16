// import
import { GalleryImagesProps as ImagesProps } from "@@/components/organisms/GalleryImages"
import { ConditionAreaProps } from "../components/organisms/ConditionArea/types"

// main
type CommonProp = "prefectures" | "tags"
type Image = Omit<
  ImagesProps["images"][number],
  | CommonProp
  | "handleClickPrimary"
  | "handleClickRemove"
  | "handleSelectPhotographAt"
  | "handleSelectPrefecture"
  | "handleSelectTags"
>

export type GalleryImagesProps = {
  images: Image[]
} & Pick<ConditionAreaProps, CommonProp>
