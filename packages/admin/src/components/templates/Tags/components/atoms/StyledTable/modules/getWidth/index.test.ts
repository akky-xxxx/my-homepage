// import
import { getWidth } from "./index"

// main
describe("getWidth", () => {
  describe("auto を返すパターン", () => {
    it.each([[{ width: undefined }], [{ width: "incorrect string" }]] as const)(
      "引数が %s の時",
      (input) => {
        expect(getWidth(input)).toEqual("auto")
      },
    )
  })

  describe("auto 以外を返すパターン", () => {
    it.each([
      [{ width: 100 }, "100px"],
      [{ width: "200px" }, "200px"],
      [{ width: "300%" }, "300%"],
    ] as const)("引数が %s の時、 %s を返す", (input, output) => {
      expect(getWidth(input)).toEqual(output)
    })
  })
})
