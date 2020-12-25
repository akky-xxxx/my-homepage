// import
import { TagsTableRecordStates } from "../../components/molecules/TagsTableRecord/types"

// main
export const tags: Omit<TagsTableRecordStates, "isSelect">[] = [
  {
    tagId: "1",
    tagName: "tag-name1",
    settingCount: 0,
    isRelease: false,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
  {
    tagId: "2",
    tagName: "tag-name2",
    settingCount: 0,
    isRelease: true,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
  {
    tagId: "3",
    tagName: "tag-name3",
    settingCount: 0,
    isRelease: true,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
]
