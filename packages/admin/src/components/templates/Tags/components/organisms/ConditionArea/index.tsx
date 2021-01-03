// import node_modules
import React, { Fragment, FC, ChangeEventHandler } from "react"
import styled from "styled-components"
import Select, { OptionsType, ValueType } from "react-select"
import { Margin } from "shared-items/dist/client"

// import components
import { Input } from "@@/components/atoms/Input"
import { SelectOption } from "@@/shared/types/lib"

// main
const { MARGIN10 } = Margin

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
        <StyledInput
          value={filterText}
          onChange={handleChangeFilterText}
          placeholder="部分一致検索"
          type="text"
        />

        <Select<SelectOption, true>
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
    </Fragment>
  )
}

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;

  & + & {
    margin-top: ${MARGIN10}px;
  }

  & > div {
    flex-grow: 1;
    flex-shrink: 0;
  }
`

const StyledInput = styled(Input)`
  margin-right: ${MARGIN10}px;
`
