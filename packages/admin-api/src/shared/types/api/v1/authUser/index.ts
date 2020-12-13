// import
import { ResponseData } from "@@/shared/types/api"

// main
// read (get)
export type GetAuthUserQuery = Partial<{
  googleId: string
  sessionId: string
}>

export type GetAuthUserResponse = ResponseData<{
  sessionId: string
}>
