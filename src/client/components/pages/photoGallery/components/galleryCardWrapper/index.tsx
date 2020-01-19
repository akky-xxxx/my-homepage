/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core"

/**
 * import components
 */
import GalleryCard from "../galleryCard"

/**
 * import others
 */
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"

/**
 * main
 */
interface GalleryCardWrapperProps extends Omit<GalleryItem, "imageId"> {
  handleClick: () => void
}

const { spacing, breakpoints } = createMuiTheme()

const GalleryCardWrapper: FC<GalleryCardWrapperProps> = props => {
  const { path, date, prefCode, handleClick } = props

  return (
    <StyledGalleryCardWrapper>
      <GalleryCard path={path} date={date} prefCode={prefCode} handleClick={handleClick} />
    </StyledGalleryCardWrapper>
  )
}

const StyledGalleryCardWrapper = styled.li`
  ${breakpoints.up("lg")} {
    flex-basis: calc(25% - ${spacing(2)}px);
    margin: ${spacing(1)}px;
  }

  ${breakpoints.only("md")} {
    flex-basis: calc(33.333% - ${spacing(2)}px);
    margin: ${spacing(1)}px;
  }

  ${breakpoints.down("sm")} {
    flex-basis: calc(50% - ${spacing(1)}px);
    margin: ${spacing(0.5)}px;
  }
`

export default GalleryCardWrapper
