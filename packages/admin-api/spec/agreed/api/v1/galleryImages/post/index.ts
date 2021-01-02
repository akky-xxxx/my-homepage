// import
import { ApiType } from "./types"

// main
export const postTags: ApiType[] = [
  {
    title: "画像一覧：追加",
    description: "正常",
    request: {
      path: ["api", "v1", "gallery-images"],
      method: "POST",
      body: {
        images: "{:images}",
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
  // {
  //   title: "画像一覧：追加",
  //   description: "失敗",
  //   request: {
  //     path: ["api", "v1", "gallery-images"],
  //     method: "POST",
  //     body: {
  //       images: "{:images}",
  //     },
  //   },
  //   response: {
  //     status: 500,
  //     body: {
  //       message: "failure",
  //     },
  //   },
  // },
]
