// import node_modules
import { useState } from "react"

// import others
import { UseTags } from "./types"
import { useTagList } from "./modules/useTagList"

// main
export const useTags: UseTags = (props) => {
  const {
    tags,
    isSelectAll,
    handleClickSelect,
    handleClickRelease,
    handleClickSelectAll,
  } = useTagList(props)
  const [isShowAddModal, setShowAddModal] = useState(false)

  const handleShowAddModal = () => setShowAddModal(true)
  const handleHideAddModal = () => setShowAddModal(false)

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
