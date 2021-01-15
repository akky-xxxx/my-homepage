// import node_modules
import { EmptyFunction, StringDate } from "shared-items"
import { OptionsType, ValueType } from "react-select"

// import others
import { SelectOption } from "@@/shared/types/lib"

// main
type SelectOptions = Record<"prefectures" | "tags", SelectOption[]>

type RangeValues = Record<
  | "photographAtStart"
  | "photographAtEnd"
  | "updatedAtStart"
  | "updatedAtEnd"
  | "createdAtStart"
  | "createdAtEnd",
  Date | null
>

type RangeHandlers = Record<
  | "handleSelectPhotographAtStart"
  | "handleSelectPhotographAtEnd"
  | "handleSelectCreatedAtStart"
  | "handleSelectCreatedAtEnd"
  | "handleSelectUpdatedAtStart"
  | "handleSelectUpdatedAtEnd",
  (date: Date | null) => void
>

type AccentDates = Record<
  | "accentDatesOfPhotographAt"
  | "accentDatesOfCreatedAt"
  | "accentDatesOfUpdatedAt",
  StringDate[]
>

export type ConditionAreaProps = {
  selectedPrefecture: SelectOption | null
  selectedTags: OptionsType<SelectOption> | null
  handleSelectPrefecture: (prefecture: ValueType<SelectOption, false>) => void
  handleSelectTags: (tags: ValueType<SelectOption, true>) => void
  handleResetConditions: EmptyFunction
} & SelectOptions &
  AccentDates &
  RangeValues &
  RangeHandlers
