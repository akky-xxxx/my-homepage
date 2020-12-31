// import
import { StringDatetime } from "shared-items"

// main
export type TagsTableRecordStates = {
  tagId: string
  isSelect: boolean
  tagName: string
  isRelease: boolean
  settingCount: number
  createdAt: StringDatetime
  updatedAt: StringDatetime
}

export type TagsTableRecordHandlers = {
  handleClickSelect: () => void
  handleClickRelease: () => void
}

export type TagsTableRecordProps = TagsTableRecordStates &
  TagsTableRecordHandlers
