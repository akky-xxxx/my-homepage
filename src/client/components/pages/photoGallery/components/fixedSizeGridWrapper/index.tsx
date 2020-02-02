/**
 * import node_modules
 */
import React, { FC, useMemo } from "react"
import { createMuiTheme } from "@material-ui/core"
import { FixedSizeGrid } from "react-window"
import { Size } from "react-virtualized-auto-sizer"
import styled, { keyframes } from "styled-components"

/**
 * import others
 */
import createPhotoGalleryCell, { galleryItemClassName } from "../../createPhotoGalleryCell"
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/modal/types"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import { HandleSelectViewTag } from "../../../../../store/modules/pages/photo-gallery/viewTags/types"
import getItemKey from "./getItemKey"

/**
 * main
 */
const { breakpoints } = createMuiTheme()

const getColNum = (width: number) => {
  if (width <= breakpoints.values.sm) return 2
  if (width > breakpoints.values.sm && width <= breakpoints.values.md) return 3
  return 4
}

interface FixedSizeGridWrapperProps extends Size {
  galleryInfoList: GalleryItem[]
  selectedViewTags: string[]
  handleOpenModal: HandleOpenModalAction
  handleSelectViewTag: HandleSelectViewTag
}

const FixedSizeGridWrapper: FC<FixedSizeGridWrapperProps> = props => {
  const { width, height, galleryInfoList, selectedViewTags, handleOpenModal, handleSelectViewTag } = props
  const windowGalleryInfoList = galleryInfoList.map(galleryInfo => ({
    ...galleryInfo,
    handleOpenModal,
    handleSelectViewTag,
    selectedViewTags,
  }))
  const colNum = useMemo(() => getColNum(width), [width])
  const itemKey = useMemo(() => getItemKey(colNum), [colNum])
  const PhotoGalleryCell = useMemo(() => createPhotoGalleryCell(colNum), [colNum])

  return (
    <StyledFixedSizeGrid
      itemData={windowGalleryInfoList}
      columnCount={colNum}
      columnWidth={Math.ceil(width / colNum)}
      rowCount={Math.ceil(galleryInfoList.length / colNum)}
      rowHeight={370}
      height={height}
      width={width}
      itemKey={itemKey}
    >
      {PhotoGalleryCell}
    </StyledFixedSizeGrid>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledFixedSizeGrid = styled(FixedSizeGrid)`
  & .${galleryItemClassName} {
    animation: ${fadeIn} 300ms linear 0s;
    transition: transform 300ms 300ms;
  }
`

export default FixedSizeGridWrapper
