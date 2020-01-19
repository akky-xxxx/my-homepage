/**
 * import node_modules
 */
import React, { FC } from "react"
import { Typography, Divider, Grid } from "@material-ui/core"
import styled from "styled-components"

/**
 * import others
 */
import { APP_BREAKPOINTS, APP_MARGINS } from "../../../shared/const/styles"

/**
 * main
 */
interface PageAboveProps {
  title: string
}

const PageAbove: FC<PageAboveProps> = props => {
  const { title, children } = props

  return (
    <PageAboveWrapper>
      <PageAboveInner>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6" component="h2">
            {title}
          </Typography>

          {children && <div>{children}</div>}
        </Grid>
      </PageAboveInner>

      <Divider />
    </PageAboveWrapper>
  )
}

const PageAboveWrapper = styled.div`
  ${APP_BREAKPOINTS.PC} {
    margin-bottom: ${APP_MARGINS.PC.HORIZON}px;
  }

  ${APP_BREAKPOINTS.SP} {
    margin-bottom: ${APP_MARGINS.SP.HORIZON}px;
  }
`

const PageAboveInner = styled.div`
  ${APP_BREAKPOINTS.PC} {
    padding: ${APP_MARGINS.PC.VERTICAL}px ${APP_MARGINS.PC.HORIZON}px;
  }

  ${APP_BREAKPOINTS.SP} {
    padding: ${APP_MARGINS.SP.VERTICAL}px ${APP_MARGINS.SP.HORIZON}px;
  }
`

export default PageAbove
