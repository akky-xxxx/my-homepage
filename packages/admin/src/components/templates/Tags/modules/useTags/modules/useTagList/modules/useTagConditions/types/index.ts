// import node_modules
import { NullableDate, HandleChangeRangeDate } from "shared-items/dist/client"
import { OptionsType } from "react-select"

// import others
import { TagsProps } from "@@/components/templates/Tags/types"
import { SelectOption } from "@@/shared/types/lib"

// main
type NullableDateProps =
  | "createStartDate"
  | "createEndDate"
  | "updateStartDate"
  | "updateEndDate"
type HandleChangeRangeDateProps =
  | "handleChangeCreateStartDate"
  | "handleChangeCreateEndDate"
  | "handleChangeUpdateStartDate"
  | "handleChangeUpdateEndDate"

type UseTagConditionsReturn = {
  selectedOptions: null | OptionsType<SelectOption>
  filterText: string
  setFilterText: (text: string) => void
  setSelectedOptions: (
    selectedOptions: OptionsType<SelectOption> | null,
  ) => void
} & Record<NullableDateProps, NullableDate> &
  Record<HandleChangeRangeDateProps, HandleChangeRangeDate>

type UseTagConditionsProps = Pick<TagsProps, "isLoaded" | "handleGetTags">
export type UseTagConditions = (
  props: UseTagConditionsProps,
) => UseTagConditionsReturn
