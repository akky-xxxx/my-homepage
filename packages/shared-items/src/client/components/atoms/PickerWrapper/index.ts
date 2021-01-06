// import node_modules
import styled from "styled-components"
import { rgba } from "polished"

// import others
import { Color, Font, Margin, Transition } from "../../../const"

// main
const { COLOR_FFFFFF, COLOR_CCCCCC, PRIMARY, ACCENT } = Color
const {
  SIZE: { MIDDLE },
} = Font
const { MARGIN10, MARGIN15 } = Margin
const { DURATION, TIMING_FUNCTION } = Transition

export const AccentDayClass = "is-accentDay"
export const PickerWrapper = styled.div`
  border: 1px solid ${COLOR_CCCCCC};
  font-size: ${MIDDLE};

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    font-size: ${MIDDLE};
  }

  .react-datepicker__current-month {
    margin-bottom: ${MARGIN10}px;
  }

  .react-datepicker__navigation {
    top: ${MARGIN15}px;
  }

  .react-datepicker__header {
    background-color: ${COLOR_FFFFFF};
    border-bottom: 1px solid ${COLOR_CCCCCC};
    padding-top: 12px;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background-color: ${PRIMARY};
    opacity: 1;

    &:hover {
      opacity: 0.8;
      transition: opacity ${DURATION} ${TIMING_FUNCTION};
    }
  }

  .react-datepicker__day--in-selecting-range {
    background-color: ${rgba(PRIMARY, 0.6)};
    transition: background-color ${DURATION} ${TIMING_FUNCTION};
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    line-height: 2rem;
    width: 2rem;
  }

  .${AccentDayClass} {
    color: ${ACCENT};
    text-shadow: 0 0 4px ${COLOR_FFFFFF}, 0 0 4px ${COLOR_FFFFFF};
  }
`
