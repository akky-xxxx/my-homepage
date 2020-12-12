// import
import { rootInitialState } from "@@/store"
import { sampleSelector } from "./index"

// main
describe("sampleSelector", () => {
  it("initial state から sample の state だけ返す", () => {
    const expectState = {
      counter: 0,
      text: "",
    }
    expect(sampleSelector(rootInitialState)).toEqual(expectState)
  })
})
