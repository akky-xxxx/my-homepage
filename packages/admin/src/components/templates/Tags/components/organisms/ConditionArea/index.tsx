// import node_modules
import React, { Fragment, FC, ChangeEventHandler } from "react"
import styled from "styled-components"
import Select, { OptionsType, ValueType } from "react-select"
import { Margin } from "shared-items/dist/client"

// import components
import { Input } from "@@/components/atoms/Input"
import { SelectOption } from "@@/shared/types/lib"
import { HorizonDateRangePicker } from "@@/components/templates/Tags/components/molecules/HorizonDateRangePicker"

// main
const { MARGIN20 } = Margin

export type ConditionAreaProps = {
  filterText: string
  selectOptions: SelectOption[]
  selectedOptions: null | OptionsType<SelectOption>
  handleChangeFilterText: ChangeEventHandler<HTMLInputElement>
  handleSelectOptions: (values: ValueType<SelectOption, true>) => void
}

export const ConditionArea: FC<ConditionAreaProps> = (props) => {
  const {
    filterText,
    selectOptions,
    selectedOptions,
    handleSelectOptions,
    handleChangeFilterText,
  } = props

  return (
    <Fragment>
      <Wrapper>
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
      </Wrapper>

      <Wrapper>
        <Input
          value={filterText}
          onChange={handleChangeFilterText}
          placeholder="部分一致検索"
          type="text"
        />

        <div>
          追加日：
          <HorizonDateRangePicker
            startDate={new Date()}
            endDate={new Date()}
            handleChangeStartDate={() => console.log("handleChangeStartDate")}
            handleChangeEndDate={() => console.log("handleChangeEndDate")}
          />
        </div>

        <div>
          変更日：
          <HorizonDateRangePicker
            startDate={new Date()}
            endDate={new Date()}
            handleChangeStartDate={() => console.log("handleChangeStartDate")}
            handleChangeEndDate={() => console.log("handleChangeEndDate")}
          />
        </div>
      </Wrapper>
    </Fragment>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;

  & + & {
    margin-top: ${MARGIN20}px;
  }
`

const StyledSelect = styled(Select)`
  flex-grow: 1;
`
