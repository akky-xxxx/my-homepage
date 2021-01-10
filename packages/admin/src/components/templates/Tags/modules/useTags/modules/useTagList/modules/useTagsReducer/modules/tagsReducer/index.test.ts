// import
import { tagsReducer } from "./index"

// main
describe("tagsReducer", () => {
  describe("穴埋め", () => {
    it("該当する action.type がない場合は tagsStates が返される", () => {
      const result = tagsReducer([], { type: "initialAction" })
      expect(result).toEqual([])
    })
  })
})
