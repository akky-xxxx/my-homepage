// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"

// main
const { TYPES: { PERMISSION_USERS } } = DataStore
type GetAuthUserModel = (query: Request["query"]) => Promise<void>
export const getAuthUserModel: GetAuthUserModel = async (query) => {
  const { googleId } = query

  if (!googleId) {
    const error = new ThisError(createErrorData(__filename, 400))
    return Promise.reject(error)
  }

  try {
    const permissionUserKey = dataStore.key([PERMISSION_USERS, googleId as string])
    const [permissionUser] = await dataStore.get(permissionUserKey)

    if (!permissionUser) {
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
