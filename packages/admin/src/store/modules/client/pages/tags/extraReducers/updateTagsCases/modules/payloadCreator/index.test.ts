// import
import { Test } from "@@/shared/const/Test"
import { payloadCreator } from "./index"
import { endpoint, tags, incorrectTags } from "./testData"

// main
const { MOCK, THUNK_API } = Test

describe("payloadCreator", () => {
  it("fulfilled", async () => {
    MOCK.onPut(endpoint, { tags }).reply(200)
    const result = await payloadCreator({ tags }, THUNK_API)
    expect(result).toEqual(undefined)
  })

  it("rejected", async () => {
    MOCK.onPut(endpoint, { tags }).reply(400)
    try {
      await payloadCreator({ tags: incorrectTags }, THUNK_API)
    } catch (error) {
      expect(error instanceof Error).toEqual(true)
    }
  })

  it("rejected", async () => {
    MOCK.onPut(endpoint, { tags }).reply(500)
    try {
      await payloadCreator({ tags }, THUNK_API)
    } catch (error) {
      expect(error instanceof Error).toEqual(true)
    }
  })
})
