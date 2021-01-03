// import node_modules
import { useState, useEffect } from "react"
import { ValueType, OptionsType } from "react-select"

// import others
import { SelectOption } from "@@/shared/types/lib"
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
  const [
    selectedOptions,
    setSelectedOptions,
  ] = useState<OptionsType<SelectOption> | null>(null)

  const displayTags = tags.filter((tag) => {
    if (!selectedOptions) return true
    return selectedOptions.find(
      (selectedOption) => selectedOption.value === tag.tagId,
    )
  })

  useEffect(() => {
    setTags(originTags.map(addIsSelect))
    setSelectedOptions(null)
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

  const handleSelectOptions = (values: ValueType<SelectOption, true>) => {
    if (values === undefined) return
    setSelectedOptions(values)
  }

  return {
    tags,
    displayTags,
    selectedTags,
    selectOptions,
    selectedOptions,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
    handleSelectOptions,
  }
}
