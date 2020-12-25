// import
import { TagsProps } from "./types"

// main
export const tags: TagsProps["tags"] = [...Array(20)]
  .fill(null)
  .map((_, index) => {
    const isSelect = Boolean(index % 2)
    const isRelease = Boolean(index % 3)
    const tagId = (index + 1).toString()
    return {
      tagId,
      isSelect,
      isRelease,
      tagName: `タグ${tagId}`,
      settingCount: index ** 3,
      createdAt: "2020-01-01 00:00:00",
      updatedAt: "2020-12-31 23:59:59",
    }
  })
