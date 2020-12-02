// import
import { formatDatetime } from "@@/shared/utils/formatDatetime/index"

// main
describe("formatDatetime", () => {
  it("日付が YYYY-MM-DD HH-MM-SS@JST 形式に変換されること", () => {
    const input = "2020-07-12T07:57:24.872Z"
    const output = "2020-07-12 16:57:24"
    expect(formatDatetime(input)).toEqual(output)
  })
})
