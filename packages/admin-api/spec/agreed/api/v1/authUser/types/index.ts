// main
export type AuthUserTitle<T extends "権限チェック"> = {
  title: `ユーザ認証：${T}`
}
export type AuthUserEndpoint = ["api", "v1", "auth", "user"]
