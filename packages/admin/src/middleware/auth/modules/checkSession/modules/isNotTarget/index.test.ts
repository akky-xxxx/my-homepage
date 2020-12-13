// import
import { Endpoints } from "@@/middleware/auth/const"
import { isNotTarget } from "."

// main
const { LOGIN, CALLBACK } = Endpoints

describe("isNotTarget", () => {
  it.each([
    ["/_next/", true],
    [LOGIN, true],
    [CALLBACK, true],
    ["/_next/", true],
    ["/", false],
    ["/tags", false],
  ] as const)("%s は `%s` を返す", (input, output) => {
    expect(isNotTarget(input)).toEqual(output)
  })
})
