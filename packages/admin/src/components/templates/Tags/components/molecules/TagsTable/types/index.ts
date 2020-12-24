// import node_modules
import { StringDatetime } from "shared-items"

// main
export type TagsTableRecord = {
  id: string
  isSelected: boolean
  tagName: string
  isReleased: boolean
  settingCount: number
  createdAt: StringDatetime
  updatedAt: StringDatetime
}

export type TagsTableProps = {
  tags: TagsTableRecord[]
}
