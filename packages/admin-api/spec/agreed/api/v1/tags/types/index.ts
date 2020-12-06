// import
import { ApiTitle, CrudActionName } from "../../../../types"

// main
export type TagsTitle<T extends CrudActionName> = ApiTitle<"タグ一覧", T>
export type TagsEndpoint = ["api", "v1", "tags"]
