// import
import { Tag } from "@@/shared/types/api/v1/tags"

// main
export const sampleTags: Tag[] = [
  {
    tagId: "1",
    tagName: "タグ1",
    isRelease: true,
    settingCount: 0,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-31",
  },
  {
    tagId: "2",
    tagName: "タグ2",
    isRelease: false,
    settingCount: 1000,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-31",
  },
]
