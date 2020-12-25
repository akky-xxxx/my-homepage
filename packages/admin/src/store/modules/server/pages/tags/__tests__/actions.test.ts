// import
import { tagsActions } from ".."

// main
const { getTags } = tagsActions
describe("store/server/pages/tags/actions", () => {
  it("getTags", () => {
    const expectedAction = {
      type: "server/pages/tags/getTags",
      payload: {
        newTags: [],
      },
    }
    expect(getTags({ newTags: [] })).toEqual(expectedAction)
  })
})
