// import node_modules
import { POST, APIDef, ResponseDef, Success201, Error500 } from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { TagsTitle, TagsEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  POST,
  TagsEndpoint,
  EmptyObject,
  EmptyObject,
  PostTagsRequestBody,
  EmptyObject,
  | ResponseDef<Success201, Convert2agreed<PostTagsResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  TagsTitle<"追加">
