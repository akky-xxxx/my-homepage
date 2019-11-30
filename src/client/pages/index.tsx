import React from "react"
import galleryInfoList from "../shared/const/galleryInfoList"
console.log(galleryInfoList)

const Top = () => {
  return (
    <div>
      {galleryInfoList.map(galleryInfo => {
        const { thumbPath } = galleryInfo
        return (
          <img key={thumbPath} src={`/images/gallery${thumbPath}`} alt=""/>
        )
      })}
    </div>
  )
}

export default Top
