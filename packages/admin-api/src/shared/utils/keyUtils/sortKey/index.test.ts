// import
import { sortKey } from "./index"
import { keys } from "../testData"

// main
const [key1, key2, key3, key4] = keys

describe("sortKey", () => {
  it("name を asc でソート", () => {
    expect([key2, key4, key3, key1].sort(sortKey)).toEqual(keys)
  })
})
