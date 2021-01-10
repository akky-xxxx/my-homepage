// import
import { createNullArray } from "./index"

// main
describe("createNullArray", () => {
  it("引数で指定した数の null[] が返される", () => {
    const result = createNullArray(10)
    expect(result.length).toEqual(10)
    result.forEach((value) => {
      expect(value).toEqual(null)
    })
  })
})
