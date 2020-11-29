// import
import { ApiType } from "./types"

// main
export const deleteTags: ApiType[] = [
  {
    title: "タグ一覧：削除",
    description: "正常 - 結果あり",
    request: {
      path: ["api", "v1", "tags"],
      method: "DELETE",
      body: undefined,
      query: {
        tagIds: "{:tagIds}",
      },
    },
    response: {
      status: 200,
      body: {
        data: {
          result: "success",
        },
      },
    },
  },
  {
    title: "タグ一覧：削除",
    description: "正常 - 結果あり",
    request: {
      path: ["api", "v1", "tags"],
      method: "DELETE",
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
