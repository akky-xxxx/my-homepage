// import
import { useSelector } from "@@/store"
import { tagsSelector } from "@@/selectors/server/pages/tags/tagsSelector"
import { TagsProps } from "@@/components/templates/Tags/types"

// main
type UseTags = () => TagsProps
export const useTags: UseTags = () => {
  const { tags } = useSelector(tagsSelector)

  return { tags }
}
