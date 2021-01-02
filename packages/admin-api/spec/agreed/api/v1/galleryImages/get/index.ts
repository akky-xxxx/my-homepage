// import
import { ApiType } from "./types"
import { images } from "./sampleData"

// main
export const getTags: ApiType[] = [
  {
    title: "画像一覧：取得",
    description: "正常 - データあり",
    request: {
      path: ["api", "v1", "gallery-images"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          images,
        },
      },
    },
  },
  {
    title: "画像一覧：取得",
    description: "正常 - データなし",
    request: {
      path: ["api", "v1", "gallery-images"],
      method: "GET",
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          images: [],
        },
      },
    },
  },
  {
    title: "画像一覧：取得",
    description: "失敗",
    request: {
      path: ["api", "v1", "gallery-images"],
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
