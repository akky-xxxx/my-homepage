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
  const [tagsState, setTags] = useState(originTags || [])

  const tags = tagsState.map((tag) => ({
    ...tag,
    isSelect: false,
    handleClickSelect: () => handleClickSelect(tag.tagId),
    handleClickRelease: () => handleClickRelease(tag.tagId),
  }))

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
          isReleased: !tagState.isRelease,
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
  }
}
