// import node_modules
import { css, FlattenSimpleInterpolation } from "styled-components"

// import others
import { SampleComponentProps } from "@@/components/atoms/SampleComponent/types"

// main
type GetSampleComponentColor = (
  args: SampleComponentProps,
) => FlattenSimpleInterpolation

export const getSampleComponentColor: GetSampleComponentColor = (args) => {
  const { colorType } = args

  if (colorType === "attention") {
    return css`
      background-color: #ff6347;
    `
  }

  return css`
    background-color: #1ea7fd;
  `
}
