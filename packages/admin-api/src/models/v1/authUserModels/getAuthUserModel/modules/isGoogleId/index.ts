// import
import { GetAuthUserQuery } from "@@/shared/types/api/v1/authUser"

// main
export const isGoogleId = (
  googleId: unknown,
): googleId is Required<GetAuthUserQuery>["googleId"] =>
  typeof googleId === "string"
