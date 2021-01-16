// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { GalleryImage, ITEM_WIDTH } from "@@/components/molecules/GalleryImage"
import { GalleryImageProps } from "@@/components/molecules/GalleryImage/types"

// main
type Handler =
  | "handleClickPrimary"
  | "handleClickRemove"
  | "handleSelectPhotographAt"
  | "handleSelectPrefecture"
  | "handleSelectTags"
  | "handleClickRelease"
export type GalleryImagesProps = {
  images: Omit<GalleryImageProps, Handler>[]
} & Pick<GalleryImageProps, Handler>

export const GalleryImages: FC<GalleryImagesProps> = (props) => {
  const {
    images,
    handleClickPrimary,
    handleClickRemove,
    handleSelectPrefecture,
    handleSelectTags,
    handleSelectPhotographAt,
    handleClickRelease,
  } = props

  const galleryImageProps = {
    handleClickPrimary,
    handleClickRemove,
    handleSelectPrefecture,
    handleSelectTags,
    handleSelectPhotographAt,
    handleClickRelease,
  } as const

  return (
    <Wrapper>
      {images.map((image) => (
        <GalleryImage key={image.imageId} {...image} {...galleryImageProps} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(${ITEM_WIDTH}px, 1fr));
`
