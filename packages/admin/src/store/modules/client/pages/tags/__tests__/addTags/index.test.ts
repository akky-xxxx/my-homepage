// import
import { tagsInitialState, tagsReducer, tagsActions } from "../../index"

// main
const { addTags } = tagsActions
describe("store/client/pages/tags/addTags", () => {
  const tagNames = ["tagId1", "tagId2"]

  it("addTags.pending が dispatch されると isLoading が true になり、 isLoaded が false になる", () => {
    const action = addTags.pending("", {
      tagNames,
    })
    expect(action.type).toEqual("client/pages/tags/addTags/pending")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: true,
      isLoaded: false,
    })
  })

  it("addTags.fulfilled が dispatch されると isLoading が false になり、 isLoaded が false になる", () => {
    const action = addTags.fulfilled({ tagNames }, "", {
      tagNames,
    })
    expect(action.type).toEqual("client/pages/tags/addTags/fulfilled")
    expect(action.payload).toEqual({ tagNames })
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
      isLoaded: true,
    })
  })

  it("addTags.rejected が dispatch されると isLoading, isLoaded が false になる", () => {
    const action = addTags.rejected(null, "", {
      tagNames,
    })
    expect(action.type).toEqual("client/pages/tags/addTags/rejected")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
      isLoaded: false,
    })
  })
})
