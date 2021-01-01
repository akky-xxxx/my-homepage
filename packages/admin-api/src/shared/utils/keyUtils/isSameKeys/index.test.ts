// import
import { Key } from "@google-cloud/datastore"

// import
import { isSameKeys } from "./index"
import { keys } from "../testData"

// main
const [key1, key2, key3, key4] = keys
describe("isSameKeys", () => {
  describe("false を返すパターン", () => {
    it("配列数が異なる", () => {
      const keys1 = [key1]
      const keys2: Key[] = []
      expect(isSameKeys(keys1, keys2)).toEqual(false)
    })

    it("配列内容が異なる - 重複あり", () => {
      const keys1 = [key1, key2]
      const keys2 = [key2, key3]
      expect(isSameKeys(keys1, keys2)).toEqual(false)
    })

    it("配列内容が異なる - 重複なし", () => {
      const keys1 = [key1, key2]
      const keys2 = [key3, key4]
      expect(isSameKeys(keys1, keys2)).toEqual(false)
    })
  })

  describe("true を返すパターン", () => {
    it("配列数が一つで内容が同一", () => {
      const keys1 = [key1]
      const keys2 = [key1]
      expect(isSameKeys(keys1, keys2)).toEqual(true)
    })

    it("配列数が複数で内容が同一", () => {
      const keys1 = [key1, key2, key3, key4]
      const keys2 = [key1, key2, key3, key4]
      expect(isSameKeys(keys1, keys2)).toEqual(true)
    })
  })
})
