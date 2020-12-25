// import
import { rootInitialState } from "@@/store"
import { layoutSelector } from "./index"

// main
describe("sampleSelector", () => {
  it("initial state から sample の state だけ返す", () => {
    const expectState = {
      isShowMenu: false,
      title: "管理画面",
    }
    expect(layoutSelector(rootInitialState)).toEqual(expectState)
  })
})
