// import node_modules
import { useCallback } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { GalleryImageProps } from "../../types"

// main
type UseGalleryImageProps = Pick<
  GalleryImageProps,
  "imageId" | "handleClickPrimary" | "handleClickRemove"
>
type UseGalleryImageReturn = {
  handleClickPrimary: EmptyFunction
  handleClickRemove: EmptyFunction
}
type UseGalleryImage = (props: UseGalleryImageProps) => UseGalleryImageReturn

export const useGalleryImage: UseGalleryImage = (props) => {
  const {
    imageId,
    handleClickPrimary: _handleClickPrimary,
    handleClickRemove: _handleClickRemove,
  } = props

  const handleClickPrimary = useCallback(() => _handleClickPrimary(imageId), [
    imageId,
  ])

  const handleClickRemove = useCallback(() => _handleClickRemove(imageId), [
    imageId,
  ])

  return {
    handleClickPrimary,
    handleClickRemove,
  }
}
