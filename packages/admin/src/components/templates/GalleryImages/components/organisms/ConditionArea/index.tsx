// import node_modules
import React, { FC } from "react"
import styled, { css } from "styled-components"
import Select from "react-select"
import { Margin, Button } from "shared-items/dist/client"

// import components
import { HorizonDateRangePicker } from "@@/components/molecules/HorizonDateRangePicker"

// import others
import { ConditionAreaProps } from "./types"

// main
const { MARGIN20 } = Margin

export const ConditionArea: FC<ConditionAreaProps> = (props) => {
  const {
    prefectures,
    selectedPrefecture,
    photographAtStart,
    photographAtEnd,
    accentDates,
    tags,
    selectedTags,
    handleSelectPhotographAtStart,
    handleSelectPhotographAtEnd,
    handleSelectPrefecture,
    handleSelectTags,
    handleResetConditions,
  } = props

  return (
    <Wrapper>
      <FieldWrapper>
        <StyledSelect
          options={prefectures}
          value={selectedPrefecture}
          placeholder="都道府県を選択"
          onChange={handleSelectPrefecture}
        />
      </FieldWrapper>

      <FieldWrapper>
        <StyledSelect
          options={tags}
          value={selectedTags}
          placeholder="タグを選択"
          onChange={handleSelectTags}
          isMulti
        />
      </FieldWrapper>

      <FieldWrapper>
        撮影日：
        <HorizonDateRangePicker
          startDate={photographAtStart ? new Date(photographAtStart) : null}
          endDate={photographAtEnd ? new Date(photographAtEnd) : null}
          accentDates={accentDates}
          handleChangeStartDate={handleSelectPhotographAtStart}
          handleChangeEndDate={handleSelectPhotographAtEnd}
        />
      </FieldWrapper>

      <ButtonWrapper>
        <Button colorType="accent" onClick={handleResetConditions}>
          リセット
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const FieldWrapper = styled.div`
  & + & {
    margin-left: ${MARGIN20}px;
  }
`

const fieldWidth = css`
  width: 200px;
`

const StyledSelect = styled(Select)`
  ${fieldWidth};
`

const ButtonWrapper = styled.div`
  margin-left: auto;
`
