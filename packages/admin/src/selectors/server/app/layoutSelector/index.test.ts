// import
import { rootInitialState } from "@@/store"
import { layoutSelector } from "./index"

// main
describe("layoutSelector", () => {
  it("initial state から layout の state だけ返す", () => {
    const expectState = {
      isShowMenu: false,
      title: "管理画面",
    }
    expect(layoutSelector(rootInitialState)).toEqual(expectState)
  })
})
