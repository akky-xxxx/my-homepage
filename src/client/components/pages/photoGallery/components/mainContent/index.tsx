/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"
import { Grid, Divider, createMuiTheme } from "@material-ui/core"

/**
 * import components
 */
import GalleryBody from "../galleryBody"
import GalleryLength from "../galleryLength"
import PrefSelect from "../PrefSelect"

/**
 * import others
 */
import { State, HandleActions } from "../../../../../store/modules/pages/photo-gallery/types"
import galleryInfoList from "../../../../../shared/const/galleryInfoList"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import { APP_BREAKPOINTS, APP_MARGINS } from "../../../../../shared/const/styles"

/**
 * main
 */
export interface MainContentProps
  extends Pick<State, "selectedViewPref">,
    Pick<HandleActions, "handleOpenModal" | "handleSelectViewPref" | "handleSelectViewTag"> {}

const { palette, spacing } = createMuiTheme()

const MainContent: FC<MainContentProps> = props => {
  const { handleOpenModal, handleSelectViewPref, handleSelectViewTag, selectedViewPref } = props

  const filteredList: GalleryItem[] = galleryInfoList.filter(galleryInfo => {
    if (selectedViewPref === "00") return true
    return galleryInfo.prefCode === selectedViewPref
  })

  return (
    <Grid container>
      <LeftCol>
        <GalleryBody
          galleryInfoList={filteredList}
          handleOpenModal={handleOpenModal}
          handleSelectViewTag={handleSelectViewTag}
        />
      </LeftCol>
      <RightCol>
        <RightColInner>
          <GalleryLengthWrapper>
            <GalleryLength resultLength={filteredList.length} />
          </GalleryLengthWrapper>

          <DividerWrapper>
            <Divider />
          </DividerWrapper>

          <PrefSelect handleSelectViewPref={handleSelectViewPref} selectedViewPref={selectedViewPref} />
        </RightColInner>
      </RightCol>
    </Grid>
  )
}

const RIGHT_COL_WIDTH = 200
const LeftCol = styled.div`
  ${APP_BREAKPOINTS.PC} {
    padding-top: ${APP_MARGINS.PC.VERTICAL}px;
    width: calc(100% - ${RIGHT_COL_WIDTH}px);
  }
`

const RightCol = styled.div`
  ${APP_BREAKPOINTS.PC} {
    border-left: 1px solid ${palette.divider};
    box-sizing: border-box;
    margin-left: ${APP_MARGINS.PC.HORIZON}px;
    padding-left: ${APP_MARGINS.PC.HORIZON}px;
    padding-top: ${APP_MARGINS.PC.VERTICAL}px;
    width: ${RIGHT_COL_WIDTH - APP_MARGINS.PC.HORIZON}px;
  }

  ${APP_BREAKPOINTS.SP} {
    display: none;
  }
`

const RightColInner = styled.div`
  ${APP_BREAKPOINTS.PC} {
    position: sticky;
    top: ${64 - APP_MARGINS.PC.VERTICAL}px;
  }
`

const GalleryLengthWrapper = styled.div`
  margin-bottom: ${spacing(1)}px;
`

const DividerWrapper = styled.div`
  margin-bottom: ${spacing(2)}px;
`

export default MainContent
