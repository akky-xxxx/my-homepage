// import node_modules
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useAdditionModal } from "./index"

// main
describe("useAdditionModal", () => {
  it("isShowAdditionModal の初期値は false", () => {
    const { result } = renderHook(() => useAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(false)
  })

  it("handleShowAdditionModal を実行すると isShowAdditionModal は true になる", () => {
    const { result } = renderHook(() => useAdditionModal())
    act(() => result.current.handleShowAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(true)
    act(() => result.current.handleShowAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(true)
  })

  it("handleHideAdditionModal を実行すると isShowAdditionModal は false になる", () => {
    const { result } = renderHook(() => useAdditionModal())
    act(() => result.current.handleShowAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(true)
    act(() => result.current.handleHideAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(false)
    act(() => result.current.handleHideAdditionModal())
    expect(result.current.isShowAdditionModal).toEqual(false)
  })
})
