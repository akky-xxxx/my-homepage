// import
import { ApiType } from "./types"

// main
export const putTags: ApiType[] = [
  {
    title: "タグ一覧：更新",
    description: "失敗",
    request: {
      path: ["api", "v1", "tags"],
      method: "PUT",
      body: {
        tags: [
          {
            tagId: "500",
          },
        ],
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
    title: "タグ一覧：更新",
    description: "正常",
    request: {
      path: ["api", "v1", "tags"],
      method: "PUT",
      body: {
        tags: [
          {
            tagId: "{:tagId}",
            tagName: "{:tagName}",
          },
        ],
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
  {
    title: "タグ一覧：更新",
    description: "正常",
    request: {
      path: ["api", "v1", "tags"],
      method: "PUT",
      body: {
        tags: [
          {
            tagId: "{:tagId}",
            isRelease: "{:isRelease}",
          },
        ],
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
