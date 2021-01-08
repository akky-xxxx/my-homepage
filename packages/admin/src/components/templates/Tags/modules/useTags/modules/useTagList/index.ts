// import node_modules
import { useState, useEffect, ChangeEventHandler } from "react"
import { ValueType } from "react-select"
import { omit } from "remeda"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"
import { filterBySelected } from "./modules/filterBySelected"
import { filterByText } from "./modules/filterByText"
import { usePagination } from "./modules/usePagination"
import { useTagConditions } from "./modules/useTagConditions"

// main
const PAGE_NUMBER = 10

export const useTagList: UseTagList = (props) => {
  const {
    tags: originTags,
    isLoaded,
    handleGetTags,
    handleUpdateTagsMain,
  } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))
  const [currentPage, handleClickPagination] = usePagination()
  const useTagConditionsResult = useTagConditions(props)
  const {
    selectedOptions,
    filterText,
    setSelectedOptions,
    setFilterText,
  } = useTagConditionsResult

  const selectedTags = tags.filter(returnIsSelect)
  const selectOptions = tags.map(({ tagId: value, tagName: label }) => ({
    value,
    label,
  }))
  const isSelectAll = tags.every(returnIsSelect)
  const isSelectSome = tags.some(returnIsSelect)

  const filterBySelectedMain = filterBySelected(selectedOptions)
  const filterByTextMain = filterByText(filterText)
  const displayTagsBase = tags
    .filter(filterBySelectedMain)
    .filter(filterByTextMain)
  const maxPages = Math.ceil(displayTagsBase.length / PAGE_NUMBER)
  const slicePosition: [number, number] = [
    (currentPage - 1) * PAGE_NUMBER,
    currentPage * PAGE_NUMBER,
  ]
  const displayTags = [...displayTagsBase].slice(...slicePosition)

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
    handleClickPagination(1)
    setSelectedOptions(values)
  }

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    handleClickPagination(1)
    setFilterText(event.currentTarget.value)
  }

  const returnValue: ReturnType<UseTagList> = {
    tags,
    displayTags,
    selectedTags,
    selectOptions,
    maxPages,
    currentPage,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
    handleSelectOptions,
    handleChangeFilterText,
    handleClickPagination,
    ...omit(useTagConditionsResult, ["setFilterText", "setSelectedOptions"]),
  }

  return returnValue
}
