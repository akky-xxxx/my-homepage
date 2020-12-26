// import
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

  return {
    ...useTagListResult,
    ...useAdditionModalResult,
    ...useChangingModalResult,
    ...useDeletingModalResult,
  }
}
