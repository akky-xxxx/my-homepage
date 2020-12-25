// import node_modules
import { useState } from "react"

// import others
import { UseTags } from "./types"
import { addIsSelect } from "./modules/addIsSelect"

// main
export const useTags: UseTags = (props) => {
  const { tags: originTags } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const isSelectAll = tags.every(({ isSelect }) => isSelect)

  const handleClickSelect = (tagId: string) => {
    setTags(
      tags.map((tagState) => {
        if (tagState.tagId !== tagId) return tagState
        return {
          ...tagState,
          isSelect: !tagState.isSelect,
        }
      }),
    )
  }

  const handleClickRelease = (tagId: string) => {
    // TODO: api 叩く処理に変える
    setTags(
      tags.map((tagState) => {
        if (tagState.tagId !== tagId) return tagState
        return {
          ...tagState,
          isRelease: !tagState.isRelease,
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
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
