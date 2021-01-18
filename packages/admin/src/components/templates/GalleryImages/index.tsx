// import node_modules
import React, { FC, memo } from "react"
import { Divider, Margin } from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { GalleryImages as Images } from "@@/components/organisms/GalleryImages"
import { ConditionArea } from "./components/organisms/ConditionArea"

// import types
import { GalleryImagesProps } from "./types"
import { useGalleryImages } from "./modules/useGalleryImages"

// main
const { MARGIN25 } = Margin
export const GalleryImages: FC<GalleryImagesProps> = memo((props) => {
  const { condition, images, imagesHandlers } = useGalleryImages(props)

  return (
    <div>
      <MainContents>
        <HeaderWrapper>
          <Heading2>画像一覧</Heading2>
        </HeaderWrapper>
      </MainContents>

      <Divider />

      <MainContents>
        <ConditionArea {...condition} />

        <StyledDivider />

        <Images images={images} {...imagesHandlers} />
      </MainContents>
    </div>
  )
})

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledDivider = styled(Divider)`
  margin-bottom: ${MARGIN25}px;
  margin-top: ${MARGIN25}px;
`
