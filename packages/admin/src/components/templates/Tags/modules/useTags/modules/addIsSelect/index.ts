// import
import { TagsTableRecordProps } from "../../../../components/molecules/TagsTableRecord/types"

// main
type Input = Omit<
  TagsTableRecordProps,
  "isSelect" | "handleClickSelect" | "handleClickRelease"
>

type Output = Omit<
  TagsTableRecordProps,
  "handleClickSelect" | "handleClickRelease"
>

type AddIsSelect = (tag: Input) => Output

export const addIsSelect: AddIsSelect = (tag) => ({
  ...tag,
  isSelect: false,
})
