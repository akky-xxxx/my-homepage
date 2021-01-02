// import node_modules
import { RequestHandler } from "express"

// import others
import { GetAuthUserResponse } from "@@/shared/types/api/v1/authUser"
import { getModel } from "@@/models/v1/authUser/getModel"

// main
export const get: RequestHandler<never, GetAuthUserResponse> = async (
  req,
  res,
  next,
) => {
  const { query } = req

  try {
    const sessionId = await getModel(query)
    const responseBody: GetAuthUserResponse = {
      data: { sessionId },
    } as const
    res.status(200).send(responseBody)
    return
  } catch (error) {
    res.status(error?.status || 500)
    next(error)
  }
}
