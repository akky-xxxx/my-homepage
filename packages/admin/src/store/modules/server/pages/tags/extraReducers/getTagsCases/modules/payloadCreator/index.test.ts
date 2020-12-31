// import
import { Test } from "@@/shared/const/Test"
import { payloadCreator } from "./index"
import { endpoint } from "./testData"

// main
const { MOCK, THUNK_API } = Test

describe("payloadCreator", () => {
  it("fulfilled", async () => {
    MOCK.onGet(endpoint).reply(200)
    const result = await payloadCreator({}, THUNK_API)
    expect(result).toEqual(undefined)
  })

  it("rejected", async () => {
    MOCK.onGet(endpoint).reply(500)
    try {
      await payloadCreator({}, THUNK_API)
    } catch (error) {
      expect(error instanceof Error).toEqual(true)
    }
  })
})
