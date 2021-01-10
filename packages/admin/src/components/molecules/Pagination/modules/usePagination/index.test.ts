// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { usePagination } from "./index"

// main
type Props = Parameters<typeof usePagination>[0]
const handleClickPagination = jest.fn()

describe("usePagination", () => {
  describe("enablePrev", () => {
    it("currentPage > 1 の時、 true になる", () => {
      const props: Props = {
        maxPages: 0,
        currentPage: 2,
        handleClickPagination,
      }
      const { result } = renderHook(() => usePagination(props))
      expect(result.current.enablePrev).toEqual(true)
    })

    it("currentPage <= 1 の時、 false になる", () => {
      const props: Props = {
        maxPages: 0,
        currentPage: 1,
        handleClickPagination,
      }
      const { result } = renderHook(() => usePagination(props))
      expect(result.current.enablePrev).toEqual(false)
    })
  })

  describe("enableNext", () => {
    it("currentPage < maxPages の時、 true になる", () => {
      const props: Props = {
        maxPages: 3,
        currentPage: 2,
        handleClickPagination,
      }
      const { result } = renderHook(() => usePagination(props))
      expect(result.current.enableNext).toEqual(true)
    })

    it("currentPage >= maxPages の時、 false になる", () => {
      const props: Props = {
        maxPages: 0,
        currentPage: 0,
        handleClickPagination,
      }
      const { result } = renderHook(() => usePagination(props))
      expect(result.current.enableNext).toEqual(false)
    })
  })

  describe("handlers", () => {
    const props: Props = {
      maxPages: 10,
      currentPage: 5,
      handleClickPagination,
    }

    it.each([
      ["handleClickFirst", "1", 1, 0],
      ["handleClickPrev", "currentPage - 1", 4, 1],
      ["handleClickNext", "currentPage + 1", 6, 2],
      ["handleClickLast", "maxPage", 10, 3],
    ] as const)("%s の引数は %s", (method, _, output, index) => {
      const { result } = renderHook(() => usePagination(props))
      expect(typeof result.current[method]).toEqual("function")
      act(() => result.current[method]())
      expect(handleClickPagination.mock.calls[index][0]).toEqual(output)
    })
  })

  describe("items", () => {
    it.each([
      [1, 1, [1]],
      [2, 1, [1, 2]],
      [2, 2, [1, 2]],
      [10, 1, [1, 2, 3, 4, 5]],
      [10, 2, [1, 2, 3, 4, 5]],
      [10, 5, [3, 4, 5, 6, 7]],
      [10, 9, [6, 7, 8, 9, 10]],
      [10, 10, [6, 7, 8, 9, 10]],
    ] as const)(
      "maxPage が %s, currentPage が %s の時、 items は %s",
      (maxPages, currentPage, expectItems) => {
        const props = { maxPages, currentPage, handleClickPagination }
        const { result } = renderHook(() => usePagination(props))
        expect(result.current.items).toEqual(expectItems)
      },
    )
  })
})
