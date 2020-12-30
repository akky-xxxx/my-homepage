// import
import { tagsInitialState, tagsReducer, tagsActions } from "../../index"

// main
const { deleteTags } = tagsActions
describe("store/client/pages/tags/deleteTags", () => {
  const tagIds = ["tagId1", "tagId2"]

  it("deleteTags.pending が dispatch されると isLoading が true になる", () => {
    const action = deleteTags.pending("", {
      tagIds,
    })
    expect(action.type).toEqual("client/pages/tags/deleteTags/pending")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: true,
    })
  })

  it("deleteTags.fulfilled が dispatch されると isLoading が false になる", () => {
    const action = deleteTags.fulfilled({ tagIds }, "", {
      tagIds,
    })
    expect(action.type).toEqual("client/pages/tags/deleteTags/fulfilled")
    expect(action.payload).toEqual({ tagIds })
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
    })
  })

  it("deleteTags.rejected が dispatch されると isLoading が false になる", () => {
    const action = deleteTags.rejected(null, "", {
      tagIds,
    })
    expect(action.type).toEqual("client/pages/tags/deleteTags/rejected")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
    })
  })
})
