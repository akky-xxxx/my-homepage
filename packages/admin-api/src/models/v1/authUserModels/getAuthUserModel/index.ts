// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// main
type GetAuthUserModel = (query: Request["query"]) => Promise<void>
export const getAuthUserModel: GetAuthUserModel = async (query) => {
  const { googleId } = query

  if (!googleId) {
    const error = new ThisError(createErrorData(__filename, 400))
    return Promise.reject(error)
  }

  try {
    if (googleId !== process.env.TEST_PERMISSION_USER) {
      const error = new ThisError(createErrorData(__filename, 403))
      return Promise.reject(error)
    }

    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({
      filePath: __filename,
      error,
    })
    return Promise.reject(thisError)
  }
}
