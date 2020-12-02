// import node_modules
import { PUT, APIDef, ResponseDef, Success201, Error500 } from "@agreed/typed"

// import others
import { EmptyObject } from "@@/shared/types/common"
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { TagsTitle, TagsEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  PUT,
  TagsEndpoint,
  EmptyObject,
  EmptyObject,
  Convert2agreed<PutTagsRequestBody>,
  EmptyObject,
  | ResponseDef<Success201, Convert2agreed<PutTagsResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  TagsTitle<"更新">
