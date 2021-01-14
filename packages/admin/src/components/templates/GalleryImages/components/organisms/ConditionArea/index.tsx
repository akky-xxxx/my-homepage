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
const { MARGIN10, MARGIN20 } = Margin

export const ConditionArea: FC<ConditionAreaProps> = (props) => {
  const {
    prefectures,
    selectedPrefecture,
    photographAtStart,
    photographAtEnd,
    createdAtStart,
    createdAtEnd,
    updatedAtStart,
    updatedAtEnd,
    accentDates,
    tags,
    selectedTags,
    handleSelectPhotographAtStart,
    handleSelectPhotographAtEnd,
    handleSelectCreatedAtStart,
    handleSelectCreatedAtEnd,
    handleSelectUpdatedAtStart,
    handleSelectUpdatedAtEnd,
    handleSelectPrefecture,
    handleSelectTags,
    handleResetConditions,
  } = props

  return (
    <Wrapper>
      <ConditionWrapper>
        <RowWrapper>
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
        </RowWrapper>

        <RowWrapper>
          <FieldWrapper>
            登録日：
            <HorizonDateRangePicker
              startDate={createdAtStart ? new Date(createdAtStart) : null}
              endDate={createdAtEnd ? new Date(createdAtEnd) : null}
              accentDates={accentDates}
              handleChangeStartDate={handleSelectCreatedAtStart}
              handleChangeEndDate={handleSelectCreatedAtEnd}
            />
          </FieldWrapper>

          <FieldWrapper>
            変更日：
            <HorizonDateRangePicker
              startDate={updatedAtStart ? new Date(updatedAtStart) : null}
              endDate={updatedAtEnd ? new Date(updatedAtEnd) : null}
              accentDates={accentDates}
              handleChangeStartDate={handleSelectUpdatedAtStart}
              handleChangeEndDate={handleSelectUpdatedAtEnd}
            />
          </FieldWrapper>
        </RowWrapper>
      </ConditionWrapper>

      <ButtonWrapper>
        <Button colorType="accent" onClick={handleResetConditions}>
          リセット
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

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

  & + & {
    margin-top: ${MARGIN10}px;
  }
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
