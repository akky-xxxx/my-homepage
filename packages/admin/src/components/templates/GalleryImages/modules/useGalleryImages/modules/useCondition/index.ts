// import node_modules
import { useState, useCallback } from "react"
import { OptionsType, ValueType } from "react-select"
import { useRangePicker } from "shared-items/dist/client"
import { createNullArray } from "shared-items"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { ReleaseStatuses } from "@@/components/templates/GalleryImages/const"
import { UseCondition } from "./types"

// main
export const useCondition: UseCondition = (props) => {
  const { prefectures, tags } = props
  const [
    selectedReleaseStatus,
    setSelectedReleaseStatus,
  ] = useState<SelectOption | null>(null)
  const [
    selectedPrefecture,
    setSelectedPrefecture,
  ] = useState<SelectOption | null>(null)
  const [
    selectedTags,
    setSelectedTags,
  ] = useState<OptionsType<SelectOption> | null>(null)
  const [
    [
      [photographAtStart, handleSelectPhotographAtStart],
      [photographAtEnd, handleSelectPhotographAtEnd],
    ],
    [
      [createdAtStart, handleSelectCreatedAtStart],
      [createdAtEnd, handleSelectCreatedAtEnd],
    ],
    [
      [updatedAtStart, handleSelectUpdatedAtStart],
      [updatedAtEnd, handleSelectUpdatedAtEnd],
    ],
  ] = createNullArray(3).map(useRangePicker)

  const handleSelectReleaseStatus = useCallback(
    (releaseStatus: ValueType<SelectOption, false>) => {
      if (releaseStatus === undefined || releaseStatus === null) {
        setSelectedReleaseStatus(null)
        return
      }

      const targetReleaseStatus =
        ReleaseStatuses.find((pref) => pref.value === releaseStatus.value) ||
        null
      setSelectedReleaseStatus(targetReleaseStatus)
    },
    [...prefectures],
  )

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
    if (selectedTags?.length) setSelectedTags([])
    handleSelectPhotographAtStart(null)
    handleSelectPhotographAtEnd(null)
    handleSelectCreatedAtStart(null)
    handleSelectCreatedAtEnd(null)
    handleSelectUpdatedAtStart(null)
    handleSelectUpdatedAtEnd(null)
  }, [selectedTags])

  return {
    selectedReleaseStatus,
    selectedPrefecture,
    selectedTags,
    photographAtStart,
    photographAtEnd,
    createdAtStart,
    createdAtEnd,
    updatedAtStart,
    updatedAtEnd,
    handleSelectReleaseStatus,
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
