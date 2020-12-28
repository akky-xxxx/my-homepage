// import node_modules
import { ChangeEvent } from "react"
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useChangingModal } from "./index"
import { originTags } from "./testData"

// main
const props = {
  originTags,
}

describe("useChangingModal", () => {
  it("レンダリング時の origin tags と state tags は同一", () => {
    const { result } = renderHook(() => useChangingModal(props))
    expect(result.current.selectedTags).toEqual(originTags)
    act(() => result.current.handleChangeReleaseAll())
    const { result: result2 } = renderHook(() => useChangingModal(props))
    expect(result2.current.selectedTags).toEqual(originTags)
  })

  it("handleChangeTagName を実行すると、該当する tagName が変わる", () => {
    const { result } = renderHook(() => useChangingModal(props))
    expect(result.current.selectedTags[0].tagName).toEqual("tag-name1")
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeTagName("1")(event)
    })
    expect(result.current.selectedTags[0].tagName).toEqual("test")
  })

  it("handleChangeRelease を実行すると該当する isRelease が反転する", () => {
    const { result } = renderHook(() => useChangingModal(props))
    expect(result.current.selectedTags[0].isRelease).toEqual(false)
    act(() => result.current.handleChangeRelease("1")())
    expect(result.current.selectedTags[0].isRelease).toEqual(true)
  })

  it("handleChangeReleaseAll を実行すると、全ての isRelease が反転する", () => {
    const { result } = renderHook(() => useChangingModal(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.selectedTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    act(() => result.current.handleChangeReleaseAll())
    result.current.selectedTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(false)
    })
  })

  it("isRelease が全て true なら isReleaseAll は true", () => {
    const { result } = renderHook(() => useChangingModal(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.selectedTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    expect(result.current.isReleaseAll).toEqual(true)
  })

  it("isRelease が一つでも false なら isReleaseAll は false", () => {
    const { result } = renderHook(() => useChangingModal(props))
    act(() => result.current.handleChangeReleaseAll())
    result.current.selectedTags.forEach(({ isRelease }) => {
      expect(isRelease).toEqual(true)
    })
    act(() => result.current.handleChangeRelease("1")())
    expect(result.current.isReleaseAll).toEqual(false)
  })
})
