/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridListTile } from "@material-ui/core"
import styled from "styled-components"

/**
 * import components
 */
import GalleryBodyWrapper from "../galleryBodyWrapper"
import GalleryCard from "../galleryCard"

/**
 * import others
 */
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/modal/types"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"

/**
 * main
 */
interface GalleryBodyProps {
  galleryInfoList: GalleryItem[]
  handleOpenModal: HandleOpenModalAction
}

const GalleryBody: FC<GalleryBodyProps> = props => {
  const { galleryInfoList, handleOpenModal } = props

  return (
    <GalleryBodyWrapper>
      {galleryInfoList.map(galleryInfo => {
        const { imageId, prefCode, path, date } = galleryInfo
        const handleClick = () => handleOpenModal({ targetId: imageId })

        return (
          <StyledGridList key={imageId}>
            <GalleryCard path={path} date={date} prefCode={prefCode} handleClick={handleClick} />
          </StyledGridList>
        )
      })}
    </GalleryBodyWrapper>
  )
}

const StyledGridList = styled(GridListTile)`
  .MuiGridListTile-tile {
    overflow: visible;
  }
`

export default GalleryBody
