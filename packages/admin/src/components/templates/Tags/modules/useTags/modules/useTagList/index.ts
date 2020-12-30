// import node_modules
import { useState, useEffect } from "react"

// import others
import { UseTagList } from "./types"
import { addIsSelect } from "./modules/addIsSelect"
import { returnIsSelect } from "./modules/returnIsSelect"

// main
export const useTagList: UseTagList = (props) => {
  const { tags: originTags, isLoaded } = props
  const [tags, setTags] = useState(originTags.map(addIsSelect))

  const selectedTags = tags.filter(returnIsSelect)
  const isSelectAll = tags.every(returnIsSelect)
  const isSelectSome = tags.some(returnIsSelect)

  useEffect(() => {
    setTags(originTags.map(addIsSelect))
  }, [originTags])

  useEffect(() => {
    if (isLoaded) {
      // TODO: タグ一覧を更新
      // eslint-disable-next-line no-console
      console.log("一覧更新タイミングのはず")
    }
  }, [isLoaded])

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

  return {
    tags,
    selectedTags,
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    handleClickSelect,
    handleClickRelease,
  }
}
