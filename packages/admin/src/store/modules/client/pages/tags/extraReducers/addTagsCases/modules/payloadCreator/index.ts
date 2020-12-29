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
  try {
    const { tagNames } = args
    const endpoint = format({ href: "/api/tags", query: { tagNames } })
    await selfApiClient.get(endpoint)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
