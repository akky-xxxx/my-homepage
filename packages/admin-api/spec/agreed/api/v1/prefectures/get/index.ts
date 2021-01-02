// import
import { ApiType } from "./types"
import { prefectures } from "./sampleData"

// main
export const getTags: ApiType[] = [
  {
    title: "都道府県一覧：取得",
    description: "正常",
    request: {
      path: ["api", "v1", "prefectures"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          prefectures,
        },
      },
    },
  },
  {
    title: "都道府県一覧：取得",
    description: "失敗",
    request: {
      path: ["api", "v1", "prefectures"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 500,
      body: {
        message: "failure",
      },
    },
  },
]
