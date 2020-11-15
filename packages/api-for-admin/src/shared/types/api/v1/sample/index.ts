// import
import { ResponseData } from "@shared/types/api"

// main
export type SampleGetRequestQuery = Partial<{
  reqQueryTest: string
}>
export type SampleGetReturnBody = ResponseData<{
  resBodyTest: string
}>
