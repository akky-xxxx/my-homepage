// import node_modules
import React, { FC, Fragment } from "react"
import styled from "styled-components"
import { Button } from "shared-items/dist/client"
import { SampleProps } from "./types"

// main
export const Sample: FC<SampleProps> = (props) => {
  const { counter, handleIncrement, handleDecrement } = props
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

      <div>
        <h2>store</h2>
        <Wrapper>
          <button onClick={handleIncrement} type="button">
            -
          </button>
          {counter}
          <button onClick={handleDecrement} type="button">
            +
          </button>
        </Wrapper>
      </div>
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
