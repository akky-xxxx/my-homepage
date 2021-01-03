// import
import { filterByText } from "./index"
import { tags } from "../../testData"

// main
const thisTags = tags.map((tag) => ({ ...tag, isSelect: false }))

describe("filterByText", () => {
  it("filterText が 空文字 (未入力) の時は true を返す", () => {
    expect(filterByText("")(thisTags[0])).toEqual(true)
  })

  it("filterText があり、 tag.tagName に filterText が含まれる場合は true を返す", () => {
    expect(filterByText("name1")(thisTags[0])).toEqual(true)
  })

  it("filterText があり、 tag.tagName に filterText が含まれない場合は false を返す", () => {
    expect(filterByText("name1")(thisTags[1])).toEqual(false)
  })
})
