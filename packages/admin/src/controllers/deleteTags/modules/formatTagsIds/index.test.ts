// import
import { formatTagsIds } from "./index"
import { tagId, tagIds, incorrectTagId, incorrectTagIds } from "./testData"

// main
describe("formatTagsIds", () => {
  describe("string[] を返すパターン", () => {
    it("tagsId が string の場合", () => {
      const query = {
        tagIds: tagId,
      }
      const results = formatTagsIds(query)
      expect(Array.isArray(results)).toEqual(true)
      ;(results as unknown[]).forEach((result: unknown) => {
        expect(typeof result).toEqual("string")
      })
    })

    it("tagsId が string[] の場合", () => {
      const query = {
        tagIds,
      }
      const results = formatTagsIds(query)
      expect(Array.isArray(results)).toEqual(true)
      ;(results as unknown[]).forEach((result: unknown) => {
        expect(typeof result).toEqual("string")
      })
    })
  })

  describe("undefined を返すパターン", () => {
    it("tagsId が object の場合", () => {
      const query = {
        tagIds: incorrectTagId,
      }
      const results = formatTagsIds(query)
      expect(typeof results).toEqual("undefined")
    })

    it("tagsId が object[] の場合", () => {
      const query = {
        tagIds: incorrectTagIds,
      }
      const results = formatTagsIds(query)
      expect(typeof results).toEqual("undefined")
    })
  })
})
