// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { useImages } from "./index"

// main
describe("useImages", () => {
  describe("handleSelectReleaseStatus", () => {
    it.each([[{ label: "", value: "" }], [null], [undefined]] as const)(
      "引数が %s の時、 selectedReleaseStatus null にある",
      (arg) => {
        const props = {
          prefectures: [],
          tags: [],
          images: [],
        }
        const { result } = renderHook(() => useImages(props))

        act(() => result.current.handleSelectReleaseStatus(arg))
        expect(result.current.selectedReleaseStatus).toEqual(null)
      },
    )

    it("引数の value が ReleaseStatuses に存在する時、 selectedReleaseStatus は引数の値になる", () => {
      const props = {
        prefectures: [],
        tags: [],
        images: [],
      }
      const { result } = renderHook(() => useImages(props))
      act(() => {
        const arg = { label: "公開済み", value: "ReleaseStatuses1" }
        return result.current.handleSelectReleaseStatus(arg)
      })
      expect(result.current.selectedReleaseStatus).toEqual({
        label: "公開済み",
        value: "ReleaseStatuses1",
      })
    })
  })

  describe("handleSelectPrefecture", () => {
    it.each([[{ label: "", value: "" }], [null], [undefined]] as const)(
      "引数が %s の時、 selectedPrefecture null にある",
      (arg) => {
        const props = {
          prefectures: [],
          tags: [],
          images: [],
        }
        const { result } = renderHook(() => useImages(props))
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
        images: [],
      }
      const { result } = renderHook(() => useImages(props))
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
          images: [],
        }
        const { result } = renderHook(() => useImages(props))
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
        images: [],
      }
      const { result } = renderHook(() => useImages(props))
      const targetTags = [
        { label: "label2", value: "value2" },
        { label: "label4", value: "value4" },
      ]
      act(() => result.current.handleSelectTags(targetTags))
      expect(result.current.selectedTags).toEqual(targetTags)
    })
  })

  describe("handleResetConditions関連", () => {
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
        images: [],
      }
      const { result } = renderHook(() => useImages(props))

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

    it("selectedTags が空の時", () => {
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
        images: [],
      }
      const { result } = renderHook(() => useImages(props))

      act(() => {
        const arg = [
          { label: "label2", value: "value2" },
          { label: "label4", value: "value4" },
        ]
        return result.current.handleSelectTags(arg)
      })

      act(() => result.current.handleResetConditions())
      expect(result.current.selectedTags).toEqual([])

      act(() => result.current.handleResetConditions())
      expect(result.current.selectedTags).toEqual([])
    })
  })
})
