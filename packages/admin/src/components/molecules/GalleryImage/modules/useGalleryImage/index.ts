// import node_modules
import { useCallback } from "react"
import { EmptyFunction } from "shared-items"

// import others
import { GalleryImageProps } from "../../types"

// main
type Handlers = "handleClickPrimary" | "handleClickRemove" | "handleClickRelease"
type UseGalleryImageProps = Pick<
  GalleryImageProps,
  "imageId" | Handlers
>
type UseGalleryImageReturn = Record<Handlers, EmptyFunction>
type UseGalleryImage = (props: UseGalleryImageProps) => UseGalleryImageReturn

export const useGalleryImage: UseGalleryImage = (props) => {
  const {
    imageId,
    handleClickPrimary: _handleClickPrimary,
    handleClickRemove: _handleClickRemove,
    handleClickRelease: _handleClickRelease,
  } = props

  const handleClickPrimary = useCallback(() => _handleClickPrimary(imageId), [
    imageId,
  ])

  const handleClickRemove = useCallback(() => _handleClickRemove(imageId), [
    imageId,
  ])

  const handleClickRelease = useCallback(() => _handleClickRelease(imageId), [
    imageId,
  ])

  return {
    handleClickPrimary,
    handleClickRemove,
    handleClickRelease,
  }
}
