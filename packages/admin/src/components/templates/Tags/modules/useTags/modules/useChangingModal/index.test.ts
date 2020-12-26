// import node_modules
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useChangingModal } from "./index"

// main
describe("useChangingModal", () => {
  it("isShowChangingModal の初期値は false", () => {
    const { result } = renderHook(() => useChangingModal())
    expect(result.current.isShowChangingModal).toEqual(false)
  })

  it("handleShowChangingModal を実行すると isShowChangingModal は true になる", () => {
    const { result } = renderHook(() => useChangingModal())
    act(() => result.current.handleShowChangingModal())
    expect(result.current.isShowChangingModal).toEqual(true)
    act(() => result.current.handleShowChangingModal())
    expect(result.current.isShowChangingModal).toEqual(true)
  })

  it("handleHideChangingModal を実行すると isShowChangingModal は false になる", () => {
    const { result } = renderHook(() => useChangingModal())
    act(() => result.current.handleShowChangingModal())
    expect(result.current.isShowChangingModal).toEqual(true)
    act(() => result.current.handleHideChangingModal())
    expect(result.current.isShowChangingModal).toEqual(false)
    act(() => result.current.handleHideChangingModal())
    expect(result.current.isShowChangingModal).toEqual(false)
  })
})
