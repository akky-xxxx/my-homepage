// import node_modules
import { useState, useCallback } from "react"
import { OptionsType, ValueType } from "react-select"
import { useRangePicker } from "shared-items/dist/client"
import { createNullArray } from "shared-items"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { ReleaseStatuses } from "@@/components/templates/GalleryImages/const"
import { UseImages, UseImagesReturn } from "./types"
import { combine2image } from "./modules/combine2image"
import { filterByReleaseStatus } from "./modules/filterByReleaseStatus"
import { filterByPrefecture } from "./modules/filterByPrefecture"
import { filterByTags } from "./modules/filterByTags"
import { filterByDate } from "./modules/filterByDate"

// main
export const useImages: UseImages = (props) => {
  const { prefectures, tags, images: _images } = props
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

  const combine2imageMain = combine2image({ prefectures, tags })
  const filterByReleaseStatusMain = filterByReleaseStatus(selectedReleaseStatus)
  const filterByPrefectureMain = filterByPrefecture(selectedPrefecture)
  const filterByTagsMain = filterByTags(selectedTags)
  const filterByPhotographAt = filterByDate({
    start: photographAtStart,
    end: photographAtEnd,
    targetType: "photographAt",
  })
  const filterByCreatedAt = filterByDate({
    start: createdAtStart,
    end: createdAtEnd,
    targetType: "createdAt",
  })
  const filterByUpdatedAt = filterByDate({
    start: updatedAtStart,
    end: updatedAtEnd,
    targetType: "updatedAt",
  })

  const images = _images
    .map(combine2imageMain)
    .filter(filterByReleaseStatusMain)
    .filter(filterByPrefectureMain)
    .filter(filterByTagsMain)
    .filter(filterByPhotographAt)
    .filter(filterByCreatedAt)
    .filter(filterByUpdatedAt)

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

  const returnValue: UseImagesReturn = {
    images,
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

  return returnValue
}
