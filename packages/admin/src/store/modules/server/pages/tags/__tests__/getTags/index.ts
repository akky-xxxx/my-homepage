// import
import { tagsActions, tagsInitialState, tagsReducer } from "../../index"
import { tags } from "../../testData"

// main
const { clientGetTags } = tagsActions
describe("clientGetTags", () => {
  it("pending が dispatch されたら isLoading が false になる", () => {
    const action = clientGetTags.pending("")
    expect(action.type).toEqual("server/pages/tags/getTags/pending")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: true,
      tags: [],
    })
  })

  it("fulfilled が dispatch されたら isLoading が false になり、 tags が更新される", () => {
    const args = { tags }
    const action = clientGetTags.fulfilled(args, "")
    expect(action.type).toEqual("server/pages/tags/getTags/fulfilled")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
      tags,
    })
  })

  it("rejected が dispatch されたら isLoading が false になる", () => {
    const action = clientGetTags.rejected(null, "")
    expect(action.type).toEqual("server/pages/tags/getTags/rejected")
    expect(tagsReducer(tagsInitialState, action)).toEqual({
      isLoading: false,
      tags: [],
    })
  })
})
