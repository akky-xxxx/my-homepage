// import
import { tagsInitialState, tagsReducer, tagsActions } from ".."

// main
const { getTags } = tagsActions
describe("store/server/pages/tags/reducer", () => {
  it("getTags({ newTags }) が dispatch されると tags が newTags になる", () => {
    const inputTags = [
      {
        tagId: "tagId1",
        tagName: "tag-name",
        isRelease: true,
        createdAt: "2020-01-01",
        updatedAt: "2020-12-31",
      },
      {
        tagId: "tagId2",
        tagName: "tag-name2",
        isRelease: false,
        createdAt: "2020-01-01",
        updatedAt: "2020-12-31",
      },
    ]
    const expectedState = {
      tags: [
        {
          tagId: "tagId1",
          tagName: "tag-name",
          isRelease: true,
          createdAt: "2020-01-01",
          updatedAt: "2020-12-31",
        },
        {
          tagId: "tagId2",
          tagName: "tag-name2",
          isRelease: false,
          createdAt: "2020-01-01",
          updatedAt: "2020-12-31",
        },
      ],
    }
    expect(
      tagsReducer(tagsInitialState, getTags({ newTags: inputTags })),
    ).toEqual(expectedState)
  })
})
