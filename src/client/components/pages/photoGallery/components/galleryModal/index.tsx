/**
 * import node_modules
 */
import React, { FC, useRef, useEffect } from "react"
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Fab } from "@material-ui/core"
import { Dialog, DialogContent, DialogActions, Button, Fab } from "@material-ui/core"
import { Fullscreen, NavigateBefore, NavigateNext } from "@material-ui/icons"
import styled, { css } from "styled-components"
import Slider from "react-slick"

/**
 * import others
 */
import handleToFullScreen from "../../../../../shared/utils/handleToFullScreen"
import { HandleAction } from "../../../../../shared/types/common"
import originGalleryInfoList from "../../../../../shared/const/galleryInfoList"
// import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */
interface GalleryModalProps {
  isOpen: boolean
  galleryInfoList: typeof originGalleryInfoList
  currentImageId: null | number
  handleCloseModal: HandleAction
  handleChangeNextImage: HandleAction
  handleChangePrevImage: HandleAction
}

const GalleryModal: FC<GalleryModalProps> = props => {
  const {
    isOpen,
    handleCloseModal,
    handleChangeNextImage,
    handleChangePrevImage,
    currentImageId,
    galleryInfoList,
  } = props

  const fullScreenRef = useRef<HTMLImageElement>(null)
  const slider = useRef<Slider>(null)

  const handleKeyDown = (event: KeyboardEvent) => {
    const { code } = event
    if (code === "ArrowRight") {
      handleChangeNextImage()
      return
    }
    if (code === "ArrowLeft") {
      handleChangePrevImage()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const showPrev = () => {
    // eslint-disable-next-line no-unused-expressions
    slider.current?.slickPrev()
  }

  const showNext = () => {
    // eslint-disable-next-line no-unused-expressions
    slider.current?.slickNext()
  }

  if (!currentImageId) return null

  const currentIndex = galleryInfoList.findIndex(galleryInfo => galleryInfo.imageId === currentImageId)

  // const photoInfo = galleryInfoList.find(info => info.imageId === currentImageId)
  // if (!photoInfo) return null
  // const { prefCode, path } = photoInfo

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleCloseModal}
      maxWidth={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <ModalHeader>
        {/* <DialogTitle id="scroll-dialog-title">{PREF_MAP[prefCode]}</DialogTitle> */}
        <StyledFullscreen fontSize="large" onClick={() => handleToFullScreen(fullScreenRef.current)} />
      </ModalHeader>
      <StyledDialogContent dividers>
        <NavigationPrev>
          <Fab color="primary" size="small" onClick={showPrev}>
            <NavigateBefore fontSize="small" />
          </Fab>
        </NavigationPrev>
        <NavigationNext>
          <Fab color="primary" size="small" onClick={showNext}>
            <NavigateNext fontSize="small" />
          </Fab>
        </NavigationNext>
        <StyledSlider ref={slider} arrows={false} initialSlide={currentIndex}>
          {galleryInfoList.map(galleryInfo => {
            const { path, imageId } = galleryInfo
            return <img key={imageId} src={`/images/gallery${path}`} alt="" />
          })}
        </StyledSlider>
        {/* <StyledImage src={`/images/gallery${path}`} alt={PREF_MAP[prefCode]} ref={fullScreenRef} /> */}
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant="contained">
          閉じる
        </Button>
      </DialogActions>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  height: 100%;

  .MuiPaper-root {
    height: auto;
  }
`

const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding-right: 18px;
`

const StyledFullscreen = styled(Fullscreen)`
  cursor: pointer;
`

const StyledDialogContent = styled(DialogContent)`
  height: 100%;
  position: relative;
  text-align: center;
`

const navigationBase = css`
  align-items: center;
  bottom: 0;
  display: inline-flex;
  justify-content: center;
  margin-bottom: auto;
  margin-top: auto;
  position: absolute;
  top: 0;
  z-index: 10;
`

const NavigationPrev = styled.div`
  ${navigationBase};
  left: 10px;
`

const NavigationNext = styled.div`
  ${navigationBase};
  right: 10px;
`

// const StyledImage = styled.img`
//   max-height: calc(100vh - 218px);
//   max-width: calc(100vw - 228px);
// `

const StyledSlider = styled(Slider)`
  height: calc(100vh - 218px);
  width: calc(100vw - 228px);

  .slick-list {
    height: 100%;
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-slide {
    div {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;

      img {
        max-height: 100%;
        max-width: 100%;
        width: auto !important;
      }
    }
  }
`

export default GalleryModal
