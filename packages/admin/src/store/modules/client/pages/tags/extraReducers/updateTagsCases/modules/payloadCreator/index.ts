// import node_modules
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit"

// import others
import { selfApiClient } from "@@/shared/utils/selfApiClient"
import { ActionArgs, ActionPayload } from "../../types"

// main
export const payloadCreator: AsyncThunkPayloadCreator<
  ActionPayload,
  ActionArgs
> = async (args) => {
  try {
    const { tags } = args
    await selfApiClient.put("/api/tags", { tags })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
