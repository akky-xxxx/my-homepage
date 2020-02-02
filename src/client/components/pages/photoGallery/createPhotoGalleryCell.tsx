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
  selectedViewTags: string[]
  handleOpenModal: HandleOpenModalAction
  handleSelectViewTag: HandleSelectViewTag
}

interface PhotoGalleryCellProps extends GridChildComponentProps {
  data: ExtendedGalleryItem[]
}

export const galleryItemClassName = "galleryItemWrapper"

const createPhotoGalleryCell = (colNum: number) => {
  const PhotoGalleryCell: FC<PhotoGalleryCellProps> = props => {
    const { style, rowIndex, columnIndex, data } = props
    const index = rowIndex * colNum + columnIndex
    if (!data[index]) return null
    const { imageId, prefCode, path, date, tags, selectedViewTags, handleOpenModal, handleSelectViewTag } = data[index]
    const handleThisOpenModal = () => handleOpenModal({ targetId: imageId })
    const newStyle = {
      ...style,
      transform: `translateX(${style.left}px) translateY(${style.top}px)`,
    }
    delete newStyle.top
    delete newStyle.left

    return (
      <div style={newStyle} className={galleryItemClassName}>
        <GalleryCardWrapper
          key={imageId}
          prefCode={prefCode}
          path={path}
          date={date}
          tags={tags}
          selectedViewTags={selectedViewTags}
          handleOpenModal={handleThisOpenModal}
          handleSelectViewTag={handleSelectViewTag}
        />
      </div>
    )
  }

  return PhotoGalleryCell
}

export default createPhotoGalleryCell
