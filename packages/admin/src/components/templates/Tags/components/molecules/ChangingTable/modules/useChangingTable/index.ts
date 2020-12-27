// import node_modules
import { useState, useEffect } from "react"

// import others
import {
  UseChangingTable,
  HandleChangeTagName,
  HandleChangeRelease,
} from "./types"

// main
export const useChangingTable: UseChangingTable = (useChangingTableArgs) => {
  const { originTags } = useChangingTableArgs
  const [stateTags, setStateTags] = useState(originTags)

  useEffect(() => {
    setStateTags(originTags)
  }, [originTags])

  const isReleaseAll = stateTags.every(({ isRelease }) => isRelease)
  const handleChangeTagName: HandleChangeTagName = (tagId) => (event) => {
    const {
      currentTarget: { value },
    } = event
    setStateTags(
      stateTags.map((stateTag) => {
        if (stateTag.tagId !== tagId) return stateTag
        return {
          ...stateTag,
          tagName: value,
        }
      }),
    )
  }
  const handleChangeRelease: HandleChangeRelease = (tagId) => () => {
    setStateTags(
      stateTags.map((stateTag) => {
        if (stateTag.tagId !== tagId) return stateTag
        return {
          ...stateTag,
          isRelease: !stateTag.isRelease,
        }
      }),
    )
  }
  const handleChangeReleaseAll = () => {
    setStateTags(
      stateTags.map((stateTag) => ({
        ...stateTag,
        isRelease: !isReleaseAll,
      })),
    )
  }

  return {
    stateTags,
    isReleaseAll,
    handleChangeTagName,
    handleChangeRelease,
    handleChangeReleaseAll,
  }
}
