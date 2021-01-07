// import node_modules
import { renderHook } from "@testing-library/react-hooks"

// import others
import { useHorizonDateRangePicker } from "./index"

// main
describe("useHorizonDateRangePicker", () => {
  describe("dayClassName 関連", () => {
    describe("dayClassName が undefined のパターン", () => {
      it("accentDates が undefined の時", () => {
        const props = {}
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(result.current.dayClassName).toEqual(undefined)
      })

      it("accentDates が空配列の時", () => {
        const props = {}
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(result.current.dayClassName).toEqual(undefined)
      })
    })

    describe("dayClassName が関数のパターン", () => {
      const props = {
        accentDates: [new Date(2021, 0, 1)],
      }

      it("accentDates が Date[] の時", () => {
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(typeof result.current.dayClassName).toEqual("function")
      })

      it("dayClassName の引数が accentDates に含まれてる時、 is-accentDay を返す", () => {
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(typeof result.current.dayClassName).toEqual("function")

        if (!result.current.dayClassName) return
        const res = result.current.dayClassName(new Date(2021, 0, 1))
        expect(res).toEqual("is-accentDay")
      })

      it("dayClassName の引数が accentDates に含まれてない時、 null を返す", () => {
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(typeof result.current.dayClassName).toEqual("function")

        if (!result.current.dayClassName) return
        const res = result.current.dayClassName(new Date(2021, 0, 2))
        expect(res).toEqual(null)
      })
    })
  })
})
