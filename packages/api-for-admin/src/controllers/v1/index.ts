// import node_modules
import { Router } from "express"

// import controllers
import { getTagsController } from "@@/controllers/v1/getTagsController"

// import others
import { Endpoints } from "@@/shared/const/Endpoints"
import { ThisError } from "@@/shared/utils/ThisError"

// main
const {
  V1: { TAGS },
} = Endpoints
const v1Router = Router()

v1Router.post(TAGS, (req, res, next) => {
  const { body } = req

  if (!body.tagName) {
    const error = new ThisError({
      status: 400,
      message: "パラメータが不正です",
      filePath: __filename,
    })
    next(error)
    return
  }

  try {
    const responseData = {
      data: {
        result: "success",
      },
    }
    res.status(201).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
})
v1Router.get(TAGS, getTagsController)

export { v1Router }
