// import node_modules
import { format } from "url"
import { AsyncThunkPayloadCreator } from "@reduxjs/toolkit"

// import others
import { selfApiClient } from "@@/shared/utils/selfApiClient"
import { ActionArgs, ActionPayload } from "../../types"

// main
export const payloadCreator: AsyncThunkPayloadCreator<
  ActionPayload,
  ActionArgs
> = async (args) => {
  const { tagIds } = args
  const endpoint = `/api/tags${format({ query: { tagIds } })}`
  try {
    await selfApiClient.delete(endpoint)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
