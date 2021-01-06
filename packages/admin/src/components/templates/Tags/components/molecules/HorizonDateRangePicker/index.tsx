// import
import React, { FC } from "react"
import ReactDatePicker from "react-datepicker"
import { PickerWrapper, Input, Radius, Color } from "shared-items/dist/client"
import styled, { css } from "styled-components"

// main
const { UNIT_LEFT, UNIT_RIGHT } = Radius
const { COLOR_FFFFFF, DIVIDER } = Color

export type HorizonDateRangePickerProps = {
  startDate: Date | null
  endDate: Date | null
  handleChangeStartDate: (date: Date | null) => void
  handleChangeEndDate: (date: Date | null) => void
}

export const HorizonDateRangePicker: FC<HorizonDateRangePickerProps> = (
  props,
) => {
  const {
    startDate,
    endDate,
    handleChangeStartDate,
    handleChangeEndDate,
  } = props

  return (
    <Wrapper>
      <ReactDatePicker
        selected={startDate}
        onChange={handleChangeStartDate}
        calendarContainer={PickerWrapper}
        customInput={<StartInput />}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        selectsStart
        dateFormat="yyyy/MM/dd"
        placeholderText="from"
      />
      <Tilde>〜</Tilde>
      <ReactDatePicker
        selected={endDate}
        onChange={handleChangeEndDate}
        calendarContainer={PickerWrapper}
        customInput={<EndInput />}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date()}
        selectsEnd
        dateFormat="yyyy/MM/dd"
        placeholderText="to"
      />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: inline-flex;
`

const pickerInput = css`
  text-align: center;
  width: 110px;
`

const StartInput = styled(Input)`
  border-radius: ${UNIT_LEFT};
  border-right: none;
  ${pickerInput};
`

const EndInput = styled(Input)`
  border-left: none;
  border-radius: ${UNIT_RIGHT};
  ${pickerInput};
`

const Tilde = styled.div`
  align-items: center;
  background-color: ${COLOR_FFFFFF};
  border-bottom: 1px solid ${DIVIDER};
  border-top: 1px solid ${DIVIDER};
  display: flex;
`
