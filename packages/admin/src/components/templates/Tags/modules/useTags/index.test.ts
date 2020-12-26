// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { useTags } from "./index"
import { tags } from "./testData"

// main
const props = {
  tags,
}

describe("useTags", () => {
  describe("タグ一覧関連", () => {
    it("tags に isSelect が追加されている", () => {
      const { result } = renderHook(() => useTags(props))
      const expectedData = tags.map((tag) => ({
        ...tag,
        isSelect: false,
      }))
      expect(result.current.tags).toEqual(expectedData)
    })

    it("handleClickSelect を実行すると、対象 id の isSelect が反転する", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickSelect("1"))
      expect(result.current.tags[0].isSelect).toEqual(true)
      act(() => result.current.handleClickSelect("1"))
      expect(result.current.tags[0].isSelect).toEqual(false)
    })

    it("handleClickRelease を実行すると、対象 id の isRelease が反転する", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickRelease("1"))
      expect(result.current.tags[0].isRelease).toEqual(true)
      act(() => result.current.handleClickRelease("1"))
      expect(result.current.tags[0].isRelease).toEqual(false)
    })

    it("tags の全ての isSelect が true の場合、 isSelectAll は true となる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickSelect("1"))
      act(() => result.current.handleClickSelect("2"))
      act(() => result.current.handleClickSelect("3"))
      expect(result.current.isSelectAll).toEqual(true)
    })

    it("tags 内の isSelect が一つでも false の場合、 isSelectAll は false となる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickSelect("1"))
      act(() => result.current.handleClickSelect("2"))
      expect(result.current.isSelectAll).toEqual(false)
    })

    it("isSelectAll が false の時に handleClickSelectAll を実行すると tags の全ての isSelect は true になる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickSelectAll())
      expect(result.current.tags.every(({ isSelect }) => isSelect)).toEqual(
        true,
      )
    })

    it("isSelectAll が true の時に handleClickSelectAll を実行すると tags の全ての isSelect は false になる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleClickSelectAll())
      expect(result.current.isSelectAll).toEqual(true)
      act(() => result.current.handleClickSelectAll())
      expect(result.current.tags.every(({ isSelect }) => !isSelect)).toEqual(
        true,
      )
    })
  })

  describe("タグ追加モーダル関連", () => {
    it("isShowAdditionModal の初期値は false", () => {
      const { result } = renderHook(() => useTags(props))
      expect(result.current.isShowAdditionModal).toEqual(false)
    })

    it("handleShowAdditionModal を実行すると isShowAdditionModal は true になる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleShowAdditionModal())
      expect(result.current.isShowAdditionModal).toEqual(true)
      act(() => result.current.handleShowAdditionModal())
      expect(result.current.isShowAdditionModal).toEqual(true)
    })

    it("handleHideAdditionModal を実行すると isShowAdditionModal は false になる", () => {
      const { result } = renderHook(() => useTags(props))
      act(() => result.current.handleShowAdditionModal())
      expect(result.current.isShowAdditionModal).toEqual(true)
      act(() => result.current.handleHideAdditionModal())
      expect(result.current.isShowAdditionModal).toEqual(false)
      act(() => result.current.handleHideAdditionModal())
      expect(result.current.isShowAdditionModal).toEqual(false)
    })
  })

  describe("タグ変更モーダル関連", () => {
    it.todo("isShowChangingModal の初期値は false")

    it.todo("handleShowChangingModal を実行すると isShowChangingModal は true になる")

    it.todo("handleHideChangingModal を実行すると isShowChangingModal は false になる")
  })
})
