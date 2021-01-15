// import node_modules
import { useState, useCallback } from "react"
import { OptionsType, ValueType } from "react-select"
import { useRangePicker } from "shared-items/dist/client"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { UseCondition } from "./types"

// main
export const useCondition: UseCondition = (props) => {
  const { prefectures, tags } = props
  const [
    selectedPrefecture,
    setSelectedPrefecture,
  ] = useState<SelectOption | null>(null)
  const [
    selectedTags,
    setSelectedTags,
  ] = useState<OptionsType<SelectOption> | null>(null)
  const [
    [photographAtStart, handleSelectPhotographAtStart],
    [photographAtEnd, handleSelectPhotographAtEnd],
  ] = useRangePicker()
  const [
    [createdAtStart, handleSelectCreatedAtStart],
    [createdAtEnd, handleSelectCreatedAtEnd],
  ] = useRangePicker()
  const [
    [updatedAtStart, handleSelectUpdatedAtStart],
    [updatedAtEnd, handleSelectUpdatedAtEnd],
  ] = useRangePicker()

  const handleSelectPrefecture = useCallback(
    (prefecture: ValueType<SelectOption, false>) => {
      if (prefecture === undefined || prefecture === null) {
        setSelectedPrefecture(null)
        return
      }

      const targetPrefecture =
        prefectures.find((pref) => pref.value === prefecture.value) || null
      setSelectedPrefecture(targetPrefecture)
    },
    [...prefectures],
  )

  const handleSelectTags = useCallback(
    (thisTags: ValueType<SelectOption, true>) => {
      setSelectedTags(thisTags ?? null)
    },
    [...tags],
  )

  const handleResetConditions = useCallback(() => {
    setSelectedPrefecture(null)
    setSelectedTags([])
  }, [])

  return {
    selectedPrefecture,
    accentDatesOfPhotographAt: [],
    accentDatesOfCreatedAt: [],
    accentDatesOfUpdatedAt: [],
    selectedTags,
    photographAtStart,
    photographAtEnd,
    createdAtStart,
    createdAtEnd,
    updatedAtStart,
    updatedAtEnd,
    handleSelectPhotographAtStart,
    handleSelectPhotographAtEnd,
    handleSelectCreatedAtStart,
    handleSelectCreatedAtEnd,
    handleSelectUpdatedAtStart,
    handleSelectUpdatedAtEnd,
    handleSelectPrefecture,
    handleSelectTags,
    handleResetConditions,
  }
}
