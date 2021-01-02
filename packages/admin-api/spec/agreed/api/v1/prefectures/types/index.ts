// import
import { ApiTitle, CrudActionName } from "../../../../types"

// main
export type PrefecturesTitle<T extends CrudActionName> = ApiTitle<
  "都道府県一覧",
  T
>
export type PrefecturesEndpoint = ["api", "v1", "prefectures"]
