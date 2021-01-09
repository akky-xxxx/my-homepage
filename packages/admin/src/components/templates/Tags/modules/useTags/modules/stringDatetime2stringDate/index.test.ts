// import
import { stringDatetime2stringDate } from "./index"

// main
describe("stringDatetime2stringDate", () => {
  it("日時形式の文字列から時間を取り除く", () => {
    const input = "2020-01-01 00:00:00"
    const output = "2020-01-01"
    expect(stringDatetime2stringDate(input)).toEqual(output)
  })
})
