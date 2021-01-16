// import
import { GalleryImagesProps as Images } from "@@/components/organisms/GalleryImages"
import { ConditionAreaProps } from "@@/components/templates/GalleryImages/components/organisms/ConditionArea/types"
import { GalleryImagesProps } from "../../../types"

// main
type UseGalleryImagesProps = GalleryImagesProps

type ImagesHandler =
  | "handleClickPrimary"
  | "handleClickRemove"
  | "handleSelectPhotographAt"
  | "handleSelectPrefecture"
  | "handleSelectTags"

type UseGalleryImagesReturn = {
  images: Images["images"]
  condition: ConditionAreaProps
} & {
  imagesHandlers: Pick<Images, ImagesHandler>
}

export type UseGalleryImages = (
  props: UseGalleryImagesProps,
) => UseGalleryImagesReturn
