// import node_modules
import { Profile, VerifyCallback } from "passport-google-oauth20"
import { omit } from "remeda"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { extractProfile } from "./modules/extractProfile"

// main
const logger = createLogger(__filename)

type Verify = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  doneCallback: VerifyCallback,
) => void
export const verify: Verify = (
  accessToken,
  refreshToken,
  profile,
  doneCallback,
) => {
  logger.info("start")
  const { id: googleId, emails } = profile
  const email = emails ? emails[0].value : ""
  const loggerData = {
    serial: { googleId, email },
    data: { ...omit(profile, ["id", "emails"]) },
  }
  logger.debug(loggerData)
  logger.info("end")
  doneCallback(undefined, extractProfile(profile, accessToken, refreshToken))
}
