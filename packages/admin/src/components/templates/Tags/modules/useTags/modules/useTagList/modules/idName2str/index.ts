// import
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
type IdName2str = (tag: TagsTableRecordStates) => string
export const idName2str: IdName2str = ({ tagId, tagName }) =>
  `${tagId}--${tagName}`
