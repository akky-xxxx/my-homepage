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
    const { tagNames } = args
    // TODO: 仮実装
    // eslint-disable-next-line no-console
    console.log(tagNames)
    await selfApiClient.get("/api/tags")
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
