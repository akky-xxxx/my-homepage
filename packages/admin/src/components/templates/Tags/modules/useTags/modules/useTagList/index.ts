// import node_modules
import { useState, useEffect } from "react"

// import others
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"

// main
export const useTagList: UseTagList = (props) => {
  const {
    tags: originTags,
    isLoaded,
    handleGetTags,
    handleUpdateTagsMain,
  } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const selectedTags = tags.filter(returnIsSelect)
  const selectOptions = tags.map(({ tagId: value, tagName: label }) => ({
    value,
    label,
  }))
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
    const targetTag = tags.find((tag) => tag.tagId === tagId)
    if (!targetTag) return
    handleUpdateTagsMain([
      {
        ...targetTag,
        isRelease: !targetTag.isRelease,
      },
    ])
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
    selectOptions,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
