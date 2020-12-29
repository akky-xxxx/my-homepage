// import node_modules
import { ChangeEvent } from "react"
import { act, renderHook } from "@testing-library/react-hooks"

// import others
import { useAdditionalModal } from "./index"

// main
describe("useAdditionalModal", () => {
  it("newTagName の初期値は空文字", () => {
    const { result } = renderHook(() => useAdditionalModal())
    expect(result.current.newTagName).toEqual("")
  })

  it("handleChangeNewTagName を実行すると、該当する newTagName が変わる", () => {
    const { result } = renderHook(() => useAdditionalModal())
    act(() => {
      const event = {
        currentTarget: { value: "test" },
      } as ChangeEvent<HTMLInputElement>
      return result.current.handleChangeNewTagName(event)
    })
    expect(result.current.newTagName).toEqual("test")
  })
})
