// import node_modules
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit"

// import others
import { selfApiClient } from "@@/shared/utils/selfApiClient"
import { ActionPayload } from "../../types"

// main
export const payloadCreator: AsyncThunkPayloadCreator<
  ActionPayload,
  unknown
> = async () => {
  const endpoint = "/api/tags"
  try {
    await selfApiClient.get(endpoint)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
