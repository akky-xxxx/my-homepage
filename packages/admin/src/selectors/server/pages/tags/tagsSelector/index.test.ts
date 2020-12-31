// import
import { rootInitialState } from "@@/store"
import { tagsSelector } from "./index"

// main
describe("tagsSelector", () => {
  it("initial state から tags の state だけ返す", () => {
    const expectState = {
      tags: [],
      isLoading: false,
    }
    expect(tagsSelector(rootInitialState)).toEqual(expectState)
  })
})
