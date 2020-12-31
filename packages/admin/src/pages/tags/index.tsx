// import node_modules
import React from "react"
import { ThisError } from "shared-items"

// import components
import { Tags } from "@@/components/templates/Tags"

// import others
import { wrapper, actions } from "@@/store"
import { ScreenNames } from "@@/shared/const/ScreenNames"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { useTags } from "@@/pageHooks/useTags"

// main
const {
  TAGS: { LABEL },
} = ScreenNames
const {
  server: {
    app: {
      layout: { changeTitle },
    },
    pages: {
      tags: { getTags },
    },
  },
} = actions

const TagsHoc = () => {
  const props = useTags()

  return <Tags {...props} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context
    await dispatch(changeTitle({ newTitle: LABEL }))

    try {
      // TODO: admin-api のレスポンスと共通化する
      const {
        data: {
          data: { tags: newTags },
        },
      } = await adminApiClient.get("/api/v1/tags")
      await dispatch(getTags({ newTags }))
    } catch (error) {
      throw new ThisError({ error })
    }
  },
)

export default TagsHoc
