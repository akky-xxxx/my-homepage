// import node_modules
import React, { Fragment, useState, ChangeEventHandler } from "react"
import styled from "styled-components"
import { gql, useQuery, useLazyQuery } from "@apollo/client"
import { Button } from "shared-items/dist/client"

// main
const QUERY = gql`
  query GetSample {
    sample(data: { num: 1 }) {
      calculated
    }
  }
`
const LAZY_QUERY = gql`
  query GetSample($num: Int!) {
    sample(data: { num: $num }) {
      calculated
    }
  }
`
type Arg = {
  num: number
}
type Result = {
  sample: {
    calculated: number
  }
}

export const Sample = () => {
  const [num, setNum] = useState<number | null>(null)
  const handleChangeNum: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event
    if (!/^\d*$/.test(value)) return
    setNum(value ? Number(value) : null)
  }

  const {
    loading: loadingOfQuery,
    data: dataOfQuery,
    called: calledOfQuery,
  } = useQuery<Result, Arg>(QUERY)

  const [
    loadOfLazy,
    { called: calledOfLazy, loading: loadingOfLazy, data: dataOfLazy },
  ] = useLazyQuery<Result, Arg>(LAZY_QUERY)
  const handleGetSample = () => {
    if (typeof num !== "number") return
    loadOfLazy({ variables: { num } })
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

      <hr />

      <QueryBlock>
        <h2>useQuery</h2>
        <div>
          {!loadingOfQuery && calledOfQuery && (
            <div>{dataOfQuery?.sample.calculated}</div>
          )}
        </div>
      </QueryBlock>

      <QueryBlock>
        <h2>useLazyQuery</h2>
        <div>
          <input type="text" value={num ?? ""} onChange={handleChangeNum} />
        </div>
        <div>
          <button type="button" onClick={handleGetSample}>
            取得
          </button>
        </div>
        {!loadingOfLazy && calledOfLazy && (
          <div>{dataOfLazy?.sample.calculated}</div>
        )}
      </QueryBlock>
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

const QueryBlock = styled.div`
  border: 1px solid #000;
  padding: 20px;

  & + & {
    margin-top: 20px;
  }
`
