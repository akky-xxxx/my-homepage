// import
import { sampleReducer, initialState, sampleActions } from "../"

// main
const { increment, decrement, changeText } = sampleActions
describe("store - sample - reducer", () => {
  it("increment が dispatch されると counter が 1 足される", () => {
    const expectedState = {
      ...initialState,
      counter: 1,
    }
    expect(sampleReducer(initialState, increment())).toEqual(expectedState)
  })

  it("decrement が dispatch されると counter が 1 引かれる", () => {
    const expectedState = {
      ...initialState,
      counter: -1,
    }
    expect(sampleReducer(initialState, decrement())).toEqual(expectedState)
  })

  it("changeText が dispatch されると text が payload.newText の値になる", () => {
    const payload = {
      newText: "new text",
    }
    const expectedState = {
      ...initialState,
      text: "new text",
    }
    expect(sampleReducer(initialState, changeText(payload))).toEqual(expectedState)
  })
})
