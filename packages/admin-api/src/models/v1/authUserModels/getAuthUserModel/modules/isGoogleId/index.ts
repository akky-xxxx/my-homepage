// import
import { GetAuthUserQuery } from "@@/shared/types/api/v1/authUser"

// main
export const isGoogleId = (
  googleId: unknown,
): googleId is GetAuthUserQuery["googleId"] => typeof googleId === "string"
