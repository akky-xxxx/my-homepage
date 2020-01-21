/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridChildComponentProps } from "react-window"

/**
 * import components
 */
import GalleryCardWrapper from "./components/galleryCardWrapper"

/**
 * import others
 */
import { GalleryItem } from "../../../shared/types/pages/galleryList"
import { HandleOpenModalAction } from "../../../store/modules/pages/photo-gallery/modal/types"

/**
 * main
 */
interface ExtendedGalleryItem extends GalleryItem {
  handleOpenModal: HandleOpenModalAction
}

interface PhotoGalleryCellProps extends GridChildComponentProps {
  data: ExtendedGalleryItem[]
}

const createPhotoGalleryCell = (colNum: number) => {
  const PhotoGalleryCell: FC<PhotoGalleryCellProps> = props => {
    const { style, rowIndex, columnIndex, data } = props
    const index = rowIndex * colNum + columnIndex
    if (!data[index]) return null
    const { imageId, prefCode, path, date, handleOpenModal } = data[index]
    const handleClick = () => handleOpenModal({ targetId: imageId })

    return (
      <div style={style}>
        <GalleryCardWrapper key={imageId} prefCode={prefCode} path={path} date={date} handleClick={handleClick} />
      </div>
    )
  }

  return PhotoGalleryCell
}

export default createPhotoGalleryCell
