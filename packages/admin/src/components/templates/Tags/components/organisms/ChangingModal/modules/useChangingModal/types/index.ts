// import node_modules
import { ChangeEvent } from "react"

// import others
import { TagsTableRecordStates } from "../../../../../molecules/TagsTableRecord/types"
import { ChangingTableProps } from "../../../../../molecules/ChangingTable/types"

// main
export type HandleChangeTagName = (
  tagId: string,
) => (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeRelease = (tagId: string) => () => void

type UseChangingModalReturn = ChangingTableProps

type UseChangingModalArgs = {
  originTags: TagsTableRecordStates[]
}

export type UseChangingModal = (
  args: UseChangingModalArgs,
) => UseChangingModalReturn
