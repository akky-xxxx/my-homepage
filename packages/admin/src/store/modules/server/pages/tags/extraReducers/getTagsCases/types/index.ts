import { AsyncThunk } from "@reduxjs/toolkit"
import { AnyObject } from "shared-items"

// import
import { Tag } from "../../../types"

// main
export type FulfilledReturn = { tags: Tag[] }
export type FulfilledAction = {
  type: string
  payload: FulfilledReturn
}
export type FulfilledActionPayload = AsyncThunk<
  { tags: Tag[] },
  void,
  AnyObject
>["fulfilled"]
