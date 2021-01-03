// import node_modules
import { useState, useEffect, ChangeEventHandler } from "react"
import { ValueType, OptionsType } from "react-select"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"
import { filterBySelected } from "./modules/filterBySelected"
import { filterByText } from "./modules/filterByText"

// main
export const useTagList: UseTagList = (props) => {
  const {
    tags: originTags,
    isLoaded,
    handleGetTags,
    handleUpdateTagsMain,
  } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))
  const [filterText, setFilterText] = useState("")

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

  const filterBySelectedMain = filterBySelected(selectedOptions)
  const filterByTextMain = filterByText(filterText)
  const displayTags = tags.filter(filterBySelectedMain).filter(filterByTextMain)

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

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setFilterText(event.currentTarget.value)
  }

  return {
    tags,
    displayTags,
    selectedTags,
    selectOptions,
    selectedOptions,
    filterText,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
    handleSelectOptions,
    handleChangeFilterText,
  }
}
