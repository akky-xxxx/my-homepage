/**
 * import node_modules
 */
import React, { FC } from "react"
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"

/**
 * import others
 */
import { HandleOpenModal } from "../../modules/useModal"
import galleryInfoList from "../../../../../shared/const/galleryInfoList"
import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */
interface GalleryBodyProps {
  handleOpenModal: HandleOpenModal
}

const GalleryBody: FC<GalleryBodyProps> = props => {
  const { handleOpenModal } = props

  return (
    <GridList cols={3}>
      {galleryInfoList.map(galleryInfo => {
        const { prefCode, thumbPath, path } = galleryInfo
        return (
          <GridListTile key={thumbPath} onClick={() => handleOpenModal(path, prefCode)}>
            <img src={`/images/gallery${thumbPath}`} alt={prefCode} />
            <GridListTileBar title={PREF_MAP[prefCode]} />
          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default GalleryBody
