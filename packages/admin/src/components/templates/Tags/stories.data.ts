// import node_modules
import { addDays, subDays, addMinutes, subMinutes, format } from "date-fns"
import { DateFns } from "shared-items/dist/client"

// import
import { TagsProps } from "./types"

// main
const {
  FORMAT: { DATETIME_SLASH },
} = DateFns
const createdAtBase = new Date("2020-01-01 00:00:00")
const updatedAtBase = new Date("2020-12-31 23:59:59")

export const tags: TagsProps["tags"] = [...Array(20)]
  .fill(null)
  .map((_, index) => {
    const isSelect = Boolean(index % 2)
    const isRelease = Boolean(index % 3)
    const tagId = (index + 1).toString()
    const index2 = index * 2
    const index50 = index * 50
    const createdAt = format(
      addMinutes(addDays(createdAtBase, index2), index50),
      DATETIME_SLASH,
    )
    const updatedAt = format(
      subMinutes(subDays(updatedAtBase, index2), index50),
      DATETIME_SLASH,
    )

    return {
      tagId,
      isSelect,
      isRelease,
      tagName: `タグ${tagId}`,
      settingCount: index ** 3,
      createdAt,
      updatedAt,
    }
  })
