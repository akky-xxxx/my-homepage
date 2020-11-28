// import
import { ApiTitle } from "../../../../types"

// main
export type TagsTitle<T extends string> = ApiTitle<"タグ一覧", T>
export type TagsEndpoint = ["api", "v1", "tags"]
