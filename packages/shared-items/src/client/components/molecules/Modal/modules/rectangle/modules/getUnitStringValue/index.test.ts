// import
import { getUnitStringValue } from "./index"

// main
describe("getUnitStringValue", () => {
  it.each([
    [undefined, "auto"],
    [100, "100px"],
  ] as const)("引数が文字列でなく %s の時は %s を返す", (input, output) => {
    expect(getUnitStringValue(input)).toEqual(output)
  })

  it.each([
    ["200px", "200px"],
    ["300%", "300%"],
    ["400", "400px"],
    ["abc", "auto"],
  ] as const)("引数が文字列の %s の時は %s を返す", (input, output) => {
    expect(getUnitStringValue(input)).toEqual(output)
  })
})
