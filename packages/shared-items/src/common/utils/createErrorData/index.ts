// import
import { ThisError } from "../ThisError"

// main
type CreateErrorData = (
  filePath: string,
  status?: number,
) => Pick<ThisError, "status" | "filePath" | "message"> | undefined
export const createErrorData: CreateErrorData = (filePath, status) => {
  let message = ""
  if (status === 400) message = "パラメータが不正です"
  if (status === 403) message = "禁止されています"
  if (status === 404) message = "資材が見つかりません"

  if (message.length && status) {
    return {
      status,
      filePath,
      message,
    }
  }

  return undefined
}
