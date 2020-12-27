// import
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
type returnIsSelect = (args: Pick<TagsTableRecordStates, "isSelect">) => boolean

export const returnIsSelect: returnIsSelect = (args) => args.isSelect
