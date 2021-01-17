// import
import { filterByTags } from "./index"

// main
describe("filterByTags", () => {
  const blankTag = { label: "", value: "" }
  it.each([[null], [[]]] as const)(
    "親の selectedTags が %s の時、 true を返す",
    (selectedTags) => {
      const filterByTagsMain = filterByTags(selectedTags)
      expect(filterByTagsMain({ selectedTags: [blankTag] })).toEqual(true)
    },
  )

  it("image.selectedTags が空配列の時、 false を返す", () => {
    const filterByTagsMain = filterByTags([blankTag])
    expect(filterByTagsMain({ selectedTags: [] })).toEqual(false)
  })

  it("image.selectedTags の value が親の selectedTags の value に一全て含まれてると true を返す", () => {
    const tag1 = { label: "", value: "value1" }
    const tag2 = { label: "", value: "value2" }
    const filterByTagsMain = filterByTags([tag1, tag2])
    expect(filterByTagsMain({ selectedTags: [tag1, tag2] })).toEqual(true)
  })

  it("image.selectedTags の value が親の selectedTags の value に一つも含まれてないと false を返す", () => {
    const tag1 = { label: "", value: "value1" }
    const tag2 = { label: "", value: "value2" }
    const tag3 = { label: "", value: "value3" }
    const filterByTagsMain = filterByTags([tag1, tag2])
    expect(filterByTagsMain({ selectedTags: [tag1] })).toEqual(false)
    expect(filterByTagsMain({ selectedTags: [tag3] })).toEqual(false)
  })
})
