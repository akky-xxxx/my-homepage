// import
import { rootInitialState } from "@@/store"
import { tagsSelector } from "./index"

// main
describe("tagsSelector", () => {
  it("initial state から client/tags の state だけ返す", () => {
    const expectState = {
      isLoading: false,
      isLoaded: false,
      errorMessage: undefined,
    }
    expect(tagsSelector(rootInitialState)).toEqual(expectState)
  })
})
