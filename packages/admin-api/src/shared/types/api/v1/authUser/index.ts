// import
import { ResponseData } from "@@/shared/types/api"

// main
// read (get)
export type GetAuthUserQuery = {
  googleId: string
}

export type GetAuthUserResponse = ResponseData<{
  result: "success"
}>
