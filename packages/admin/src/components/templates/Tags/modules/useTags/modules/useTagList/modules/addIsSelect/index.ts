// import
import { TagsTableRecordStates } from "../../../../../../components/molecules/TagsTableRecord/types"

// main
type Input = Omit<TagsTableRecordStates, "isSelect">

type Output = TagsTableRecordStates

type AddIsSelect = (tag: Input) => Output

export const addIsSelect: AddIsSelect = (tag) => ({
  ...tag,
  isSelect: false,
})
