// import
import { StringDatetime } from "shared-items"

// main
export type TagsTableRecordProps = {
  id: string
  isSelected: boolean
  tagName: string
  isReleased: boolean
  settingCount: number
  createdAt: StringDatetime
  updatedAt: StringDatetime
  handleClickSelect: () => void
  handleClickRelease: () => void
}
