// import node_modules
import React, { FC, memo, useCallback } from "react"
import styled from "styled-components"
import Select, { ValueType } from "react-select"
import ReactDatePicker from "react-datepicker"
import { format } from "date-fns"
import { StringDate } from "shared-items"
import {
  Color,
  Margin,
  Font,
  PickerWrapper,
  Button,
  DateFns,
} from "shared-items/dist/client"

// import components
import { Input } from "@@/components/atoms/Input"

// import others
import { SelectOption } from "@@/shared/types/lib"

// main
const {
  FORMAT: { DATETIME_SLASH },
} = DateFns
const { COLOR_FFFFFF, SECONDARY_TEXT } = Color
const {
  SIZE: { SMALL },
} = Font
const { MARGIN10 } = Margin
export const ITEM_WIDTH = 350

export type GalleryImageProps = {
  imageId: string
  imagePath: string
  prefectures: SelectOption[]
  selectedPrefecture: SelectOption | null
  tags: SelectOption[]
  selectedTags: SelectOption[]
  photographAt: StringDate | null
  createdAt: StringDate | null
  updatedAt: StringDate | null
  handleClickPrimary: (imageId: string) => void
  handleClickRemove: (imageId: string) => void
  handleSelectPhotographAt: (date: Date | null) => void
  handleSelectPrefecture: (prefecture: ValueType<SelectOption, false>) => void
  handleSelectTags: (tags: ValueType<SelectOption, true>) => void
}

export const GalleryImage: FC<GalleryImageProps> = memo((props) => {
  const {
    imageId,
    imagePath,
    prefectures,
    selectedPrefecture,
    tags,
    selectedTags,
    photographAt,
    createdAt,
    updatedAt,
    handleClickPrimary: _handleClickPrimary,
    handleClickRemove: _handleClickRemove,
    handleSelectPhotographAt,
    handleSelectPrefecture,
    handleSelectTags,
  } = props

  const handleClickPrimary = useCallback(() => _handleClickPrimary(imageId), [
    imageId,
  ])

  const handleClickRemove = useCallback(() => _handleClickRemove(imageId), [
    imageId,
  ])

  return (
    <Wrapper>
      <Image src={imagePath} alt="" width={ITEM_WIDTH} />

      <ImageInfo>
        <InfoWrapper>
          <TwoContents>
            <Select
              value={selectedPrefecture}
              options={prefectures}
              placeholder="都道府県"
              onChange={handleSelectPrefecture}
            />

            <ReactDatePicker
              selected={photographAt ? new Date(photographAt) : undefined}
              onChange={handleSelectPhotographAt}
              dateFormat="yyyy/MM/dd"
              placeholderText="撮影日"
              calendarContainer={PickerWrapper}
              customInput={<PhotographAtInput />}
              isClearable
            />
          </TwoContents>
        </InfoWrapper>

        <InfoWrapper>
          <Select
            placeholder="タグを選択"
            value={selectedTags}
            options={tags}
            onChange={handleSelectTags}
            isMulti
          />
        </InfoWrapper>

        {createdAt && updatedAt && (
          <Dates>
            <div>登録日：{format(new Date(createdAt), DATETIME_SLASH)}</div>
            <div>更新日：{format(new Date(updatedAt), DATETIME_SLASH)}</div>
          </Dates>
        )}

        <InfoWrapper>
          <TwoContents>
            <Button colorType="primary" onClick={handleClickPrimary}>
              {createdAt && updatedAt ? "更新" : "登録"}
            </Button>
            <Button colorType="accent" onClick={handleClickRemove}>
              削除
            </Button>
          </TwoContents>
        </InfoWrapper>
      </ImageInfo>
    </Wrapper>
  )
})

const Wrapper = styled.li`
  background-color: ${COLOR_FFFFFF};
  border-radius: 0 0 4px 4px;
  list-style: none;
  width: ${ITEM_WIDTH}px;
`

const InfoWrapper = styled.div`
  margin-top: ${MARGIN10}px;
`

const Image = styled.img`
  border-radius: 4px 4px 0 0;
  height: ${ITEM_WIDTH / 1.5}px;
  max-width: ${ITEM_WIDTH}px;
  object-fit: cover;
  vertical-align: top;
  width: 100%;
`

const ImageInfo = styled.div`
  padding-bottom: ${MARGIN10}px;
  padding-left: ${MARGIN10}px;
  padding-right: ${MARGIN10}px;
`

const Dates = styled.div`
  color: ${SECONDARY_TEXT};
  font-size: ${SMALL};
  margin-top: ${MARGIN10}px;
  text-align: right;
`

const TwoContents = styled.div`
  display: grid;
  grid-column-gap: ${MARGIN10}px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(50% - 5px), calc(50% - 5px))
  );
`

const PhotographAtInput = styled(Input)`
  width: 100%;
`
