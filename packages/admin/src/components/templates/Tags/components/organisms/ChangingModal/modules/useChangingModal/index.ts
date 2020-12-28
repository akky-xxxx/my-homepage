// import node_modules
import { useState, useEffect } from "react"

// import others
import {
  UseChangingModal,
  HandleChangeTagName,
  HandleChangeRelease,
} from "./types"

// main
export const useChangingModal: UseChangingModal = (useChangingModalArgs) => {
  const { originTags } = useChangingModalArgs
  const [selectedTags, setStateTags] = useState(originTags)

  useEffect(() => {
    setStateTags(originTags)
  }, [originTags])

  const isReleaseAll = selectedTags.every(({ isRelease }) => isRelease)
  const handleChangeTagName: HandleChangeTagName = (tagId) => (event) => {
    const {
      currentTarget: { value },
    } = event
    setStateTags(
      selectedTags.map((stateTag) => {
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
      selectedTags.map((stateTag) => {
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
      selectedTags.map((stateTag) => ({
        ...stateTag,
        isRelease: !isReleaseAll,
      })),
    )
  }

  return {
    selectedTags,
    isReleaseAll,
    handleChangeTagName,
    handleChangeRelease,
    handleChangeReleaseAll,
  }
}
