// import
import { isSessionId } from "."

// main
describe("isSessionId", () => {
  it.each([
    ["文字列", true],
    [Number(), false],
    [Boolean(), false],
    [undefined, false],
  ] as const)("引数が %s の時は `%s` を返す", (input, output) => {
    expect(isSessionId(input)).toEqual(output)
  })
})
