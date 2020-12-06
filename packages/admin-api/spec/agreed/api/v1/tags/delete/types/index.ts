// import node_modules
import {
  DELETE,
  APIDef,
  ResponseDef,
  Success200,
  Error500,
} from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import {
  DeleteTagsQuery,
  DeleteTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { TagsTitle, TagsEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  DELETE,
  TagsEndpoint,
  EmptyObject,
  Convert2agreed<DeleteTagsQuery>,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<DeleteTagsResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  TagsTitle<"削除">
