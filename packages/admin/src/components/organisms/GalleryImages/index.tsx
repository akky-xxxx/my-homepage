// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { GalleryImage, ITEM_WIDTH } from "@@/components/molecules/GalleryImage"
import { GalleryImageProps } from "@@/components/molecules/GalleryImage/types"

// main
export type GalleryImagesProps = {
  images: GalleryImageProps[]
}

export const GalleryImages: FC<GalleryImagesProps> = (props) => {
  const { images } = props

  return (
    <Wrapper>
      {images.map((image) => (
        <GalleryImage key={image.imageId} {...image} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(${ITEM_WIDTH}px, 1fr));
`
