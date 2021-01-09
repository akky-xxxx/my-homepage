// import
import { createNewStates } from "./index"

// main
describe("createNewStates - reduce 用を配列のアイテム単位でテスト", () => {
  it("newTag.id と、 changedTag.id が同一の場合、 changedTag が最後尾に追加される", () => {
    const changedTag = { id: "tagId2", value: "changedTagValue" }
    const tag1 = { id: "tagId1", value: "tag1" }
    const tag2 = { id: "tagId2", value: "tag2" }
    const newStates = createNewStates(changedTag)([tag1], tag2, 1, [])
    expect(newStates).toEqual([tag1, changedTag])
  })

  it("newTag.value が空文字の場合、 tag がそのまま返る", () => {
    const changedTag = { id: "changedTagId", value: "changedTagValue" }
    const tag1 = { id: "tagId1", value: "tag1" }
    const tag2 = { id: "tagId2", value: "" }
    const newStates = createNewStates(changedTag)([tag1], tag2, 1, [])
    expect(newStates).toEqual([tag1])
  })

  it("最後尾に State の初期値が追加される", () => {
    const changedTag = { id: "changedTagId", value: "changedTagValue" }
    const tag = { id: "tagId1", value: "tag1" }
    const newStates = createNewStates(changedTag)([], tag, 0, [tag])
    expect(typeof newStates[0].id).toEqual("string")
    expect(newStates[0].value).toEqual("")
  })

  it("いずれの条件にも引っかからない場合、 newTag が最後尾に追加される", () => {
    const changedTag = { id: "changedTagId", value: "changedTagValue" }
    const tag1 = { id: "tagId1", value: "tag1" }
    const tag2 = { id: "tagId2", value: "tag2" }
    const newStates = createNewStates(changedTag)([tag1], tag2, 0, [tag1, tag2])
    expect(newStates).toEqual([tag1, tag2])
  })
})
