// import
import { TagsTableRecord } from "./types"

// main
export const tags: TagsTableRecord[] = [...Array(20)]
  .fill(null)
  .map((_, index) => {
    const isSelected = Boolean(index % 2)
    const isReleased = Boolean(index % 3)
    const id = (index + 1).toString()
    return {
      id,
      isSelected,
      isReleased,
      tagName: `タグ${id}`,
      settingCount: index ** 3,
      createdAt: "2020-01-01 00:00:00",
      updatedAt: "2020-12-31 23:59:59",
    }
  })
