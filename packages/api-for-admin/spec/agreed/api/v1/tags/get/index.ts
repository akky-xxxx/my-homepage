// import
import { ApiType } from "./types"
import { sampleTags } from "./sampleData"

// main
export const getTags: ApiType[] = [
  {
    title: "タグ：一覧取得",
    description: "正常 - 結果あり",
    request: {
      path: ["api", "v1", "tags"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          tags: sampleTags,
        },
      },
    },
  },
  {
    title: "タグ：一覧取得",
    description: "正常 - 結果なし",
    request: {
      path: ["api", "v1", "tags"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          tags: [],
        },
      },
    },
  },
]
