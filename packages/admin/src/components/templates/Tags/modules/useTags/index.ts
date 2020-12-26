// import
import { UseTags } from "./types"
import { useTagList } from "./modules/useTagList"
import { useAdditionModal } from "./modules/useAdditionModal"
import { useChangingModal } from "./modules/useChangingModal"

// main
export const useTags: UseTags = (props) => {
  const useTagListResult = useTagList(props)
  const useAdditionModalResult = useAdditionModal()
  const useChangingModalResult = useChangingModal()

  return {
    ...useTagListResult,
    ...useAdditionModalResult,
    ...useChangingModalResult,
  }
}
