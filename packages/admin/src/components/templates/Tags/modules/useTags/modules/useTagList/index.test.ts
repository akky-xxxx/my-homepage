// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { ChangeEvent } from "react"
import { useTagList } from "./index"
import { tags } from "./testData"

// main
const props = {
  tags,
  isLoading: false,
  isLoaded: false,
  isTagsLoading: false,
  handleUpdateTagsMain: jest.fn(),
  handleAddTagsMain: jest.fn(),
  handleDeleteTagsMain: jest.fn(),
  handleGetTags: jest.fn(),
}

describe("useTagList", () => {
  it("tags に isSelect が追加されている", () => {
    const { result } = renderHook(() => useTagList(props))
    const expectedData = tags.map((tag) => ({
      ...tag,
      isSelect: false,
    }))
    expect(result.current.tags).toEqual(expectedData)
  })

  it("handleClickSelect を実行すると、対象 id の isSelect が反転する", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelect("1"))
    expect(result.current.tags[0].isSelect).toEqual(true)
    act(() => result.current.handleClickSelect("1"))
    expect(result.current.tags[0].isSelect).toEqual(false)
  })

  it("tags の全ての isSelect が true の場合、 isSelectAll は true となる", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelect("1"))
    act(() => result.current.handleClickSelect("2"))
    act(() => result.current.handleClickSelect("3"))
    expect(result.current.isSelectAll).toEqual(true)
  })

  it("tags 内の isSelect が一つでも false の場合、 isSelectAll は false となる", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelect("1"))
    act(() => result.current.handleClickSelect("2"))
    expect(result.current.isSelectAll).toEqual(false)
  })

  it("isSelectAll が false の時に handleClickSelectAll を実行すると tags の全ての isSelect は true になる", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelectAll())
    expect(result.current.tags.every(({ isSelect }) => isSelect)).toEqual(true)
  })

  it("isSelectAll が true の時に handleClickSelectAll を実行すると tags の全ての isSelect は false になる", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelectAll())
    expect(result.current.isSelectAll).toEqual(true)
    act(() => result.current.handleClickSelectAll())
    expect(result.current.tags.every(({ isSelect }) => !isSelect)).toEqual(true)
  })

  it("tags の isSelect が一つでも true なら isSelectSome は true", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickSelect("1"))
    expect(result.current.tags[0].isSelect).toEqual(true)
    expect(result.current.isSelectSome).toEqual(true)
  })

  it("tags の isSelect が全て false なら isSelectSome は false", () => {
    const { result } = renderHook(() => useTagList(props))
    expect(result.current.isSelectSome).toEqual(false)
  })

  it("selectedTags は tags の isSelect が true のもの", () => {
    const { result } = renderHook(() => useTagList(props))
    expect(result.current.selectedTags).toEqual([])
    act(() => result.current.handleClickSelect("2"))
    expect(result.current.selectedTags[0].tagId).toEqual("2")
  })

  it("selectOptions は Record<'value' | 'label', string> の配列", () => {
    const { result } = renderHook(() => useTagList(props))
    result.current.selectOptions.forEach((option) => {
      const { value, label } = option
      expect(typeof label).toEqual("string")
      expect(typeof value).toEqual("string")
    })
  })

  it("isLoaded = true で実行されると handleGetTags が実行される", () => {
    renderHook(() => useTagList(props))
    expect(props.handleGetTags.mock.calls.length).toEqual(0)
    const thisProps = { ...props, isLoaded: true }
    renderHook(() => useTagList(thisProps))
    expect(props.handleGetTags.mock.calls.length).toBeGreaterThan(0)
  })

  describe("handleClickRelease", () => {
    it("対象の tag がない場合 handleUpdateTagsMain は実行されない", () => {
      const { result } = renderHook(() => useTagList(props))
      const fireTimes = props.handleUpdateTagsMain.mock.calls.length
      act(() => result.current.handleClickRelease("targetTagId"))
      expect(props.handleUpdateTagsMain.mock.calls.length).toEqual(fireTimes)
    })

    it("対象の tag がない場合 handleUpdateTagsMain が実行される", () => {
      const { result } = renderHook(() => useTagList(props))
      const fireTimes = props.handleUpdateTagsMain.mock.calls.length
      act(() => result.current.handleClickRelease("1"))
      expect(props.handleUpdateTagsMain.mock.calls.length).toEqual(
        fireTimes + 1,
      )
    })
  })

  describe("handleSelectOptions", () => {
    it("values がある場合、selectedOptions が更新され、 currentPage が初期値になる", () => {
      const { result } = renderHook(() => useTagList(props))

      act(() => result.current.handleClickPagination(2))
      expect(result.current.currentPage).toEqual(2)

      act(() => {
        const inputValue = [{ label: "testLabel", value: "testValue" }]
        result.current.handleSelectOptions(inputValue)
      })
      if (result.current.selectedOptions) {
        expect(result.current.selectedOptions[0].label).toEqual("testLabel")
        expect(result.current.selectedOptions[0].value).toEqual("testValue")
      }
      expect(result.current.currentPage).toEqual(1)
    })

    it("values が undefined の時は何も処理しない", () => {
      const { result } = renderHook(() => useTagList(props))
      act(() => result.current.handleClickPagination(2))
      expect(result.current.currentPage).toEqual(2)

      act(() => result.current.handleSelectOptions(undefined))
      expect(result.current.currentPage).toEqual(2)
    })
  })

  it("handleChangeFilterText を実行すると filterText は test となる", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      result.current.handleChangeFilterText(event)
    })
    expect(result.current.filterText).toEqual("test")
  })

  it("handleResetConditions を実行するとフィルター条件が全て初期化される", () => {
    const { result } = renderHook(() => useTagList(props))
    const testDate = new Date("2021-01-09T08:40:20.232Z")
    act(() => {
      const inputValue = [{ label: "testLabel", value: "testValue" }]
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      result.current.handleChangeFilterText(event)
      result.current.handleSelectOptions(inputValue)
      result.current.handleClickPagination(2)
      result.current.handleChangeCreateStartDate(testDate)
      result.current.handleChangeCreateEndDate(testDate)
      result.current.handleChangeUpdateStartDate(testDate)
      result.current.handleChangeUpdateEndDate(testDate)
    })
    expect(result.current.filterText).toEqual("test")
    if (result.current.selectedOptions) {
      expect(result.current.selectedOptions[0].label).toEqual("testLabel")
      expect(result.current.selectedOptions[0].value).toEqual("testValue")
    }
    expect(result.current.currentPage).toEqual(2)
    expect(result.current.createStartDate).toEqual(testDate)
    expect(result.current.createEndDate).toEqual(testDate)
    expect(result.current.updateStartDate).toEqual(testDate)
    expect(result.current.updateEndDate).toEqual(testDate)

    act(() => result.current.handleResetConditions())
    expect(result.current.filterText).toEqual("")
    expect(result.current.selectedOptions).toEqual(null)
    expect(result.current.currentPage).toEqual(1)
    expect(result.current.createStartDate).toEqual(null)
    expect(result.current.createEndDate).toEqual(null)
    expect(result.current.updateStartDate).toEqual(null)
    expect(result.current.updateEndDate).toEqual(null)
  })

  describe("pagination 関連", () => {
    it("currentPage の初期値は 1", () => {
      const { result } = renderHook(() => useTagList(props))
      expect(result.current.currentPage).toEqual(1)
    })
    it("handleClickPagination を実行すると引数の値が currentPage に格納される", () => {
      const { result } = renderHook(() => useTagList(props))
      act(() => result.current.handleClickPagination(3))
      expect(result.current.currentPage).toEqual(3)
    })
  })
})
