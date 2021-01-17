// import
import { UseGalleryImagesProps, UseGalleryImagesReturn } from "../../../types/index"

// main
type CommonProps = "prefectures" | "tags"
type UseConditionProps = Pick<UseGalleryImagesProps, CommonProps>
type UseConditionReturn = Omit<
  UseGalleryImagesReturn["condition"],
  | CommonProps
  | "accentDatesOfPhotographAt"
  | "accentDatesOfCreatedAt"
  | "accentDatesOfUpdatedAt"
>

export type UseCondition = (props: UseConditionProps) => UseConditionReturn
