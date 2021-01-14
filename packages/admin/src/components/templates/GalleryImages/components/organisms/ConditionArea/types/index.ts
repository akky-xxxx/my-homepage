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
  updatedAtStart: StringDate | null
  updatedAtEnd: StringDate | null
  createdAtStart: StringDate | null
  createdAtEnd: StringDate | null
  handleSelectPhotographAtStart: (date: Date | null) => void
  handleSelectPhotographAtEnd: (date: Date | null) => void
  handleSelectCreatedAtStart: (date: Date | null) => void
  handleSelectCreatedAtEnd: (date: Date | null) => void
  handleSelectUpdatedAtStart: (date: Date | null) => void
  handleSelectUpdatedAtEnd: (date: Date | null) => void
  handleSelectPrefecture: (prefecture: ValueType<SelectOption, false>) => void
  handleSelectTags: (tags: ValueType<SelectOption, true>) => void
  handleResetConditions: EmptyFunction
}
