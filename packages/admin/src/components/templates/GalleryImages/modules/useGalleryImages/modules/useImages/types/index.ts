// import
import {
  UseGalleryImagesProps,
  UseGalleryImagesReturn,
} from "../../../types/index"

// main
type CommonProps = "prefectures" | "tags"
export type Condition = UseGalleryImagesReturn["condition"]
export type Image = UseGalleryImagesReturn["images"][number]

export type UseImagesProps = Pick<UseGalleryImagesProps, CommonProps | "images">

export type UseImagesReturn = Omit<
  Condition,
  | CommonProps
  | "accentDatesOfPhotographAt"
  | "accentDatesOfCreatedAt"
  | "accentDatesOfUpdatedAt"
> & {
  images: Image[]
}

export type UseImages = (props: UseImagesProps) => UseImagesReturn
