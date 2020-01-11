/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"
import styled from "styled-components"

/**
 * import others
 */
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/modal/types"
import PREF_MAP from "../../../../../shared/const/prefMap"
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
    <GridList cols={3}>
      {galleryInfoList.map(galleryInfo => {
        const { imageId, prefCode, path } = galleryInfo
        return (
          <StyledGridList key={imageId} onClick={() => handleOpenModal({ targetId: imageId })}>
            <img src={`/images/gallery${path}`} alt={prefCode} />
            <GridListTileBar title={PREF_MAP[prefCode]} />
          </StyledGridList>
        )
      })}
    </GridList>
  )
}

const StyledGridList = styled(GridListTile)`
  cursor: pointer;
`

export default GalleryBody
