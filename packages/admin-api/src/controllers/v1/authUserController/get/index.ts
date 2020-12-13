// import node_modules
import { RequestHandler } from "express"

// import others
import { GetAuthUserResponse } from "@@/shared/types/api/v1/authUser"
import { getAuthUserModel } from "@@/models/v1/authUserModels/getAuthUserModel"

// main
export const get: RequestHandler<never, GetAuthUserResponse> = async (
  req,
  res,
  next,
) => {
  const { query } = req

  try {
    await getAuthUserModel(query)
    const responseBody: GetAuthUserResponse = {
      data: { result: "success" },
    } as const
    res.status(200).send(responseBody)
    return
  } catch (error) {
    res.status(error?.status || 500)
    next(error)
  }
}
