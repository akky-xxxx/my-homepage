// import node_modules
import { ChangeEvent } from "react"
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useAdditionalModal } from "./index"

// main
const props = {
  /* eslint-disable no-console */
  handleAddTagsMain: () => console.log("handleAddTagsMain"),
  handleHideAdditionModal: () => console.log("handleHideAdditionModal"),
  /* eslint-enable no-console */
}
describe("useAdditionalModal", () => {
  it("newTagNames の初期値 の value は空文字, id は文字列", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    const [{ id, value }] = result.current.newTagNames
    expect(id.length).toBeGreaterThan(0)
    expect(value).toEqual("")
  })

  it("handleChangeNewTagName を実行すると、該当する newTagNames.value が変わる", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    const [{ id }] = result.current.newTagNames
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(id)(event)
    })
    const [{ value }] = result.current.newTagNames
    expect(value).toEqual("test")
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
})
