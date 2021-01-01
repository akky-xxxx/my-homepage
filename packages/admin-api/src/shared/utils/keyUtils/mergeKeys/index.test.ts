// import
import { mergeKeys } from "./index"
import { keys } from "../testData"

// main
const [key1, key2, key3, key4] = keys
describe("mergeKeys", () => {
  it("重複なし", () => {
    const keys1 = [key2, key1]
    const keys2 = [key4, key3]
    expect(mergeKeys(keys1, keys2)).toEqual([key2, key1, key4, key3])
  })

  it("重複あり", () => {
    const keys1 = [key2, key1, key3]
    const keys2 = [key4, key3, key2]
    expect(mergeKeys(keys1, keys2)).toEqual([key2, key1, key3, key4])
  })
})
