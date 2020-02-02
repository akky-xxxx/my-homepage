/**
 * import node_modules
 */
import React, { FC, useMemo } from "react"
import { createMuiTheme } from "@material-ui/core"
import { FixedSizeGrid } from "react-window"
import { Size } from "react-virtualized-auto-sizer"

/**
 * import others
 */
import createPhotoGalleryCell from "../../createPhotoGalleryCell"
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/modal/types"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import { HandleSelectViewTag } from "../../../../../store/modules/pages/photo-gallery/viewTags/types"

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
  const PhotoGalleryCell = useMemo(() => createPhotoGalleryCell(colNum), [colNum])

  return (
    <FixedSizeGrid
      itemData={windowGalleryInfoList}
      columnCount={colNum}
      columnWidth={Math.ceil(width / colNum)}
      rowCount={Math.ceil(galleryInfoList.length / colNum)}
      rowHeight={370}
      height={height}
      width={width}
    >
      {PhotoGalleryCell}
    </FixedSizeGrid>
  )
}

export default FixedSizeGridWrapper
