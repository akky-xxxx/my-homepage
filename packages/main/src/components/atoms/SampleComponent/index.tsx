// import node_modules
import styled from "styled-components"

// import others
import { SampleComponentProps } from "@components/atoms/SampleComponent/types"
import { getSampleComponentColor } from "@components/atoms/SampleComponent/modules/getSampleComponentColor"

// main
/**
 * Sample Component
 */
export const SampleComponent = styled.button<SampleComponentProps>`
  align-items: center;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: inline-flex;
  font-size: 14px;
  justify-content: center;
  line-height: 1.5;
  padding: 4px 8px;
  ${getSampleComponentColor}
`
