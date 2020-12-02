// import
import { ThisError } from "@@/shared/utils/ThisError"

// main
type CreateErrorData = (
  filePath: string,
  status?: number,
) => Pick<ThisError, "status" | "filePath" | "message">
export const createErrorData: CreateErrorData = (filePath, status) => {
  if (status === 400) {
    return {
      status,
      filePath,
      message: "パラメータが不正です",
    }
  }

  return {
    filePath,
    status: 500,
    message: "Internal Server Error",
  }
}
