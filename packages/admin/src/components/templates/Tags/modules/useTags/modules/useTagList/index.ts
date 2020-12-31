// import node_modules
import { useState, useEffect } from "react"

// import others
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"

// main
export const useTagList: UseTagList = (props) => {
  const { tags: originTags, isLoaded, handleGetTags } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const selectedTags = tags.filter(returnIsSelect)
  const isSelectAll = tags.every(returnIsSelect)
  const isSelectSome = tags.some(returnIsSelect)

  useEffect(() => {
    setTags(originTags.map(addIsSelect))
  }, [originTags])

  useEffect(() => {
    if (isLoaded) {
      handleGetTags()
    }
  }, [isLoaded])

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
    selectedTags,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
