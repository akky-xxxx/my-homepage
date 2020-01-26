/**
 * import node_modules
 */
import React, { FC, memo } from "react"
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
import { IsNoReRender } from "../../../../../shared/types/common"
import { HandleSelectViewTag } from "../../../../../store/modules/pages/photo-gallery/viewTags/types"

/**
 * main
 */
interface GalleryCardWrapperProps extends Omit<GalleryItem, "imageId"> {
  handleOpenModal: () => void
  handleSelectViewTag: HandleSelectViewTag
}

const { spacing, breakpoints } = createMuiTheme()

const GalleryCardWrapper: FC<GalleryCardWrapperProps> = props => {
  const { path, date, prefCode, tags, handleOpenModal, handleSelectViewTag } = props

  return (
    <StyledGalleryCardWrapper>
      <GalleryCard
        path={path}
        date={date}
        prefCode={prefCode}
        handleOpenModal={handleOpenModal}
        handleSelectViewTag={handleSelectViewTag}
        tags={tags}
      />
    </StyledGalleryCardWrapper>
  )
}

const StyledGalleryCardWrapper = styled.div`
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

const isNoReRender: IsNoReRender<GalleryCardWrapperProps> = (beforeProps, afterProps) =>
  beforeProps.path === afterProps.path

export default memo(GalleryCardWrapper, isNoReRender)
