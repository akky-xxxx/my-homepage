// import
import { sampleSelector } from "./index"
import { rootInitialState } from "@@/store"

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
