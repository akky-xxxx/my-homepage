// import
import { getSeparatedNumbers } from "./index"

// main
describe("getSeparatedNumbers", () => {
  it.each([
    [999, "999"],
    [1000, "1,000"],
    [999999, "999,999"],
    [1000000, "1,000,000"],
  ] as const)("%i は `%s` を返す", (input, output) => {
    expect(getSeparatedNumbers(input)).toEqual(output)
  })
})
