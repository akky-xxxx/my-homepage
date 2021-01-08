// import node_modules
import { useState, useEffect } from "react"
import { OptionsType } from "react-select"
import { useRangePicker } from "shared-items/dist/client"

// import others
import { SelectOption } from "@@/shared/types/lib"
import { UseTagConditions } from "./types"

// main
export const useTagConditions: UseTagConditions = (props) => {
  const { isLoaded, handleGetTags } = props
  const [filterText, setFilterText] = useState("")
  const [
    [createStartDate, handleChangeCreateStartDate],
    [createEndDate, handleChangeCreateEndDate],
  ] = useRangePicker()
  const [
    [updateStartDate, handleChangeUpdateStartDate],
    [updateEndDate, handleChangeUpdateEndDate],
  ] = useRangePicker()

  const [
    selectedOptions,
    setSelectedOptions,
  ] = useState<OptionsType<SelectOption> | null>(null)

  useEffect(() => {
    if (isLoaded) {
      handleGetTags()
    }
  }, [isLoaded])

  const returnValue: ReturnType<UseTagConditions> = {
    selectedOptions,
    filterText,
    createStartDate,
    createEndDate,
    updateStartDate,
    updateEndDate,
    handleChangeCreateStartDate,
    handleChangeCreateEndDate,
    handleChangeUpdateStartDate,
    handleChangeUpdateEndDate,
    setFilterText,
    setSelectedOptions,
  }

  return returnValue
}
