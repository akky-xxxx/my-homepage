// import node_modules
import { useState } from "react"

// import others
import { UseTags } from "./types"
import { addIsSelect } from "./modules/addIsSelect"

// main
export const useTags: UseTags = (props) => {
  const { tags: originTags } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))
  const [isShowAddModal, setShowAddModal] = useState(false)

  const isSelectAll = tags.every(({ isSelect }) => isSelect)

  const handleClickSelect = (tagId: string) => {
    setTags(
      tags.map((tag) => {
        if (tag.tagId !== tagId) return tag
        return {
          ...tag,
          isSelect: !tag.isSelect,
        }
      }),
    )
  }

  const handleClickRelease = (tagId: string) => {
    // TODO: api 叩く処理に変える
    setTags(
      tags.map((tag) => {
        if (tag.tagId !== tagId) return tag
        return {
          ...tag,
          isRelease: !tag.isRelease,
        }
      }),
    )
  }

  const handleClickSelectAll = () =>
    setTags(
      tags.map((tag) => ({
        ...tag,
        isSelect: !isSelectAll,
      })),
    )

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
