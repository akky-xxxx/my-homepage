// import
import { extractName } from "./index"
import { keys } from "../testData"

// main
const [key1] = keys

describe("extractName", () => {
  it("key の name を返す", () => {
    expect(extractName(key1)).toEqual("name1")
  })
})
