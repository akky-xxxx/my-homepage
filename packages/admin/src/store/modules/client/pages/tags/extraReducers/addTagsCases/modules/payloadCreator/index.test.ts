// import
import { Test } from "@@/shared/const/Test"
import { payloadCreator } from "./index"
import { endpoint, tagNames } from "./testData"

// main
const { MOCK, THUNK_API } = Test

describe("payloadCreator", () => {
  it("fulfilled", async () => {
    MOCK.onGet(endpoint, { tagNames }).reply(200)
    const result = await payloadCreator({ tagNames }, THUNK_API)
    expect(result).toEqual(undefined)
  })

  it("rejected", async () => {
    MOCK.onGet(endpoint, { tagNames }).reply(500)
    try {
      await payloadCreator({ tagNames }, THUNK_API)
    } catch (error) {
      expect(error instanceof Error).toEqual(true)
    }
  })
})
