// import node_modules
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit"

// import others
import { selfApiClient } from "@@/shared/utils/selfApiClient"
import { FulfilledReturn } from "../../types"

// main
export const payloadCreator: AsyncThunkPayloadCreator<
  FulfilledReturn,
  unknown
> = async () => {
  const endpoint = "/api/tags"
  try {
    const { data } = await selfApiClient.get<FulfilledReturn>(endpoint)
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
