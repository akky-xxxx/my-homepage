// import node_modules
import React, { FC, Fragment, ChangeEventHandler } from "react"
import styled from "styled-components"
import { Button } from "shared-items/dist/client"
import { SampleProps } from "./types"

// main
export const Sample: FC<SampleProps> = (props) => {
  const {
    counter,
    text,
    handleIncrement,
    handleDecrement,
    handleChangeText: _handleChangeText,
  } = props

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      currentTarget: { value: newText },
    } = event
    _handleChangeText({ newText })
  }

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
        <div>
          <input type="text" value={text} onChange={handleChangeText} />
        </div>
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
