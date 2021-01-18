// import
import { combine2image } from "./index"
import { Image, UseImagesProps } from "../../types"

// main
type AdditionProps = "prefectures" | "tags"
type Arg = Pick<UseImagesProps, AdditionProps>
type OriginImage = Omit<Image, AdditionProps>
it("combine2image", () => {
  const arg: Arg = {
    prefectures: [],
    tags: [],
  }
  const originImage: OriginImage = {
    imageId: "imageId",
    imagePath: "imagePath",
    isRelease: true,
    selectedPrefecture: { label: "", value: "" },
    selectedTags: [],
    photographAt: null,
    createdAt: "2021-01-01 00:00:00",
    updatedAt: "2021-01-01 00:00:00",
  }
  const expectImage = {
    ...arg,
    ...originImage,
  }
  const combine2imageMain = combine2image(arg)
  expect(combine2imageMain(originImage)).toEqual(expectImage)
})
