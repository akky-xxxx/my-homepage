// import node_modules
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
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
import { tagsReducer, ActionTypes } from "./modules/tagsReducer"

// main
const PAGE_NUMBER = 10
const { TOGGLE_SELECT, TOGGLE_ALL_SELECT, UPDATE_TAGS } = ActionTypes

export const useTagList: UseTagList = (props) => {
  const {
    tags: originTags,
    isLoaded,
    handleGetTags,
    handleUpdateTagsMain,
  } = props
  const [tags, tagsDispatch] = useReducer(
    tagsReducer,
    originTags.map(addIsSelect),
  )
  const [currentPage, handleClickPagination] = useState(1)
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
  const maxPages = Math.ceil(displayTagsBase.length / PAGE_NUMBER)
  const slicePosition: [number, number] = [
    (currentPage - 1) * PAGE_NUMBER,
    currentPage * PAGE_NUMBER,
  ]
  const displayTags = [...displayTagsBase].slice(...slicePosition)

  useEffect(() => {
    tagsDispatch({
      type: UPDATE_TAGS,
      payload: { newTags: originTags.map(addIsSelect) },
    })
    setSelectedOptions(null)
  }, [originTags])

  useEffect(() => {
    if (isLoaded) {
      handleGetTags()
    }
  }, [isLoaded])

  const handleClickSelect = useCallback((tagId: string) => {
    tagsDispatch({ type: TOGGLE_SELECT, payload: { tagId } })
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

  const handleClickSelectAll = useCallback(
    () => tagsDispatch({ type: TOGGLE_ALL_SELECT, payload: { isSelectAll } }),
    [isSelectAll],
  )

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
    ...omit(useTagConditionsResult, ["setFilterText", "setSelectedOptions"]),
  }

  return returnValue
}
