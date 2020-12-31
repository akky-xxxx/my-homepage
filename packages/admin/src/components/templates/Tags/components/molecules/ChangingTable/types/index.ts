// import node_modules
import { ChangeEvent } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
export type HandleChangeTagName = (
  tagId: string,
) => (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeRelease = (tagId: string) => () => void

export type ChangingTableProps = {
  selectedTags: TagsTableRecordStates[]
  isReleaseAll: boolean
  handleChangeTagName: HandleChangeTagName
  handleChangeRelease: HandleChangeRelease
  handleChangeReleaseAll: EmptyFunction
}
