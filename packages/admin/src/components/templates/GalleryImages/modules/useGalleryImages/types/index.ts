// import
import { GalleryImagesProps as Images } from "@@/components/organisms/GalleryImages"
import { ConditionAreaProps } from "@@/components/templates/GalleryImages/components/organisms/ConditionArea/types"
import { GalleryImagesProps } from "../../../types"

// main
type UseGalleryImagesProps = GalleryImagesProps

type UseGalleryImagesReturn = {
  images: Images["images"]
  condition: ConditionAreaProps
}

export type UseGalleryImages = (
  props: UseGalleryImagesProps,
) => UseGalleryImagesReturn
