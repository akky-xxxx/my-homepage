// import node_modules
import { renderHook, act } from "@testing-library/react-hooks"

// import others
import { useGalleryImage } from "./index"

// main
const props = {
  imageId: "imageId",
  handleClickPrimary: jest.fn(),
  handleClickRemove: jest.fn(),
  handleClickRelease: jest.fn(),
}

describe("useGalleryImage", () => {
  it("handleClickPrimary を実行する際、引数に props.imageId が渡される", () => {
    const { result } = renderHook(() => useGalleryImage(props))
    act(() => result.current.handleClickPrimary())
    expect(props.handleClickPrimary.mock.calls[0][0]).toEqual("imageId")
  })

  it("handleClickRemove を実行する際、引数に props.imageId が渡される", () => {
    const { result } = renderHook(() => useGalleryImage(props))
    act(() => result.current.handleClickRemove())
    expect(props.handleClickRemove.mock.calls[0][0]).toEqual("imageId")
  })

  it("handleClickRelease を実行する際、引数に props.imageId が渡される", () => {
    const { result } = renderHook(() => useGalleryImage(props))
    act(() => result.current.handleClickRelease())
    expect(props.handleClickRemove.mock.calls[0][0]).toEqual("imageId")
  })
})
