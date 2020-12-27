// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { useTagList } from "./index"
import { tags } from "./testData"

// main
const props = {
  tags,
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

  it("handleClickRelease を実行すると、対象 id の isRelease が反転する", () => {
    const { result } = renderHook(() => useTagList(props))
    act(() => result.current.handleClickRelease("1"))
    expect(result.current.tags[0].isRelease).toEqual(true)
    act(() => result.current.handleClickRelease("1"))
    expect(result.current.tags[0].isRelease).toEqual(false)
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
})
