// import node_modules
import { ThisError, createErrorData } from "shared-items"
import { v4 as uuid } from "uuid"

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
type CheckByGoogleId = (
  googleId: Required<GetAuthUserQuery>["googleId"],
) => Promise<string>
export const checkByGoogleId: CheckByGoogleId = async (googleId) => {
  logger.info("start")

  try {
    logger.info("ユーザ情報取得開始")
    const permissionUserKey = dataStore.key([PERMISSION_USERS, googleId])
    const [permissionUser] = await dataStore.get(permissionUserKey)

    if (!permissionUser) {
      const error = new ThisError(createErrorData(__filename, 403))
      logger.error("failure")
      return Promise.reject(error)
    }

    logger.info("session id 生成・登録")
    const sessionId = uuid()
    const updateData = {
      key: permissionUserKey,
      data: {
        ...permissionUser,
        sessionId,
      },
    }
    await dataStore.update(updateData)

    logger.info("success")
    return Promise.resolve(sessionId)
  } catch (error) {
    const thisError = new ThisError({
      filePath: __filename,
      error,
    })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
