// import node_modules
import {
  GET,
  APIDef,
  ResponseDef,
  Success200,
  Error400,
  Error403,
} from "@agreed/typed"
import { EmptyObject } from "shared-items"

// import others
import {
  GetAuthUserQuery,
  GetAuthUserResponse,
} from "@@/shared/types/api/v1/authUser"
import { Convert2agreed, ErrorResponse } from "../../../../../types"
import { AuthUserEndpoint, AuthUserTitle } from "../../types"

// main
export type ApiType = APIDef<
  GET,
  AuthUserEndpoint,
  GetAuthUserQuery,
  EmptyObject,
  undefined,
  EmptyObject,
  | ResponseDef<Success200, Convert2agreed<GetAuthUserResponse>>
  | ResponseDef<Error400, Convert2agreed<ErrorResponse>>
  | ResponseDef<Error403, Convert2agreed<ErrorResponse>>
> &
  AuthUserTitle<"権限チェック">
