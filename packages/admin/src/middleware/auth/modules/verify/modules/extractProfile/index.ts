// import node_modules
import { Profile } from "passport"

// main
/**
 * TODO: db 連携用にも必要になるはずなので、別のどこかで定義
 * homepage-admin 要参照
 */
type UserInfo = {
  googleId: string
  displayName: string
  email: string
  photo: string
  accessToken: string
  refreshToken: string
}

type ExtractProfileReturn = Omit<UserInfo, "expires">
type ExtractProfile = (
  profile: Profile,
  accessToken: string,
  refreshToken: string,
) => ExtractProfileReturn
export const extractProfile: ExtractProfile = (
  profile,
  accessToken,
  refreshToken,
) => {
  const { id: googleId, displayName, emails, photos } = profile
  const email = emails ? emails[0].value : ""
  const photo = photos ? photos[0].value : ""
  return {
    googleId,
    displayName,
    email,
    photo,
    accessToken,
    refreshToken,
  }
}
