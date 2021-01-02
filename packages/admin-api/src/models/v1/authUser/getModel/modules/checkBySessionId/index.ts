// import node_modules
import { ThisError, createErrorData } from "shared-items"

// import others
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"
import { createLogger } from "@@/shared/utils/createLogger"
import { GetAuthUserQuery } from "@@/shared/types/api/v1/authUser"

// main
const logger = createLogger(__filename)
const {
  TYPES: { PERMISSION_USERS },
} = DataStore
type CheckBySessionId = (
  sessionId: Required<GetAuthUserQuery>["sessionId"],
) => Promise<void>
export const checkBySessionId: CheckBySessionId = async (sessionId) => {
  logger.info("start")

  try {
    logger.info("ユーザ情報取得開始")
    const query = dataStore.createQuery(PERMISSION_USERS)
    query.filter("sessionId", sessionId)
    const [permissionUser] = await dataStore.runQuery(query)

    if (!permissionUser.length) {
      const error = new ThisError(createErrorData(__filename, 403))
      logger.error("failure")
      return Promise.reject(error)
    }

    logger.info("success")
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({
      filePath: __filename,
      error,
    })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
