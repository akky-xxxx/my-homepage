// import node_modules
import React, { FC, memo } from "react"
import styled, { css } from "styled-components"
import Select from "react-select"
import { Margin, Button } from "shared-items/dist/client"

// import components
import { HorizonDateRangePicker } from "@@/components/molecules/HorizonDateRangePicker"

// import others
import { ReleaseStatuses } from "@@/components/templates/GalleryImages/const"
import { ConditionAreaProps } from "./types"

// main
const { MARGIN10, MARGIN20 } = Margin

export const ConditionArea: FC<ConditionAreaProps> = memo((props) => {
  const {
    prefectures,
    selectedReleaseStatus,
    selectedPrefecture,
    photographAtStart,
    photographAtEnd,
    createdAtStart,
    createdAtEnd,
    updatedAtStart,
    updatedAtEnd,
    accentDatesOfPhotographAt,
    accentDatesOfCreatedAt,
    accentDatesOfUpdatedAt,
    tags,
    selectedTags,
    handleSelectReleaseStatus,
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
              options={ReleaseStatuses}
              value={selectedReleaseStatus}
              placeholder="公開状態を選択"
              onChange={handleSelectReleaseStatus}
              isClearable
            />
          </FieldWrapper>

          <FieldWrapper>
            <StyledSelect
              options={prefectures}
              value={selectedPrefecture}
              placeholder="都道府県を選択"
              onChange={handleSelectPrefecture}
              isClearable
            />
          </FieldWrapper>

          <TagsSelectWrapper>
            <MemoSelect
              options={tags}
              value={selectedTags}
              placeholder="タグを選択"
              onChange={handleSelectTags}
              closeMenuOnSelect={false}
              isClearable
              isMulti
              isSearchable
            />
          </TagsSelectWrapper>
        </RowWrapper>

        <RowWrapper>
          <FieldWrapper>
            <HorizonDateRangePicker
              targetName="撮影日"
              startDate={photographAtStart ? new Date(photographAtStart) : null}
              endDate={photographAtEnd ? new Date(photographAtEnd) : null}
              accentDates={accentDatesOfPhotographAt}
              handleChangeStartDate={handleSelectPhotographAtStart}
              handleChangeEndDate={handleSelectPhotographAtEnd}
            />
          </FieldWrapper>

          <FieldWrapper>
            <HorizonDateRangePicker
              targetName="登録日"
              startDate={createdAtStart ? new Date(createdAtStart) : null}
              endDate={createdAtEnd ? new Date(createdAtEnd) : null}
              accentDates={accentDatesOfCreatedAt}
              handleChangeStartDate={handleSelectCreatedAtStart}
              handleChangeEndDate={handleSelectCreatedAtEnd}
            />
          </FieldWrapper>

          <FieldWrapper>
            <HorizonDateRangePicker
              targetName="変更日"
              startDate={updatedAtStart ? new Date(updatedAtStart) : null}
              endDate={updatedAtEnd ? new Date(updatedAtEnd) : null}
              accentDates={accentDatesOfUpdatedAt}
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
})

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const ConditionWrapper = styled.div`
  flex-grow: 1;
  margin-right: ${MARGIN20}px;
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

const StyledSelect = memo(styled(Select)`
  ${fieldWidth};
`)

const MemoSelect = memo(Select)

const TagsSelectWrapper = styled.div`
  flex-grow: 1;
  margin-left: ${MARGIN20}px;
`

const ButtonWrapper = styled.div`
  margin-left: auto;
`
