/**
 * import node_modules
 */
import React, { FC, useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core"
import AutoSizer from "react-virtualized-auto-sizer"

/**
 * import components
 */
import FixedSizeGridWrapper from "../fixedSizeGridWrapper"

/**
 * import others
 */
import { HandleOpenModalAction } from "../../../../../store/modules/pages/photo-gallery/modal/types"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"

/**
 * main
 */
interface GalleryBodyProps {
  galleryInfoList: GalleryItem[]
  handleOpenModal: HandleOpenModalAction
}

const { spacing, breakpoints } = createMuiTheme()

const GalleryBody: FC<GalleryBodyProps> = props => {
  const { galleryInfoList, handleOpenModal } = props
  const galleryListRef = useRef<HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useState(galleryListRef.current?.offsetTop)

  useEffect(() => {
    setOffsetTop(galleryListRef.current?.offsetTop)
  }, [galleryListRef])

  return (
    <GalleryList ref={galleryListRef} offsetTop={offsetTop}>
      <AutoSizer>
        {sizes => {
          const { width, height } = sizes

          return (
            <FixedSizeGridWrapper
              width={width}
              height={height}
              galleryInfoList={galleryInfoList}
              handleOpenModal={handleOpenModal}
            />
          )
        }}
      </AutoSizer>
    </GalleryList>
  )
}

interface GalleryListProps {
  offsetTop?: number
}

const GalleryList = styled.div<GalleryListProps>`
  display: flex;
  flex-wrap: wrap;
  height: ${({ offsetTop }) => (offsetTop ? `calc(100vh - ${offsetTop}px)` : "auto")};

  ${breakpoints.up("lg")} {
    margin: -${spacing(1)}px;
  }

  ${breakpoints.only("md")} {
    margin: -${spacing(1)}px;
  }

  ${breakpoints.down("sm")} {
    margin: -${spacing(0.5)}px;
  }
`

export default GalleryBody
