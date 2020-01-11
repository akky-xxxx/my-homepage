/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridList, GridListTile } from "@material-ui/core"
import styled from "styled-components"

/**
 * import components
 */
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
    <GridList cols={4} cellHeight="auto" spacing={16}>
      {galleryInfoList.map(galleryInfo => {
        const { imageId, prefCode, path, date } = galleryInfo
        const handleClick = () => handleOpenModal({ targetId: imageId })

        return (
          <StyledGridList key={imageId}>
            <GalleryCard path={path} date={date} prefCode={prefCode} handleClick={handleClick} />
          </StyledGridList>
        )
      })}
    </GridList>
  )
}

const StyledGridList = styled(GridListTile)`
  .MuiGridListTile-tile {
    overflow: visible;
  }
`

export default GalleryBody
