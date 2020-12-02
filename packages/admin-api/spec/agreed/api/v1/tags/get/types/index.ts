// import node_modules
import { GET, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"
import { EmptyObject } from "common-types"

// import others
import { GetTagsResponse } from "@@/shared/types/api/v1/tags"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { TagsTitle, TagsEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  GET,
  TagsEndpoint,
  EmptyObject,
  EmptyObject,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<GetTagsResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  TagsTitle<"取得">
