// import
import { UseGalleryImages } from "../../../types/index"

// main
type CommonProps = "prefectures" | "tags"
type UseConditionProps = Pick<Parameters<UseGalleryImages>[0], CommonProps>
type UseConditionReturn = Omit<
  ReturnType<UseGalleryImages>["condition"],
  CommonProps
>

export type UseCondition = (props: UseConditionProps) => UseConditionReturn
