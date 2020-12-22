// import node_modules
// import React from "react"

// import components
import { Tags } from "@@/components/templates/Tags"

// import others
import { wrapper, actions } from "@@/store"
import { ScreenNames } from "@@/shared/const/ScreenNames"

// main
const {
  TAGS: { LABEL },
} = ScreenNames
const {
  server: {
    app: {
      layout: { changeTitle },
    },
  },
} = actions

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context
    await dispatch(changeTitle({ newTitle: LABEL }))
  },
)

export default Tags
