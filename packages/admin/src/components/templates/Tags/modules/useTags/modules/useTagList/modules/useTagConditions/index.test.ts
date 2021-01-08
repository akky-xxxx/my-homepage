// import node_modules
import { renderHook } from "@testing-library/react-hooks"

// import others
import { useTagConditions } from "./index"

// main
const props = {
  isLoaded: false,
  /* eslint-disable no-console */
  handleGetTags: () => console.log("handleGetTags"),
  /* eslint-enable no-console */
}

describe("useTagConditions", () => {
  it("selectedOptions の初期値は null", () => {
    const { result } = renderHook(() => useTagConditions(props))
    expect(result.current.selectedOptions).toEqual(null)
  })

  it("filterText の初期値は空文字", () => {
    const { result } = renderHook(() => useTagConditions(props))
    expect(result.current.filterText).toEqual("")
  })
})
