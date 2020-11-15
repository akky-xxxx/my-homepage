// import
import { ApiType } from "./types"

// main
export const sampleGet: ApiType[] = [
  {
    title: "サンプル",
    description: "200 サンプル",
    request: {
      path: ["api", "v1", "sample"],
      method: "GET",
      query: {
        reqQueryTest: "test-item",
      },
      body: undefined,
    },
    response: {
      status: 200,
      body: {
        data: {
          resBodyTest: "agreed response body",
        },
      },
    },
  },
]
