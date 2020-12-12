// import
import { layoutInitialState, layoutReducer, layoutActions } from ".."

// main
const { openMenu, closeMenu, changeTitle } = layoutActions
describe("store/server/app/layout/reducer", () => {
  it("openMenu が dispatch されると isShowMenu が true になる", () => {
    const expectedState = {
      ...layoutInitialState,
      isShowMenu: true,
    }
    expect(layoutReducer(layoutInitialState, openMenu())).toEqual(expectedState)
  })

  it("closeMenu が dispatch されると isShowMenu が false になる", () => {
    const expectedState = {
      ...layoutInitialState,
      isShowMenu: false,
    }
    expect(layoutReducer(layoutInitialState, closeMenu())).toEqual(
      expectedState,
    )
  })

  it("changeTitle({ newTitle: `test title` }) が dispatch されると title が test title になる", () => {
    const expectedState = {
      ...layoutInitialState,
      title: "test title",
    }
    expect(
      layoutReducer(
        layoutInitialState,
        changeTitle({ newTitle: "test title" }),
      ),
    ).toEqual(expectedState)
  })
})
