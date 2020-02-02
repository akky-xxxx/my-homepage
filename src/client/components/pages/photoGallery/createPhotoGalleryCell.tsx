/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import { GridChildComponentProps } from "react-window"
import { equals, pick } from "remeda"

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
import { IsNoReRender } from "../../../shared/types/common"

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

type GetIndex = (args: {
  rowIndex: number
  columnIndex: number
  colNum: number
}) => number

export const galleryItemClassName = "galleryItemWrapper"
const getIndex: GetIndex = args => {
  const { columnIndex, rowIndex, colNum } = args
  return rowIndex * colNum + columnIndex
}

const createPhotoGalleryCell = (colNum: number) => {
  const PhotoGalleryCell: FC<PhotoGalleryCellProps> = props => {
    const { style, rowIndex, columnIndex, data } = props
    const index = getIndex({
      rowIndex,
      columnIndex,
      colNum,
    })
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

  const isNoReRender: IsNoReRender<PhotoGalleryCellProps> = (beforeProps, afterProps) => {
    const beforeIndex = getIndex({
      ...pick(beforeProps, ["rowIndex", "columnIndex"]),
      colNum,
    })
    const afterIndex = getIndex({
      ...pick(afterProps, ["rowIndex", "columnIndex"]),
      colNum,
    })

    return (
      beforeProps.style.top === afterProps.style.top &&
      beforeProps.style.left === afterProps.style.left &&
      equals(beforeProps.data[beforeIndex].selectedViewTags, afterProps.data[afterIndex].selectedViewTags)
    )
  }

  return memo(PhotoGalleryCell, isNoReRender)
}

export default createPhotoGalleryCell
