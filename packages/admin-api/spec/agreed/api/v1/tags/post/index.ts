// import
import { ApiType } from "./types"

// main
export const postTags: ApiType[] = [
  {
    title: "タグ一覧：追加",
    description: "失敗",
    request: {
      path: ["api", "v1", "tags"],
      method: "POST",
      body: {
        tagNames: "500",
      },
    },
    response: {
      status: 500,
      body: {
        message: "failure",
      },
    },
  },
  {
    title: "タグ一覧：追加",
    description: "正常",
    request: {
      path: ["api", "v1", "tags"],
      method: "POST",
      body: {
        tagNames: "{:tagName}",
      },
    },
    response: {
      status: 201,
      body: {
        data: {
          result: "success",
        },
      },
    },
  },
]
