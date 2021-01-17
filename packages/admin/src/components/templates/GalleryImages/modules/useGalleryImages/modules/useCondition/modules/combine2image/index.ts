// import
import { Image, UseConditionProps } from "../../types"

// main
type AdditionProps = "prefectures" | "tags"
type Arg = Pick<UseConditionProps, AdditionProps>
type Combine2imageMainReturn = Image
type Combine2imageMain = (
  image: Omit<Image, AdditionProps>,
) => Combine2imageMainReturn
type Combine2image = (arg: Arg) => Combine2imageMain

export const combine2image: Combine2image = (arg) => {
  const { prefectures, tags } = arg
  const combine2imageMain: Combine2imageMain = (image) => ({
    ...image,
    prefectures,
    tags,
  })
  return combine2imageMain
}
