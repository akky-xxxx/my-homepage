/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"

/**
 * import others
 */
import galleryInfoList from "../../../shared/const/galleryInfoList"

/**
 * main
 */

const PhotoGallery: NextPage = () => {
  return (
    <div>
      <GridList cols={3}>
        {galleryInfoList.map(galleryInfo => {
          const { prefCode, thumbPath } = galleryInfo
          return (
            <GridListTile key={thumbPath}>
              <img src={`/images/gallery${thumbPath}`} alt={prefCode} />
              asdfgf
              <GridListTileBar title={prefCode} />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default PhotoGallery
