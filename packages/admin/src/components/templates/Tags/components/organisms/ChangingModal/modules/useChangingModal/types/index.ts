// import node_modules
import { ChangeEvent } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { TagsTableRecordStates } from "../../../../../molecules/TagsTableRecord/types"

// main
export type HandleChangeTagName = (
  tagId: string,
) => (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeRelease = (tagId: string) => () => void

type UseChangingModalReturn = {
  stateTags: TagsTableRecordStates[]
  isReleaseAll: boolean
  handleChangeTagName: HandleChangeTagName
  handleChangeRelease: HandleChangeRelease
  handleChangeReleaseAll: EmptyFunction
}

type UseChangingModalArgs = {
  originTags: TagsTableRecordStates[]
}

export type UseChangingModal = (
  args: UseChangingModalArgs,
) => UseChangingModalReturn
