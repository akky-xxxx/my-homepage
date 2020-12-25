// import node_modules
import { useState } from "react"

// import others
import { TagsTableHeaderProps } from "../../components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "../../components/molecules/TagsTableRecord/types"
import { TagsProps } from "../../types"
import { addIsSelect } from "./modules/addIsSelect"

// main
export type HandleClickSelect = (tagId: string) => void
export type HandleClickRelease = (tagId: string) => void
type UseTagsReturn = TagsTableHeaderProps & {
  tags: TagsTableRecordStates[]
  handleClickSelect: HandleClickSelect
  handleClickRelease: HandleClickRelease
}
type UseTags = (props: TagsProps) => UseTagsReturn

export const useTags: UseTags = (props) => {
  const { tags: originTags } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const isSelectAll = tags.every(({ isSelect }) => isSelect)

  const handleClickSelect = (tagId: string) => {
    setTags(
      tags.map((tagState) => {
        if (tagState.tagId !== tagId) return tagState
        return {
          ...tagState,
          isSelect: !tagState.isSelect,
        }
      }),
    )
  }

  const handleClickRelease = (tagId: string) => {
    // TODO: api 叩く処理に変える
    setTags(
      tags.map((tagState) => {
        if (tagState.tagId !== tagId) return tagState
        return {
          ...tagState,
          isRelease: !tagState.isRelease,
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

  return {
    tags,
    isSelectAll,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
