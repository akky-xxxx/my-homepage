/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core"

/**
 * import components
 */
import GalleryCardWrapper from "../galleryCardWrapper"

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

const { spacing, breakpoints } = createMuiTheme()

const GalleryBody: FC<GalleryBodyProps> = props => {
  const { galleryInfoList, handleOpenModal } = props

  return (
    <GalleryList>
      {galleryInfoList.map(galleryInfo => {
        const { imageId, prefCode, path, date } = galleryInfo
        const handleClick = () => handleOpenModal({ targetId: imageId })

        return (
          <GalleryCardWrapper key={imageId} prefCode={prefCode} path={path} date={date} handleClick={handleClick} />
        )
      })}
    </GalleryList>
  )
}

const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${breakpoints.up("lg")} {
    margin: -${spacing(1)}px;
  }

  ${breakpoints.only("md")} {
    margin: -${spacing(1)}px;
  }

  ${breakpoints.down("sm")} {
    margin: -${spacing(0.5)}px;
  }
`

export default GalleryBody
