// import node_modules
import { ChangeEvent } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { TagsTableRecordStates } from "../../../../../molecules/TagsTableRecord/types"
import { ChangingTableProps } from "../../../../../molecules/ChangingTable/types"

// main
export type HandleChangeTagName = (
  tagId: string,
) => (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeRelease = (tagId: string) => () => void
export type HandleUpdateTagsMain = (tags: TagsTableRecordStates[]) => void
export type HandleUpdateTags = EmptyFunction

type UseChangingModalReturn = ChangingTableProps & {
  handleUpdateTags: HandleUpdateTags
}

type UseChangingModalArgs = {
  originTags: TagsTableRecordStates[]
  handleUpdateTagsMain: HandleUpdateTagsMain
  handleHideChangingModal: EmptyFunction
}

export type UseChangingModal = (
  args: UseChangingModalArgs,
) => UseChangingModalReturn
