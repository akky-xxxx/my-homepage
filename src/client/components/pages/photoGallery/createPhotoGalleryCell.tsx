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
import { HandleSelectViewTag } from "../../../store/modules/pages/photo-gallery/viewTags/types"

/**
 * main
 */
interface ExtendedGalleryItem extends GalleryItem {
  handleOpenModal: HandleOpenModalAction
  handleSelectViewTag: HandleSelectViewTag
}

interface PhotoGalleryCellProps extends GridChildComponentProps {
  data: ExtendedGalleryItem[]
}

const createPhotoGalleryCell = (colNum: number) => {
  const PhotoGalleryCell: FC<PhotoGalleryCellProps> = props => {
    const { style, rowIndex, columnIndex, data } = props
    const index = rowIndex * colNum + columnIndex
    if (!data[index]) return null
    const { imageId, prefCode, path, date, tags, handleOpenModal, handleSelectViewTag } = data[index]
    const handleThisOpenModal = () => handleOpenModal({ targetId: imageId })

    return (
      <div style={style}>
        <GalleryCardWrapper
          key={imageId}
          prefCode={prefCode}
          path={path}
          date={date}
          tags={tags}
          handleOpenModal={handleThisOpenModal}
          handleSelectViewTag={handleSelectViewTag}
        />
      </div>
    )
  }

  return PhotoGalleryCell
}

export default createPhotoGalleryCell
