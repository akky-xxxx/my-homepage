// import node_modules
import { createNullArray } from "shared-items"

// import others
import { Tag } from "@@/shared/types/api/v1/tags"

// main
const createSampleTags = (): Tag[] =>
  createNullArray(100).map((_, index) => {
    const tagId = `${index + 1}`
    return {
      tagId,
      tagName: `タグ${tagId}`,
      settingCount: index * 75,
      isRelease: index % 2 === 0,
      createdAt: "2020-01-01 00:00:00",
      updatedAt: "2020-12-31 23:59:59",
    }
  })

export const sampleTags: Tag[] = createSampleTags()
