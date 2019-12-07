/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"
import styled from "styled-components"

/**
 * import others
 */
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/types"
import originGalleryInfoList from "../../../../../shared/const/galleryInfoList"
import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */
interface GalleryBodyProps {
  galleryInfoList: typeof originGalleryInfoList
  handleOpenModal: HandleOpenModalAction
}

const GalleryBody: FC<GalleryBodyProps> = props => {
  const { galleryInfoList, handleOpenModal } = props

  return (
    <GridList cols={3}>
      {galleryInfoList.map(galleryInfo => {
        const { imageId, prefCode, thumbPath, path } = galleryInfo
        return (
          <StyledGridList key={thumbPath} onClick={() => handleOpenModal({ targetId: imageId })}>
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
