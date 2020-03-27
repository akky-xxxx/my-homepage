/**
 * import node_modules
 */
import React, { FC, memo, useMemo } from "react"
import { Typography } from "@material-ui/core"

/**
 * import others
 */
import { IsNoReRender } from "../../../../../shared/types/common"
import isTest from "../../../../../shared/utils/isTest"

/**
 * import components
 */
import getNumberTransition from "../../../../molecules/geyNumberTransition"

/**
 * main
 */
export interface GalleryLengthProps {
  resultLength: number
}

const GalleryLength: FC<GalleryLengthProps> = (props) => {
  const { resultLength } = props
  const NumberTransition = useMemo(() => getNumberTransition(), [])

  return (
    <div>
      <Typography variant="h6" component="span">
        {!isTest ? <NumberTransition toNumber={resultLength} /> : resultLength}
      </Typography>
      <Typography variant="body2" component="span">
        件
      </Typography>
    </div>
  )
}

const isNoReRender: IsNoReRender<GalleryLengthProps> = (beforeProps, afterProps) =>
  beforeProps.resultLength === afterProps.resultLength

export default memo(GalleryLength, isNoReRender)
