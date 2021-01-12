// import node_modules
import { EmptyFunction, StringDate } from "shared-items"
import { ValueType } from "react-select"

// import others
import { SelectOption } from "@@/shared/types/lib"

// main
export type ConditionAreaProps = {
  prefectures: SelectOption[]
  selectedPrefecture: SelectOption | null
  accentDates: StringDate[]
  tags: SelectOption[]
  selectedTags: SelectOption[]
  photographAtStart: StringDate | null
  photographAtEnd: StringDate | null
  handleSelectPhotographAtStart: (date: Date | null) => void
  handleSelectPhotographAtEnd: (date: Date | null) => void
  handleSelectPrefecture: (prefecture: ValueType<SelectOption, false>) => void
  handleSelectTags: (tags: ValueType<SelectOption, true>) => void
  handleResetConditions: EmptyFunction
}
