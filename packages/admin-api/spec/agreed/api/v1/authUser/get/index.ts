// import
import { ApiType } from "./types"

// main
export const get: ApiType[] = [
  {
    title: "ユーザ認証：権限チェック",
    description: "エラー - 結果なし",
    request: {
      path: ["api", "v1", "auth", "user"],
      method: "GET",
      body: undefined,
      query: {
        googleId: "403",
      },
    },
    response: {
      status: 403,
      body: {
        message: "権限なし",
      },
    },
  },
  {
    title: "ユーザ認証：権限チェック",
    description: "エラー - パラメータなし",
    request: {
      path: ["api", "v1", "auth", "user"],
      method: "GET",
      body: undefined,
      query: {
        googleId: "400",
      },
    },
    response: {
      status: 400,
      body: {
        message: "パラメータなし",
      },
    },
  },
  {
    title: "ユーザ認証：権限チェック",
    description: "正常 - google id あり",
    request: {
      path: ["api", "v1", "auth", "user"],
      method: "GET",
      body: undefined,
      query: {
        googleId: "{:googleId}",
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
    title: "ユーザ認証：権限チェック",
    description: "正常 - session id あり",
    request: {
      path: ["api", "v1", "auth", "user"],
      method: "GET",
      body: undefined,
      query: {
        sessionId: "{:sessionId}",
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
]
