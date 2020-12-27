// import node_modules
import { ChangeEvent } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { TagsTableRecordStates } from "../../../../TagsTableRecord/types"

// main
export type HandleChangeTagName = (
  tagId: string,
) => (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeRelease = (tagId: string) => () => void

type UseChangingTableReturn = {
  stateTags: TagsTableRecordStates[]
  isReleaseAll: boolean
  handleChangeTagName: HandleChangeTagName
  handleChangeRelease: HandleChangeRelease
  handleChangeReleaseAll: EmptyFunction
}

type UseChangingTableArgs = {
  originTags: TagsTableRecordStates[]
}

export type UseChangingTable = (
  args: UseChangingTableArgs,
) => UseChangingTableReturn
