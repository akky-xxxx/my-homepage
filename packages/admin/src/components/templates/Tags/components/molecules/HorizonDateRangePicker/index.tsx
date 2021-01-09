// import node_modules
import React, { FC } from "react"
import ReactDatePicker from "react-datepicker"
import { PickerWrapper, Input, Radius, Color } from "shared-items/dist/client"
import styled, { css } from "styled-components"

// import others
import { HorizonDateRangePickerProps } from "./types"
import { useHorizonDateRangePicker } from "./modules/useHorizonDateRangePicker"

// main
const { UNIT_LEFT, UNIT_RIGHT } = Radius
const { COLOR_FFFFFF, DIVIDER } = Color

export const HorizonDateRangePicker: FC<HorizonDateRangePickerProps> = (
  props,
) => {
  const {
    startDate,
    endDate,
    handleChangeStartDate,
    handleChangeEndDate,
  } = props
  const { dayClassName } = useHorizonDateRangePicker(props)

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
        dayClassName={dayClassName}
        isClearable
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
        dayClassName={dayClassName}
        isClearable
      />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: inline-flex;
`

const pickerInput = css`
  text-align: center;
  width: 130px;
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
