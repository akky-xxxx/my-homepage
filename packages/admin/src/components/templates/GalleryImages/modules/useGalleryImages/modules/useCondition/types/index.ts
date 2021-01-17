// import
import {
  UseGalleryImagesProps,
  UseGalleryImagesReturn,
} from "../../../types/index"

// main
type CommonProps = "prefectures" | "tags"
export type Condition = UseGalleryImagesReturn["condition"]
export type Image = UseGalleryImagesReturn["images"][number]

export type UseConditionProps = Pick<
  UseGalleryImagesProps,
  CommonProps | "images"
>

export type UseConditionReturn = Omit<
  Condition,
  | CommonProps
  | "accentDatesOfPhotographAt"
  | "accentDatesOfCreatedAt"
  | "accentDatesOfUpdatedAt"
> & {
  images: Image[]
}

export type UseCondition = (props: UseConditionProps) => UseConditionReturn
