// import node_modules
import { useState } from "react"

// import others
import { TagsTableHeaderProps } from "../../components/molecules/TagsTableHeader/types"
import { TagsTableRecordProps } from "../../components/molecules/TagsTableRecord/types"
import { TagsProps } from "../../types"

// main
type UseTagsReturn = TagsTableHeaderProps & {
  tags: TagsTableRecordProps[]
}
type UseTags = (props: TagsProps) => UseTagsReturn

export const useTags: UseTags = (props) => {
  const { tags: originTags } = props
  const [tagsState, setTags] = useState(originTags)

  const tags = tagsState.map((tag) => ({
    ...tag,
    isSelected: false,
    handleClickSelect: () => handleClickSelect(tag.id),
    handleClickRelease: () => handleClickRelease(tag.id),
  }))

  const isSelectAll = tags.every(({ isSelected }) => isSelected)

  const handleClickSelect = (tagId: string) => {
    setTags(
      tags.map((tagState) => {
        if (tagState.id !== tagId) return tagState
        return {
          ...tagState,
          isSelected: !tagState.isSelected,
        }
      }),
    )
  }

  const handleClickRelease = (tagId: string) => {
    // TODO: api 叩く処理に変える
    setTags(
      tags.map((tagState) => {
        if (tagState.id !== tagId) return tagState
        return {
          ...tagState,
          isReleased: !tagState.isReleased,
        }
      }),
    )
  }

  const handleClickSelectAll = () =>
    setTags(
      tags.map((tag) => ({
        ...tag,
        isSelected: !isSelectAll,
      })),
    )

  return {
    tags,
    isSelectAll,
    handleClickSelectAll,
  }
}
