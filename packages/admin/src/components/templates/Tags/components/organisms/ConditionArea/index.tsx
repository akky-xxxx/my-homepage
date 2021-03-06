// import node_modules
import React, { FC, ChangeEventHandler, memo } from "react"
import styled from "styled-components"
import Select, { OptionsType, ValueType } from "react-select"
import { EmptyFunction, StringDate } from "shared-items"
import { Margin, Button } from "shared-items/dist/client"

// import components
import { Input } from "@@/components/atoms/Input"
import { SelectOption } from "@@/shared/types/lib"
import { HorizonDateRangePicker } from "@@/components/molecules/HorizonDateRangePicker"

// main
const { MARGIN10, MARGIN25 } = Margin

export type ConditionAreaProps = {
  filterText: string
  selectOptions: SelectOption[]
  selectedOptions: null | OptionsType<SelectOption>
  handleChangeFilterText: ChangeEventHandler<HTMLInputElement>
  handleSelectOptions: (values: ValueType<SelectOption, true>) => void
  createStartDate: Date | null
  createEndDate: Date | null
  updateStartDate: Date | null
  updateEndDate: Date | null
  accentCreateDates: StringDate[]
  accentUpdateDates: StringDate[]
  handleChangeCreateStartDate: (date: Date | null) => void
  handleChangeCreateEndDate: (date: Date | null) => void
  handleChangeUpdateStartDate: (date: Date | null) => void
  handleChangeUpdateEndDate: (date: Date | null) => void
  handleResetConditions: EmptyFunction
}

export const ConditionArea: FC<ConditionAreaProps> = memo((props) => {
  const {
    filterText,
    selectOptions,
    selectedOptions,
    handleSelectOptions,
    handleChangeFilterText,
    createStartDate,
    createEndDate,
    updateStartDate,
    updateEndDate,
    accentCreateDates,
    accentUpdateDates,
    handleChangeCreateStartDate,
    handleChangeCreateEndDate,
    handleChangeUpdateStartDate,
    handleChangeUpdateEndDate,
    handleResetConditions,
  } = props

  return (
    <Wrapper>
      <ConditionWrapper>
        <RowWrapper>
          <StyledSelect
            options={selectOptions}
            placeholder="タグを選択"
            value={selectedOptions}
            onChange={handleSelectOptions}
            closeMenuOnSelect={false}
            isClearable
            isMulti
            isSearchable
          />
        </RowWrapper>

        <RowWrapper>
          <PartialMatch
            value={filterText}
            onChange={handleChangeFilterText}
            placeholder="部分一致検索"
            type="text"
          />

          <div>
            追加日：
            <HorizonDateRangePicker
              startDate={createStartDate}
              endDate={createEndDate}
              accentDates={accentCreateDates}
              handleChangeStartDate={handleChangeCreateStartDate}
              handleChangeEndDate={handleChangeCreateEndDate}
            />
          </div>

          <div>
            変更日：
            <HorizonDateRangePicker
              startDate={updateStartDate}
              endDate={updateEndDate}
              accentDates={accentUpdateDates}
              handleChangeStartDate={handleChangeUpdateStartDate}
              handleChangeEndDate={handleChangeUpdateEndDate}
            />
          </div>
        </RowWrapper>
      </ConditionWrapper>

      <StyledButton colorType="accent" onClick={handleResetConditions}>
        リセット
      </StyledButton>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const ConditionWrapper = styled.div`
  flex-grow: 1;
`

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: ${MARGIN10}px;
  }
`

const StyledSelect = memo(styled(Select)`
  flex-grow: 1;
`)

const StyledButton = styled(Button)`
  margin-left: ${MARGIN25}px;
`

const PartialMatch = styled(Input)`
  width: 260px;
`
