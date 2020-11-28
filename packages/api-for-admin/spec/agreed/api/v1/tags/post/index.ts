// import
import { ApiType } from "./types"

// main
export const postTags: ApiType[] = [
  {
    title: "タグ：登録",
    description: "失敗",
    request: {
      path: ["api", "v1", "tags"],
      method: "POST",
      body: {
        tagName: "500",
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
    title: "タグ：登録",
    description: "正常",
    request: {
      path: ["api", "v1", "tags"],
      method: "POST",
      body: {
        tagName: "{:tagName}",
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
