// import node_modules
import {act, renderHook} from "@testing-library/react-hooks"

// import others
import { useDeletingModal } from "./index"

// main
describe("useDeletingModal", () => {
  it("isShowDeletingModal の初期値は false", () => {
    const { result } = renderHook(() => useDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(false)
  })

  it("handleShowDeletingModal を実行すると isShowDeletingModal は true になる", () => {
    const { result } = renderHook(() => useDeletingModal())
    act(() => result.current.handleShowDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(true)
    act(() => result.current.handleShowDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(true)
  })

  it("handleHideDeletingModal を実行すると isShowDeletingModal は false になる", () => {
    const { result } = renderHook(() => useDeletingModal())
    act(() => result.current.handleShowDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(true)
    act(() => result.current.handleHideDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(false)
    act(() => result.current.handleHideDeletingModal())
    expect(result.current.isShowDeletingModal).toEqual(false)
  })
})
