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
  it("newTagName の初期値は空文字", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    expect(result.current.newTagName).toEqual("")
  })

  it("handleChangeNewTagName を実行すると、該当する newTagName が変わる", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(event)
    })
    expect(result.current.newTagName).toEqual("test")
  })

  it("handleResetNewTagName を実行すると、 newTagName が初期値に戻る", () => {
    const { result } = renderHook(() => useAdditionalModal(props))
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(event)
    })
    expect(result.current.newTagName).toEqual("test")
    act(() => result.current.handleResetNewTagName())
    expect(result.current.newTagName).toEqual("")
  })
})
