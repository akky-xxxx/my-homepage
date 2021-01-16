// import node_modules
import { useMemo } from "react"

// import
import { stringDatetime2stringDate } from "@@/shared/utils/stringDatetime2stringDate"
import { UseTags } from "./types"
import { useTagList } from "./modules/useTagList"
import { useAdditionModal } from "./modules/useAdditionModal"
import { useChangingModal } from "./modules/useChangingModal"
import { useDeletingModal } from "./modules/useDeletingModal"

// main
export const useTags: UseTags = (props) => {
  const useTagListResult = useTagList(props)
  const useAdditionModalResult = useAdditionModal()
  const useChangingModalResult = useChangingModal()
  const useDeletingModalResult = useDeletingModal()
  const accentCreatedDates = useMemo(
    () =>
      props.tags
        .map(({ createdAt }) => createdAt)
        .map(stringDatetime2stringDate),
    [...props.tags],
  )
  const accentUpdatedDates = useMemo(
    () =>
      props.tags
        .map(({ updatedAt }) => updatedAt)
        .map(stringDatetime2stringDate),
    [...props.tags],
  )

  return {
    ...useTagListResult,
    ...useAdditionModalResult,
    ...useChangingModalResult,
    ...useDeletingModalResult,
    accentCreatedDates,
    accentUpdatedDates,
  }
}
