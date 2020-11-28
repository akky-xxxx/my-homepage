// import
import { ApiTitle } from "../../../../types"

// main
export type TagsTitle<T extends string> = ApiTitle<"タグ", T>
export type TagsEndpoint = ["api", "v1", "tags"]
