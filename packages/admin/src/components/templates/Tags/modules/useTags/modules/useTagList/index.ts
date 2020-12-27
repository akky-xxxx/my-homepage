// import node_modules
import { useState } from "react"

// import others
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"

// main
export const useTagList: UseTagList = (props) => {
  const { tags: originTags } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const isSelectAll = tags.every(({ isSelect }) => isSelect)
  const isSelectSome = tags.some(({ isSelect }) => isSelect)

  const handleClickSelect = (tagId: string) => {
    setTags(
      tags.map((tag) => {
        if (tag.tagId !== tagId) return tag
        return {
          ...tag,
          isSelect: !tag.isSelect,
        }
      }),
    )
  }

  const handleClickRelease = (tagId: string) => {
    // TODO: api 叩く処理に変える
    setTags(
      tags.map((tag) => {
        if (tag.tagId !== tagId) return tag
        return {
          ...tag,
          isRelease: !tag.isRelease,
        }
      }),
    )
  }

  const handleClickSelectAll = () =>
    setTags(
      tags.map((tag) => ({
        ...tag,
        isSelect: !isSelectAll,
      })),
    )

  return {
    tags,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
