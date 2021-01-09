// import node_modules
import { SelectOption } from "@@/shared/types/lib"

// import others
import { TagsTableRecordStates } from "../../../../../../components/molecules/TagsTableRecord/types"

// main
type Tag2option = (tag: TagsTableRecordStates) => SelectOption
export const tag2option: Tag2option = (tag) => {
  const { tagId: value, tagName: label } = tag
  return { value, label }
}
