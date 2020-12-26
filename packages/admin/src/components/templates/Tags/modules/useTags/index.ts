// import
import { UseTags } from "./types"
import { useTagList } from "./modules/useTagList"
import { useAddModal } from "./modules/useAddModal"

// main
export const useTags: UseTags = (props) => {
  const {
    tags,
    isSelectAll,
    handleClickSelect,
    handleClickRelease,
    handleClickSelectAll,
  } = useTagList(props)
  const {
    isShowAddModal,
    handleShowAddModal,
    handleHideAddModal,
  } = useAddModal()

  return {
    tags,
    isSelectAll,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
    isShowAddModal,
    handleShowAddModal,
    handleHideAddModal,
  }
}
