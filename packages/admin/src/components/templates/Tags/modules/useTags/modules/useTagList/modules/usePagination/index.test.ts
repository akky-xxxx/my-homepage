// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { usePagination } from "./index"

// main
describe("usePagination", () => {
  it("currentPage の初期値は 1", () => {
    const { result } = renderHook(() => usePagination())
    expect(result.current[0]).toEqual(1)
  })
  it("handleClickPagination を実行すると引数の値が currentPage に格納される", () => {
    const { result } = renderHook(() => usePagination())
    act(() => result.current[1](3))
    expect(result.current[0]).toEqual(3)
  })
})
