// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"
import { isEqual } from "date-fns"

// import others
import { useRangePicker } from "./index"

// main
describe("useRangePicker", () => {
  it("startDate の初期値は null", () => {
    const { result } = renderHook(() => useRangePicker())
    expect(result.current[0][0]).toEqual(null)
  })

  it("endDate の初期値は null", () => {
    const { result } = renderHook(() => useRangePicker())
    expect(result.current[1][0]).toEqual(null)
  })

  describe("handleChangeStartDate の実行", () => {
    it("引数に null を渡すと startDate に null がセットされる", () => {
      const { result } = renderHook(() => useRangePicker())
      act(() => result.current[0][1](null))
      expect(result.current[0][0]).toEqual(null)
    })

    it("引数に Date を渡すと startDate にその Date がセットされる", () => {
      const now = new Date()
      const { result } = renderHook(() => useRangePicker())
      act(() => result.current[0][1](now))

      if (!result.current[0][0]) return
      expect(isEqual(result.current[0][0], now)).toEqual(true)
    })
  })

  describe("handleChangeEndDate の実行", () => {
    it("引数に null を渡すと startDate に null がセットされる", () => {
      const { result } = renderHook(() => useRangePicker())
      act(() => result.current[1][1](null))
      expect(result.current[1][0]).toEqual(null)
    })

    it("引数に Date を渡すと endDate にその Date がセットされる", () => {
      const now = new Date()
      const { result } = renderHook(() => useRangePicker())
      act(() => result.current[1][1](now))

      if (!result.current[1][0]) return
      expect(isEqual(result.current[1][0], now)).toEqual(true)
    })
  })
})
