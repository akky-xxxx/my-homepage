// import
import { getTextAlign } from "./index"

// main
describe("getTextAlign", () => {
  it.each([
    [{ textAlign: undefined }, "left"],
    [{ textAlign: "left" }, "left"],
    [{ textAlign: "center" }, "center"],
    [{ textAlign: "right" }, "right"],
  ] as const)("引数が %s の時　%s を返す", (input, output) => {
    expect(getTextAlign(input)).toEqual(output)
  })
})
