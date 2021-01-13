// import
import { GalleryImagesProps as ImagesProps } from "@@/components/organisms/GalleryImages"
import { ConditionAreaProps } from "../components/organisms/ConditionArea/types"

// main
export type GalleryImagesProps = {
  images: ImagesProps["images"]
  condition: ConditionAreaProps
}
