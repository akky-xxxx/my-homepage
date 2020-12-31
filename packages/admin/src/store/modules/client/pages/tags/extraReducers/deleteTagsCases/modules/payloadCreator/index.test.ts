// import
import { Test } from "@@/shared/const/Test"
import { payloadCreator } from "./index"
import { endpoint, tagIds } from "./testData"

// main
const { MOCK, THUNK_API } = Test

describe("payloadCreator", () => {
  it("fulfilled", async () => {
    MOCK.onDelete(endpoint, { tagIds }).reply(200)
    const result = await payloadCreator({ tagIds }, THUNK_API)
    expect(result).toEqual(undefined)
  })

  it("rejected", async () => {
    MOCK.onDelete(endpoint, { tagIds }).reply(500)
    try {
      await payloadCreator({ tagIds }, THUNK_API)
    } catch (error) {
      expect(error instanceof Error).toEqual(true)
    }
  })
})
