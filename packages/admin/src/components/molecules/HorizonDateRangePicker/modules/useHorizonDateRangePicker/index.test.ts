// import node_modules
import { renderHook } from "@testing-library/react-hooks"

// import others
import { useHorizonDateRangePicker } from "./index"

// main
describe("useHorizonDateRangePicker", () => {
  describe("targetName 関連", () => {
    describe("startTargetName", () => {
      it.each([
        [undefined, "from"],
        ["登録日", "登録日 from"],
      ] as const)(
        "targetName が %s の時、 startTargetName は %s",
        (targetName, expectedValue) => {
          const props = { accentDates: [], targetName }
          const { result } = renderHook(() => useHorizonDateRangePicker(props))
          expect(result.current.startTargetName).toEqual(expectedValue)
        },
      )
    })

    describe("endTargetName", () => {
      it.each([
        [undefined, "to"],
        ["登録日", "登録日 to"],
      ] as const)(
        "targetName が %s の時、 endTargetName は %s",
        (targetName, expectedValue) => {
          const props = { accentDates: [], targetName }
          const { result } = renderHook(() => useHorizonDateRangePicker(props))
          expect(result.current.endTargetName).toEqual(expectedValue)
        },
      )
    })
  })

  describe("dayClassName 関連", () => {
    describe("dayClassName が undefined のパターン", () => {
      it("accentDates が undefined の時", () => {
        const props = { accentDates: [] }
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(result.current.dayClassName).toEqual(undefined)
      })

      it("accentDates が空配列の時", () => {
        const props = { accentDates: [] }
        const { result } = renderHook(() => useHorizonDateRangePicker(props))
        expect(result.current.dayClassName).toEqual(undefined)
      })
    })

    describe("dayClassName が関数のパターン", () => {
      const props = {
        accentDates: ["2021-01-01"],
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
