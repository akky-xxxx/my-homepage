// import
import { UseTags } from "./types"
import { useTagList } from "./modules/useTagList"
import { useAddModal } from "./modules/useAddModal"

// main
export const useTags: UseTags = (props) => {
  const useTagListResult = useTagList(props)
  const useAddModalResult = useAddModal()

  return {
    ...useTagListResult,
    ...useAddModalResult,
  }
}
