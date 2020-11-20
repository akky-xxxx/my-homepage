// import node_modules
import { GET, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"

// import others
import { EmptyObject } from "@@/shared/types/common"
import {
  SampleGetRequestQuery,
  SampleGetReturnBody,
} from "@@/shared/types/api/v1/sample"
import { Convert2agreed, ErrorResponse } from "../../../../../types"

// main
export type ApiType = APIDef<
  GET,
  ["api", "v1", "sample"],
  EmptyObject,
  Convert2agreed<SampleGetRequestQuery>,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<SampleGetReturnBody>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
>
