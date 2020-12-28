// import node_modules
import { ChangeEvent } from "react"
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useChangingTable } from "./index"
import { originTags } from "./testData"

// main
const props = {
  isShow: true,
  originTags,
}

describe("useChangingTable", () => {
  it("レンダリング時の origin tags と state tags は同一", () => {
    const { result } = renderHook(() => useChangingTable(props))
    expect(result.current.stateTags).toEqual(originTags)
    act(() => result.current.handleChangeReleaseAll())
    const { result: result2 } = renderHook(() => useChangingTable(props))
    expect(result2.current.stateTags).toEqual(originTags)
  })

  it("handleChangeTagName を実行すると、該当する tagName が変わる", () => {
    const { result } = renderHook(() => useChangingTable(props))
    expect(result.current.stateTags[0].tagName).toEqual("tag-name1")
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeTagName("1")(event)
    })
    expect(result.current.stateTags[0].tagName).toEqual("test")
  })

  it("handleChangeRelease を実行すると該当する isRelease が反転する", () => {
    const { result } = renderHook(() => useChangingTable(props))
    expect(result.current.stateTags[0].isRelease).toEqual(false)
    act(() => result.current.handleChangeRelease("1")())
    expect(result.current.stateTags[0].isRelease).toEqual(true)
  })

  it("handleChangeReleaseAll を実行すると、全ての isRelease が反転する", () => {
    const { result } = renderHook(() => useChangingTable(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.stateTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    act(() => result.current.handleChangeReleaseAll())
    result.current.stateTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(false)
    })
  })

  it("isRelease が全て true なら isReleaseAll は true", () => {
    const { result } = renderHook(() => useChangingTable(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.stateTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    expect(result.current.isReleaseAll).toEqual(true)
  })

  it("isRelease が一つでも false なら isReleaseAll は false", () => {
    const { result } = renderHook(() => useChangingTable(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.stateTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    act(() => result.current.handleChangeRelease("1")())
    expect(result.current.isReleaseAll).toEqual(false)
  })
})
