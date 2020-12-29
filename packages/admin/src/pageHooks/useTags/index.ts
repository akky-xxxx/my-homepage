// import node_modules
import { useDispatch } from "react-redux"

// import others
import { useSelector, actions } from "@@/store"
import { tagsSelector as serverTagsSelector } from "@@/selectors/server/pages/tags/tagsSelector"
import { tagsSelector as clientTagsSelector } from "@@/selectors/client/pages/tags"
import { TagsProps } from "@@/components/templates/Tags/types"
import { HandleUpdateTagsMain } from "@@/components/templates/Tags/components/organisms/ChangingModal/modules/useChangingModal/types"

// main
const {
  client: {
    pages: {
      tags: { updateTags },
    },
  },
} = actions

type UseTags = () => TagsProps
export const useTags: UseTags = () => {
  const state = {
    ...useSelector(serverTagsSelector),
    ...useSelector(clientTagsSelector),
  }
  const dispatch = useDispatch()
  const handleUpdateTagsMain: HandleUpdateTagsMain = (tags) =>
    dispatch(updateTags({ tags }))

  return { ...state, handleUpdateTagsMain }
}
