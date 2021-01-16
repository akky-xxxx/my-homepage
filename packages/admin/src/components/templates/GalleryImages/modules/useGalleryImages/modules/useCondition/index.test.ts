// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { useCondition } from "./index"

// main
describe("useCondition", () => {
  describe("handleSelectPrefecture", () => {
    it.each([[{ label: "", value: "" }], [null], [undefined]] as const)(
      "引数が %s の時、 selectedPrefecture null にある",
      (arg) => {
        const props = {
          prefectures: [],
          tags: [],
        }
        const { result } = renderHook(() => useCondition(props))
        act(() => result.current.handleSelectPrefecture(arg))
        expect(result.current.selectedPrefecture).toEqual(null)
      },
    )

    it("引数の value が prefectures に存在する時、 selectedPrefecture は引数の値になる", () => {
      const props = {
        prefectures: [
          { label: "label1", value: "value1" },
          { label: "label2", value: "value2" },
        ],
        tags: [],
      }
      const { result } = renderHook(() => useCondition(props))
      act(() => {
        const arg = { label: "label2", value: "value2" }
        return result.current.handleSelectPrefecture(arg)
      })
      expect(result.current.selectedPrefecture).toEqual({
        label: "label2",
        value: "value2",
      })
    })
  })

  describe("handleSelectTags", () => {
    it.each([[null], [undefined]] as const)(
      "引数が %s の時、 selectedTags は null になる",
      (arg) => {
        const props = {
          prefectures: [],
          tags: [],
        }
        const { result } = renderHook(() => useCondition(props))
        act(() => result.current.handleSelectTags(arg))
        expect(result.current.selectedTags).toEqual(null)
      },
    )

    it("引数が存在する時、 selectedTags は引数の値になる", () => {
      const props = {
        prefectures: [],
        tags: [
          { label: "label1", value: "value1" },
          { label: "label2", value: "value2" },
          { label: "label3", value: "value3" },
          { label: "label4", value: "value4" },
        ],
      }
      const { result } = renderHook(() => useCondition(props))
      const targetTags = [
        { label: "label2", value: "value2" },
        { label: "label4", value: "value4" },
      ]
      act(() => result.current.handleSelectTags(targetTags))
      expect(result.current.selectedTags).toEqual(targetTags)
    })
  })

  it("handleResetConditions を実行すると、各条件が初期値に戻る", () => {
    const props = {
      prefectures: [
        { label: "label1", value: "value1" },
        { label: "label2", value: "value2" },
      ],
      tags: [
        { label: "label1", value: "value1" },
        { label: "label2", value: "value2" },
        { label: "label3", value: "value3" },
        { label: "label4", value: "value4" },
      ],
    }
    const { result } = renderHook(() => useCondition(props))

    act(() => {
      const arg = { label: "label2", value: "value2" }
      return result.current.handleSelectPrefecture(arg)
    })
    act(() => {
      const arg = [
        { label: "label2", value: "value2" },
        { label: "label4", value: "value4" },
      ]
      return result.current.handleSelectTags(arg)
    })
    act(() => {
      const arg = new Date()
      result.current.handleSelectPhotographAtStart(arg)
      result.current.handleSelectPhotographAtEnd(arg)
      result.current.handleSelectCreatedAtStart(arg)
      result.current.handleSelectCreatedAtEnd(arg)
      result.current.handleSelectUpdatedAtStart(arg)
      result.current.handleSelectUpdatedAtEnd(arg)
    })

    act(() => result.current.handleResetConditions())
    expect(result.current.selectedPrefecture).toEqual(null)
    expect(result.current.selectedTags).toEqual([])
    expect(result.current.photographAtStart).toEqual(null)
    expect(result.current.photographAtEnd).toEqual(null)
    expect(result.current.createdAtStart).toEqual(null)
    expect(result.current.createdAtEnd).toEqual(null)
    expect(result.current.updatedAtStart).toEqual(null)
    expect(result.current.updatedAtEnd).toEqual(null)
  })
})
