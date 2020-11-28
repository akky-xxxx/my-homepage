// import node_modules
import React, { useState } from "react"
import styled from "styled-components"
import { rgba } from "polished"

// import components
import { Button } from "@@/components/atoms/Button"
import { IconCalendar } from "@@/components/icons/IconCalendar"
import { IconTag } from "@@/components/icons/IconTag"
import { FilterList } from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/components/molecules/FilterList"

// import others
import { Radius } from "@@/shared/const/styles/Radius"
import { Color } from "@@/shared/const/styles/Color"

// main
const { COLOR_FEFEFE, COLOR_212121 } = Color
export const FilterBlock = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const [isTagOpen, setTagOpen] = useState(false)
  const handleToggleCalenderOpen = () => setCalendarOpen(!isCalendarOpen)
  const handleToggleTagOpen = () => setTagOpen(!isTagOpen)
  const tagData = [
    {
      id: "1",
      label: "1",
    },
    {
      id: "2",
      label: "2",
    },
    {
      id: "3",
      label: "3",
    },
  ]

  return (
    <div>
      <ButtonWrapper>
        <StyledButton
          type="button"
          colorType="primary"
          onClick={handleToggleCalenderOpen}
        >
          <ButtonContent>
            <IconWrapper>
              <IconCalendar />
            </IconWrapper>
            カレンダー
          </ButtonContent>
        </StyledButton>

        <StyledButton
          type="button"
          colorType="primary"
          onClick={handleToggleTagOpen}
        >
          <ButtonContent>
            <IconWrapper>
              <IconTag size="small" />
            </IconWrapper>
            タグ
          </ButtonContent>
        </StyledButton>
      </ButtonWrapper>

      <div>
        <FilterList
          isOpen={isCalendarOpen}
          tags={tagData}
          handleClickTag={() => (id: string) => {
            // TODO: 仮実装
            // eslint-disable-next-line no-console
            console.log(id)
          }}
        />
        {tagData && (
          <FilterList
            isOpen={isTagOpen}
            tags={tagData}
            handleClickTag={() => (id: string) => {
              // TODO: 仮実装
              // eslint-disable-next-line no-console
              console.log(id)
            }}
          />
        )}
      </div>
    </div>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
`

const ButtonContent = styled.div`
  align-items: center;
  display: flex;
`

const IconWrapper = styled.div`
  margin-right: 8px;
`

const StyledButton = styled(Button)`
  &:first-child {
    border-radius: ${Radius.UNIT_LEFT};
  }

  &:last-child {
    border-radius: ${Radius.UNIT_RIGHT};
  }

  &:not(:last-child) {
    border-right: 1px solid ${rgba(COLOR_212121, 0.1)};
  }

  & + & {
    border-left: 1px solid ${rgba(COLOR_FEFEFE, 0.1)};
  }
`
