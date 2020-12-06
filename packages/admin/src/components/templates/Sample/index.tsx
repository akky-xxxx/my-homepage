// import node_modules
import React, { Fragment } from "react"
import styled from "styled-components"
import { Button } from "shared-items/dist/client"

// main
export const Sample = () => {
  return (
    <Fragment>
      <h1>Sample</h1>
      <Wrapper>
        <Item>
          <Button colorType="primary" type="button">
            SampleComponent 1
          </Button>
        </Item>

        <Item>
          <Button colorType="primary" type="button">
            SampleComponent 2
          </Button>
        </Item>
      </Wrapper>
    </Fragment>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const Item = styled.div`
  & + & {
    margin-left: 10px;
  }
`
