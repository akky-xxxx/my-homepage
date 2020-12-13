// import
import { GetAuthUserQuery } from "@@/shared/types/api/v1/authUser"

// main
export const isSessionId = (
  sessionId: unknown,
): sessionId is Required<GetAuthUserQuery>["sessionId"] =>
  typeof sessionId === "string"
