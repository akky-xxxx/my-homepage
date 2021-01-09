// import node_modules
import React, { FC, Fragment } from "react"
import { Button, Margin } from "shared-items/dist/client"
import styled from "styled-components"

// import others
import { PaginationProps } from "./types"
import { usePagination } from "./modules/usePagination"

// main
const { MARGIN10 } = Margin

export const Pagination: FC<PaginationProps> = (props) => {
  const { maxPages, currentPage, handleClickPagination } = props
  const {
    enablePrev,
    enableNext,
    items,
    handleClickFirst,
    handleClickPrev,
    handleClickNext,
    handleClickLast,
  } = usePagination(props)

  return (
    <Wrapper>
      {maxPages > 1 && (
        <Fragment>
          <StyledButton
            colorType="secondary"
            disabled={!enablePrev}
            onClick={handleClickFirst}
          >
            &lt;&lt;
          </StyledButton>
          <StyledButton
            colorType="secondary"
            disabled={!enablePrev}
            onClick={handleClickPrev}
          >
            &lt;
          </StyledButton>

          {items.map((item) => {
            const colorType = item === currentPage ? "primary" : "secondary"
            const handleClickItem = () => handleClickPagination(item)

            return (
              <StyledButton
                key={item}
                colorType={colorType}
                onClick={handleClickItem}
              >
                {item}
              </StyledButton>
            )
          })}

          <StyledButton
            colorType="secondary"
            disabled={!enableNext}
            onClick={handleClickNext}
          >
            &gt;
          </StyledButton>
          <StyledButton
            colorType="secondary"
            disabled={!enableNext}
            onClick={handleClickLast}
          >
            &gt;&gt;
          </StyledButton>
        </Fragment>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  height: 38px;
`

const StyledButton = styled(Button)`
  min-width: 38px;

  & + & {
    margin-left: ${MARGIN10}px;
  }
`
