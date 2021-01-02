// import node_modules
import { GET, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import { GetPrefecturesResponse } from "@@/shared/types/api/v1/prefectures"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { PrefecturesTitle, PrefecturesEndpoint } from "../../types"

// main
export type ApiType = APIDef<
  GET,
  PrefecturesEndpoint,
  EmptyObject,
  EmptyObject,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<GetPrefecturesResponse>>
  | ResponseDef<Error500, Convert2agreed<ErrorResponse>>
> &
  PrefecturesTitle<"取得">
