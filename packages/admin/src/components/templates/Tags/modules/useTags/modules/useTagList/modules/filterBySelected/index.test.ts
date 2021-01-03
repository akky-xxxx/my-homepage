// import
import { filterBySelected } from "./index"
import { tags } from "../../testData"

// main
const thisTags = tags.map((tag) => ({ ...tag, isSelect: false }))

describe("filterBySelected", () => {
  it("selectedOptions が null (未選択) の時は true を返す", () => {
    expect(filterBySelected(null)(thisTags[0])).toEqual(true)
  })

  it("リセット時 (空配列) の時は true を返す", () => {
    expect(filterBySelected([])(thisTags[0])).toEqual(true)
  })

  it("selectedOptions があり、 tag.tagId に selectedOptions.value 存在する場合は true を返す", () => {
    const selectedOptions = [
      {
        value: thisTags[0].tagId,
        label: thisTags[0].tagName,
      },
    ]
    expect(filterBySelected(selectedOptions)(thisTags[0])).toEqual(true)
  })

  it("selectedOptions があり、 tag.tagId に selectedOptions.value が存在しない場合は false を返す", () => {
    const selectedOptions = [
      {
        value: thisTags[0].tagId,
        label: thisTags[0].tagName,
      },
    ]
    expect(filterBySelected(selectedOptions)(thisTags[1])).toEqual(false)
  })
})
