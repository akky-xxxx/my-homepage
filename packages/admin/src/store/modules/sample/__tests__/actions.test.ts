// import
import { sampleActions } from ".."

// main
const { increment, decrement, changeText } = sampleActions
describe("store - sample - actions", () => {
  it("increment", () => {
    const expectedAction = {
      type: "sample/increment",
    }
    expect(increment()).toEqual(expectedAction)
  })

  it("decrement", () => {
    const expectedAction = {
      type: "sample/decrement",
    }
    expect(decrement()).toEqual(expectedAction)
  })

  it("changeText", () => {
    const payload = {
      newText: "new text",
    }
    const expectedAction = {
      type: "sample/changeText",
      payload: {
        newText: "new text",
      },
    }
    expect(changeText(payload)).toEqual(expectedAction)
  })
})
