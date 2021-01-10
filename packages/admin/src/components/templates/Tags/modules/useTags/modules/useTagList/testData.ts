// import
import { TagsTableRecordStates } from "../../../../components/molecules/TagsTableRecord/types"

// main
export const tags: Omit<TagsTableRecordStates, "isSelect">[] = [
  ...new Array(100),
]
  .fill(null)
  .map((_, index) => {
    const id = index + 1
    return {
      tagId: `${id}`,
      tagName: `tag-name${id}`,
      settingCount: 0,
      isRelease: false,
      createdAt: "2020-01-01 00:00:00",
      updatedAt: "2020-12-31: 23:59:59",
    }
  })
