// import node_modules
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  ChangeEventHandler,
} from "react"
import { ValueType } from "react-select"
import { omit } from "remeda"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"
import { tag2option } from "./modules/tag2option"
import { filterBySelected } from "./modules/filterBySelected"
import { filterByText } from "./modules/filterByText"
import { filterByDate } from "./modules/filterByDate"
import { useTagConditions } from "./modules/useTagConditions"
import { useTagsReducer } from "./modules/useTagsReducer"

// main
export const useTagList: UseTagList = (props) => {
  const {
    tags: originTags,
    isLoaded,
    handleGetTags,
    handleUpdateTagsMain,
  } = props
  const { tags, updateTags, toggleSelect, toggleAllSelect } = useTagsReducer({
    tags: originTags.map(addIsSelect),
  })
  const [currentPage, handleClickPagination] = useState(1)
  const [pageNumber, setPageNumber] = useState(10)
  const useTagConditionsResult = useTagConditions(props)
  const {
    selectedOptions,
    filterText,
    setSelectedOptions,
    setFilterText,
    createStartDate,
    createEndDate,
    updateStartDate,
    updateEndDate,
    handleChangeCreateStartDate,
    handleChangeCreateEndDate,
    handleChangeUpdateStartDate,
    handleChangeUpdateEndDate,
  } = useTagConditionsResult

  const idNameTags = tags.map(({ tagId, tagName }) => `${tagId}--${tagName}`) // memo 用の補助経数
  const selectedTags = tags.filter(returnIsSelect)
  const selectOptions = useMemo(() => tags.map(tag2option), [...idNameTags])
  const isSelectAll = tags.every(returnIsSelect)
  const isSelectSome = tags.some(returnIsSelect)

  const filterBySelectedMain = filterBySelected(selectedOptions)
  const filterByTextMain = filterByText(filterText)
  const filterByCreatedDate = filterByDate({
    start: createStartDate,
    end: createEndDate,
    targetType: "createdAt",
  })
  const filterByUpdatedDate = filterByDate({
    start: updateStartDate,
    end: updateEndDate,
    targetType: "updatedAt",
  })
  const displayTagsBase = tags
    .filter(filterBySelectedMain)
    .filter(filterByTextMain)
    .filter(filterByCreatedDate)
    .filter(filterByUpdatedDate)
  const maxPages = Math.ceil(displayTagsBase.length / pageNumber)
  const slicePosition: [number, number] = [
    (currentPage - 1) * pageNumber,
    currentPage * pageNumber,
  ]
  const displayTags = [...displayTagsBase].slice(...slicePosition)

  useEffect(() => {
    updateTags(originTags.map(addIsSelect))
    setSelectedOptions(null)
  }, [originTags])

  useEffect(() => {
    if (isLoaded) {
      handleGetTags()
    }
  }, [isLoaded])

  const handleChangePageNumber = useCallback((selectedValue: SelectOption) => {
    setPageNumber(Number(selectedValue.value))
  }, [])

  const handleClickSelect = useCallback((tagId: string) => {
    toggleSelect(tagId)
  }, [])

  const handleClickRelease = useCallback((tagId: string) => {
    const targetTag = tags.find((tag) => tag.tagId === tagId)
    if (!targetTag) return
    handleUpdateTagsMain([
      {
        ...targetTag,
        isRelease: !targetTag.isRelease,
      },
    ])
  }, [])

  const handleClickSelectAll = useCallback(() => toggleAllSelect(isSelectAll), [
    isSelectAll,
  ])

  const handleSelectOptions = useCallback(
    (values: ValueType<SelectOption, true>) => {
      if (values === undefined) return
      handleClickPagination(1)
      setSelectedOptions(values)
    },
    [...idNameTags],
  )

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    handleClickPagination(1)
    setFilterText(event.currentTarget.value)
  }

  const handleResetConditions = () => {
    setFilterText("")
    handleClickPagination(1)
    setSelectedOptions(null)
    handleChangeCreateStartDate(null)
    handleChangeCreateEndDate(null)
    handleChangeUpdateStartDate(null)
    handleChangeUpdateEndDate(null)
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
    handleResetConditions,
    handleChangePageNumber,
    ...omit(useTagConditionsResult, ["setFilterText", "setSelectedOptions"]),
  }

  return returnValue
}
