// import node_modules
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit"

// import others
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { ActionArgs, ActionPayload } from "../../types"

// main
export const payloadCreator: AsyncThunkPayloadCreator<
  ActionPayload,
  ActionArgs
> = async (args) => {
  try {
    const { tags } = args
    const params = { tags }
    await adminApiClient.put("/api/v1/tags", { params })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
