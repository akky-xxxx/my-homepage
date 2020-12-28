// import
import { tagsInitialState, tagsReducer, tagsActions } from "../../index"

// main
const { updateTags } = tagsActions
describe("store/client/pages/tags/updateTags", () => {
  const tags = [
    {
      tagId: "1",
      tagName: "test",
    },
    {
      tagId: "2",
      isRelease: true,
    },
  ]

  it("updateTags.pending が dispatch されると isLoading が true になる", () => {
    const action = updateTags.pending("", {
      tags,
    })
    expect(action.type).toEqual("client/pages/tags/updateTags/pending")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: true,
    })
  })

  it("updateTags.fulfilled が dispatch されると isLoading が false になる", () => {
    const action = updateTags.fulfilled({ tags }, "", {
      tags,
    })
    expect(action.type).toEqual("client/pages/tags/updateTags/fulfilled")
    expect(action.payload).toEqual({ tags })
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
    })
  })

  it("updateTags.rejected が dispatch されると isLoading が false になる", () => {
    const action = updateTags.rejected(null, "", {
      tags,
    })
    expect(action.type).toEqual("client/pages/tags/updateTags/rejected")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
    })
  })
})
