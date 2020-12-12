// import
import { layoutActions } from ".."

// main
const { openMenu, closeMenu, changeTitle } = layoutActions
describe("store/server/app/layout/actions", () => {
  it("openMenu", () => {
    const expectedAction = {
      type: "server/app/layout/openMenu",
    }
    expect(openMenu()).toEqual(expectedAction)
  })

  it("closeMenu", () => {
    const expectedAction = {
      type: "server/app/layout/closeMenu",
    }
    expect(closeMenu()).toEqual(expectedAction)
  })

  it("changeTitle", () => {
    const expectedAction = {
      type: "server/app/layout/changeTitle",
      payload: {
        newTitle: "test title",
      },
    }
    expect(changeTitle({ newTitle: "test title" })).toEqual(expectedAction)
  })
})
