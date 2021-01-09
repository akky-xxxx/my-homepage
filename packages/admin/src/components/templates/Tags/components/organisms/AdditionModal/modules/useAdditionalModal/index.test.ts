// import node_modules
import { ChangeEvent } from "react"
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useAdditionalModal } from "./index"

// main
const props = {
  handleAddTagsMain: jest.fn(),
  handleHideAdditionModal: jest.fn(),
}
describe("useAdditionalModal", () => {
  it("newTagNames の初期値 の value は空文字, id は文字列", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    const [{ id, value }] = result.current.newTagNames
    expect(id.length).toBeGreaterThan(0)
    expect(value).toEqual("")
  })

  it("handleChangeNewTagName を実行すると、最終行に value が空文字", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    act(() => {
      const [{ id }] = result.current.newTagNames
      const event = {
        currentTarget: { value: "test1" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    expect(result.current.newTagNames[0].value).toEqual("test1")

    act(() => {
      const [, { id }] = result.current.newTagNames
      const event = {
        currentTarget: { value: "test2" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    expect(result.current.newTagNames.length).toEqual(3)
    expect(typeof result.current.newTagNames[1].id).toEqual("string")
    expect(result.current.newTagNames[1].value).toEqual("test2")

    act(() => {
      const [{ id }] = result.current.newTagNames
      const event = {
        currentTarget: { value: "" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    act(() => {
      const [, { id }] = result.current.newTagNames
      const event = {
        currentTarget: { value: "" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    result.current.newTagNames.forEach((newTagName, index) => {
      const { id, value } = newTagName
      if (index === result.current.newTagNames.length - 1) {
        expect(typeof id).toEqual("string")
        expect(typeof value).toEqual("string")
        expect(value).toEqual("")
      } else {
        expect(typeof id).toEqual("string")
        expect(typeof value).toEqual("string")
        expect(value.length).toBeGreaterThan(1)
      }
    })
  })

  it("handleResetNewTagName を実行すると、 newTagNames が初期値に戻る", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    const [{ id }] = result.current.newTagNames
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    act(() => result.current.handleResetNewTagNames())
    expect(result.current.newTagNames.length).toEqual(1)
    const [{ value }] = result.current.newTagNames
    expect(value).toEqual("")
  })

  it("handleAddTags を実行すると、 handleAddTagsMain, handleHideAdditionModal が実行され、 newTagNames が初期化される", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    act(() => result.current.handleAddTags())
    expect(props.handleAddTagsMain.mock.calls.length).toEqual(1)
    expect(props.handleHideAdditionModal.mock.calls.length).toEqual(1)
    expect(typeof result.current.newTagNames[0].id).toEqual("string")
    expect(result.current.newTagNames[0].value).toEqual("")
  })
})
