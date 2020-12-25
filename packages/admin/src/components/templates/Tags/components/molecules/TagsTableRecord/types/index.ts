// import
import { StringDatetime } from "shared-items"

// main
export type TagsTableRecordProps = {
  tagId: string
  isSelected: boolean
  tagName: string
  isRelease: boolean
  settingCount: number
  createdAt: StringDatetime
  updatedAt: StringDatetime
  handleClickSelect: () => void
  handleClickRelease: () => void
}
