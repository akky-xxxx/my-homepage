// import node_modules
import React, { FC, Fragment } from "react"
import { Button, Margin } from "shared-items/dist/client"
import styled from "styled-components"

// main
const { MARGIN10 } = Margin

export type PaginationProps = {
  maxPages: number
  currentPage: number
  handleClickPagination: (targetPage: number) => void
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { maxPages, currentPage, handleClickPagination } = props

  const enablePrev = currentPage > 1
  const enableNext = currentPage < maxPages
  const handleClickFirst = () => handleClickPagination(1)
  const handleClickPrev = () => handleClickPagination(currentPage - 1)
  const handleClickNext = () => handleClickPagination(currentPage + 1)
  const handleClickLast = () => handleClickPagination(maxPages)

  const items = [
    currentPage - 1 > 0 ? currentPage - 1 : undefined,
    currentPage,
    currentPage + 1 <= maxPages ? currentPage + 1 : undefined,
  ].filter(Boolean) as number[]
  if (items.length < 3) {
    if (currentPage - 2 > 0) items.unshift(currentPage - 2)
    if (currentPage + 2 <= maxPages) items.push(currentPage + 2)
  }

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
