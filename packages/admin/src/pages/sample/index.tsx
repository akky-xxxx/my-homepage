// import
import React from "react"

// import components
import { Sample } from "@@/components/templates/Sample"

// import others
import { useSampleHooks } from "@@/pageHooks/useSampleHooks"
import { wrapper, actions } from "@@/store"
import { ScreenNames } from "@@/shared/const/ScreenNames"

// main
const {
  SAMPLE: { LABEL },
} = ScreenNames
const {
  sample: { changeText },
  server: {
    app: {
      layout: { changeTitle },
    },
  },
} = actions
const HomeHoc = () => {
  const props = useSampleHooks()
  return <Sample {...props} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context

    await Promise.allSettled([
      dispatch(changeText({ newText: "getting at getServerSideProps" })),
      dispatch(changeTitle({ newTitle: LABEL })),
    ])
  },
)

export default HomeHoc
