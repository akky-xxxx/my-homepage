import React from "react"
import galleryInfoList from "../shared/const/galleryInfoList"
console.log(galleryInfoList)

const Top = () => {
  return (
    <div>
      {galleryInfoList.map(galleryInfo => {
        const { path } = galleryInfo
        return (
          <img key={path} src={`/images/gallery${path}`} alt="" width={300}/>
        )
      })}
    </div>
  )
}

export default Top
